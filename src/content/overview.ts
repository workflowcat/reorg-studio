// Research content for the overview / landing page.
// Sections enriched from three parallel research runs, archived
// verbatim in /research/ in this repo for reviewers:
//   benchmarks.md  — how Anduril, Shield AI, Saronic, Skydio, Epirus,
//                    Hadrian and Helsing actually built teams
//                    at the 20 → 100+ headcount range
//   compliance.md  — ISO 9001/AS9100, MIL-STD, TRL, ITAR/EAR, CMMC/
//                    NIST 800-171, IV&V and how compliance shapes the org
//   hiring.md      — critical early hires, defense IQ, compensation
//                    from Levels.fyi, clearance realities, hiring waves
//
// The Org design theory section draws on established academic canon
// (Skunk Works, IPT, Conway, Dunbar, Team Topologies) and does not
// require a separate research brief.
//
// Sources are kept on cards so reviewers can check provenance.

export type OverviewSource = { label: string; url?: string };

export type CompanyProfile = {
  name: string;
  tagline: string;
  founded: number;
  headcount: string;
  engRatio: string;
  founders: string;
  hq: string;
  production?: string;
  keyMove: string;
  whatToCopy: string;
  sources: OverviewSource[];
};

export type OverviewCard = {
  title: string;
  body: string[];
  bullets?: string[];
  sources?: OverviewSource[];
};

export type OverviewSection = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  profiles?: CompanyProfile[];
  cards: OverviewCard[];
};

export const OVERVIEW: OverviewSection[] = [
  // ──────────────────────────────────────────────────────────────
  {
    id: "benchmarks",
    eyebrow: "Benchmarks",
    title: "How these companies are actually organized",
    summary:
      "Seven companies that have gone or are going through the 20 → 100+ journey. All eventually converged on a similar shape, but chose very different paths.",
    profiles: [
      {
        name: "Anduril",
        tagline: "Software first, hardware second",
        founded: 2017,
        headcount: "~6 200 (end of 2025)",
        engRatio: "42%",
        founders: "5 — only one from hardware (Joe Chen, ex-Oculus)",
        hq: "Costa Mesa, CA",
        production: "Arsenal-1, Ohio",
        keyMove: "Built Lattice OS before the first hardware platform. Every subsequent program — Ghost Shark, Fury, Roadrunner — amortizes a single software investment.",
        whatToCopy: "Two separate SVP roles: SVP Engineering (core, ~413 people) vs SVP Programs & Engineering (customer-aligned, ~122). IPT with an SV label.",
        sources: [
          { label: "Anduril Leadership", url: "https://www.anduril.com/anduril-leadership" },
          { label: "Arsenal-1", url: "https://www.anduril.com/news/anduril-building-arsenal-1-hyperscale-manufacturing-facility-in-ohio" },
          { label: "Contrary Research", url: "https://research.contrary.com/company/anduril" },
        ],
      },
      {
        name: "Shield AI",
        tagline: "Buy the manufacturing arm, don't build it",
        founded: 2015,
        headcount: "~1 300 (early 2026)",
        engRatio: "—",
        founders: "3 axes: consumer HW · ex-SEAL · CV/research",
        hq: "San Diego, CA",
        production: "Batcave, Dallas (107k → 200k sqft)",
        keyMove: "Acquired Martin UAV in 2021 instead of standing up V-BAT production from scratch. Inherited the team + facilities.",
        whatToCopy: "CPEO (Chief Product & Engineering Officer) — product strategy inside engineering, not an antagonistic split.",
        sources: [
          { label: "Shield AI Batcave", url: "https://shield.ai/its-all-systems-go-at-shield-ais-texas-unified-facility/" },
          { label: "Contrary Research", url: "https://research.contrary.com/company/shield-ai" },
        ],
      },
      {
        name: "Saronic",
        tagline: "From 20 to 500 in 18 months",
        founded: 2022,
        headcount: "~1 300+ (early 2026)",
        engRatio: "—",
        founders: "CEO Navy SEAL (Mavrookas) · CTO autonomy (Altekar)",
        hq: "Austin, TX",
        production: "New Orleans",
        keyMove: "CTO owns Forward Deployed Engineering as a named org from Day 1 — the Palantir FDE model in hardware. A separate Defense Growth function lives outside eng and BD.",
        whatToCopy: "Geography = function: engineering in Austin, production + testing in New Orleans.",
        sources: [
          { label: "Saronic Team", url: "https://www.saronic.com/team" },
          { label: "Saronic Louisiana expansion", url: "https://insideunmannedsystems.com/saronic-raises-1-75b-expands-louisiana-shipbuilding-footprint-as-autonomous-surface-vessel-production-scales/" },
        ],
      },
      {
        name: "Skydio",
        tagline: "Dual-use: consumer → defense",
        founded: 2014,
        headcount: "~1 000",
        engRatio: "—",
        founders: "3 MIT robotics co-founders",
        hq: "San Mateo, CA",
        keyMove: "Pivoted from prosumer drones to ~50%+ defense revenue. Geographic talent hubs: HQ (autonomy), Boston (MIT), Zurich (multi-vehicle GPS-denied).",
        whatToCopy: "National Security Advisory Board replaces in-house DoD expertise at ~100 people.",
        sources: [
          { label: "Skydio Zürich R&D", url: "https://dronexl.co/2026/04/06/skydio-zurich-rd-office-autonomous-drone/" },
          { label: "NSAB", url: "https://www.skydio.com/blog/skydio-announces-new-national-security-advisory-board-with-leading-experts-in-national-security-and" },
        ],
      },
      {
        name: "Epirus",
        tagline: "Most defense-native of the newcomers",
        founded: 2018,
        headcount: "~240 (plateau)",
        engRatio: "—",
        founders: "CTO ex-Raytheon (Markel), team heavy on Raytheon alumni",
        hq: "Torrance, CA",
        keyMove: "Deliberately hired from Raytheon. Slower growth curve, but deep domain knowledge. If the customer runs program-of-record processes, this is the right answer.",
        whatToCopy: "R&D + BD co-located but organizationally separated — explicit boundary.",
        sources: [
          { label: "Epirus HQ", url: "https://www.epirusinc.com/press-releases/epirus-is-expanding-high-tech-company-opens-new-corporate-headquarters-in-torrance-california" },
          { label: "Contrary Research", url: "https://research.contrary.com/company/epirus" },
        ],
      },
      {
        name: "Hadrian",
        tagline: "Manufacturing-as-a-product",
        founded: 2021,
        headcount: "—",
        engRatio: "—",
        founders: "CEO Chris Power",
        hq: "Torrance, CA",
        production: "Own factory — core business",
        keyMove: "SW engineers pair 1:1 with shop-floor operators. Head of quality (Mueller) — ex-SpaceX. Quality leadership — senior import, not organic growth.",
        whatToCopy: "'We run a factory — there's no room for bullshit software.'",
        sources: [
          { label: "Breaking Defense", url: "https://breakingdefense.com/2024/08/how-startup-hadrian-plans-to-take-over-the-defense-manufacturing-world/" },
          { label: "TechCrunch", url: "https://techcrunch.com/2024/02/21/hadrian-automations-ceo-wants-to-defy-history-and-revitalize-american-industry/" },
        ],
      },
      {
        name: "Helsing",
        tagline: "Expansion across jurisdictions",
        founded: 2021,
        headcount: "~500 (2024)",
        engRatio: "—",
        founders: "3 axes: MoD veteran · AI research · repeat entrepreneur",
        hq: "Munich",
        production: "Estonia (€70M facility)",
        keyMove: "Scales across countries (Estonia, UK, France), not across new products. R&D and production separated geographically under one legal umbrella.",
        whatToCopy: "One founder per axis — same pattern as Shield AI and Saronic.",
        sources: [
          { label: "Helsing Series D", url: "https://techfundingnews.com/helsing-raises-600m-series-d-european-defence/" },
          { label: "Contrary Research", url: "https://research.contrary.com/company/helsing" },
        ],
      },
    ],
    cards: [
      {
        title: "What stands out when you look at all of them together",
        body: [
          "One shape appears again and again: a founder triangle (mission + engineering + ops), a disproportionately large eng block, and a manufacturing function coupled with R&D until volumes force a split.",
          "Eng-ratio by phase, as a rough benchmark:",
        ],
        bullets: [
          "~20 people → 70-80% engineers. Other roles are shared.",
          "~50 people → ~60%. PM, Head of QA (import from a prime or SpaceX), and a recruiter appear.",
          "~100+ people → 40-50%. PMO, capture writers, GC, security stack.",
          "Autonomy/AI splits out from embedded/software in every sample — different rhythm.",
          "A DC office appears early. The government interface demands it.",
        ],
        sources: [
          { label: "Bolt: hardware teams", url: "https://blog.bolt.io/the-complete-guide-to-building-hardware-startup-teams-part-3-management-scale-95bd856e14f5" },
        ],
      },
      {
        title: "Where quality lives — two different places",
        body: [
          "Integration & Test — part of Engineering. Production Quality — part of Manufacturing/Operations. These are two different quality functions, and they diverge somewhere around 50-80 people, when LRIP begins.",
          "Before that — one quality engineer with a dotted line to the CEO.",
          "Quality leadership — senior import. Hadrian hired from SpaceX. Cheaper and faster than building from scratch.",
        ],
        sources: [
          { label: "Breaking Defense: Hadrian", url: "https://breakingdefense.com/2024/08/how-startup-hadrian-plans-to-take-over-the-defense-manufacturing-world/" },
        ],
      },
      {
        title: "Lattice team breakdown — functions by the numbers",
        body: [
          "Best public datapoint. Anduril Lattice Solutions (Built In):",
        ],
        bullets: [
          "Engineering: 99+ · Operations/Support: 99+ — practically equal",
          "HR/Recruiting: 57 · Program/PM: 57 — also equal. In SaaS, PMO is 3-5x smaller.",
          "Finance: 19 · Customer Success: 17 · AI/ML: 13 · Sales: 13",
          "Manufacturing: 12 (Lattice is software; hardware programs are separate)",
          "Product: 11 · Design: 10 · Cybersecurity: 7 · Legal: 7 · Marketing: 1",
          "PMO ≈ HR and 57x larger than Marketing. Defense hires PMO, not marketing.",
        ],
        sources: [
          { label: "Built In: Anduril", url: "https://builtin.com/company/anduril-industries" },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────────────────────
  {
    id: "theory",
    eyebrow: "Org design theory",
    title: "Which frameworks work and which don't",
    summary:
      "Half the org-design frameworks from SaaS don't apply here. The ones that transfer mostly come from aerospace and systems engineering.",
    cards: [
      {
        title: "Functional-matrix hybrid",
        body: [
          "Two axes simultaneously. Verticals (mechanical, electronics, embedded, autonomy, quality) own standards and career growth. Horizontal product teams own delivery of a specific platform. An engineer has a home in a function but works on one or two product teams.",
          "The pattern dates to Skunk Works (Lockheed, 1943). Kelly Johnson pulled top engineers out of the functional org and formed a cross-functional team that owned the aircraft end-to-end. U-2, SR-71, F-117, F-22 — all came from there.",
          "Why the matrix became the default: hardware programs simultaneously need deep domain expertise (aerodynamics, RF, structural mechanics) and tight cross-domain integration. Neither a pure functional nor a pure project org delivers both.",
        ],
        sources: [
          { label: "Lockheed Martin: Skunk Works origin", url: "https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks/skunk-works-origin-story.html" },
          { label: "PMI: The Matrix Organization", url: "https://www.pmi.org/learning/library/matrix-organization-structure-reason-evolution-1837" },
        ],
      },
      {
        title: "Matrix strength: weak, balanced, strong",
        body: [
          "The PMI taxonomy distinguishes three points on the spectrum. In a weak matrix, functional managers retain most authority and the 'project manager' is really a coordinator with no budget control. In a balanced matrix, authority is shared between functional and program management. In a strong matrix, the program manager controls budget and resource allocation and carries organizational weight equal to the functional manager.",
          "IPT-based defense programs typically require a strong matrix to function. The weakness of the weak-matrix approach is well documented: program managers without budget authority cannot make delivery trade-offs, so delivery drifts toward whatever the functional organization's internal priorities want.",
          "Practical implication at 20 people: the matrix is usually fake (the same person wears both the functional and program hat), and you're effectively running a pure functional org. That's fine — don't pretend otherwise until headcount justifies real dual-reporting.",
        ],
        sources: [
          { label: "Whizlabs: Matrix strengths", url: "https://www.whizlabs.com/blog/matrix-organizations-weak-balanced-strong/" },
        ],
      },
      {
        title: "Integrated Product Teams (IPT)",
        body: [
          "IPT is the Department of Defense's preferred execution pattern, formalized in DoD 5000 guidance in the 1990s. Each IPT is a single-threaded, cross-functional team responsible for one deliverable — typically a platform, subsystem, or major program phase. Members are drawn from functional homes (engineering disciplines, manufacturing, quality, supply chain, program office) and report simultaneously 'up' to their functional manager and 'across' to the IPT lead.",
          "The program manager owns IPT delivery. Functional leads own technical standards and people. This split is what makes the matrix workable at smaller scale: the program manager doesn't have to become the boss of engineers — they become the boss of the deliverable.",
          "Three IPT tiers typically exist on large programs: Overarching IPT (strategic), Working IPTs (execution on major subsystems), and Integrating IPTs (spanning subsystem boundaries). At 20-50 headcount, the Working IPT is usually the only tier needed.",
        ],
        sources: [
          { label: "DoDD 5000.01", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodd/500001p.pdf" },
        ],
      },
      {
        title: "Conway's Law",
        body: [
          "'Organizations produce designs that copy their communication structures.' In hardware this hits hard: split embedded and mechanical into silos — you get a clean mechanical-electronic interface and a terrible cable harness.",
          "The Inverse Conway maneuver — organize around the product, not disciplines. Team Topologies formalizes this: stream-aligned teams (delivery), platform teams (infrastructure), enabling teams (capabilities), complicated-subsystem teams (deep specialization). IPT is the aerospace version of stream-aligned.",
          "If you want integration across boundaries — a cross-disciplinary team that lives together. If you want clean interfaces — teams that map to those interfaces.",
        ],
        sources: [
          { label: "Conway's Law (original essay)", url: "https://www.melconway.com/Home/Conways_Law.html" },
          { label: "Team Topologies", url: "https://teamtopologies.com/key-concepts" },
        ],
      },
      {
        title: "Dual portfolio R&D — the 70/30 rule",
        body: [
          "The defense industry rule of thumb for R&D portfolio split is roughly 70% on incremental improvement of existing platforms and 30% on exploratory / next-generation work. Google's 70-20-10 rule and McKinsey's Three Horizons point at the same idea: most energy on what works today, some on adjacent bets, a smaller slice on things that could replace the core.",
          "This shapes how R&D is organized. Work in the 70% lane lives inside the IPT structure — delivery-focused, tied to milestones, on the customer's contract schedule. Work in the 30% lane usually lives in a separate exploratory sub-team, in the CTO's direct org, or in a dedicated 'advanced projects' group — shielded from program milestones so it can afford to fail.",
          "A healthy defense R&D org can point to a concrete map showing where each active project sits in this split. An unhealthy one has the entire budget in the 70% lane and then acts surprised when a competitor deploys a new capability.",
        ],
        sources: [
          { label: "McKinsey's Three Horizons", url: "https://lucid.co/blog/mckinseys-three-horizons-of-growth" },
          { label: "ITONICS: The 70-20-10 model", url: "https://www.itonics-innovation.com/blog/702010-rule-of-innovation" },
        ],
      },
      {
        title: "Why the 'two-pizza team' rule doesn't transfer cleanly",
        body: [
          "Amazon's two-pizza team rule (autonomous teams of ~8 max) works for software because software teams can independently ship to production. In hardware, a full platform team needs mechanical, electrical, embedded, systems-integration, and test competency — that's a minimum of 12-15 people, and splitting them harder just moves the coordination cost somewhere worse.",
          "Dunbar's number gives the right mental model: ~150 people is the upper bound of a cohesive social unit, 50 is the close working-group limit, 15 is the limit of a team that can build shared tacit knowledge. Hardware IPTs live in the 15-50 range. Below 15 they lack discipline coverage; above 50 they fragment into sub-teams and need formal program structure.",
          "Practical translation: 'one platform — one IPT' — a team big enough to actually build the thing, but no bigger. At 20 people you have one IPT. At 50 — two. At 100 — 3-4 plus a thin PMO layer coordinating them.",
        ],
        sources: [
          { label: "Dunbar's number (BBC)", url: "https://www.bbc.com/future/article/20191001-dunbars-number-why-we-can-only-maintain-150-relationships" },
          { label: "Amazon two-pizza team", url: "https://www.atlassian.com/work-management/agile/two-pizza-team" },
        ],
      },
      {
        title: "What typically breaks at each headcount transition",
        body: [
          "Predictable failure modes at each scale transition — these are the pressure points your reorg should anticipate:",
        ],
        bullets: [
          "At ~20 → 30: playing-coach leads can no longer keep up with both managing and doing IC work. A formal engineering director layer appears, and the CTO must decide whether to scale as a manager or as an IC.",
          "At ~30 → 50: the CEO can no longer be in every decision. A COO-like role appears for internal execution. QA separates from Manufacturing and becomes organizationally independent. The first dedicated Program Manager appears. Finance becomes a real function (not just bookkeeping).",
          "At ~50 → 100: full functional-matrix kicks in. Each platform gets a dedicated Program Manager. Engineering splits into 4-6 disciplines with named leads. Supply chain exits Operations and becomes its own group. First in-house General Counsel.",
          "At ~100 → 150 (Dunbar threshold): informal communication breaks down. Named processes replace 'ask around.' VPs replace directors. Separate BD, capture, and program management functions exist independently.",
        ],
        sources: [
          { label: "Index Ventures: People challenges by stage", url: "https://www.indexventures.com/scaling-through-chaos/people-challenges-by-headcount-stage" },
          { label: "HBR: Getting reorgs right", url: "https://hbr.org/2016/11/getting-reorgs-right" },
          { label: "McKinsey: Reorganization without tears", url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/reorganization-without-tears" },
        ],
      },
      {
        title: "Experimental vs production R&D — when and how to split",
        body: [
          "At 20 people a formal split between 'advanced R&D' and 'production engineering' is premature. 10% exploratory on 20 people = 2 engineers. That's not a team. Exploration at this scale is temporal (dedicated sprint cycles), not organizational (a separate group).",
          "DoD budget reveals the real ratio: ~82% goes to production-track R&D (6.4-6.7), ~18% to exploratory (6.1-6.3). Boeing has the cleanest model: BR&T → TRL 1-4, Phantom Works → TRL 4-6, business units → TRL 7-9. For a small company this maps to time allocation, not to a separate org.",
          "The split becomes viable around 80-120 people. Create a small advanced-dev cell (5-8 people) reporting to the CEO/CTO, not VP Production. Separate budget line. But mandate: the same software platform, hardware interfaces, and test infrastructure as the production team — otherwise Conway's Law gives you two incompatible architectures that a small company can't afford to staff.",
        ],
        bullets: [
          "~20 people: one integrated team. Exploration in the same sprint rhythm.",
          "~40-60: temporal separation. Dedicated 'innovation weeks.' 2-3 engineers with 30-50% protected time. Don't create a separate group.",
          "~80-120: viable split. Advanced dev cell (5-8 people), direct report to CEO/CTO, separate budget.",
          "~150+: formalization. Separate reporting lines. Launch Team transfer mechanism (Anduril pattern: 30 people train at HQ, then deploy to the factory).",
          "Budget target: 80/20 (production/exploration) at small scale → 70/20/10 (core/adjacent/transformational) after 100 people.",
        ],
        sources: [
          { label: "Boeing Phantom Works (Wikipedia)", url: "https://en.wikipedia.org/wiki/Boeing_Phantom_Works" },
          { label: "Managing Skunk Works (Freaktakes)", url: "https://www.freaktakes.com/p/managing-lockheeds-skunk-works" },
          { label: "DoD RDT&E FY2022 (NSF/NCSES)", url: "https://ncses.nsf.gov/pubs/nsf25301" },
          { label: "Anduril Arsenal-1 production (Breaking Defense)", url: "https://breakingdefense.com/2026/03/as-fury-production-starts-anduril-pledging-a-different-production-approach-at-arsenal-1/" },
          { label: "Valley of Death (AcqIRC)", url: "https://acqirc.org/publications/perspectives/challenges-to-innovation-transition-the-valley-of-death-results-from-more-than-a-lack-of-flexible-funding/" },
          { label: "Bain A&D R&D Report 2023", url: "https://www.bain.com/insights/aerospace-and-defense-engineering-r-and-d-report-2023/" },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────────────────────
  {
    id: "compliance",
    eyebrow: "Defense compliance",
    title: "Compliance determines the shape of the org",
    summary:
      "Compliance is not an optional layer. It determines who can be in which room, which functions must be independent, and how many months until a new engineer ramps up.",
    cards: [
      {
        title: "Quality standards: ISO 9001 → AS9100",
        body: [
          "ISO 9001 is the baseline international quality management standard. AS9100 is the aerospace & defense extension, published by SAE International, adding ~100 aerospace-specific requirements on top of ~300 ISO 9001 requirements — configuration management, counterfeit parts prevention, first article inspection, product safety, FOD control, human factors, supply chain traceability, and special processes (welding, heat treatment, NDT).",
          "For a UGV company selling into DoD through primes or directly to program offices, ISO 9001 alone is usually insufficient — primes cascade AS9100 contractually down to Tier-2 and Tier-3 suppliers. Smart trigger for AS9100 is the first production contract or the first prime cascade requirement; going straight to AS9100 avoids a double migration.",
          "Realistic timelines for small companies (10-50 employees) — 4-9 months from kickoff to Stage 2 certification audit, assuming you start with some process discipline. Total three-year cost — typically $20,000-$45,000 including consulting and registrar fees. Larger or more chaotic organizations take 12-18 months.",
        ],
        sources: [
          { label: "SAE AS9100 family", url: "https://www.sae.org/standards/content/as9100d/" },
          { label: "ISO 9001 overview", url: "https://www.iso.org/iso-9001-quality-management.html" },
        ],
      },
      {
        title: "Minimum roles for a real QMS",
        body: [
          "A working QMS (not just a certificate on the wall) requires specific roles from day one:",
        ],
        bullets: [
          "Quality Manager / Management Representative — owns the QMS, conducts management reviews, interfaces with auditors and customers. Day-one role for any defense hardware company producing deliverables.",
          "Document Controller — maintains controlled documents, revisions, release workflow. Can be part-time or combined with Config Manager at <30 headcount.",
          "Internal Auditor(s) — trained on AS9100. Must be independent of the process being audited. Usually a shared responsibility between engineering and quality at small scale.",
          "Configuration Manager — when the BOM grows and ECOs become frequent, this role separates at roughly 30-50 people. PLM systems like Windchill, Teamcenter, or Duro become relevant here.",
        ],
        sources: [
          { label: "AS9100 implementation guide", url: "https://www.ndcdynamics.com/as9100-certification-process-phases-timelines-costs-strategies/" },
        ],
      },
      {
        title: "MIL-STD testing and the test lab decision",
        body: [
          "Defense hardware must survive MIL-STD-810 (environmental — temperature, humidity, vibration, shock), MIL-STD-461 (EMC/EMI), and various power and safety standards (MIL-STD-704 for avionics, MIL-STD-1275 for ground vehicles, MIL-STD-1474 for noise). These are expensive, specialized tests.",
          "At 20 people the test lab decision is always the same: outsource to a qualified third-party lab (NTS, Element, Dayton T. Brown, Wyle). Building in-house environmental capability below ~50 people rarely pays off. What should exist in-house is a test engineer who can write test plans, run pre-qualification screens, manage the external lab, and own test data.",
          "Functional test lab (not environmental) — separate story — some early-stage UGV companies build small in-house test capabilities for HIL, field trials, and operator simulators because the iteration cycle is tight and external labs add weeks of turnaround.",
        ],
        sources: [
          { label: "DLA ASSIST (MIL-STDs)", url: "https://quicksearch.dla.mil" },
          { label: "MIL-STD-810H", url: "https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=35978" },
        ],
      },
      {
        title: "TRL progression and contract gating",
        body: [
          "Government customers gate funding and program progress by Technology Readiness Level — a 9-point scale from 'basic principles observed' (TRL 1) to 'system proven in operational environment' (TRL 9). Contract language typically specifies which TRL the platform must demonstrate at each milestone, and the customer program office expects credible TRL reporting at every review.",
          "Rough mapping to the R&D org: exploratory R&D lives at TRL 1-4 (the 30% exploratory lane). Platform engineering lives at TRL 5-7 (the 70% delivery lane). Manufacturing ramp lives at TRL 8-9. A healthy R&D org can name where each active project sits on this scale — and the program manager can say which TRL gate each program is heading toward.",
          "The DoD CTO Technology Readiness Assessment Guidebook (February 2025) is the canonical reference. If you're taking government money, your program managers need to be fluent in it.",
        ],
        sources: [
          { label: "DoD TRA Guidebook 2025", url: "https://www.cto.mil/wp-content/uploads/2025/03/TRA-Guide-Feb2025.v2-Cleared.pdf" },
        ],
      },
      {
        title: "ITAR / EAR — export control",
        body: [
          "Nearly every UGV, autonomy stack, and radio system is either ITAR (State Department) or EAR (Commerce). This regulates not only export but who can touch the design — 'deemed exports' cover access to technical data by foreign persons even within the US.",
          "Direct consequence: non-US persons are restricted from ITAR technical data without an export license. This is why you need an Empowered Official (a US person with authority to make export determinations) and an FSO who reports to the CEO, not HR.",
          "Penalties: up to $1M per violation, up to 20 years imprisonment. 'We'll figure it out later' is the most expensive strategy.",
        ],
        sources: [
          { label: "State Department DDTC", url: "https://www.pmddtc.state.gov" },
          { label: "22 CFR Parts 120–130 (ITAR)", url: "https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M/part-120" },
        ],
      },
      {
        title: "Security — NIST 800-171 and CMMC",
        body: [
          "The Cybersecurity Maturity Model Certification (CMMC 2.0) from the US DoD requires defense contractors handling Controlled Unclassified Information to satisfy NIST SP 800-171 controls — MFA, encrypted storage, access logging, incident response, media protection, personnel screening, and more. The CMMC Final Rule (published 2024) is progressively appearing in DoD contracts.",
          "Most 20-person defense startups underestimate this. Real implementation is a 6-12 month project with real infrastructure cost (compliant cloud environments, logging, MDM, SIEM). The IT function in a defense company is not 'help desk' — it's 'compliance officer with a keyboard,' and it deserves a corresponding role definition.",
          "Classification is a separate conversation. Personnel clearances (Secret takes ~4-6 months; Top Secret ~12-18 months) cannot be expedited, so if you wait for a contract award to start sponsoring clearances, you'll miss the program. Standard advice: start the clearance process as soon as you have a credible path to a contract that requires them.",
        ],
        sources: [
          { label: "NIST SP 800-171", url: "https://csrc.nist.gov/publications/detail/sp/800-171/rev-2/final" },
          { label: "DoD CIO CMMC", url: "https://dodcio.defense.gov/CMMC/" },
          { label: "DCSA: facility & personnel clearances", url: "https://www.dcsa.mil" },
        ],
      },
      {
        title: "Independent V&V and the QA independence rule",
        body: [
          "Defense contracts typically require Independent Verification & Validation — the team that certifies product quality cannot be the team that built it. The principle is older than the regulation: if the builder also grades the work, you get optimistic grades. This is the single biggest constraint on org design in defense hardware.",
          "At 20 people the pragmatic solution is QA inside Manufacturing with a dotted-line independent escalation path directly to the CEO — the QA engineer can stop work if they see something unsafe and escalate around the nominal reporting chain. At 50+ QA must be an organizationally separate department reporting to the CEO.",
          "For software specifically, IV&V typically requires a separate team or organization — sometimes contractually with a third party. SW-CMM, DO-178C (for flight-safety software), and DO-254 (for airborne hardware) all prescribe explicit separation of test from development.",
        ],
      },
      {
        title: "Ten common traps for early-stage defense startups",
        body: [
          "Failure modes that keep showing up in research interviews and post-mortems:",
        ],
        bullets: [
          "Deferring QMS until 'after the first contract' — the QMS must exist at contract signature.",
          "Not sponsoring clearances early enough — TS/SCI is a 12-18 month process.",
          "Treating ITAR as paperwork rather than an org-design constraint — you'll hire a great engineer and then realize they can't touch the design.",
          "Signing prime flowdown clauses without reading them — default language cascades FAR, DFARS, CMMC, AS9100, and IP terms that are hostile to small suppliers.",
          "Not tracking CDRL (Contract Data Requirements List) as a separate schedule — CDRL deliveries are often more demanding than the hardware build schedule.",
          "Leaving quality buried inside the build team — the customer will notice and the audit will fail.",
          "Fully outsourcing to a quality consultant — consultants can help you pass the audit but cannot run your QMS.",
          "Treating CMMC as something IT owns — it's a business-wide program that touches HR, facilities, supply chain, and engineering.",
          "Understaffing test engineering — you won't pass acceptance without a dedicated test engineer, and that person can't also be the software lead.",
          "Ignoring MIL-STD test budget during fundraising — environmental test campaigns are six-figure costs per platform.",
        ],
      },
      {
        title: "CDRL — 20-40% of your program labor goes to documentation",
        body: [
          "The Contract Data Requirements List (CDRL, submitted as DD Form 1423) is the authoritative list of data deliverables a contractor owes the government under a contract: technical data packages, test reports, PMR slides, software documentation, failure analysis reports, configuration audit reports. Each line item references a Data Item Description (DID) — a five-digit-coded standardization document (e.g., DI-SESS-81000 for product drawings, DI-CMAN-81253A for configuration audit reports) with mandatory content, format, and delivery cadence.",
          "The most underestimated fact about CDRLs: in practice CDRLs drive enormous volumes of engineering work — often 20-40% of program labor goes to producing CDRL deliverables, not designing the product itself. Underestimating CDRL labor is the single most common cause of cost overruns in small-company DoD programs.",
          "Org consequence: the program manager must read EVERY CDRL line item and translate it into deliverable ownership, format, and schedule. The CDRL delivery schedule needs its own Gantt, parallel to the hardware build schedule. If your PM treats CDRLs as 'paperwork we'll finish at the end' — you'll fail the milestone review.",
        ],
        sources: [
          { label: "CDRL - Wikipedia", url: "https://en.wikipedia.org/wiki/Contract_data_requirements_list" },
          { label: "CDRL/DID - DAU", url: "https://www.dau.edu/blogs/product-support-contract-data-requirements-list-cdrl" },
          { label: "CDRL - AcqNotes", url: "https://acqnotes.com/acqnote/careerfields/contract-data-requirements-list-cdrl" },
        ],
      },
      {
        title: "Configuration Management and PLM — when CAD stops being 'my file'",
        body: [
          "Weapon systems have a 20-40 year service life, and they are maintained by organizations that never met the original designers. Configuration Management (standards: EIA-649, MIL-HDBK-61A) is the discipline that makes any of this possible. Every delivered unit must be traceable to an as-built configuration record, and every engineering change must be recorded with full impact analysis.",
          "In a rigorous CM environment you cannot change a released drawing or spec without a formal ECR (Engineering Change Request), impact analysis, CCB (Change Control Board) approval, ECO (Engineering Change Order) release, and cascading updates to the BOM, production work instructions, test procedures, and training materials. This is slow compared to startup engineering habits. The org must accept that once a part is released to production or delivered — it's not a personal file, it's a controlled artifact. This is a major cultural shock that sinks many defense hardware startups that grew up in an agile iterate-fast mode.",
          "Dominant defense PLM platforms: PTC Windchill (market leader in A&D, DISA-approved cloud environments, DoD IL5 accreditation), Siemens Teamcenter (deep customizability, strong change management), Dassault ENOVIA/3DEXPERIENCE (tightly coupled with CATIA), Aras Innovator (lower TCO). Cloud-native alternatives — Arena, Upchain, Duro — are increasingly adopted by defense startups under ~50 people.",
        ],
        sources: [
          { label: "Windchill PLM - PTC", url: "https://www.ptc.com/en/products/windchill" },
          { label: "Windchill vs Teamcenter - CLEVR", url: "https://www.clevr.com/blog/ptc-windchill-vs-teamcenter-which-tool-is-better-for-your-team" },
        ],
      },
      {
        title: "IV&V — four axes of independence",
        body: [
          "For mission- and safety-critical software (this includes autonomy, fire control, and any system whose provenance could lead to casualty, mission abort, or loss of a major platform) DoD programs often require Independent Verification & Validation performed by an entity independent of the developer. The rationale is confirmation bias and accountability: the team that wrote the code has strong psychological and financial incentives to believe it works.",
          "NIST and DoD define four dimensions of IV&V independence, and all four must be satisfied. This is not a style guide — it's a structural constraint on your org design.",
        ],
        bullets: [
          "Technical independence — IV&V personnel are not involved in requirements, design, or implementation.",
          "Managerial independence — responsibility sits in a separate management chain from development.",
          "Financial independence — IV&V budget is owned by a separate organization, so the developer cannot starve IV&V to save their own schedule.",
          "Contractual independence — IV&V is performed on a separate contract, so the developer cannot redirect scope.",
          "Organizational implication: QA/Test must be organizationally independent from Engineering — reporting to a Chief Quality Officer, VP Quality, or directly to the CEO, not to the VP Engineering. The test team's budget cannot be a line item under a program manager who is under schedule pressure. For critical software, a truly independent IV&V contractor is engaged under a separate government contract that the developer does not control.",
        ],
        sources: [
          { label: "IV&V - NIST Glossary", url: "https://csrc.nist.gov/glossary/term/independent_verification_and_validation" },
          { label: "IV&V Through the Eyes of DoD - Logapps", url: "https://logapps.com/insights/blog/independent-verification-and-validation-ivv-through-eyes-of-dod/" },
          { label: "NASA SWE-141 IV&V", url: "https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604595/SWE-141+-+Software+Independent+Verification+and+Validation" },
        ],
      },
      {
        title: "SCIF, FCL, and the cost of classified-ready infrastructure",
        body: [
          "A contractor cannot access or store classified information without a Facility Clearance (FCL), and cannot be sponsored for an FCL without a government or cleared-prime sponsor. FCL processing: 3-12 months. Key Management Personnel (KMP) — typically CEO, senior executives, FSO — must hold personnel clearances at the FCL level.",
          "Physical security facilities of the same gradation:",
        ],
        bullets: [
          "Controlled Unclassified Area — access-controlled space for CUI / ITAR data; no classified work. Most small defense companies start here.",
          "Closed Area — DCSA-approved for open storage and processing of classified material up to a certain level, with GSA-approved locks, access control, alarms, and guard force requirements.",
          "SCIF (Sensitive Compartmented Information Facility) — regulated under ICD/ICS 705. Required for TS/SCI work. Construction is specialized and expensive: RF shielding, TEMPEST considerations, sound attenuation, vault doors, continuous monitoring. A small SCIF costs $500k-$2M+ to build and must be accredited before use.",
          "Clearance timelines (2025 data): Interim Secret 5-30 days, full Secret median ~138 days (fastest 90%, range 4-8 months), full Top Secret 8-18 months. This means classified-program readiness must be planned 12+ months before any classified-contract award.",
          "Organizational constraint: the FSO reports for security matters directly to the CEO (not through engineering or operations) because the FSO is personally accountable to DCSA and must have authority to halt operations if a security violation is detected. This is a hard structural requirement, not a best practice.",
        ],
        sources: [
          { label: "DCSA Facility Clearances", url: "https://www.dcsa.mil/FCL/Maintaining-Personnel-Security-Clearances/" },
          { label: "SCIF Requirements - VERTEX", url: "https://vertexeng.com/insights/requirements-and-challenges-construction-of-scifs/" },
          { label: "Security Clearance Timelines 2025", url: "https://gcheck.com/blog/how-long-does-dod-background-check-take/" },
          { label: "CMMC 2.0 - Exostar", url: "https://www.exostar.com/blog/cmmc-compliance/cmmc-2-0-compliance-101-essential-insights-for-businesses/" },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────────────────────
  {
    id: "hiring",
    eyebrow: "Hiring & roles",
    title: "Who to hire, in what order",
    summary:
      "Defense hiring is nothing like SaaS. Fewer candidates, clearance and citizenship matter, mission is a real compensation lever. Here's what we noticed in the first 20 → 100 hires.",
    cards: [
      {
        title: "The founder triangle",
        body: [
          "In SaaS, two co-founders (CEO/CTO) ship an MVP. In defense hardware you need three axes: a mission/government CEO, a systems-level CTO, and an operations/manufacturing COO. Because you simultaneously have to win the customer, build the hardware, and stand up a compliant supply chain.",
          "Saronic: CEO Navy SEAL + CTO autonomy. Shield AI: consumer HW + ex-SEAL + CV research. Same pattern — one per axis — everywhere.",
          "The defense CEO is a different profile. Customers buy through relationships and program-office access. You need 'defense IQ,' earned through military service or a DoD career.",
        ],
        sources: [
          { label: "Saronic Team", url: "https://www.saronic.com/team" },
          { label: "TechCrunch: defense tech and Silicon Valley", url: "https://techcrunch.com/2022/02/05/the-rise-of-defense-tech-is-bringing-silicon-valley-back-to-its-roots/" },
        ],
      },
      {
        title: "Day-1 critical hires vs Month 3-6 vs 'wait'",
        body: [
          "Triage list for the first six months of a defense hardware startup:",
        ],
        bullets: [
          "Day 1: CEO (mission/government face), CTO/Head of Engineering, systems architect (can be the CTO), ops/contracts lead (often COO or fractional), cleared US-person Empowered Official for ITAR",
          "Month 3-6: first mechanical engineer, first electrical/firmware engineer, first software/autonomy engineer, first program/project manager, test engineer",
          "Wait: Head of Marketing, dedicated HR, dedicated finance (use a fractional CFO), dedicated Facility Security Officer (often dual-hatted at early stages), dedicated recruiter",
          "COO / Head of Engineering becomes necessary once the company has (a) a first contract with hardware deliverables on schedule and (b) more than ~10 engineers. Until then the CTO doubles as Head of Engineering.",
        ],
        sources: [
          { label: "Instrumental hardware handbook", url: "https://instrumental.com/resources/guide/building-a-hardware-startup" },
        ],
      },
      {
        title: "Where the talent comes from",
        body: [
          "Typical pipelines, in rough order of mission-fit for a new UGV company:",
          "1) Ex-military engineers who have seen the end-user side — high mission-fit, sometimes lower formal engineering depth, unmatched intuition for what will actually work in the field.",
          "2) Aerospace primes (Lockheed, Raytheon/RTX, Northrop Grumman, BAE, Rheinmetall) — deep process knowledge, sometimes slow to adapt to startup pace. Epirus's strategy of actively hiring from Raytheon is a deliberate version of this trade-off.",
          "3) Government labs (NRL, AFRL, APL, MITRE) — strong fundamentals, thin product sense, often excellent research talent.",
          "4) Dual-use robotics and hardware startups (alumni of Boston Dynamics, iRobot, Skydio) — strong engineering velocity, need coaching on defense specifics.",
          "The best teams mix two of these pipelines so that no single culture dominates. Pure primes get slow; pure Silicon Valley startups lose focus on the real customer.",
        ],
        sources: [
          { label: "ClearanceJobs", url: "https://www.clearancejobs.com" },
        ],
      },
      {
        title: "Wrong hires",
        body: [
          "Failure mode #1: senior ex-big-tech who has never shipped a physical product. Strong software intuition, poor hardware instincts — wants to iterate on a design that was physically frozen three months before the trial.",
          "Failure mode #2: over-hiring from primes. A process-compliant team that can't move at startup speed. At 20 people the answer to 'why isn't there an ECO process' is 'because there are four of us and we talk every day.'",
          "Red flags in interviews: can't name a single abbreviation (CDRL, CDR, PRR, ECP); hasn't touched a prototype in years; frames problems only in software terms.",
        ],
      },
      {
        title: "Compensation realities",
        body: [
          "Defense hardware compensation historically lagged FAANG and growth-stage SaaS on cash, but has pulled up substantially on the 2023-2026 wave of new defense companies. Anduril, Shield AI, and Saronic compensation figures from public aggregators show senior engineering compensation in the $200K-$400K range depending on level — roughly 70-85% of comparable FAANG roles.",
          "Equity is usually the lever that closes the gap. Mission-pull candidates accept a cash gap in exchange for meaningful early equity. Non-cash levers that weigh heavier here than in SaaS: mission clarity, access to real operators, long-term job stability, and the career asset of having touched a program that flew / drove / shipped — in defense hardware, 'I ran assembly on the first 20 Ghost Sharks' is a career-defining bullet.",
          "Practical note on ranges: Levels.fyi has limited data for defense startups (they don't self-report as aggressively), so ranges should be triangulated against ClearanceJobs and direct conversations with recruiters.",
        ],
        sources: [
          { label: "Levels.fyi — Anduril", url: "https://www.levels.fyi/companies/anduril" },
        ],
      },
      {
        title: "Clearance timelines and ramp-up realities",
        body: [
          "Security clearance processing is measured in months, not weeks. Typical current timelines:",
        ],
        bullets: [
          "Secret: 4-6 months end-to-end",
          "Top Secret: 8-14 months",
          "TS/SCI with polygraph: 12-18 months (and longer for some biographies)",
          "Interim clearances (useful bridge): 30-90 days for Secret",
          "Engineer ramp-up in defense hardware is also measured in months — 3-6 months for a senior engineer coming from non-defense hardware to become productive in MIL-STD practices, CDRL authoring, and program management cadence. Factor this into hiring plans.",
        ],
        sources: [
          { label: "Support ClearanceJobs on interim clearances", url: "https://support.clearancejobs.com/security-clearance-faqs/what-is-an-interim-security-clearance" },
          { label: "2025 clearance bottleneck", url: "https://ccsglobaltech.com/security-clearance-hiring-challenges-and-strategies/" },
        ],
      },
      {
        title: "Hiring waves: 20 → 30 → 50 → 100+",
        body: [
          "Each headcount transition has a characteristic hiring wave that defines it:",
        ],
        bullets: [
          "20 → 30: dedicated quality engineer, first program manager, first supply chain / procurement specialist, beginning of the engineering directors layer.",
          "30 → 50: dedicated Head of Quality (organizationally independent), first Security Officer / FSO, second and third program managers, first dedicated test engineer, systems integration sub-team forms, first full-time recruiter.",
          "50 → 100: VP of Engineering replaces the playing-coach CTO, dedicated CFO replaces fractional finance, security function grows into a full stack (FSO + Export Control Officer + Cyber), supply chain separates from operations, dedicated capture/proposal writers, General Counsel replaces outside counsel.",
          "100 → 150 (Dunbar wall): informal communication stops working. Named processes replace 'ask around.' Separate BD, capture, and program management functions exist independently. This is the point where Brittany Laughlin's 'scale stage' playbook kicks in.",
        ],
        sources: [
          { label: "Brittany Laughlin: Scale Stage 75–150", url: "https://medium.com/startup-maturity/maturity-map-scale-stage-75-150-employees-98532a1e44cf" },
          { label: "Index Ventures: scaling through chaos", url: "https://www.indexventures.com/scaling-through-chaos/people-challenges-by-headcount-stage" },
        ],
      },
      {
        title: "Composition of a 20-person team — specific roles",
        body: [
          "Instrumental's hardware team-building guidance indicates that effective hardware teams start at ~5 people and become comfortable at 15-25 as the product approaches readiness. For a defense UGV company with 20 total headcount, a realistic engineering split (roughly 14-15 engineers out of 20) looks like this:",
        ],
        bullets: [
          "Systems engineering / systems architect: 1 (often the CTO). Owns requirements, interfaces, and the verification plan",
          "Mechanical design: 2-3. Chassis, suspension, payload interfaces, packaging",
          "Electrical / power / electronics: 2. Power distribution, motor drive, PCB design",
          "Embedded / firmware: 1-2. Motor control, sensor drivers, safety interlocks",
          "Software / autonomy: 2-3. Perception, planning, ROS2, middleware, comms",
          "Test & integration engineer: 1. Environmental, EMI, field trials, corner cases",
          "Manufacturing / production engineer: 1. Bridges engineering and the production line",
          "Senior role that must exist Day 1: systems architect (usually the CTO at this scale) and at least one principal/staff engineer per discipline who faces the customer at design reviews. Avoid a 20-person team where everyone is at IC-level — design reviews and TRRs need someone senior enough to make trade decisions in real time.",
          "Playing-coach leads vs dedicated managers: at 20 people every discipline lead should be 70-80% hands-on. Dedicated people managers with zero IC output start to make sense around 30-40 engineers (~50 total headcount). Promoting the best IC into a pure-manager role too early is one of the most common failure modes at this scale.",
        ],
        sources: [
          { label: "Building the Hardware Development Team - Instrumental", url: "https://instrumental.com/build-better-handbook/building-hardware-development-team" },
        ],
      },
      {
        title: "Anduril compensation — Levels.fyi benchmark",
        body: [
          "Defense hardware compensation rose sharply since 2020 as new-space and defense-tech unicorns (Anduril, Shield AI, Saronic, Epirus, Skydio) must match or come close to FAANG for recruiting software talent. Hardware-discipline comp has grown more slowly but is now materially above legacy-prime pay in the same geographies.",
          "Anduril (as a high-benchmark reference, Levels.fyi):",
        ],
        bullets: [
          "Software Engineer: $207K (L3) to $517K+ (L7); median ~$268K total comp; Software Engineering Manager up to $735K on the high end",
          "Mechanical Engineer: $156K (L3) to $279K+ (L6); median ~$175K; L5 median total ~$250K",
          "Manufacturing Engineer: $134K-$343K range",
          "Company-wide median total comp: ~$237K",
          "vs FAANG: at the top of the market (Anduril, Shield AI senior engineers) software comp is now within 10-20% of FAANG base+bonus, with equity upside larger in absolute terms (large private valuations) but less liquid",
          "vs legacy primes (Lockheed, RTX, Northrop): defense-tech startups pay 20-50% more for comparable engineers, especially in software and autonomy",
          "vs SaaS startups at the same stage: cash comp is comparable; early defense equity grants are often slightly smaller on a percentage basis because valuations are higher",
        ],
        sources: [
          { label: "Anduril Software Engineer - Levels.fyi", url: "https://www.levels.fyi/companies/anduril-industries/salaries/software-engineer" },
          { label: "Anduril Mechanical Engineer - Levels.fyi", url: "https://www.levels.fyi/companies/anduril-industries/salaries/mechanical-engineer" },
          { label: "Anduril Salaries Overview", url: "https://www.levels.fyi/companies/anduril-industries/salaries" },
        ],
      },
      {
        title: "Clearance as a career asset + non-salary benefits",
        body: [
          "Three things consistently show up in accepted offers at defense startups, and why candidates trade comp for them:",
        ],
        bullets: [
          "Mission — framed concretely around a specific end user (a platoon, a ship, a convoy), not abstractly. 'We build autonomy for Marine Corps UGVs' beats 'we build a robotics platform' in 9 out of 10 interviews with mission-motivated candidates",
          "Clearance as a career asset — an active Secret or TS/SCI is worth $20K-$50K/year in perpetuity on the open market, and the candidate leaves your company with it. This partly explains why primes retain people despite lower comp",
          "Job stability — long defense program cycles mean fewer layoff waves than consumer tech. After the 2022-2023 waves this has become a real selling point",
          "Lifetime exemption — many mission-motivated candidates actively WANT the identity of 'I work in defense.' This pull doesn't need selling — it just needs to not be pushed away",
          "Equity norms (Index Ventures Series A benchmarks): a Lead/Principal engineer joining at Series A typically receives ~0.3%-1.0%; senior IC ~0.1%-0.35%; standard 4-year vest with 1-year cliff. Increasingly, early-stage teams offer 7-10 year post-termination exercise windows to remove the 90-day exercise cliff",
        ],
        sources: [
          { label: "Index Ventures: Series A option grants", url: "https://www.indexventures.com/rewarding-talent/option-grants-at-series-a" },
          { label: "Holloway: Employee Equity Levels", url: "https://www.holloway.com/g/equity-compensation/sections/typical-employee-equity-levels" },
          { label: "McKinsey: A&D Tech Talent Shortage", url: "https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/debugging-the-software-talent-gap-in-aerospace-and-defense" },
        ],
      },
      {
        title: "Interview red flags — who will fail in a defense environment",
        body: [
          "Specific signals that a candidate from a commercial background will struggle, even if they look great on paper. Screen for these explicitly in interviews — if at least three are present, the hire will be unhappy within 12 months.",
        ],
        bullets: [
          "Visceral negative reaction to paperwork, configuration control, or audits",
          "Cannot name a single MIL-STD or explain why environmental qualification matters",
          "Measures success only in velocity — 'how many PRs per week' with no mention of verification",
          "Surprised that work must be done on a government-furnished laptop or in a cleared room",
          "Negative or dismissive about working with uniformed end users",
          "Foreign-national status without an existing green card (creates ITAR restrictions that rarely resolve in time for a startup)",
          "'Ex-Google engineer anti-pattern' — not the talent but the culture that doesn't transfer: (a) infinite-resource assumptions (compute, parts, vendors), (b) A/B-test thinking applied to safety-critical hardware, (c) unwillingness to write documentation for the customer, (d) intolerance of slow feedback loops (hardware iterations take weeks, not minutes), (e) discomfort with the mission",
          "Engineers who transfer well almost always self-select hard — they are already motivated by the mission and consciously trade comp and velocity for meaning. Screen for this explicitly",
        ],
        sources: [
          { label: "Defense culture clash - Defense News", url: "https://www.defensenews.com/smr/cultural-clash/2019/01/28/it-wasnt-a-fun-place-to-work-dods-cultural-hurdles-in-attracting-tech-talent/" },
          { label: "Silicon Valley back to roots", url: "https://techcrunch.com/2022/02/05/the-rise-of-defense-tech-is-bringing-silicon-valley-back-to-its-roots/amp" },
        ],
      },
      {
        title: "Defense buddy pattern and real ramp time",
        body: [
          "Engineer ramp-up in defense hardware is substantially longer than in SaaS. General software ramp data shows 3-9 months to full productivity. In defense hardware, add the MIL-STD/CDRL learning curve: a realistic estimate is 6 months to the first meaningful technical contribution, 12 months to subsystem ownership, and up to 24 months to deep defense-native judgment for an engineer coming from a commercial background.",
          "Companies that ramp engineers quickly apply an explicit pattern: every new hire gets a 'defense buddy' — someone with 10+ years of defense experience who explains acronyms and norms for the first six months. This is not a mentor — it's a translator. The buddy answers questions like 'what does DR mean in this context?' and 'why can't I just rewrite this document?'",
          "What most new hires from a commercial background need explicit training on: (a) how to read and respond to an SOW and CDRL list, (b) the purpose and structure of MIL-STD-810 test plans, (c) how to produce a DID-compliant deliverable document, (d) configuration management (ECPs, ECRs, ECNs) with real rigor, (e) how to behave in a customer design review.",
          "Pre-clearance productivity: put uncleared hires on unclassified work (most early-stage UGV engineering is unclassified technical data that is ITAR-controlled but not classified), segment facilities and networks so uncleared employees can contribute, and use pipeline cleared contractors or consultants to cover classified reviews during the first year. An interim Secret, which arrives in 5-30 days, is often sufficient to unblock most roles.",
        ],
        sources: [
          { label: "Engineer Onboarding Ramp-Up - HackerNoon", url: "https://hackernoon.com/engineer-onboarding-the-ugly-truth-about-ramp-up-time-7e323t9j" },
          { label: "Interim Security Clearance", url: "https://support.clearancejobs.com/security-clearance-faqs/what-is-an-interim-security-clearance" },
        ],
      },
    ],
  },
];
