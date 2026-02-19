require("dotenv").config();

const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const app = express();
app.use(express.json());

// Serve the single-page frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Strip HTML tags and decode common HTML entities from a string.
 * Returns plain text suitable for feeding into a prompt.
 */
function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")      // remove tags
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s{2,}/g, " ")       // collapse whitespace
    .trim();
}

/**
 * Fetch JSON from a URL; throws a descriptive Error on non-2xx.
 */
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Headout API returned ${res.status} for ${url}`);
  }
  return res.json();
}

// ---------------------------------------------------------------------------
// Main route
// ---------------------------------------------------------------------------

app.post("/api/generate", async (req, res) => {
  const { experienceId } = req.body;

  // --- Input validation ---
  if (!experienceId || String(experienceId).trim() === "") {
    return res.status(400).json({ success: false, error: "Experience ID is required." });
  }
  const id = String(experienceId).trim();

  // --- Validate API key early ---
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      success: false,
      error: "OPENAI_API_KEY is not configured on the server.",
    });
  }

  try {
    // -----------------------------------------------------------------
    // 1. Call Experience API
    // -----------------------------------------------------------------
    const experienceUrl = `https://api.headout.com/api/v6/tour-groups/${id}`;
    const experience = await fetchJson(experienceUrl);

    const experienceName = experience.name || "Untitled Experience";
    const cityName = experience.city?.displayName || "";
    const metaTitle = experience.metaTitle || "";
    const metaDescription = experience.metaDescription || "";
    const summaryText = stripHtml(experience.summary);
    const highlightsText = stripHtml(experience.highlights);
    const inclusionsText = stripHtml(experience.inclusions);
    const hasItineraryIds =
      Array.isArray(experience.experienceItineraryIds) &&
      experience.experienceItineraryIds.length > 0;

    // -----------------------------------------------------------------
    // 2. Call Itinerary API (only if itinerary IDs exist)
    // -----------------------------------------------------------------
    let stopSections = [];       // Only STOP-type sections
    let durationText = "";
    let modeOfTravel = "";

    if (hasItineraryIds) {
      const itineraryUrl = `https://api.headout.com/api/v6/tour-groups/${id}/experience-itineraries/?sections=true`;
      const itineraryData = await fetchJson(itineraryUrl);

      const firstItinerary = itineraryData?.itineraries?.[0];
      if (firstItinerary) {
        const dur = firstItinerary.details?.duration;
        if (dur) {
          const h = dur.hours ?? dur.minHours ?? 0;
          const m = dur.minutes ?? dur.minMinutes ?? 0;
          durationText = `${h}h ${m}min`;
        }
        modeOfTravel = firstItinerary.details?.modeOfTravel?.localisedLabel || "";

        // Build the flat list of sections to send to AI.
        //
        // Rules:
        //   1. Always include every top-level STOP (excludes START_LOCATION / END_LOCATION).
        //   2. If a STOP has childSections with numeric ranks, append those children
        //      immediately after their parent — the parent is NEVER dropped.
        //      Children represent sub-attractions within a stop (e.g. St George's Chapel
        //      inside Windsor Castle) and add detail; they do not replace the stop itself.
        //   3. Any section object emitted must have a numeric rank field present.
        //
        // Example: Windsor Castle (rank 3) has child St George's Chapel (rank 1).
        // Result: Windsor Castle is emitted first, then St George's Chapel after it.
        const normaliseSection = (s) => ({
          id: s.id,
          rank: s.rank,                                                  // preserved for stopRankMap
          name: s.details?.name || "Stop",
          rawDescription: stripHtml(s.details?.description || ""),
          inclusionLabel: s.details?.inclusion?.localisedLabel || null,
          passBy: s.details?.passBy || false,
          timeForNextSection: s.details?.timeForNextSection ?? null,
          mediaUrls: Array.isArray(s.details?.mediaUrls) ? s.details.mediaUrls : [],
        });

        const topLevelStops = (firstItinerary.sections || [])
          // Explicitly exclude START_LOCATION and END_LOCATION in addition to non-STOP types
          .filter((s) => s.type === "STOP")
          .sort((a, b) => a.rank - b.rank);

        stopSections = topLevelStops.flatMap((s) => {
          // Always start with the parent stop itself
          const result = [normaliseSection(s)];

          // Append any ranked children after the parent (sub-attractions).
          // Explicitly exclude any child whose type is START_LOCATION or END_LOCATION.
          const children = (s.childSections || []).filter(
            (c) => typeof c.rank === "number" &&
                   c.type !== "START_LOCATION" &&
                   c.type !== "END_LOCATION"
          );
          if (children.length > 0) {
            children
              .sort((a, b) => a.rank - b.rank)
              .forEach((c) => result.push(normaliseSection(c)));
          }

          return result;
        });
      }
    }

    // -----------------------------------------------------------------
    // 3. Build structured stop list for Call 1
    // -----------------------------------------------------------------

    const stopsForPrompt = stopSections.length > 0
      ? stopSections
          .map((s, i) => {
            const lines = [
              `Stop ${i} (itineraryStopId: ${s.id})`,
              `  Name: ${s.name}`,
            ];
            if (s.rawDescription) lines.push(`  Description: ${s.rawDescription}`);
            if (s.inclusionLabel) lines.push(`  Admission: ${s.inclusionLabel}`);
            if (s.timeForNextSection != null) {
              lines.push(`  Time at this stop: ~${s.timeForNextSection} min`);
            }
            if (s.passBy) {
              lines.push(`  Type: PASS-BY — guest does not exit vehicle here`);
            }
            return lines.join("\n");
          })
          .join("\n\n")
      : "No structured itinerary stops available.";

    // -----------------------------------------------------------------
    // 4. Call 1 — Extraction
    //    Goal: identify every distinct sub-experience from all data sources.
    //    No content generation. No count enforcement. Just extraction + scoring.
    // -----------------------------------------------------------------
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const call1SystemPrompt = `You are a travel experience analyst. Your only job is to identify every distinct sub-experience within a tour — every place visited, activity done, venue entered, or moment experienced. You work strictly from the text provided. You never invent experiences not mentioned or clearly implied by the provided content. You output only valid JSON.`;

    const call1UserPrompt = `Read all the content below and extract every distinct sub-experience a guest will have on this tour.

Sources to analyse:
- Itinerary stops (these are confirmed experiences)
- Highlights, inclusions, summary, metaTitle, metaDescription (these may contain additional experiences not listed as stops — include them if they describe something the guest actively sees, does, or visits)

Strict rules:
- Only include experiences explicitly mentioned or clearly implied by the provided text
- Never invent experiences not present in the text
- Exclude: transfers, coach rides, pickups, dropoffs, hotel collection, meeting points, audio guides, bottled water, onboard commentary
- If the same place or activity appears in multiple sources, list it once using the richest description available
- For each experience, assign a significance score 1–10 (10 = headline attraction, 1 = minor pass-by)
- For each experience, assign contextQuality: "high" (100+ words of specific detail available), "medium" (30–100 words), "low" (under 30 words or very generic)
- Note which source you found it in: "itinerary" | "highlights" | "inclusions" | "summary"

[EXPERIENCE DATA]
Title: ${experienceName}
City: ${cityName}
${durationText ? `Duration: ${durationText}` : ""}
${modeOfTravel ? `Mode of travel: ${modeOfTravel}` : ""}

Meta title: ${metaTitle || "(none)"}

Meta description: ${metaDescription || "(none)"}

Summary: ${summaryText || "(none)"}

Highlights: ${highlightsText || "(none)"}

Inclusions: ${inclusionsText || "(none)"}

Itinerary stops:
${stopsForPrompt}

Output a raw JSON array only — no markdown, no explanation:
[
  {
    "name": "Experience name",
    "description": "All relevant text from provided sources about this experience",
    "source": "itinerary | highlights | inclusions | summary",
    "significance": 8,
    "contextQuality": "high | medium | low",
    "passBy": false,
    "itineraryStopId": 1234
  }
]`;

    const call1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.2,
      messages: [
        { role: "system", content: call1SystemPrompt },
        { role: "user", content: call1UserPrompt },
      ],
    });

    const call1Raw = call1Completion.choices[0]?.message?.content || "";
    const call1Cleaned = call1Raw
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/```\s*$/, "")
      .trim();

    let call1Result;
    try {
      call1Result = JSON.parse(call1Cleaned);
    } catch {
      return res.status(500).json({
        success: false,
        error: "Call 1 (extraction) returned output that could not be parsed. Please try again.",
        rawOutput: call1Raw,
      });
    }

    if (!Array.isArray(call1Result)) {
      return res.status(500).json({
        success: false,
        error: "Call 1 (extraction) returned an unexpected structure. Please try again.",
        rawOutput: call1Raw,
      });
    }

    console.log("CALL 1 EXTRACTION:", JSON.stringify(call1Result, null, 2));

    // -----------------------------------------------------------------
    // 5. Server code — Deduplication + mediaUrl assignment
    //    Pure JS — no AI involved in either step.
    // -----------------------------------------------------------------

    // -- 5a. Deduplication --
    // Two experiences are duplicates if 60%+ of their words overlap (case-insensitive).
    // Keep the one with the higher significance score.
    function wordSet(str) {
      return new Set(str.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean));
    }

    function overlapRatio(nameA, nameB) {
      const a = wordSet(nameA);
      const b = wordSet(nameB);
      if (a.size === 0 || b.size === 0) return 0;
      const intersection = [...a].filter((w) => b.has(w)).length;
      const smaller = Math.min(a.size, b.size);
      return intersection / smaller;
    }

    const kept = [];
    const removedDuplicates = [];

    for (const candidate of call1Result) {
      const dupIndex = kept.findIndex(
        (k) => overlapRatio(candidate.name, k.name) >= 0.6
      );
      if (dupIndex === -1) {
        kept.push(candidate);
      } else {
        const existing = kept[dupIndex];
        if ((candidate.significance ?? 0) > (existing.significance ?? 0)) {
          removedDuplicates.push({ removed: existing.name, kept: candidate.name });
          kept[dupIndex] = candidate;
        } else {
          removedDuplicates.push({ removed: candidate.name, kept: existing.name });
        }
      }
    }

    if (removedDuplicates.length > 0) {
      console.log("DEDUP — removed duplicates:", JSON.stringify(removedDuplicates, null, 2));
    }

    // -- 5b. MediaUrl assignment --
    // Build a lookup from itinerary stop id → mediaUrls[0]
    const stopMediaMap = {};
    for (const s of stopSections) {
      if (s.id != null && s.mediaUrls.length > 0) {
        stopMediaMap[s.id] = s.mediaUrls[0];
      }
    }

    // Pool of experience-level images (imageUploads) for experiences not in the itinerary
    const experienceImagePool = Array.isArray(experience.imageUploads)
      ? experience.imageUploads.map((img) => img.url).filter(Boolean)
      : [];
    let imagePoolIndex = 0;

    const cleanedList = kept.map((exp) => {
      let mediaUrl = null;

      if (exp.itineraryStopId != null && stopMediaMap[exp.itineraryStopId]) {
        // Matched directly to an itinerary stop
        mediaUrl = stopMediaMap[exp.itineraryStopId];
      } else if (imagePoolIndex < experienceImagePool.length) {
        // Draw sequentially from experience-level image pool
        mediaUrl = experienceImagePool[imagePoolIndex++];
      }

      return { ...exp, mediaUrl };
    });

    // -- 5c. sortRank assignment --
    // Every experience going into Call 2 must carry a sortRank so the final
    // output can be sorted into true itinerary order regardless of how Call 2
    // reorders or combines items.
    //
    // Rules applied in priority order:
    //   1. Itinerary stop match    → sortRank = stop.rank (integer, from itinerary API)
    //   2. Contextual association  → sortRank = closestStop.rank + 0.1
    //      (2+ meaningful words (length > 3) overlap between exp name/desc and stop name)
    //   3. Logistical noise (guide, commentary, water, transfer, coach) with 2+ signals
    //      → excluded entirely (only exclusion rule that removes an experience)
    //   4. No association found    → sortRank = highestStopRank - 0.5
    //      (slots before the last stop; never dropped)

    // Build a rank lookup from stop id → rank
    const stopRankMap = {};
    for (const s of stopSections) {
      if (s.id != null) stopRankMap[s.id] = s.rank ?? 0;
    }

    const highestStopRank = stopSections.length > 0
      ? Math.max(...stopSections.map((s) => s.rank ?? 0))
      : 0;

    const lowestStopRank = stopSections.length > 0
      ? Math.min(...stopSections.map((s) => s.rank ?? 0))
      : 0;

    // Keywords whose presence as a whole word in an experience NAME (not description)
    // identifies it as logistical noise rather than a discrete guest moment.
    // Checked case-insensitively against the name field only — never the description.
    const noiseNameKeywords = [
      "guide", "commentary", "transfer", "coach", "pickup", "dropoff",
      "water", "audio",
    ];

    // Build a single regex that matches any noise keyword as a whole word.
    const noiseNameRegex = new RegExp(
      "\\b(" + noiseNameKeywords.join("|") + ")\\b",
      "i"
    );

    function meaningfulWords(str) {
      // Used only for contextual stop matching — not for noise filtering.
      const stopWords = new Set([
        "guide", "guides", "guided", "commentary", "water", "bottled",
        "transfer", "transfers", "coach", "coaches", "pickup", "dropoff",
        "collection", "hotel", "meeting", "point", "audio",
      ]);
      return str
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .split(/\s+/)
        .filter((w) => w.length > 3 && !stopWords.has(w));
    }

    function contextualStopMatch(exp) {
      // Returns the stop with the highest word overlap against exp name+description,
      // or null if fewer than 2 meaningful words overlap with any stop.
      const expWords = new Set([
        ...meaningfulWords(exp.name),
        ...meaningfulWords(exp.description || ""),
      ]);
      if (expWords.size === 0) return null;

      let bestStop = null;
      let bestOverlap = 0;

      for (const stop of stopSections) {
        const stopWords = new Set([
          ...meaningfulWords(stop.name),
          ...meaningfulWords(stop.rawDescription || ""),
        ]);
        const overlap = [...expWords].filter((w) => stopWords.has(w)).length;
        if (overlap >= 2 && overlap > bestOverlap) {
          bestOverlap = overlap;
          bestStop = stop;
        }
      }

      return bestStop;
    }

    // Filter out logistical noise that slipped through Call 1.
    // This is the ONLY rule that removes an experience from the list.
    // Checks the experience NAME only — never the description — using whole-word matching.
    const ranked = [];
    const filteredNoise = [];

    for (const exp of cleanedList) {
      const noiseMatch = exp.name.match(noiseNameRegex);
      if (noiseMatch) {
        const matchedKeyword = noiseMatch[1].toLowerCase();
        console.log("NOISE FILTERED:", exp.name, "— matched keyword in name:", matchedKeyword);
        filteredNoise.push(exp.name);
        continue;
      }

      let sortRank;

      if (exp.itineraryStopId != null && stopRankMap[exp.itineraryStopId] != null) {
        // Rule 1: direct itinerary stop match
        sortRank = stopRankMap[exp.itineraryStopId];
      } else {
        // Rule 2: contextual association — offset +0.1 keeps it close to its parent stop
        const assocStop = contextualStopMatch(exp);
        if (assocStop != null) {
          sortRank = (assocStop.rank ?? 0) + 0.1;
        } else {
          // Rule 4: no association — slot before the last stop, never dropped
          sortRank = highestStopRank - 0.5;
        }
      }

      ranked.push({ ...exp, sortRank });
    }

    // Sort ascending by sortRank — this is the canonical itinerary order
    const sortedList = ranked.slice().sort((a, b) => a.sortRank - b.sortRank);

    // -- Sort validation --
    // The item with the lowest sortRank must be a confirmed itinerary stop
    // (itineraryStopId != null). If the first item is a highlights/inclusions
    // experience, bump its sortRank to lowestStopRank + 0.1 so it never
    // sorts above the first real stop.
    if (sortedList.length > 0 && sortedList[0].itineraryStopId == null) {
      sortedList[0] = { ...sortedList[0], sortRank: lowestStopRank + 0.1 };
      // Re-sort after the correction
      sortedList.sort((a, b) => a.sortRank - b.sortRank);
      console.log("SORT VALIDATION: bumped non-stop first item, re-sorted.");
    }

    console.log("SORTED LIST FOR CALL 2:", JSON.stringify(sortedList, null, 2));
    console.log("COUNT AFTER NOISE FILTER:", sortedList.length);

    // -----------------------------------------------------------------
    // 6. Call 2 — Count logic + combining + content generation
    // -----------------------------------------------------------------

    const call2SystemPrompt = `You are a senior travel copywriter for Airbnb Experiences. You write itinerary content that makes people feel they've already lived the trip before booking. Style: warm, specific, first-person-friendly. Verb-led titles (3–5 words, Title Case). Descriptions that are sensory and atmospheric — what will they SEE, FEEL, HEAR, or DISCOVER at this exact spot? Never use: "you will", "guests can", "this experience", "stunning", "amazing", "beautiful". Every description must contain at least one specific detail. For experiences with low context quality, describe the atmosphere and character of the place — do not invent specific facts or statistics. You output only valid JSON.`;

    const call2UserPrompt = `Below is a cleaned list of sub-experiences for a tour. Apply the count rules, then generate final itinerary copy.

STEP 1 — COUNT CHECK: Count the experiences in the list below.
- If count is less than 3: you MUST expand the lowest-contextQuality experiences into sub-moments before generating copy. Use the description text to find distinct moments within a single experience. Only expand if the text supports it — do not invent.
- If count is between 3 and 8: proceed directly to content generation.
- If count is above 8: apply combining rules before generating copy.
Print your count and which rule you are applying before generating output.

COMBINING RULES (only if count is above 8):
- Only combine experiences that are adjacent in the list
- Only combine if they are the same type (both pass-by, or both the same activity category like walks, viewpoints, wildlife)
- Never combine more than 3 experiences into one highlight
- Use the mediaUrl of the highest-significance experience in the combined group
- If after applying these rules the count is still above 8, that is acceptable — do not force-combine unrelated experiences

CONTENT GENERATION RULES:
- One highlight per final experience (or combined group)
- Title: verb-led, 3–5 words, Title Case
- Description: 100–200 characters. Rich, sensory, specific. Count carefully.
- For contextQuality "low": describe the atmosphere, character, and what makes this place or moment distinctive — draw on general knowledge of the place but omit specific numbers, statistics, or facts not present in the provided description
- For pass-by experiences: be honest about brevity but make it atmospheric ("One moment you're in mountain light; 1.2km of blasted rock later, the fiord opens below.")
- For combined highlights: write a description that captures the thread connecting the grouped experiences

Style reference:
- "Marvel at Stonehenge — Step inside the outer circle and feel the weight of 4,500 years pressing down. The stones are bigger than photos suggest — and the silence between them, stranger."
- "Pass Through Homer Tunnel — One moment you're in mountain light; 1.2km of blasted rock later, the fiord side opens below you."
- "Explore the Visitor Centre — Over 250 artefacts excavated from the surrounding plain — tools, jewellery, bones — laid out in the order they were pulled from the earth."

The experiences below are provided in the exact order they occur in the itinerary. Preserve this order exactly in your output. Do not reorder.

[EXPERIENCE LIST]
${JSON.stringify(sortedList, null, 2)}

Output a raw JSON array only — no markdown, no explanation:
[
  {
    "name": "Rewritten Title",
    "description": "200–300 character immersive description",
    "mediaUrl": "preserved from input",
    "combinedFrom": ["name1", "name2"] or null
  }
]`;

    console.log("EXPERIENCE COUNT GOING INTO CALL 2:", sortedList.length);

    const call2Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.7,
      messages: [
        { role: "system", content: call2SystemPrompt },
        { role: "user", content: call2UserPrompt },
      ],
    });

    const call2Raw = call2Completion.choices[0]?.message?.content || "";
    const call2Cleaned = call2Raw
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/```\s*$/, "")
      .trim();

    let call2Result;
    try {
      call2Result = JSON.parse(call2Cleaned);
    } catch {
      return res.status(500).json({
        success: false,
        error: "Call 2 (content generation) returned output that could not be parsed. Please try again.",
        rawOutput: call2Raw,
      });
    }

    if (!Array.isArray(call2Result)) {
      return res.status(500).json({
        success: false,
        error: "Call 2 (content generation) returned an unexpected structure. Please try again.",
        rawOutput: call2Raw,
      });
    }

    // -----------------------------------------------------------------
    // 7. Final assembly
    //    Map Call 2 output into the existing response shape.
    //    id: use itineraryStopId from cleanedList where available, else index+1.
    //    mediaUrls: wrap single mediaUrl back into array for frontend compatibility.
    // -----------------------------------------------------------------

    // Build a name→sortedList entry map for id and sortRank lookup
    const cleanedByName = {};
    for (const entry of sortedList) {
      cleanedByName[entry.name] = entry;
    }

    const finalSections = call2Result.map((item, i) => {
      // For combined highlights, find the id of the first source name
      const sourceName = Array.isArray(item.combinedFrom) && item.combinedFrom.length > 0
        ? item.combinedFrom[0]
        : item.name;

      // Attempt to resolve id from sorted list, then from stop sections, then fall back to index
      const cleanedEntry = cleanedByName[sourceName];
      const stopId = cleanedEntry?.itineraryStopId ?? null;
      const matchedStop = stopId != null
        ? stopSections.find((s) => s.id === stopId)
        : null;

      const id = matchedStop?.id ?? stopId ?? (i + 1);
      const mediaUrl = item.mediaUrl ?? null;
      // Carry sortRank through for final sort; fall back to index if source not found
      const sortRank = cleanedEntry?.sortRank ?? i;

      return {
        id,
        name: item.name,
        description: item.description,
        mediaUrls: mediaUrl ? [mediaUrl] : [],
        sortRank,
      };
    });

    // Sort by sortRank ascending to enforce true itinerary order
    finalSections.sort((a, b) => a.sortRank - b.sortRank);

    // Strip sortRank from the public response shape
    const sections = finalSections.map(({ sortRank: _sr, ...rest }) => rest);

    return res.json({
      success: true,
      data: { sections },
    });
  } catch (err) {
    console.error("[/api/generate error]", err);
    return res.status(500).json({
      success: false,
      error: err.message || "An unexpected server error occurred.",
    });
  }
});

// ---------------------------------------------------------------------------
// Start server (local only — Vercel uses the exported app)
// ---------------------------------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
