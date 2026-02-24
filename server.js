require("dotenv").config();

const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const app = express();
app.use(express.json());

// ---------------------------------------------------------------------------
// Custom error type — thrown when an experience has no itinerary
// ---------------------------------------------------------------------------
class NoItineraryError extends Error {
  constructor(experienceId) {
    super(`Experience ${experienceId} does not have an itinerary and cannot be generated.`);
    this.name = "NoItineraryError";
    this.experienceId = experienceId;
  }
}

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
// Core generation logic — reusable for single experience and collection modes
// ---------------------------------------------------------------------------

/**
 * Generate itinerary sections for a single experience ID.
 * Returns { experienceId, experienceName, sections } on success.
 * Throws an Error on failure (caller decides how to surface it).
 */
async function generateForExperience(id) {
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

    // Hard stop — no itinerary data means we cannot generate content
    if (!hasItineraryIds) {
      throw new NoItineraryError(id);
    }

    // -----------------------------------------------------------------
    // 2. Call Itinerary API
    // -----------------------------------------------------------------
    let stopSections = [];       // Only STOP-type sections
    let durationText = "";
    let modeOfTravel = "";

    {
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
- Every itinerary stop listed below MUST appear in your output — never drop or skip a stop entirely. Combining adjacent stops (when count > 8) is permitted, but every stop must be accounted for in at least one output card
- Only include additional experiences (from highlights/inclusions/summary) if they describe something the guest actively sees, does, or visits that is not already covered by an itinerary stop
- Never invent experiences not present in the text
- Exclude from non-itinerary sources only: transfers, coach rides, pickups, dropoffs, hotel collection, meeting points, audio guides, bottled water, onboard commentary
- If the same place or activity appears in multiple sources, list it once using the richest description available
- For each experience, assign a significance score 1–10 (10 = headline attraction, 1 = minor pass-by)
- For each experience, assign contextQuality: "high" (100+ words of specific detail available), "medium" (30–100 words), "low" (under 30 words or very generic)
- Note which source you found it in: "itinerary" | "highlights" | "inclusions" | "summary"

Separation rules — never merge these into adjacent stops:
- A landscape, plain, valley, viewpoint, or countryside mentioned as a distinct place or moment must be listed as its own experience — do not fold it into a nearby venue or monument
- A visitor centre, museum, or exhibition is always a separate experience from the monument or site it relates to
- A pass-by stop is always separate from a full-entry stop, even if they are geographically close
- A named sub-attraction within a stop (e.g. a chapel, apartment, or gallery inside a castle) must be listed as its own experience if it is explicitly described with distinct content

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
      temperature: 0,
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
      throw new Error("Call 1 (extraction) returned output that could not be parsed. Please try again.");
    }

    if (!Array.isArray(call1Result)) {
      throw new Error("Call 1 (extraction) returned an unexpected structure. Please try again.");
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
      // Never deduplicate if either name is a single word — a monument and a
      // venue inside that monument will share the monument name but are distinct.
      if (a.size <= 1 || b.size <= 1) return 0;
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
        // An itinerary-sourced entry (has itineraryStopId) always wins over a
        // highlights/inclusions entry — it carries the correct id, rank, and media.
        // Only fall back to significance comparison when both have or both lack an id.
        const candidateHasId = candidate.itineraryStopId != null;
        const existingHasId  = existing.itineraryStopId  != null;
        const candidateWins  = candidateHasId && !existingHasId
          ? true
          : !candidateHasId && existingHasId
            ? false
            : (candidate.significance ?? 0) > (existing.significance ?? 0);

        if (candidateWins) {
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

    // -- 5b. MediaUrl assignment — four-layer fallback --

    // Build a lookup from itinerary stop id → mediaUrls[0]  (Layer 1)
    const stopMediaMap = {};
    for (const s of stopSections) {
      if (s.id != null && s.mediaUrls.length > 0) {
        stopMediaMap[s.id] = s.mediaUrls[0];
      }
    }

    // Track assigned URLs globally to prevent the same image appearing on multiple cards
    const usedMediaUrls = new Set();

    // Pass 1 — Layer 1: direct itinerary stop match (itineraryStopId-linked only)
    const cleanedList = kept.map((exp) => {
      let mediaUrl = null;
      if (exp.itineraryStopId != null && stopMediaMap[exp.itineraryStopId]) {
        const candidate = stopMediaMap[exp.itineraryStopId];
        if (!usedMediaUrls.has(candidate)) {
          mediaUrl = candidate;
          usedMediaUrls.add(candidate);
        }
      }
      return { ...exp, mediaUrl };
    });

    // Pass 2 — Layers 2 → 3 → 4: sequential fallback for still-null entries
    for (const exp of cleanedList) {
      if (exp.mediaUrl) continue; // Layer 1 already assigned

      // ── Layer 2: Wikimedia Commons ──
      try {
        const searchTerm = exp.name.trim().replace(/\s+/g, '_');
        const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`;
        const wikiRes = await fetch(wikiUrl);
        if (wikiRes.ok) {
          const wikiData = await wikiRes.json();
          const thumbnail = wikiData?.thumbnail?.source;
          if (thumbnail && !usedMediaUrls.has(thumbnail)) {
            exp.mediaUrl = thumbnail;
            usedMediaUrls.add(thumbnail);
            console.log('WIKIMEDIA:', exp.name, '→', thumbnail);
            continue; // Layer 2 succeeded — skip Layers 3 & 4
          }
        }
        console.log('WIKIMEDIA:', exp.name, '→ not found');
      } catch (wikiErr) {
        console.warn('WIKIMEDIA error for', exp.name, ':', wikiErr.message);
      }

      // ── Layer 3: Unsplash with GPT-generated query ──
      if (process.env.UNSPLASH_ACCESS_KEY) {
        try {
          const queryResponse = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            temperature: 0,
            max_tokens: 30,
            messages: [
              {
                role: 'system',
                content: 'Return only a 3-5 word Unsplash search query for a travel photo of this specific stop. Always include the location name (city, landmark, or site) in the query. No punctuation, no explanation.',
              },
              {
                role: 'user',
                content: `Tour: ${experienceName}\nCity: ${cityName}\nStop: ${exp.name}\nDescription: ${exp.description || ''}`,
              },
            ],
          });
          const unsplashQuery = queryResponse.choices[0].message.content.trim();

          const unsplashUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(unsplashQuery)}&per_page=5&orientation=landscape&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
          const unsplashRes = await fetch(unsplashUrl);
          if (unsplashRes.ok) {
            const unsplashData = await unsplashRes.json();
            const photo = (unsplashData?.results || []).find(r => !usedMediaUrls.has(r.urls.regular));
            if (photo) {
              exp.mediaUrl = photo.urls.regular;
              exp.imageCredit = photo.user.name;
              exp.imageCreditLink = photo.links.html;
              usedMediaUrls.add(photo.urls.regular);
              console.log('UNSPLASH:', exp.name, '→ query:', unsplashQuery, '→ found');
              continue; // Layer 3 succeeded — skip Layer 4
            }
          }
          console.log('UNSPLASH:', exp.name, '→ query:', unsplashQuery, '→ not found');
        } catch (unsplashErr) {
          console.warn('UNSPLASH error for', exp.name, ':', unsplashErr.message);
        }
      }

      // ── Layer 4: null — leave mediaUrl as null, generation continues ──
    }

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

    // Track how many experiences have been associated with each stop rank,
    // so each gets a unique offset (0.1, 0.2, 0.3…) — stable sort order.
    const stopRankOffsetCounter = {};

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
        // Rule 2: contextual association — incrementing offset per parent stop
        // ensures stable ordering when multiple experiences share the same parent.
        const assocStop = contextualStopMatch(exp);
        if (assocStop != null) {
          const baseRank = assocStop.rank ?? 0;
          stopRankOffsetCounter[baseRank] = (stopRankOffsetCounter[baseRank] ?? 0) + 0.1;
          sortRank = baseRank + stopRankOffsetCounter[baseRank];
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

    // Minimum count guarantee — if we have fewer than 3 experiences after all
    // filtering and deduplication, pull the best dropped items back from the
    // full call1Result pool (excluding whatever made it through already).
    if (sortedList.length < 3) {
      const keptNames = new Set(sortedList.map(e => e.name));
      const candidates = call1Result
        .filter(exp => !keptNames.has(exp.name))
        .sort((a, b) => (b.significance ?? 0) - (a.significance ?? 0));

      for (const exp of candidates) {
        if (sortedList.length >= 3) break;
        const fallbackRank = highestStopRank + 0.5;
        sortedList.push({ ...exp, mediaUrl: null, sortRank: fallbackRank });
        console.log("REINSTATED (min count):", exp.name);
      }

      sortedList.sort((a, b) => a.sortRank - b.sortRank);
    }

    console.log("SORTED LIST FOR CALL 2:", JSON.stringify(sortedList, null, 2));
    console.log("COUNT AFTER NOISE FILTER:", sortedList.length);

    // -----------------------------------------------------------------
    // 6. Call 2 — Count logic + combining + content generation
    // -----------------------------------------------------------------

    const call2SystemPrompt = `You are a senior travel content writer for Headout.
Your job is to convert raw tour stop data into itinerary cards that help a traveler vividly imagine what each part of the day actually looks like.
This copy is not just informational. It should increase booking confidence by making the itinerary feel concrete, specific, and easy to picture — while staying factual and source-grounded.

PRIMARY OBJECTIVE
When a traveler compares the same tour across platforms, Headout's itinerary copy should make the experience easiest to imagine.
Each card should feel like a real moment in the day, not a brochure summary.

==================================================
OUTPUT REQUIREMENTS
==================================================
Return a raw JSON array only. No markdown. No commentary.
Each item must be:
{
  "name": "Verb-led Title Case title (3-5 words)",
  "description": "Description between 100 and 200 characters (minimum 100, maximum 200)",
  "mediaUrl": "preserved from input",
  "combinedFrom": ["name1", "name2"] or null
}
Preserve the final itinerary order.

==================================================
COUNT RULES (apply first, in order)
==================================================
1) If total count is below 3:
- Expand the thinnest experiences into sub-moments using source material only
- Do not invent details
- Shared context across expanded sub-moments is acceptable if source-grounded
2) If total count is between 3 and 8:
- Proceed directly to content generation
3) If total count is above 8:
- Combine adjacent experiences of the same type (max 3 per group)
- Preserve chronology
- For combined cards, write one description that captures the thread connecting the grouped moments
- For combined cards, use the mediaUrl of the first item in the group that has a non-null mediaUrl

==================================================
WHAT MAKES A STRONG CARD (MOST IMPORTANT)
==================================================
A strong itinerary card describes a moment the traveler can picture.
Do NOT write like a generic inclusion list:
- "Visit X. See Y. Learn Z."
Instead, write like:
- what appears first
- what the traveler is physically doing
- what specific detail stands out
- how the scene changes (before/after, inside/outside, road/site/view)
- what makes this stop feel distinct from the others
Each card should answer:
"What does this part of the day actually look like?"

==================================================
MOMENT-FIRST WRITING FRAME (choose one primary angle per card)
==================================================
Before writing, choose ONE angle that best fits the stop:
1. Arrival Moment
   - First visual impression, approach, entry, reveal
2. Action Moment
   - Walking, browsing, boarding, passing through, stepping inside
3. Transition Moment
   - Tunnel, ferry crossing, drive segment, moving from one setting to another
4. Observation Moment
   - One specific thing people notice here (artefacts, chapel ceiling, bluestones, cliff edge)
5. Contrast Moment
   - Shift in scale, light, noise, terrain, architecture, or pace (only if source-supported)
6. Scale/Proximity Moment
   - Counts, distances, duration, size, density (only if source-supported)
Use facts to support the moment. Do not force drama.

==================================================
VOICE + STYLE (Headout)
==================================================
Tone:
- Conversational
- Clear
- Grounded
- Knowledgeable friend, not brochure copy

Writing style:
- Active voice only
- Contractions are fine
- Specificity over atmosphere
- Lightly evocative language is allowed only when supported by source data
- For low-context stops, stick to factual description only
- Prefer concrete nouns over abstract mood words

Write with experiential clarity, not poetic excess.

==================================================
DETAIL SELECTION PRIORITY
==================================================
For each card, use details in this order:
1. Numbers (counts, durations, distances, dates/ages if explicitly present)
2. Proper nouns (landmarks, routes, named places)
3. Distinct physical details (artefacts, tunnel, chapel, bluestones, ferry, cliff, etc.)
4. What happens at this stop (walk, enter, browse, pass through, board, look out)
5. Logistics only if it adds specificity (audio guide, transfer, multilingual support)

If a useful number is present, prefer using it.

==================================================
TITLE RULES
==================================================
- Verb-led
- 3-5 words only
- Title Case
- Should reflect what happens in the moment (not just the place name)

Prefer concrete verbs:
Enter, Walk, Browse, Pass Through, Board, Cross, Take In, Look Out Over, See, Stop At, Ride

Avoid weak/generic verbs unless no better option fits:
Explore, Experience, Enjoy, Discover, Marvel

Examples:
- Weak: "Explore Windsor Castle"
- Better: "Enter Windsor Castle"
- Weak: "Walk Around Stonehenge" (acceptable but generic)
- Better: "Circle The Stonehenge Site" (if source supports movement around site)

==================================================
DESCRIPTION RULES
==================================================
- Between 100 and 200 characters total (minimum 100, maximum 200)
- Count carefully before outputting
- Factual and source-grounded
- Lead with the most specific image/detail available
- One highlight/moment per card
- No duplication across different stops
- Rewrite supplier-style copy into plain, experiential, factual language

IMPORTANT:
A good description should help a traveler imagine the sequence of the day.
It should not read like a Wikipedia line or a package inclusion list.
Use this pattern when useful (not mandatory):
- concrete action + specific detail + grounded context
OR
- scene shift + physical detail + what this stop adds to the day

For pass-by stops:
- Be honest about brevity
- Still make the moment legible and specific if supported by source

For low-context stops:
- Use only explicit source details (name, type, passBy, sequence, provided description)
- Do not add unsupported sensory/historical claims
- If specificity is thin, write cleanly and concretely rather than becoming generic or poetic

==================================================
HARD RULES (MUST NEVER BREAK)
==================================================
Never invent:
- facts
- timings
- statistics
- access details
- sensory details
- historical claims not present in source data

Never use these words:
- amazing
- magical
- breathtaking
- stunning
- beautiful
- incredible

Never use these phrases:
- you will
- guests can
- this experience
- visitors are invited

Avoid brochure/promo wording:
- iconic
- world-famous
- must-see
- unmissable
(Prefer factual rewrites.)

No filler:
- enjoy your visit
- make memories
- arrive on time

No personas:
- perfect for families
- ideal for couples

==================================================
ANTI-REPETITION RULES
==================================================
- Don't repeat the same fact across different stops
- Don't write every card in the same sentence pattern
- If one card uses the key number/detail, others should use different specifics where possible
- Each card should feel like a different moment in the itinerary

Carve-out:
- When expanding one stop into sub-moments (count below 3), shared context is acceptable if source-grounded

==================================================
QUALITY BAR (EXPERIENTIAL, FACTUAL, SPECIFIC)
==================================================
Strong examples (moment-first, not brochure-first):
- "Enter the Stone Circle" — "You're within 10 metres of the actual bluestones. Bigger than photos suggest, stranger than history books prepare you for."
- "Browse the Visitor Centre" — "250 artefacts excavated from the surrounding plain: tools, jewellery, and bones pulled from the earth over decades of digs."
- "Pass Through Homer Tunnel" — "One moment you're in mountain light. Then 1.2km of blasted rock. Then the fiord opens below."

Why these work:
- They describe a moment, not just a landmark
- They use specific nouns/numbers
- They create mental pictures without hype
- They stay grounded

==================================================
FINAL VALIDATION (DO SILENTLY BEFORE OUTPUT)
==================================================
For each item, verify:
- title is verb-led, 3-5 words, Title Case
- description is 100-200 characters
- description reads like a moment, not a generic inclusion line
- no banned words/phrases
- no invented facts
- mediaUrl preserved
- combinedFrom is correct (array or null)
If any rule fails, rewrite before outputting.`;

    const _call2DurationText = durationText || (() => { console.warn("[Call 2] durationText unavailable, using fallback."); return "Not specified"; })();
    const _call2ModeOfTravel = modeOfTravel || (() => { console.warn("[Call 2] modeOfTravel unavailable, using fallback."); return "Not specified"; })();

    const call2UserPrompt = `Experience: ${experienceName}
City: ${cityName}
Duration: ${_call2DurationText}
Mode of travel: ${_call2ModeOfTravel}

Below is the cleaned list of sub-experiences for this tour. Apply the count rules, then generate final itinerary card copy.

[EXPERIENCE LIST]
${JSON.stringify(sortedList.map(({ name, description, mediaUrl, passBy }) => ({ name, description, mediaUrl, passBy })), null, 2)}`;

    console.log("EXPERIENCE COUNT GOING INTO CALL 2:", sortedList.length);

    const call2Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0,
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
      throw new Error("Call 2 (content generation) returned output that could not be parsed. Please try again.");
    }

    if (!Array.isArray(call2Result)) {
      throw new Error("Call 2 (content generation) returned an unexpected structure. Please try again.");
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

    return { experienceId: id, experienceName, sections };
}

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

// Single experience
app.post("/api/generate", async (req, res) => {
  const { experienceId } = req.body;

  if (!experienceId || String(experienceId).trim() === "") {
    return res.status(400).json({ success: false, error: "Experience ID is required." });
  }
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ success: false, error: "OPENAI_API_KEY is not configured on the server." });
  }

  try {
    const result = await generateForExperience(String(experienceId).trim());
    return res.json({ success: true, data: { sections: result.sections } });
  } catch (err) {
    if (err instanceof NoItineraryError) {
      return res.status(400).json({ success: false, error: err.message });
    }
    console.error("[/api/generate error]", err);
    return res.status(500).json({ success: false, error: err.message || "An unexpected server error occurred." });
  }
});

// Collection — generates one result block per experience in the collection
app.post("/api/generate-collection", async (req, res) => {
  const { collectionId } = req.body;

  if (!collectionId || String(collectionId).trim() === "") {
    return res.status(400).json({ success: false, error: "Collection ID is required." });
  }
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ success: false, error: "OPENAI_API_KEY is not configured on the server." });
  }

  const cid = String(collectionId).trim();

  try {
    // Fetch collection and extract all experience IDs from tourGroups
    const collectionUrl = `https://api.headout.com/api/v1/collection/${cid}/tour-groups`;
    const collectionData = await fetchJson(collectionUrl);

    // v6 collections endpoint returns tourGroups array directly; fall back to results for other shapes
    const tourGroups = collectionData?.tourGroups ?? collectionData?.results ?? collectionData?.data;
    if (!Array.isArray(tourGroups) || tourGroups.length === 0) {
      console.log("Collection API response keys:", Object.keys(collectionData || {}));
      return res.status(400).json({ success: false, error: "No tour groups found in this collection." });
    }

    const experienceIds = tourGroups.map((tg) => String(tg.id)).filter(Boolean);
    console.log(`Collection ${cid}: found ${experienceIds.length} experiences:`, experienceIds);

    // Generate itinerary for each experience sequentially to avoid rate limits.
    // Each experience is raced against a 120s timeout to prevent one slow call
    // from stalling the entire collection.
    const EXPERIENCE_TIMEOUT_MS = 120_000;
    const experiences = [];
    for (const expId of experienceIds) {
      console.log(`Generating for experience ${expId}…`);
      try {
        const result = await Promise.race([
          generateForExperience(expId),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error(`Timed out after ${EXPERIENCE_TIMEOUT_MS / 1000}s`)), EXPERIENCE_TIMEOUT_MS)
          ),
        ]);
        experiences.push(result);
      } catch (expErr) {
        if (expErr instanceof NoItineraryError) {
          // Skip silently — experience has no itinerary, nothing to generate
          console.log(`Skipping experience ${expId}: no itinerary data.`);
          continue;
        }
        console.error(`Failed for experience ${expId}:`, expErr.message);
        // Include a failed entry so the frontend can show a partial result
        experiences.push({
          experienceId: expId,
          experienceName: `Experience ${expId}`,
          sections: [],
          error: expErr.message,
        });
      }
    }

    return res.json({ success: true, data: { collectionId: cid, experiences } });
  } catch (err) {
    console.error("[/api/generate-collection error]", err);
    return res.status(500).json({ success: false, error: err.message || "An unexpected server error occurred." });
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
