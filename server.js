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

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Headout API returned ${res.status} for ${url}`);
  }
  return res.json();
}

// ---------------------------------------------------------------------------
// Merged image pool builder
// ---------------------------------------------------------------------------

function buildMergedImagePool(productImages, stopSections) {
  const pool = [];
  const urlMap = new Map(); // url → index in pool

  // Source A: Product images (have altText, no stop context)
  for (const img of productImages) {
    if (!img.url) continue;
    pool.push({
      url: img.url,
      altText: img.altText || null,
      description: img.description || null,
      credit: img.credit || null,
      stopName: null,
      stopId: null,
      source: "product",
    });
    urlMap.set(img.url, pool.length - 1);
  }

  // Source B: Itinerary stop images (have stop context, no altText)
  for (const stop of stopSections) {
    if (!stop.mediaUrls || stop.mediaUrls.length === 0) continue;
    const url = stop.mediaUrls[0];

    if (urlMap.has(url)) {
      // Same URL exists in product images — merge metadata
      const existing = pool[urlMap.get(url)];
      existing.stopName = stop.name;
      existing.stopId = stop.id;
      existing.source = "both";
    } else {
      pool.push({
        url,
        altText: null,
        description: null,
        credit: null,
        stopName: stop.name,
        stopId: stop.id,
        source: "itinerary",
      });
      urlMap.set(url, pool.length - 1);
    }
  }

  return pool;
}

// ---------------------------------------------------------------------------
// Core generation logic
// ---------------------------------------------------------------------------

async function generateForExperience(id, productImages = null) {
    // -----------------------------------------------------------------
    // 1. Fetch Experience API + Itinerary API in parallel
    // -----------------------------------------------------------------
    const experienceUrl = `https://api.headout.com/api/v6/tour-groups/${id}`;
    const itineraryUrl = `https://api.headout.com/api/v6/tour-groups/${id}/experience-itineraries/?sections=true`;

    const [experience, itineraryData] = await Promise.all([
      fetchJson(experienceUrl),
      fetchJson(itineraryUrl),
    ]);

    // If no product images were passed (single experience mode), extract from API response
    if (productImages === null) {
      productImages = experience.media?.productImages || [];
    }

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

    if (!hasItineraryIds) {
      throw new NoItineraryError(id);
    }

    // -----------------------------------------------------------------
    // 2. Parse itinerary sections
    // -----------------------------------------------------------------
    let stopSections = [];
    let durationText = "";
    let modeOfTravel = "";

    {
      const firstItinerary = itineraryData?.itineraries?.[0];
      if (firstItinerary) {
        const dur = firstItinerary.details?.duration;
        if (dur) {
          const h = dur.hours ?? dur.minHours ?? 0;
          const m = dur.minutes ?? dur.minMinutes ?? 0;
          durationText = `${h}h ${m}min`;
        }
        modeOfTravel = firstItinerary.details?.modeOfTravel?.localisedLabel || "";

        const normaliseSection = (s) => ({
          id: s.id,
          rank: s.rank,
          name: s.details?.name || "Stop",
          rawDescription: stripHtml(s.details?.description || ""),
          inclusionLabel: s.details?.inclusion?.localisedLabel || null,
          passBy: s.details?.passBy || false,
          timeForNextSection: s.details?.timeForNextSection ?? null,
          mediaUrls: Array.isArray(s.details?.mediaUrls) ? s.details.mediaUrls : [],
        });

        const topLevelStops = (firstItinerary.sections || [])
          .filter((s) => s.type === "STOP")
          .sort((a, b) => a.rank - b.rank);

        stopSections = topLevelStops.flatMap((s) => {
          const result = [normaliseSection(s)];
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
    // 3. Build merged image pool + structured stop list for Call 1
    // -----------------------------------------------------------------

    const mergedImagePool = buildMergedImagePool(productImages, stopSections);
    console.log("MERGED IMAGE POOL:", mergedImagePool.length, "images",
      `(${productImages.length} product, ${stopSections.filter(s => s.mediaUrls.length > 0).length} itinerary)`);

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

    // Build image descriptions for Call 1 (product images with altText only)
    const imageDescriptionsForCall1 = mergedImagePool
      .filter((img) => img.altText && img.source !== "itinerary")
      .map((img) => `- "${img.altText}"`)
      .join("\n");

    // -----------------------------------------------------------------
    // 4. Call 1 — Extraction
    // -----------------------------------------------------------------
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const call1SystemPrompt = `You are a travel experience analyst. Your job is to identify every distinct experiential highlight within a tour — the moments a traveler would remember and tell someone about. You work strictly from the text provided. You never invent experiences. You output only valid JSON.`;

    const call1UserPrompt = `Read all the content below and extract the experiential highlights a guest will have on this tour.

TARGET: Extract between 4 and 8 highlights. This is a HARD requirement — you MUST output at least 4 highlights and no more than 8. If combining would drop you below 4, keep sub-experiences as separate highlights.

Sources to analyse:
- Itinerary stops (confirmed experiences)
- Highlights, inclusions, summary, metaTitle, metaDescription (may contain additional experiences not listed as stops)
- Product image descriptions (may describe distinct moments not covered by other sources)

Extraction rules:
- Every itinerary stop MUST be accounted for in your output — but contextually related stops and sub-attractions at the same location should be COMBINED into one rich highlight
- Only include additional experiences (from highlights/inclusions/summary/image descriptions) if they describe something the guest actively sees, does, or visits that is not already covered
- Never invent experiences not present in the text
- If the same place or activity appears in multiple sources, list it once using the richest description available
- For each experience, assign a significance score 1–10 (10 = headline attraction, 1 = minor pass-by)
- For each experience, assign contextQuality: "high" (100+ words of specific detail available), "medium" (30–100 words), "low" (under 30 words or very generic)
- Note which source you found it in: "itinerary" | "highlights" | "inclusions" | "summary" | "product_image"

COMBINING RULES (critical — fewer, richer highlights are always better than many thin ones):
- A monument/site + its sub-attractions (chapels, towers, apartments, galleries) = ONE highlight. Mention the sub-attractions within the description.
  Example: Windsor Castle + St George's Chapel + State Apartments + Round Tower = one "Windsor Castle" highlight whose description weaves in all sub-attractions.
- A site + its audio guide / guided commentary = ONE highlight. The guide enriches the visit; it's not a separate experience.
- A site + taking photos / free time at that site = ONE highlight.
- A visitor centre or museum that is part of the same ticketed attraction = ONE highlight with the main site.
  Example: Stonehenge stone circle + Stonehenge Visitor Centre = one highlight (unless the visitor centre has genuinely distinct content worth its own card).
- Adjacent stops at the same location that describe the same broad experience = ONE highlight.
- EXCEPTION (CRITICAL): After combining, count your highlights. If you have fewer than 4, you MUST split some combined highlights back into separate cards until you reach at least 4. For example, if a castle + chapel + tower were combined into one card but you only have 3 highlights total, split the chapel or tower back out as its own card. Enrich these cards with specific details from the source data to make them strong standalone highlights.
- Similarly, if a tour visits only one major site (e.g. only Stonehenge), you MUST find 4+ distinct experiential moments within that site: the monument itself, the walking path, the visitor centre, the Neolithic huts, interactive exhibits, the landscape/setting, free time, etc.

ALWAYS keep these as SEPARATE highlights (never combine):
- A pass-by stop vs a full-entry stop at different locations
- Two genuinely different locations (e.g. Stonehenge vs Bath — always separate)
- A distinct on-foot experience at a different location (scenic walk, viewpoint)
- A genuinely distinct activity that happens at its own time/place (boat ride, food tasting, cultural show)
- Extended free time (60+ min) at a major site, if the tour emphasizes the freedom to explore at your own pace — this can be its own highlight

ALWAYS EXCLUDE (never extract):
- Transfers, coach rides, bus journeys, countryside/city views from a vehicle window
- Pickups, dropoffs, hotel collection, meeting points, boarding points
- Onboard amenities: Wi-Fi, USB charging, bottled water, air conditioning
- Logistics: early departure, meal upgrades, guidebook discounts

Ordering rule:
- Output highlights in the order a traveler would encounter them during the tour
- Use itinerary stop order as the backbone

Richest-description rule:
- When the same place appears in multiple sources, use the RICHEST description — prefer highlights/summary text (which often has specific numbers, artefact counts, historical detail) over inclusions text (which is often a short label)
- Always scan highlights and summary for specific facts (counts, dates, named artefacts, named sub-attractions) and include them in your description
- The description field should contain ALL relevant specific details from ALL sources about this experience — this is the raw material that will be used to write the final card copy

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

Product image descriptions:
${imageDescriptionsForCall1 || "(none)"}

Output a raw JSON array only — no markdown, no explanation:
[
  {
    "name": "Experience name",
    "description": "All relevant text from provided sources about this experience — include every specific detail, number, proper noun, and named sub-attraction",
    "source": "itinerary | highlights | inclusions | summary | product_image",
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
    // 5. Server code — Deduplication + ranking (no image assignment)
    // -----------------------------------------------------------------

    // -- 5a. Deduplication --
    // Generic verbs and the tour's location name shouldn't drive dedup matches.
    const dedupStopWords = new Set([
      "visit", "explore", "discover", "see", "enjoy", "experience", "marvel",
      "walk", "stroll", "step", "enter", "stand", "admire", "tour",
      "the", "a", "an", "at", "in", "of", "to", "from", "and", "with", "near",
    ]);
    // Also treat the city name and major stop names as low-signal for dedup
    const locationWords = new Set(
      [cityName, ...stopSections.map(s => s.name)]
        .join(" ").toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean)
    );

    function dedupWordSet(str) {
      return new Set(
        str.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/)
          .filter(w => w.length > 2 && !dedupStopWords.has(w) && !locationWords.has(w))
      );
    }

    function overlapRatio(nameA, nameB) {
      const a = dedupWordSet(nameA);
      const b = dedupWordSet(nameB);
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

    // No image assignment or sorting here — Call 1 outputs in tour order,
    // Call 2 preserves and refines that order.
    const sortedList = kept;

    console.log("EXPERIENCE LIST FOR CALL 2:", JSON.stringify(sortedList, null, 2));
    console.log("EXPERIENCE COUNT FOR CALL 2:", sortedList.length);

    // -----------------------------------------------------------------
    // 6. Call 2 — Image matching + content generation
    // -----------------------------------------------------------------

    const call2SystemPrompt = `You are a senior travel content writer for Headout.
Your job is to convert raw tour stop data into experiential highlight cards. Each card has a title and description that together with the assigned image should make a traveler think "I want to be there."
The TITLE does the heavy lifting — most users will read only the title and glance at the image. The description adds depth for those who read further.

PRIMARY OBJECTIVE
Write highlight cards that are specific, grounded, and experiential. Every card must contain at least one proper noun, specific number, or named detail from the source data. Generic atmosphere is not enough.

==================================================
OUTPUT REQUIREMENTS
==================================================
Return a raw JSON array only. No markdown. No commentary.
Each item must be:
{
  "name": "Natural-language title that describes the moment",
  "description": "Description between 100 and 200 characters (minimum 100, maximum 200)",
  "imageUrl": "URL of the assigned image from the available pool",
  "imageCredit": "credit string from the image, or null",
  "combinedFrom": ["name1", "name2"] or null
}
Order cards in the sequence a traveler would experience them during the tour.

==================================================
IMAGE ASSIGNMENT RULES (apply before content generation)
==================================================
You will receive a pool of available images, each with a URL and metadata (altText describing the photo, and/or stopName indicating which stop it belongs to).

1. For each card, assign the image whose content best matches the card's experiential moment.
2. Each image may be used AT MOST once.
3. Skip images that don't match ANY experience:
   - Wrong attraction (e.g. "Roman Baths" image on a Stonehenge-only tour)
   - Logistics/transfer shots (buses, coaches, brochures, meeting points)
   - Generic city views not tied to a specific tour moment
4. EVERY card MUST have an imageUrl. If an experience has no matching image, drop it from the output — do not output imageless cards.
5. When writing the description, complement what the image shows.
6. Prefer images with descriptive altText for matching.
7. When multiple images could match a card, choose the one that best captures the experiential highlight.

==================================================
COUNT RULES
==================================================
Target: 4 to 8 cards in the final output.

1) If experiences with matched images are below 4:
- You MUST split the richest experiences into sub-moments to reach at least 4 cards
- Use specific details from the source data to make each sub-moment a strong standalone card
- Do not invent details, but do mine the source descriptions for distinct sub-experiences (e.g. a monument visit can split into: the main site, a specific named feature, the visitor centre, an interactive exhibit, the surrounding landscape)
2) If count is between 4 and 8:
- Proceed directly to content generation
3) If count is above 8:
- Combine contextually related experiences (same location, same type) until you reach 8 or fewer
- For combined cards, write one description that weaves together the grouped moments
- For combined cards, use the most relevant image from the group
- Prefer fewer, richer cards over more, thinner ones

IMPORTANT: A thin, generic card is worse than no card. If a card's content would be vague or filler, combine it with an adjacent card rather than outputting it separately. Only output thin cards if you cannot reach the minimum of 4 any other way.

==================================================
TITLE RULES (MOST IMPORTANT — titles do the heavy lifting)
==================================================
The title is the single most important element. Most users will read ONLY the title and look at the image. The title must:
- Concisely convey what makes this highlight worth experiencing
- Be specific enough that a reader can picture the moment
- Work as a standalone selling point alongside the image

Format:
- Natural language, no rigid format constraints
- Can be 3-8 words
- Sentence case or Title Case — whichever reads more naturally
- Verb-led when it fits, but not mandatory if a different phrasing is more compelling

Strong title examples:
- "Stand before the ancient Stone Circle"
- "Walk the perimeter at your own pace"
- "Listen to the stories behind the stones"
- "Explore the Visitor Centre exhibition"
- "Wander Bath's Georgian streets"
- "Take it in without rushing"
- "Pass Through Homer Tunnel"

Weak title examples (avoid these patterns):
- "Visit Stonehenge" (generic label, says nothing about the experience)
- "Use Audio Guide" (names the tool, not the experience)
- "Interact with Exhibit" (vague, could be anything)
- "Explore the Area" (completely generic)

==================================================
DESCRIPTION RULES
==================================================
- Between 100 and 200 characters total (minimum 100, maximum 200)
- Count carefully before outputting
- MUST include at least one: specific number, proper noun, or named detail from source data
- Lead with the most specific detail available, not generic atmosphere
- Write to complement the assigned image

GOOD descriptions (specific, grounded):
- "See the towering sarsen stones up close and take in the scale, symmetry, and quiet power of one of the world's most iconic prehistoric monuments."
- "Discover over 250 ancient artefacts found at the site, from tools and pottery to jewellery, each offering insight into the lives of the people who built this monument."
- "Wander through royal corridors, marvel at the grand State Apartments, rest in the hush of St. George's Chapel, and climb the Round Tower for sweeping views."
- "One moment you're in mountain light. Then 1.2km of blasted rock. Then the fiord opens below."

BAD descriptions (generic, atmospheric filler — never write like this):
- "Stand before the iconic stone circle, feeling the weight of history. The massive stones loom larger than life, inviting contemplation."
- "Explore the charming streets, where history meets modernity. The picturesque town offers a delightful prelude to the grandeur."
- "Step back in time at this historic site, one of the best-preserved ancient sites. Imagine the past centuries ago."

Why the bad examples fail:
- No specific nouns, numbers, or named details
- "iconic", "charming", "picturesque", "delightful" are filler, not information
- "feeling the weight of history" and "inviting contemplation" are empty atmosphere
- They could describe any old building or town — nothing ties them to THIS place

For pass-by stops: Be honest about brevity. Still use specific details.
For low-context stops: Write cleanly and factually. Do not pad with atmosphere.

==================================================
SENTENCE VARIETY (critical)
==================================================
Vary sentence structure across cards. Do NOT follow the same pattern for every card.
Mix these approaches:
- Single flowing sentence with em-dash or parenthetical
- Three-beat list: "Marvel at X, rest in the hush of Y, and climb Z for sweeping views."
- Short punchy fragment: "One moment you're in mountain light. Then 1.2km of blasted rock. Then the fiord opens below."
- Question or direct address when it fits naturally
- Scene-setting with specific detail: "The honey-colored houses line elegant streets that whisper of Roman roots and Georgian elegance."

If you notice two consecutive cards follow the same sentence pattern, rewrite one of them.

==================================================
VOICE + STYLE (Headout)
==================================================
Tone: Conversational, clear, grounded. A knowledgeable friend, not a brochure.

Writing style:
- Active voice only
- Contractions are fine
- Specificity always beats atmosphere — every evocative phrase must be grounded in what the traveler actually sees, hears, or does
- Prefer concrete nouns (sarsen stones, River Avon, State Apartments) over abstract words (grandeur, charm, beauty)
- For this specific tour, emphasize what makes THIS tour's experience of a landmark distinct — the access type, duration, what comes before/after, what the guide covers

==================================================
DETAIL SELECTION PRIORITY
==================================================
For each card, use details in this order:
1. Numbers (counts, durations, distances, dates/ages)
2. Proper nouns (specific landmarks, routes, named places, named sub-attractions)
3. Distinct physical details (artefacts, named features, materials, named rooms/spaces)
4. What the traveler physically does (walk, enter, browse, board, look out, taste)
5. What the assigned image shows (use the altText as a guide)

If a useful number or proper noun is present in the source data, it MUST appear in the description.

==================================================
HARD RULES
==================================================
Never invent facts, timings, statistics, access details, or historical claims not in the source data.

Sensory language is allowed when grounded:
- OK: "The stones are bigger than photos suggest" (factual observation)
- NOT OK: "The air whispers ancient secrets" (invented atmosphere)

Never use these phrases:
- "you will" / "guests can" / "this experience" / "visitors are invited"
- "offering a..." / "offering an..." (filler tail — always delete)
- "perfect for..." (filler tail)
- "a testament to..." (cliché)

No filler: "enjoy your visit", "make memories", "arrive on time"
No personas: "perfect for families", "ideal for couples"

==================================================
ANTI-REPETITION RULES
==================================================
- Never repeat the same fact or phrase across different cards
- Never write two consecutive cards with the same sentence structure
- Each card should feel like a distinctly different moment
- If one card uses a key detail, the next must use a different one

==================================================
FINAL VALIDATION (DO SILENTLY BEFORE OUTPUT)
==================================================
For each card, verify:
1. Title is specific enough to picture the moment (not a generic label)
2. Description contains at least one proper noun, number, or named detail
3. Description is 100-200 characters
4. No two consecutive cards share the same sentence structure
5. No filler tails ("offering a...", "perfect for...")
6. No invented facts
7. imageUrl is from the available pool and used only once
8. imageCredit is preserved from the image metadata
9. combinedFrom is correct (array or null)
If any check fails, rewrite before outputting.`;

    const _call2DurationText = durationText || (() => { console.warn("[Call 2] durationText unavailable, using fallback."); return "Not specified"; })();
    const _call2ModeOfTravel = modeOfTravel || (() => { console.warn("[Call 2] modeOfTravel unavailable, using fallback."); return "Not specified"; })();

    // Build the image pool for Call 2 prompt
    const imagePoolForPrompt = mergedImagePool.map(({ url, altText, stopName, source, credit }) => ({
      url,
      altText: altText || null,
      stopName: stopName || null,
      source,
      credit: credit || null,
    }));

    const call2UserPrompt = `Experience: ${experienceName}
City: ${cityName}
Duration: ${_call2DurationText}
Mode of travel: ${_call2ModeOfTravel}

Below is the cleaned list of sub-experiences for this tour, followed by the available image pool.
First assign the best image to each experience, then generate final card copy.

[EXPERIENCE LIST]
${JSON.stringify(sortedList.map(({ name, description, passBy }) => ({ name, description, passBy })), null, 2)}

[AVAILABLE IMAGES — assign one per card, each image used at most once]
${JSON.stringify(imagePoolForPrompt, null, 2)}`;

    console.log("EXPERIENCE COUNT GOING INTO CALL 2:", sortedList.length);
    console.log("IMAGE POOL SIZE FOR CALL 2:", mergedImagePool.length);

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
    // -----------------------------------------------------------------

    const cleanedByName = {};
    for (const entry of sortedList) {
      cleanedByName[entry.name] = entry;
    }

    const finalSections = call2Result.map((item, i) => {
      const sourceName = Array.isArray(item.combinedFrom) && item.combinedFrom.length > 0
        ? item.combinedFrom[0]
        : item.name;

      const cleanedEntry = cleanedByName[sourceName];
      const stopId = cleanedEntry?.itineraryStopId ?? null;
      const matchedStop = stopId != null
        ? stopSections.find((s) => s.id === stopId)
        : null;

      const id = matchedStop?.id ?? stopId ?? (i + 1);
      const sortRank = cleanedEntry?.sortRank ?? i;

      return {
        id,
        name: item.name,
        description: item.description,
        imageUrl: item.imageUrl || null,
        imageCredit: item.imageCredit || null,
        sortRank,
      };
    });

    finalSections.sort((a, b) => a.sortRank - b.sortRank);

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

// Collection — generates one result block per experience, with product images
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
    const collectionUrl = `https://api.headout.com/api/v1/collection/${cid}/tour-groups`;
    const collectionData = await fetchJson(collectionUrl);

    const tourGroups = collectionData?.tourGroups ?? collectionData?.results ?? collectionData?.data;
    if (!Array.isArray(tourGroups) || tourGroups.length === 0) {
      console.log("Collection API response keys:", Object.keys(collectionData || {}));
      return res.status(400).json({ success: false, error: "No tour groups found in this collection." });
    }

    // Build a map of tourGroup ID → product images
    const productImagesMap = {};
    for (const tg of tourGroups) {
      const images = tg.media?.productImages || [];
      productImagesMap[String(tg.id)] = images;
    }

    const experienceIds = tourGroups.map((tg) => String(tg.id)).filter(Boolean);
    console.log(`Collection ${cid}: found ${experienceIds.length} experiences:`, experienceIds);

    const EXPERIENCE_TIMEOUT_MS = 120_000;
    const experiences = [];
    for (const expId of experienceIds) {
      console.log(`Generating for experience ${expId}…`);
      try {
        const productImages = productImagesMap[expId] || [];
        console.log(`  Product images available: ${productImages.length}`);
        const result = await Promise.race([
          generateForExperience(expId, productImages),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error(`Timed out after ${EXPERIENCE_TIMEOUT_MS / 1000}s`)), EXPERIENCE_TIMEOUT_MS)
          ),
        ]);
        experiences.push(result);
      } catch (expErr) {
        if (expErr instanceof NoItineraryError) {
          console.log(`Skipping experience ${expId}: no itinerary data.`);
          continue;
        }
        console.error(`Failed for experience ${expId}:`, expErr.message);
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
// Start server
// ---------------------------------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
