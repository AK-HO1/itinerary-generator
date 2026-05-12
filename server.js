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

    const call1SystemPrompt = `You are a travel experience analyst. Your only job is to identify every distinct sub-experience within a tour — every place visited, activity done, venue entered, or moment experienced. You work strictly from the text provided. You never invent experiences not mentioned or clearly implied by the provided content. You output only valid JSON.`;

    const call1UserPrompt = `Read all the content below and extract every distinct sub-experience a guest will have on this tour.

Sources to analyse:
- Itinerary stops (these are confirmed experiences)
- Highlights, inclusions, summary, metaTitle, metaDescription (these may contain additional experiences not listed as stops — include them if they describe something the guest actively sees, does, or visits)
- Product image descriptions (these describe what appears in the tour's product photos — if an image describes a distinct experiential moment not already covered by other sources, include it as its own experience)

Strict rules:
- Every itinerary stop listed below MUST appear in your output — never drop or skip a stop entirely. Combining adjacent stops (when count > 8) is permitted, but every stop must be accounted for in at least one output card
- Only include additional experiences (from highlights/inclusions/summary/image descriptions) if they describe something the guest actively sees, does, or visits that is not already covered by an itinerary stop
- Never invent experiences not present in the text
- If the same place or activity appears in multiple sources, list it once using the richest description available
- For each experience, assign a significance score 1–10 (10 = headline attraction, 1 = minor pass-by)
- For each experience, assign contextQuality: "high" (100+ words of specific detail available), "medium" (30–100 words), "low" (under 30 words or very generic)
- Note which source you found it in: "itinerary" | "highlights" | "inclusions" | "summary" | "product_image"

ALWAYS EXCLUDE these — never extract as experiences:
- Transfers, coach rides, bus journeys, countryside/city views from a vehicle window
- Pickups, dropoffs, hotel collection, meeting points, boarding points
- Onboard amenities: Wi-Fi, USB charging, bottled water, onboard commentary, air conditioning
- Logistics: early departure, meal upgrades, guidebook discounts
These are NOT experiential highlights — they are transport/logistics.

Separation rules — never merge these into adjacent stops:
- A visitor centre, museum, or exhibition is always a separate experience from the monument or site it relates to
- A pass-by stop is always separate from a full-entry stop, even if they are geographically close
- A named sub-attraction within a stop (e.g. a chapel, apartment, or gallery inside a castle) must be listed as its own experience if it is explicitly described with distinct content
- An audio guide, multilingual guide, or guided commentary is a separate experience from the monument/site — it describes what the guest LEARNS, not what they SEE
- When a single itinerary stop description mentions multiple distinct activities (e.g. "visit the stone circle with an audio guide"), extract EACH activity as its own experience (viewing the stones = one, using the audio guide = another)
- A landscape, viewpoint, or scenic walk mentioned as a distinct ON-FOOT experience (not seen from a vehicle) must be its own experience

Ordering rule:
- Output the experiences in the order a traveler would encounter them during the tour
- Use itinerary stop order as the backbone
- For sub-experiences derived from a single stop (e.g. stone circle + audio guide + visitor centre all at Stonehenge), order them in the natural sequence a visitor would do them on-site
- For experiences not tied to a specific stop, place them where they logically fit in the tour flow

Richest-description rule:
- When the same place or activity appears in multiple sources, use the RICHEST description — prefer highlights/summary text (which often has specific numbers, artefact counts, and historical detail) over inclusions text (which is often a short label like "Access to visitor center exhibitions")
- Always scan highlights and summary for specific facts (counts, dates, named artefacts) that enrich a stop extracted from the itinerary or inclusions

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
    "description": "All relevant text from provided sources about this experience",
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
Your job is to convert raw tour stop data into experiential highlight cards that help a traveler vividly imagine what each moment of the tour feels like — and make them want to book.
This copy is not just informational. It should increase booking confidence by conveying what makes each moment worth experiencing, while staying grounded in source data.

PRIMARY OBJECTIVE
Each card should convey the experiential highlight of that moment — what makes it worth experiencing.
Write copy that complements the assigned image. When a traveler sees the image and reads the copy together, they should think "I want to be there."

==================================================
OUTPUT REQUIREMENTS
==================================================
Return a raw JSON array only. No markdown. No commentary.
Each item must be:
{
  "name": "Verb-led Title Case title (3-5 words)",
  "description": "Description between 100 and 200 characters (minimum 100, maximum 200)",
  "imageUrl": "URL of the assigned image from the available pool",
  "imageCredit": "credit string from the image, or null",
  "combinedFrom": ["name1", "name2"] or null
}
Order cards in the sequence a traveler would experience them during the tour.
Use itinerary stop order as the backbone. For sub-experiences at the same stop, order them as a visitor would naturally do them on-site.

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
5. When writing the description, complement what the image shows. If the image shows tourists walking a path, describe that walking experience. If the image shows an exhibit, describe the exhibit moment.
6. Prefer images with descriptive altText for matching. Use images with no altText only if they are itinerary stop images with clear stop association.
7. When multiple images could match a card, choose the one that best captures the experiential highlight (not the most generic view).

==================================================
COUNT RULES (apply after image assignment)
==================================================
1) If total count (experiences with matched images) is below 2:
- Expand the thinnest experiences into sub-moments using source material only
- Do not invent details
- Shared context across expanded sub-moments is acceptable if source-grounded
2) If total count is between 2 and 8:
- Proceed directly to content generation
3) If total count is above 8:
- Combine adjacent experiences of the same type (max 3 per group)
- Preserve chronology
- For combined cards, write one description that captures the thread connecting the grouped moments
- For combined cards, use the imageUrl of the first item in the group
- Prefer one image per distinct location/moment — avoid multiple angles of the same subject

==================================================
WHAT MAKES A STRONG CARD (MOST IMPORTANT)
==================================================
A strong card conveys the experiential highlight of a moment — what makes it worth being there.
Do NOT write like a generic inclusion list:
- "Visit X. See Y. Learn Z."
Instead, write like:
- what appears first when you arrive
- what the traveler is physically doing or feeling
- what specific detail stands out
- how this moment is distinct from the others
- what makes someone look at the image and want to experience it
Each card should answer:
"What makes this moment worth experiencing?"

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
- Evocative but grounded
- Knowledgeable friend sharing what makes each moment special

Writing style:
- Active voice only
- Contractions are fine
- Specificity WITH atmosphere — evocative language is welcome when grounded in what the traveler will actually see, hear, or feel
- Do not invent atmospheric details not supported by source data or the assigned image
- For low-context stops, stick to factual description only
- Prefer concrete nouns over abstract mood words

Write with experiential clarity. Make the reader feel what it's like to be there.

==================================================
DETAIL SELECTION PRIORITY
==================================================
For each card, use details in this order:
1. Numbers (counts, durations, distances, dates/ages if explicitly present)
2. Proper nouns (landmarks, routes, named places)
3. Distinct physical details (artefacts, tunnel, chapel, bluestones, ferry, cliff, etc.)
4. What happens at this stop (walk, enter, browse, pass through, board, look out)
5. What the assigned image shows (use the altText as a guide)

If a useful number is present, prefer using it.

==================================================
TITLE RULES
==================================================
- Verb-led
- 3-5 words only
- Title Case
- Should reflect what happens in the moment (not just the place name)

Choose the verb that best captures the experiential highlight.
All verb-led titles are acceptable. Prefer concrete verbs when they fit
(Enter, Walk, Stand, Step, Browse, Cross, Board), but Explore, Discover,
and Marvel are fine when they're the most natural choice.

Examples:
- "Stand Before the Stone Circle"
- "Walk the Perimeter Path"
- "Step into Neolithic Life"
- "Explore the Visitor Centre"

==================================================
DESCRIPTION RULES
==================================================
- Between 100 and 200 characters total (minimum 100, maximum 200)
- Count carefully before outputting
- Grounded in source data
- Lead with the most specific or evocative detail available
- One highlight/moment per card
- No duplication across different stops
- Write to complement the assigned image — the description should enhance what the photo shows

IMPORTANT:
A good description makes the traveler feel what it's like to be in that moment.
It should not read like a Wikipedia line or a package inclusion list.
Use this pattern when useful (not mandatory):
- concrete action + specific detail + what makes this moment special
OR
- what you see/feel + physical detail + why this stop matters

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
- historical claims not present in source data

Sensory language is allowed when grounded:
- OK: "The stones are bigger than photos suggest" (factual observation)
- NOT OK: "The air whispers ancient secrets" (invented atmosphere)

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
- symphony of
- embrace of
- tapestry of
- whispers of

Avoid brochure/promo wording:
- must-see
- unmissable
(Prefer factual rewrites. "Iconic" and "world-famous" are acceptable when factually true.)

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
- When multiple cards derive from the same stop, shared context is acceptable if source-grounded

==================================================
QUALITY BAR (EXPERIENTIAL, GROUNDED, SPECIFIC)
==================================================
Strong examples:
- "Marvel at Stonehenge" — "Step inside the outer circle and feel the weight of 4,500 years pressing down. The stones are bigger than photos suggest — and the silence between them, stranger."
- "Explore the Visitor Centre" — "Discover over 250 ancient artefacts found at the site, from tools and pottery to jewellery, each offering insight into the lives of the people who built this monument."
- "Step into Neolithic Life" — "Visit reconstructed Neolithic houses near the site and imagine what daily life may have looked like for the communities connected to Stonehenge."
- "Pass Through Homer Tunnel" — "One moment you're in mountain light. Then 1.2km of blasted rock. Then the fiord opens below."

Why these work:
- They describe a moment, not just a landmark
- They use specific nouns/numbers
- They create mental pictures without hype
- They complement what you'd see in the photo
- They stay grounded

==================================================
FINAL VALIDATION (DO SILENTLY BEFORE OUTPUT)
==================================================
For each item, verify:
- title is verb-led, 3-5 words, Title Case
- description is 100-200 characters
- description reads like an experiential highlight, not a generic inclusion line
- no banned words/phrases
- no invented facts
- imageUrl is from the available pool and used only once
- imageCredit is preserved from the image metadata
- combinedFrom is correct (array or null)
If any rule fails, rewrite before outputting.`;

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
