# Reorg Studio

> An internal planning tool for designing and stress-testing the organisational structure of a small defense-hardware R&D team as it scales from 20 → 50 → 100+ people.

Reorg Studio is a single-page web app (Next.js 16, deployable on Vercel with zero configuration) built for a leadership team to jointly plan a team reorganisation. It has three tightly integrated workspaces:

1. **Overview** — a research-backed briefing on how comparable defense-hardware companies actually structure their teams, the org design frameworks that transfer (and the ones that don't), the compliance floor that shapes the org, and the hiring waves that define each scale transition.
2. **Org Chart** — an interactive block-based org chart builder. Edit blocks, purposes, headcount bands and parent relationships for each growth phase (Foundation / Growth / Scale).
3. **RACI Matrix** — a colour-coded RACI editor with an automatic audit that flags activities with no accountable owner or no responsible party.

Everything lives in `localStorage`. There is no backend, no telemetry, no server-side data. Teammates share scenarios by exporting JSON from the Scenarios page.

## Requirements

- Node.js 20.9 or later (Next.js 16 requirement)
- npm 10 or later

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Available scripts

```bash
npm run dev      # Start the dev server (Turbopack)
npm run build    # Production build
npm run start    # Run the production build
npm run lint     # ESLint
```

## Deploying to Vercel

This project is designed to deploy to Vercel with no additional configuration.

1. Push this repo to GitHub, GitLab or Bitbucket.
2. Go to <https://vercel.com/new> and import the repo.
3. Accept Vercel's auto-detected Next.js settings (framework preset: Next.js, root directory: `./`, build command: `next build`, output directory: `.next`).
4. Hit **Deploy**.

There are no environment variables and no external services to configure. First deploy should complete in under 90 seconds. Every push to `main` triggers a production deploy; every push to any other branch produces a preview URL that can be shared with teammates.

### Self-hosting alternative

If Vercel isn't an option, any Node 20+ host that can run `next start` will work. You can also run the production build in Docker:

```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start"]
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx              Root layout + global nav
│   ├── page.tsx                Overview / landing
│   ├── org-chart/page.tsx      Org chart builder
│   ├── raci/page.tsx           RACI matrix
│   └── scenarios/page.tsx      Scenario metadata + export/import
├── components/
│   ├── site-header.tsx         Global nav
│   ├── hydrated.tsx            Hydration-safe wrapper
│   ├── ui/primitives.tsx       Button, Card, Badge, Input, etc.
│   ├── org-chart/
│   │   ├── workspace.tsx       Tree + toolbar + phase switcher
│   │   └── block-editor.tsx    Side panel for editing a selected block
│   ├── raci/workspace.tsx      Matrix editor + audit
│   └── scenarios/workspace.tsx Metadata, export, import, reset
├── content/
│   └── overview.ts             Research-backed content for the overview page
└── lib/
    ├── types.ts                Domain types
    ├── default-data.ts         Seed scenario (phases, blocks, roles, RACI)
    ├── store.ts                zustand store + localStorage persistence
    └── utils.ts                Small helpers (cn, formatRange, slug)
```

## Data model

The app operates on a **Scenario**, which is a pure JSON object that contains:

- `phases` (fixed: Foundation, Growth, Scale)
- `blocks` — functional departments, with parent-child hierarchy and headcount bands per phase
- `roles` — individual role definitions attached to blocks
- `raci` — activities with R / A / C / I assignments per block

The scenario is persisted to `localStorage` under the key `reorg-tool-v3`. You can export it to JSON and check it into version control alongside your product roadmap — it makes a genuinely useful planning artefact that evolves with the business.

## Typical workflow

1. A leadership-team member opens the app and reads the **Overview** to get shared vocabulary.
2. In the **Org Chart** they click through Phase 1 / 2 / 3 to see how the default structure evolves.
3. They start editing blocks — changing headcount bands, renaming things, reparenting teams — to match the live company.
4. They move to the **RACI Matrix** and edit activity ownership until the audit turns green (every activity has exactly one Accountable owner).
5. From the **Scenarios** page they export the scenario as JSON and share it in Slack / email / git for review.
6. Teammates import the JSON, make edits, export again. Scenarios can be version-controlled.

## What's intentionally missing (v0.1)

- **Multi-user collaboration in-browser** — this is a single-user tool. Sharing happens via JSON export. For real-time collaboration, the simplest upgrade is to add Vercel KV or Supabase and store the scenario under a shareable URL.
- **Diff between scenarios** — you can export multiple scenarios, but there's no visual diff UI. If you need it, a starting point is a `scenarios/compare/page.tsx` that accepts two JSONs.
- **Role editor** — roles exist in the data model and are seeded, but the UI for editing roles individually is not built yet. The block editor covers most use cases at small scale.
- **Print / PDF export** — the pages are print-friendly but there's no dedicated "Export to PDF" button.
- **Auth** — no login. Intentional at v0.1 because everything lives in the browser.

## Stack

- Next.js 16.2 (App Router, Turbopack)
- React 19.2
- TypeScript 5
- Tailwind CSS 4
- Zustand 5 (client state + localStorage persistence)
- dnd-kit (installed for a future drag-and-drop reorg feature)
- lucide-react (icons)

## License

Internal tool. Do not redistribute without consent from the leadership team.
