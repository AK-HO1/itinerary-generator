# Itinerary Generator

Takes a Headout experience ID, rewrites its itinerary in Airbnb "What you'll do" style using GPT-4o, and outputs a visual preview plus a copy-pasteable JSON.

## What it produces

**JSON shape (right panel):**
```json
{
  "sections": [
    {
      "id": 1604,
      "name": "AI-rewritten activity title",
      "description": "AI-rewritten one-liner description",
      "mediaUrls": ["https://cdn-imgix.headout.com/..."]
    }
  ]
}
```

Only `STOP`-type itinerary sections are included. `id` and `mediaUrls` are preserved exactly from the Headout API. Only `name` and `description` are AI-generated.

---

## Local setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add your OpenAI key

```bash
cp .env.example .env
```

Edit `.env` and replace `your_openai_api_key_here` with your real key:

```
OPENAI_API_KEY=sk-...
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. On first deploy, Vercel will ask you to link a project.

### Option B — Vercel Dashboard (no CLI)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects `vercel.json` — no build settings needed.

### Set the environment variable on Vercel

Whichever option you use, add the secret in the Vercel dashboard:

**Project → Settings → Environment Variables**

| Name | Value |
|---|---|
| `OPENAI_API_KEY` | `sk-...` |

Redeploy after adding the variable.

---

## File structure

```
itinerary-generator/
├── server.js       # Express backend — Headout API calls + OpenAI
├── index.html      # Single-file frontend — no build step
├── vercel.json     # Vercel routing config
├── package.json
├── .env            # Local secrets (gitignored)
├── .env.example    # Committed template
└── README.md
```

---

## How it works

1. User enters a TGID (Headout tour-group ID) and clicks **Generate**.
2. Server calls `GET /api/v6/tour-groups/{id}` to fetch experience metadata.
3. If the experience has itinerary IDs, server calls `GET /api/v6/tour-groups/{id}/experience-itineraries/?sections=true`.
4. Only `STOP`-type sections are extracted (start/end locations are dropped).
5. Extracted data is sent to GPT-4o with an Airbnb-style copywriting prompt.
6. AI rewrites each stop's title and description.
7. The rewritten content is merged with the original `id` and `mediaUrls`.
8. Frontend renders a visual card preview (left) and the JSON (right).

### Edge cases handled

- **No itinerary IDs** (e.g. city-pass type experiences): skips the Itinerary API call and generates content from highlights/inclusions only.
- **Missing images**: shows a grey placeholder with the stop name.
- **Bad AI JSON**: returns a clear error rather than crashing.
- **Invalid experience ID**: Headout 404 surfaces as a user-facing error message.

---

## Future features (structure is already in place)

Each card in the visual preview is a self-contained `div.stop-card` with:
- `data-section-id` attribute for targeting
- Hidden `.stop-actions` div with stubbed Edit image / Edit text buttons

Unhide `.stop-actions` in CSS and wire up the buttons to enable per-card editing.
