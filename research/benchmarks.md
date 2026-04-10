# Benchmarks: How Defense Hardware Startups Actually Structure Teams (20 → 100+)

> Archived verbatim from a parallel research run. Source material for the
> "Benchmarks" section of `src/content/overview.ts`. Kept in English because
> the raw sources are English and reviewers benefit from being able to
> cross-check against the underlying URLs without a translation layer.

## 1. Company Profiles

### Anduril Industries (founded 2017)

Anduril is the textbook reference for every miltech startup trying to combine Silicon Valley speed with hardware delivery. The founding "five" — Palmer Luckey, Trae Stephens, Brian Schimpf (ex-Palantir director of engineering), Joe Chen (ex-Oculus hardware lead), and Matt Grimm (COO) — deliberately chose a software-centric founding composition, even though they were building hardware.

**Key structural choice: software-first.** Anduril built the Lattice OS *before* the hardware platforms and then layered the physical systems (Ghost Shark, Fury, Roadrunner, Sentry towers) around it. The Contrary Research deep dive and a Medium deep-dive both describe Anduril as "a software-driven organization that happens to build hardware, not a hardware company that uses software as an afterthought."

**Hiring pipelines (unusual vs. primes):** Anduril recruited from Palantir system designers, Oculus hardware teams, autonomy researchers, and game-engine developers — not the traditional prime-contractor workforce.

**Current scale and engineering-heavy ratio.** Per public aggregators (TheOrg, LeadIQ, etc.):
- ~6,200 employees by late 2025 (up from ~2,400 at end of 2023 — added ~1,000 in a 9-month sprint in 2024)
- Engineering makes up roughly 2,590 of employees (~42%)
- SVP of Engineering has ~413 direct/indirect reports; a separate SVP Programs & Engineering runs ~122 people — this is a deliberate split between "core engineering" and "program engineering"

**Sub-structure: program engineering vs core engineering.** The existence of both "SVP Engineering" and "SVP Programs & Engineering" roles is telling — it's not two engineering orgs but a split between platform/tooling engineering and customer-program-aligned engineering. This mirrors the IPT (Integrated Product Team) model but with a Silicon Valley name.

**Manufacturing separated from R&D only at scale.** Arsenal-1 in Ohio (500 acres, 22 workstations at launch, growing to ~250 then 4,000+) is Anduril's first truly dedicated manufacturing facility. Notably, the "Fury Launch Team" — the first 25 production leads — spent several months training in Costa Mesa with the R&D team before being deployed to Ohio. That co-training phase is the transfer mechanism from R&D into serial production.

**Early hires for government interface:** Anduril specifically lists "Deputy Program Manager" and "Model Based Systems Engineer" roles in its public careers pages, indicating the separation between (a) program managers who own a government customer program end-to-end and (b) MBSE engineers who own digital engineering strategy.

Sources: [Anduril Leadership](https://www.anduril.com/anduril-leadership), [HR Grapevine](https://www.hrgrapevine.com/us/content/article/2024-09-09-defense-tech-start-up-anduril-hires-over-1000-employees-in-9-months-how-fast-is-too-fast), [Contrary Research Anduril deep dive](https://research.contrary.com/company/anduril), [BUVCG Medium deep dive](https://medium.com/buvcg-research/anduril-industries-deep-dive-6949c7dd41c7), [Anduril Arsenal-1 announcement](https://www.anduril.com/news/anduril-building-arsenal-1-hyperscale-manufacturing-facility-in-ohio), [Anduril Ghost Shark program of record](https://www.anduril.com/news/ghost-shark-enters-program-of-record-from-prototype-to-fleet-in-three-years)

### Shield AI (founded 2015)

Shield AI is useful as a comparison because it has *more UGV-like dynamics* than pure software plays — they make physical aircraft (V-BAT, Nova 2, ViDAR) and a software stack (Hivemind).

**Founding composition:** CEO Ryan Tseng (consumer hardware background — previously founded a wireless-charging company acquired by Qualcomm), President Brandon Tseng (ex-Navy SEAL, HBS MBA), CTO Andrew Reiter (computer vision from Draper Labs). The founding trio hits the three essential miltech axes: hardware commercial experience, uniformed/operational domain knowledge, and deep research.

**Growth benchmark:** <30 employees at end of 2017 → ~150 by 2020 → ~900 by April 2025 → ~1,319 by late 2025/early 2026. This is a usable reference curve for your org.

**Biggest structural lesson — acquire to grow a manufacturing arm.** Shield AI grew its hardware/manufacturing side by *acquiring* Martin UAV in 2021. They didn't try to build their own V-BAT production line organically. They inherited the 107k-sqft "Batcave" in Dallas (later expanded to 200k sqft) with its existing production team. This is an explicit structural choice: grow software/autonomy in San Diego, grow hardware/manufacturing in Dallas via M&A.

**Co-location is intentional.** Shield AI's public messaging about the Batcave emphasizes that design, engineering, and executive personnel are all co-located with production. VP Manas Menon (Production and Supply Chain) specifically framed the growth: "In the early days, there were 15 of us in a room trying to build five quadcopters. Now we're producing Group 3 aircraft...and we're making hundreds of them each year."

**Chief Product and Engineering Officer (CPEO).** Chirag Shah was elevated from VP Engineering to CPEO — the fact that a single person holds *both* product and engineering is meaningful. It's a deliberate choice to keep product strategy embedded with engineering rather than creating an adversarial product/eng split.

Sources: [Shield AI Batcave article](https://shield.ai/its-all-systems-go-at-shield-ais-texas-unified-facility/), [Contrary Research Shield AI breakdown](https://research.contrary.com/company/shield-ai), [Shield AI team page](https://shield.ai/our-team/)

### Saronic Technologies (founded 2022)

Saronic is the *closest* in growth curve to what you'll face: founded 2022, ~271 employees end of 2024, ~404 by June 2025, ~471 by July 2025, ~1,300+ by early 2026. The 20 → 100 → 500 arc happened in roughly 18 months.

**Two-founder executive split:**
- Dino Mavrookas (CEO) — Navy SEAL background
- Doug Lambert (COO) — owns R&D, engineering, and production; sits *between* customer needs and production timelines
- Vibhav Altekar (CTO, co-founder) — leads Forward Deployed Engineering, Product, Special Programs, *and* Software, across perception, navigation, ML, C2, and systems integration

**Notable structural signal:** the CTO owns "Forward Deployed Engineering" as a named org. This is the Palantir FDE model imported into a hardware company — engineers who embed with customers (Navy end users) rather than waiting for feedback through program offices.

**Defense Growth as distinct from BD:** Nick Stoner leads "Defense Growth" at Saronic — the framing is explicit: this is the person who turns R&D capabilities into *funded programs of record*, working closely with the executive team. This is not "sales" — it's program capture plus strategic positioning, and it lives separate from both eng and general BD.

**Geographic split mirrors functional split:** Austin (HQ/engineering), New Orleans (naval architects, hardware engineers, marine engineers, systems testing — notably, all co-located). The New Orleans office was deliberately stood up to "provide technical connectivity between design and production."

Sources: [Saronic Team page](https://www.saronic.com/team), [Saronic Louisiana expansion](https://insideunmannedsystems.com/saronic-raises-1-75b-expands-louisiana-shipbuilding-footprint-as-autonomous-surface-vessel-production-scales/)

### Skydio (founded 2014)

Skydio is useful because it made the dual-use transition (commercial prosumer/enterprise → ~50%+ defense) with a visible organizational signature.

**Discipline-specific leaders with wide spans:** Hayk Martiros leads Autonomy as VP, managing ~50 researchers and engineers specifically on AI/autonomy. Other named functional heads include Head of Electrical Engineering, Head of Software Engineering (Ryan Reading), Director of Engineering, Autonomy Systems (Davide Falanga), Head of Product Management (Roy Goldman).

**Cross-functional cells, not pure disciplines:** Job descriptions reference "cross-functional teams include product design, firmware, software, quality and reliability engineering, program management, supply chain, manufacturing, testing, and operations." This implies a matrix — disciplines have reporting lines, but work happens in cross-functional product cells.

**Geographic engineering strategy:** San Mateo HQ (autonomy core), Boston (tied to MIT talent), Zürich (new 2026 R&D office for multi-vehicle coordination/GPS-denied nav). This pattern — pull talent to talent hubs, not force relocation — is common across all these companies.

**Advisory boards for government insight:** Skydio stood up a National Security Advisory Board of former military/DOD officials that meets quarterly. This is a common early-stage substitute for having a full in-house DOD-savvy capture team.

Sources: [Skydio Zürich R&D](https://dronexl.co/2026/04/06/skydio-zurich-rd-office-autonomous-drone/), [Skydio executives Medium post](https://medium.com/skydio/autonomous-drone-maker-skydio-adds-key-product-and-engineering-executives-to-growing-team-1968647c0fc9), [Skydio National Security Advisory Board](https://www.skydio.com/blog/skydio-announces-new-national-security-advisory-board-with-leading-experts-in-national-security-and)

### Epirus (founded 2018)

Epirus is the most "defense-native" company in this list — they hired heavily from Raytheon.

**Raytheon-heavy leadership:** Chief engineer for defense, VP Engineering, VP Operations, and "a number of" employees all came from Raytheon. CTO Matt Markel was a Raytheon radar engineer. This is a counterpoint to the Anduril strategy of avoiding defense primes — Epirus reached deep *into* Raytheon for domain expertise.

**Growth curve:** ~200 employees by November 2021 (three years after founding) → ~242 by Feb 2026 (plateau — implies they hit staffing equilibrium). They projected 300 by end-2022 but didn't reach it until much later.

**Functional layout:** Torrance, CA headquarters (100k+ sqft) houses ~150 employees "spanning multiple Engineering disciplines and Business Development units" — functionally, R&D + BD live together. A satellite in Hawthorne, a D.C. office for government interface. The explicit separation between "Engineering disciplines" and "BD" is worth noting — they're not merged.

Sources: [Epirus corporate HQ announcement](https://www.epirusinc.com/press-releases/epirus-is-expanding-high-tech-company-opens-new-corporate-headquarters-in-torrance-california), [Contrary Research Epirus breakdown](https://research.contrary.com/company/epirus)

### Hadrian (founded 2021)

Hadrian isn't building UGVs, but it's the purest example of *manufacturing-as-a-product* thinking in miltech and worth studying because it inverts the default org.

**Engineers paired with operators.** CEO Chris Power: "Our philosophy is we pair software engineers with people who really know what they're doing. That's where the magic happens. We actually run a factory so there's not much room for bullshit software." This is a deliberate rejection of the typical "software team throws tools over the wall to manufacturing" model.

**Quality leadership from SpaceX.** Head of quality is Matthew Mueller, ex-SpaceX senior manufacturing roles. Hiring quality leadership from SpaceX/Lockheed rather than growing it internally is a common pattern — QA/quality is treated as a senior, imported function.

Sources: [Breaking Defense on Hadrian](https://breakingdefense.com/2024/08/how-startup-hadrian-plans-to-take-over-the-defense-manufacturing-world/), [TechCrunch Hadrian](https://techcrunch.com/2024/02/21/hadrian-automations-ceo-wants-to-defy-history-and-revitalize-american-industry/)

### Helsing (founded 2021)

**500 employees across Germany, France, UK by 2024.** Founders cover three distinct axes: Gundbert Scherf (German MoD veteran), Niklas Köhler (AI research), Torsten Reil (repeat entrepreneur from biotech/gaming). Same pattern as Shield AI — one per axis.

**Expansion via jurisdictions, not domains.** Helsing scales by establishing country subsidiaries (Estonia, UK, France) rather than by adding product lines. The €70M Estonia facility includes production — Helsing keeps R&D and production separated geographically but under one legal/program structure.

Sources: [Helsing Series D](https://techfundingnews.com/helsing-raises-600m-series-d-european-defence/), [Contrary Research Helsing](https://research.contrary.com/company/helsing)

## 2. Cross-Company Patterns

### Engineering discipline splits

**The dominant pattern is a matrix:**
- Disciplines (mechanical, electrical, software/autonomy, systems/integration, test) exist as homes/career tracks
- Actual delivery happens in cross-functional product cells (called IPTs, product teams, or "squads")

**Software/autonomy is typically carved out separately.** At every company I could verify (Skydio, Shield AI, Anduril, Saronic), autonomy/AI is its own discipline with its own VP — not merged with "software." This is because autonomy is research-heavy and needs a different cadence from embedded/flight/app software.

**Systems engineering is a specific role, not overhead.** Anduril explicitly runs Model-Based Systems Engineering (MBSE) as a named team. Skydio and Shield AI both list "Integration and Test" as a distinct discipline under engineering. For a UGV company, this is probably where your mechatronics lead lives.

### Where QA/Test lives

- **Integration & Test lives inside Engineering** (not inside Manufacturing) at Anduril, Shield AI, Skydio — it's part of the R&D side
- **Production Quality lives inside Manufacturing/Operations** — this is separate. Shield AI's "VP Production and Supply Chain" owns production quality; Hadrian's head of quality is embedded with the factory
- The split between the two typically happens around the 50-80 employee mark, when you transition from "one prototype at a time" to "low-rate initial production"

### Government customer interface

There are **three distinct functions** that appear in different slots:

1. **Business Development (BD)** — hunting new opportunities, relationship building, marketing
2. **Capture / Program Capture** — turning opportunities into funded programs of record (Saronic calls this "Defense Growth"; Anduril embeds this inside Programs org)
3. **Program Management** — owning delivery of an active contract, including cost, schedule, performance

Small companies (<30) tend to merge all three into a single "BD" function run by a co-founder. By ~50 employees, Capture starts to separate. By ~100, Program Managers appear as a named role; by ~150-200 you typically see Deputy Program Managers and a PM hierarchy.

### Security/compliance (ITAR/EAR, classification)

- **ITAR compliance and Facility Security Officer (FSO)** typically become necessary roles as soon as you start working with classified or export-controlled technical data. Several resources suggest founders start appointing a compliance officer early, even if it's a part-time role, because Top Secret/SCI clearances can take 18+ months
- **Dedicated full-time security officer** typically appears around 100 employees per general startup security ratios (~1:40 FTE ratio cited), but defense startups often front-load this to 30-50 employees because compliance is table-stakes for most contracts
- **IT security** is distinct from physical/facility security and typically sits inside IT, not Security

### Manufacturing vs R&D organization

Three patterns observed:

- **Co-located and blended (Shield AI Batcave, Saronic New Orleans, Hadrian):** design, engineering, and production share a building. Works up to ~200-300 people before physical limits force a split
- **Separate sites, trained-in-core pattern (Anduril Arsenal-1):** R&D core stays in one place; serial production site is separate, but the first production team is trained *in the core* before being sent to the production facility
- **Acquired manufacturing (Shield AI + Martin UAV):** grow the software/autonomy org organically; buy the manufacturing arm with a team already in place

### Engineer-to-non-engineer ratios

Anduril is the best public datapoint:
- Engineering: 2,590 of ~6,200 employees (~42%)
- Lattice Solutions team breakdown (published on Built In): Engineering 99+, Operations/Support 99+, HR/Recruiting 57, Program/Project Management 57, Finance 19, Customer Success 17, AI/ML 13, Sales 13, Manufacturing 12, Product 11, Design 10, Cybersecurity 7, Legal 7, Data/Analytics 6, Marketing 1

Interesting points from that breakdown:
- Program/Project Management is nearly equal to HR/Recruiting (~57 each)
- Manufacturing headcount is small on the *Lattice* team because Lattice is software-focused; the hardware programs have their own manufacturing allocations
- Marketing is almost nothing — defense startups don't hire marketing the way B2B SaaS does

At **20 employees**, the engineer ratio is typically 70-80%. At **50**, it drops to ~60%. At **100+**, it settles around 40-50% as ops, finance, program management, manufacturing, and compliance scale up.

## 3. Key Roles by Headcount Milestone

**At ~20-30 employees:**
- Founders covering CTO/CEO/COO axes (cf. Shield AI, Helsing, Saronic)
- Part-time or fractional: FSO (Facility Security Officer), bookkeeping/finance, IP/corporate counsel
- One systems/integration engineer who is the "glue"
- A "first program manager" is rare at this stage — founders typically still own the government relationship

**At ~30-50 employees:**
- First dedicated Program Manager (typically hired from a prime or government)
- First dedicated Systems Engineer / lead I&T engineer
- First dedicated FSO (often the COO's responsibility before this)
- Split of engineering into at least two disciplines (hardware + software) with named leads
- First Head of Quality (often imported from SpaceX/Lockheed/defense primes per Hadrian pattern)
- First dedicated Supply Chain / Procurement person

**At ~50-80 employees:**
- VP Engineering (or separate VP HW and VP SW)
- Manufacturing separates from R&D functionally (but not necessarily physically)
- Finance becomes a full function (not just bookkeeping)
- Recruiting becomes full-time
- First Deputy Program Manager for largest program
- First dedicated IT/security-engineer

**At ~100+ employees:**
- Multiple named program managers (one per customer program)
- Forward Deployed Engineers (if applicable) as a named role
- Test Engineering splits from Systems Engineering
- Production Quality separates from R&D Quality/Reliability
- Dedicated capture/proposal writers
- Regional/satellite offices (typically DC first for government interface, then a customer-site office)
- General Counsel (in-house, replacing outside counsel on IP/corporate)

## 4. Notable or Counterintuitive Choices

- **Anduril's software-first hardware philosophy.** Worked spectacularly; led to the Lattice OS being a platform play that created leverage across every hardware program.
- **Shield AI's acquisition of Martin UAV** to acquire manufacturing capability and a hardware team in one move. Saved them from the "first time scaling manufacturing" trap that kills many hardware startups.
- **Epirus hiring heavily from Raytheon.** The tradeoff is that they moved slower (plateau at ~200-240) but gained defense domain depth. If your customer is dominated by program-of-record processes, you may need this.
- **Saronic naming "Forward Deployed Engineering" as a CTO-owned org from the start.** This is unusual — most hardware startups don't formalize FDEs until ~100+ employees.
- **Hadrian pairing software engineers with line operators** and treating quality leadership as a senior import from SpaceX.
- **The co-location-then-split pattern (Anduril Arsenal-1).** First production team trains *with* R&D for months before being sent to the factory. This is the transfer mechanism that most failed hardware startups skip.
- **Advisory boards as substitute for in-house DOD expertise** (Skydio's National Security Advisory Board, Epirus's Strategic Advisory Board). Useful until ~100 employees, then gets replaced with direct hires.
- **Concentrating BD/capture in DC, engineering in talent hubs.** Nearly every company on this list has a separate DC (or DC-area) office. Epirus, Anduril, Shield AI, Saronic — all have a D.C. footprint disproportionate to their overall size.

## 5. Sources

Primary company sources:
- [Anduril Leadership page](https://www.anduril.com/anduril-leadership)
- [Anduril Arsenal-1](https://www.anduril.com/news/anduril-building-arsenal-1-hyperscale-manufacturing-facility-in-ohio)
- [Anduril Ghost Shark program of record](https://www.anduril.com/news/ghost-shark-enters-program-of-record-from-prototype-to-fleet-in-three-years)
- [Shield AI Batcave article](https://shield.ai/its-all-systems-go-at-shield-ais-texas-unified-facility/)
- [Saronic Team page](https://www.saronic.com/team)
- [Skydio Zürich R&D](https://dronexl.co/2026/04/06/skydio-zurich-rd-office-autonomous-drone/)
- [Skydio executives announcement](https://medium.com/skydio/autonomous-drone-maker-skydio-adds-key-product-and-engineering-executives-to-growing-team-1968647c0fc9)
- [Epirus HQ expansion](https://www.epirusinc.com/press-releases/epirus-is-expanding-high-tech-company-opens-new-corporate-headquarters-in-torrance-california)
- [American Rheinmetall](https://teamlynx-xm30.rheinmetall-arv-us.com/investment-not-inertia-how-american-rheinmetall-brings-silicon-valley-speed-to-u-s-defense-manufacturing/)

Third-party analysis and press:
- [Contrary Research Anduril deep dive](https://research.contrary.com/company/anduril)
- [Contrary Research Shield AI](https://research.contrary.com/company/shield-ai)
- [Contrary Research Helsing](https://research.contrary.com/company/helsing)
- [Contrary Research Epirus](https://research.contrary.com/company/epirus)
- [BUVCG Medium Anduril deep dive](https://medium.com/buvcg-research/anduril-industries-deep-dive-6949c7dd41c7)
- [HR Grapevine on Anduril hiring](https://www.hrgrapevine.com/us/content/article/2024-09-09-defense-tech-start-up-anduril-hires-over-1000-employees-in-9-months-how-fast-is-too-fast)
- [Fortune on Anduril](https://fortune.com/2024/09/06/defense-tech-startup-anduril-hiring-manufacturing-capacity-us-air-force-fighter-jets/)
- [Breaking Defense Hadrian](https://breakingdefense.com/2024/08/how-startup-hadrian-plans-to-take-over-the-defense-manufacturing-world/)
- [Saronic Louisiana expansion (Inside Unmanned Systems)](https://insideunmannedsystems.com/saronic-raises-1-75b-expands-louisiana-shipbuilding-footprint-as-autonomous-surface-vessel-production-scales/)
- [Helsing Series D (TFN)](https://techfundingnews.com/helsing-raises-600m-series-d-european-defence/)
- [Fortune Shield AI inflection point](https://fortune.com/2025/12/21/shield-ai-ukraine-defense-tech-gary-steele/)
- [TheOrg Anduril](https://theorg.com/org/anduril-industries)
- [TheOrg Shield AI Leadership](https://theorg.com/org/shield-ai/teams/leadership-team)

Hardware scaling and org design reference:
- [Bolt/Ben Einstein: Building Hardware Startup Teams Part 3](https://blog.bolt.io/the-complete-guide-to-building-hardware-startup-teams-part-3-management-scale-95bd856e14f5)
- [Pragmatic Engineer on Forward Deployed Engineers](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers)
- [Palantir FDSE blog](https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1)

**Honesty note on confidence levels:**
- High confidence: founding teams, headcount milestones, named executive roles, explicit public statements about co-location and engineering organization (these are well-documented)
- Medium confidence: the exact point at which specific roles appear (inferred from job postings and aggregated company profiles, not stated)
- Lower confidence / my inference: engineer-to-non-engineer ratios at specific stages, the exact scale break for manufacturing separation, the "~50 employees" threshold for PM hire. These are patterns I'm abstracting from the examples above — treat as directional, not precise benchmarks.
