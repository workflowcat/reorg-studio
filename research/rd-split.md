# R&D Organization Split: Experimental vs. Production Engineering

Research brief for a ~20-person UGV company scaling to 100+. How defense hardware companies divide exploratory R&D from production/sustaining engineering, when to split, and what breaks when you get it wrong.

---

## 1. How the Split Manifests Organizationally

Large defense primes universally maintain separate organizational units for advanced development vs. production engineering. The pattern is consistent across the industry:

- **Lockheed Martin**: Skunk Works (Advanced Development Programs) operates as a semi-autonomous division reporting to the Aeronautics VP/President, separate from production programs like F-35 sustainment. ([Lockheed Martin Skunk Works](https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks.html))

- **Boeing**: Phantom Works serves as the advanced R&D division. Its internal structure mirrors Boeing Defense's business units with "Advanced" versions of each (e.g., Advanced Boeing Military Aircraft). Critically, Boeing also separates a third layer: Boeing Research & Technology (BR&T) handles TRL 1-4, Phantom Works handles TRL 4-6 prototyping, and production business units handle TRL 7-9. ([Boeing Phantom Works, Wikipedia](https://en.wikipedia.org/wiki/Boeing_Phantom_Works))

- **Northrop Grumman**: Maintains an Advanced Programs division for classified and next-gen work, separate from sector-level production organizations.

**When the split happens at scale**: The formal organizational split typically occurs once a company has hundreds of engineers. For defense primes, these advanced development units are staffed at 10-25% of the size that conventional program management would dictate -- a ratio Kelly Johnson established at Skunk Works. ([Managing Lockheed's Skunk Works, Freaktakes](https://www.freaktakes.com/p/managing-lockheeds-skunk-works))

**Reporting lines**: Advanced development leaders report high -- division president or higher. Kelly Johnson's first rule was that the Skunk Works manager must have "practically complete control" and report to a division president, not a VP of engineering or program director. This insulates the advanced unit from production schedule pressure. ([Kelly's 14 Rules, Lockheed Martin PDF](https://www.lockheedmartin.com/content/dam/lockheed-martin/aero/photo/skunkworks/kellys-14-rules.pdf))

---

## 2. The Skunk Works / Advanced Development Model

### What Makes It Work

Kelly Johnson's Skunk Works succeeded by violating nearly every norm of defense program management. Key data points from the original operations:

| Program | Team Size | Result |
|---------|-----------|--------|
| XP-80 (first jet) | 23 engineers + Johnson | Delivered 37 days early |
| U-2 spy plane | 81 total staff | Returned $2M of $22M budget unspent, built 6 extra aircraft from spare parts |
| SR-71 Blackbird | 75 engineers | Designed the fastest aircraft ever built |
| F-117 stealth | Small enough that one weights specialist was "almost an empire" | First operational stealth aircraft |

Core principles that enabled this ([Managing Lockheed's Skunk Works, Good Science Project](https://goodscienceproject.org/articles/managing-lockheeds-skunk-works/)):

1. **Viciously small teams**: 10-25% of "normal" staffing levels. Everyone knows the full project.
2. **Physical co-location**: Engineers spent at least one-third of their day on the shop floor with machinists.
3. **Centralized authority**: One manager with near-complete control, same-day decisions.
4. **Minimal reporting**: Follow-ups limited to a few pages. Talk rather than write.
5. **Matched customer structure**: The military project office had to be equally small (6 people for U-2 vs. 145 Army personnel on the failed Cheyenne helicopter program).

### Why Replication Fails

Johnson himself identified the barriers ([Freaktakes](https://www.freaktakes.com/p/managing-lockheeds-skunk-works)):

- **Management won't delegate**: Most companies refuse to give one individual full authority over a program.
- **Incentive misalignment**: Traditional orgs reward managers who supervise more people. Skunk Works rewarded those who "supervised least."
- **Customer-side bloat**: Programs requiring input from multiple branches or oversight committees cannot maintain decision speed. A Navy stealth ship project expanded from 6 Skunk Works engineers to 85 bureaucrats plus 50 Navy overseers.
- **Bureaucratic creep**: By Ben Rich's tenure (1970s-80s), corporate oversight and government monitoring eroded the original model. Rich wrote that "the old Skunk Works valued independence was doomed to become a nostalgic memory."

### Modern Equivalents

Boeing Phantom Works and similar units attempt the model but with a critical structural difference: they are technology maturation organizations (TRL 4-6), not production organizations. They explicitly exist to bridge lab research to the point where a business unit can productize. ([Boeing Phantom Works, Wikipedia](https://en.wikipedia.org/wiki/Boeing_Phantom_Works))

---

## 3. The Budget Split: How Much Goes Where

### DoD's Own Allocation

The federal R&D budget reveals how the government itself splits exploratory vs. production-adjacent R&D. FY2022 DoD RDT&E obligations totaled $115.9 billion ([NSF/NCSES Analysis, FY2022](https://ncses.nsf.gov/pubs/nsf25301)):

| Category | Budget Activity | % of RDT&E | What It Funds |
|----------|----------------|------------|---------------|
| Basic Research | 6.1 | 2.7% | University grants, fundamental science |
| Applied Research | 6.2 | 6.1% | Directed research toward military needs |
| Advanced Tech Dev | 6.3 | 8.7% | Prototypes, concept demonstrations |
| **Subtotal: Exploratory (S&T)** | **6.1-6.3** | **~17.5%** | **"The pool of knowledge for future systems"** |
| Component Dev & Prototypes | 6.4 | 27.5% | Major system prototyping |
| System Dev & Demo | 6.5 | 12.6% | Full system engineering |
| Operational Systems Dev | 6.7 | 37.6% | Upgrades to fielded systems |
| **Subtotal: Production-track** | **6.4-6.7** | **~82.5%** | **Near-term product engineering** |

The government spends roughly **82/18** on production-track vs. exploratory R&D. This is before the separate Procurement budget ($162B in FY23) which funds actual manufacturing. ([CRS Report IF10553](https://www.congress.gov/crs-product/IF10553); [AAAS R&D Budget](https://www.aaas.org/programs/r-d-budget-and-policy/department-defense))

### The 70-20-10 Framework

The general innovation management literature converges on a different framework, popularized by Google: allocate 70% to core product improvement, 20% to adjacent opportunities, and 10% to transformational/moonshot work. A 2018 BCG study found companies following this ratio achieved 3x faster revenue growth. ([Itonics: 70-20-10 Model](https://www.itonics-innovation.com/blog/702010-rule-of-innovation))

**Applied to a 20-person UGV company**: The "10% transformational" allocation at 20 people is 2 engineers. That is not a team -- it is one person and a half-time contributor. The practical implication: at small scale, exploration cannot be organizationally separated. It must be temporally separated (dedicated sprint cycles) or embedded in the same engineers who do production work.

### Defense-Specific Consideration

Bain's 2023 Aerospace & Defense Engineering Report found that A&D engineers spend only about half their time on active engineering work, with 30%+ consumed by rework and 40%+ on lower-value administrative tasks. This means the effective R&D budget is much smaller than the nominal one. ([Bain A&D Engineering Report 2023](https://www.bain.com/insights/aerospace-and-defense-engineering-r-and-d-report-2023/))

---

## 4. How Defense-Tech Startups Handle This at Small Scale

### The Consensus: Don't Split Too Early

At 20-50 people, defense-tech startups do not have the mass for separate R&D and production organizations. The pattern observed across the cohort:

**Anduril (scaling trajectory)**: From ~90 employees in 2019 to ~400 in 2021 to 1,000+ hired in a single 9-month period in 2024. The company did not create a separate production organization until it began building Arsenal-1 (5M sq ft factory in Columbus, OH). Before that, engineering and manufacturing were intertwined. The production split emerged only when they had both a production contract and a dedicated facility. ([Anduril, Wikipedia](https://en.wikipedia.org/wiki/Anduril_Industries); [Breaking Defense, March 2026](https://breakingdefense.com/2026/03/as-fury-production-starts-anduril-pledging-a-different-production-approach-at-arsenal-1/))

**Shield AI**: Organized around its core Hivemind autonomy software platform, which spans multiple vehicle programs (V-BAT, Firejet). The engineering organization is structured around the software platform and vehicle programs rather than an R&D/production split. At ~$12.7B valuation, they maintain a unified engineering culture with CTO Nathan Michael (formerly Carnegie Mellon) leading technical direction. ([Shield AI](https://shield.ai/); [Wikipedia](https://en.wikipedia.org/wiki/Shield_AI))

**Saronic**: At $9.25B valuation after a $1.75B raise, Saronic is scaling from R&D to production of autonomous surface vessels. They are building dedicated shipyards (Franklin, LA and an undisclosed "Port Alpha") but the production organization is emerging alongside the R&D org, not splitting from it. The company recently added CPO, CISO, and General Counsel roles to support the transition. ([CNBC, March 2026](https://www.cnbc.com/2026/03/31/autonomous-boat-startup-saronic-raises-1point75-billion-.html); [Fast Company](https://www.fastcompany.com/91503485/saronic-most-innovative-companies-2026))

**The pattern**: The split happens when there is a production contract that demands dedicated manufacturing infrastructure and a workforce trained for repetitive assembly rather than prototyping. For most defense startups, this transition occurs at 100-300 people, driven by contract requirements rather than an internal organizational design choice.

### How a16z Frames It

Andreessen Horowitz's American Dynamism practice explicitly funds companies that will need to build both R&D and production capacity. Their model emphasizes that defense startups should fund R&D independently (with venture capital) so the government buys finished products, rather than funding development through cost-plus contracts. This creates natural organizational pressure: the VC-funded side is exploratory R&D, and the contract-funded side is production. ([a16z American Dynamism](https://a16z.com/american-dynamism/); [a16z DoD Contracting 101](https://a16z.com/dod-contracting-for-startups-101/))

---

## 5. TRL Progression as the Organizational Boundary

### The Canonical Mapping

Boeing's three-tier structure provides the clearest model for how TRL maps to organizational boundaries ([Boeing Phantom Works, Wikipedia](https://en.wikipedia.org/wiki/Boeing_Phantom_Works)):

| TRL Range | Organization | Activity | Funding Source |
|-----------|-------------|----------|---------------|
| TRL 1-3 | Boeing Research & Technology (BR&T) | Basic/applied research, lab demos | IR&D, 6.1/6.2 grants |
| TRL 4-6 | Phantom Works (Advanced Development) | Prototype development, system integration | SBIR Phase II, OTA prototypes, 6.3/6.4 |
| TRL 7-9 | Business Unit (Production) | Production engineering, testing, fielding | 6.5-6.7, production contracts |

### SBIR Funding as a Forcing Function

The SBIR/STTR program creates a natural organizational progression for small companies ([a16z DoD Contracting 101](https://a16z.com/dod-contracting-for-startups-101/)):

- **Phase I** ($50K-$250K): Feasibility study. 2-5 people working on concept. No org split needed.
- **Phase II** ($750K-$1.5M): Prototype development. 5-15 people. Still integrated team.
- **Phase III**: Sole-source production contract. This is where organizational bifurcation becomes necessary -- you need production engineering, quality, supply chain, and compliance functions that are distinct from the R&D team that created the prototype.

The **STRATFI** ($3M-$15M) and **TACFI** ($375K-$1.7M) bridging programs exist specifically because companies stall between Phase II R&D and Phase III production. The organizational challenge maps directly to the funding gap. ([AFWERX SBIR/STTR Overview](https://afwerx.com/divisions/ventures/sbir-sttr-program-overview/))

### The "Valley of Death" Is Organizational, Not Just Financial

RAND and the Acquisition Innovation Research Center (AcqIRC) have documented that the valley of death between R&D and production is caused by more than funding gaps. Key organizational barriers include ([AcqIRC](https://acqirc.org/publications/perspectives/challenges-to-innovation-transition-the-valley-of-death-results-from-more-than-a-lack-of-flexible-funding/); [DefenseScoop](https://defensescoop.com/2023/03/01/there-isnt-just-one-valley-of-death-tackling-the-dod-transition-problem/)):

- **Risk-averse program managers** who optimize for cost/schedule/performance and resist integrating unproven technology
- **Requirements rigidity**: PMs cannot easily accommodate emerging tech that adds schedule risk
- **Cultural mismatch**: R&D teams optimize for learning; production teams optimize for repeatability

---

## 6. Transfer Mechanisms: R&D to Production

### The Anduril "Fury Launch Team" Pattern

Anduril's approach to transitioning the Fury autonomous combat drone from R&D to production is the most documented recent example of a deliberate transfer mechanism ([Breaking Defense, March 2026](https://breakingdefense.com/2026/03/as-fury-production-starts-anduril-pledging-a-different-production-approach-at-arsenal-1/); [Scioto Post](https://www.sciotopost.com/andurils-fury-launch-team-returns-to-central-ohio-as-arsenal-1-production-nears/)):

1. **30-person "Fury Launch Team"** trained at Anduril's California HQ during summer 2025, learning to build the aircraft and absorbing company culture.
2. **Team deployed to Arsenal-1** (Columbus, OH) three months ahead of schedule to begin production.
3. **Progressive specialization**: Initially all workers learn the full 22-station assembly process. As the workforce scales, technicians specialize in 1-2 stations, reducing individual training to ~2.5 days of work content.
4. **Design-for-manufacturing from day one**: COO Matt Grimm stated they think about manufacturing "from the absolute day one." Aluminum over titanium, COTS components, no complex castings/forgings, flexible factory layouts.

### What Breaks When Handoff Is Bad

The defense acquisition literature documents consistent failure modes:

- **"Throw it over the wall" syndrome**: R&D team designs without manufacturing input, production team receives designs they cannot efficiently build. The Bain report found 30%+ of A&D engineering time is spent on rework -- much of it traceable to poor R&D-to-production handoffs. ([Bain 2023](https://www.bain.com/insights/aerospace-and-defense-engineering-r-and-d-report-2023/))
- **Knowledge loss**: When the R&D team disbands before production engineers are trained, tacit knowledge about design decisions, failure modes, and workarounds is lost.
- **Specification inflation**: Production teams, lacking context for design tradeoffs, demand tighter specifications than necessary, driving up cost.
- **Anduril's deliberate counter-pattern**: Learning from Tesla's Model 3 production challenges, they minimized early-stage automation and iterated manually first. Custom equipment (assembly carts) went through three versions in 8 weeks based on technician feedback. The philosophy: eliminate processes rather than automate bad ones.

### The Academic Framework: Organizational Ambidexterity

Management research on "organizational ambidexterity" directly addresses the exploration/exploitation tension. A study of six business units in an aerospace and defense organization found that structural ambidexterity -- maintaining dual organizations for exploration and exploitation -- works but requires ([ResearchGate: Ambidexterity in A&D](https://www.researchgate.net/publication/326259698_Ambidexterity_penetration_across_multiple_organizational_levels_in_an_aerospace_and_defense_organization)):

- Senior leadership actively managing the tension between units
- Shared strategic context so both sides understand the company's direction
- Mechanisms for transferring people and knowledge between exploration and exploitation units

The research warns that hierarchical, centralized organizations (common in defense) naturally favor exploitation over exploration, making the split harder to maintain.

---

## 7. Conway's Law Implications

### The Core Risk

Conway's Law states that system architecture mirrors organizational communication structure. Applied to a UGV company considering an R&D/production split ([Conway's Law, Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_law); [Martin Fowler](https://martinfowler.com/bliki/ConwaysLaw.html)):

**If you split too early**: You get two architectures. The R&D team's "next-gen" platform diverges from the production platform. Integration becomes a project unto itself. The exploratory vehicle cannot share modules, software libraries, or test infrastructure with the production vehicle. At 20-50 people, this is fatal -- you cannot staff two independent architectures.

**If you never split**: Production schedule pressure crowds out exploration. Every sprint is consumed by customer-driven features, bug fixes, and manufacturing yield issues. The "20% time" for innovation gets cannibalized. The company becomes a sustaining engineering shop that cannot develop next-generation capabilities.

### The Inverse Conway Maneuver for Defense Hardware

The practical approach for a small UGV company:

1. **Keep one architecture, two modes of work**. Use the same codebase, hardware platform, and test infrastructure. Separate exploration from production by time allocation (dedicated sprint cycles) rather than team structure.
2. **Split at the platform boundary, not the org chart**. When you do split, split along module boundaries in the technical architecture -- e.g., autonomy stack team vs. vehicle platform team -- not along an "R&D vs. production" line. This keeps each team's product shippable.
3. **Use the Anduril pattern**: When production demands a dedicated team, seed it with people trained on the full system (the "Launch Team" model), then let them specialize. The knowledge transfer is embodied in people, not documents.

---

## Recommendations for a ~20-Person UGV Company

Based on the evidence above, the scaling sequence should be:

**At 20 people**: No split. One integrated team. Exploration happens within the same sprint cadence as production work. Designate 1-2 people as "tech leads" who protect time for next-gen work, but they ship production code too.

**At 40-60 people**: Begin temporal separation. Dedicate sprint cycles or "innovation weeks" to exploratory work. Identify the 2-3 engineers who are best at open-ended problem-solving and give them 30-50% protected time. Resist creating a separate "advanced development" team -- you don't have the mass.

**At 80-120 people**: The split becomes viable. Create a small (5-8 person) advanced development cell that reports directly to the CEO or CTO, not through the VP of Production Engineering. This cell owns TRL 1-5 work. Give them their own budget line. But mandate that they share the same software platform, hardware interfaces, and test infrastructure as the production team.

**At 150+ people**: Formalize the split with separate reporting lines and budgets. Implement a "launch team" transfer mechanism for moving designs from advanced development to production. Ensure 2-3 engineers rotate between the groups annually to prevent architectural divergence.

**Budget guidance**: Target 80/20 (production/exploration) at small scale, moving toward 70/20/10 (core/adjacent/transformational) as you scale past 100 people. The DoD's own 82/18 split provides an upper bound on how production-heavy a defense-focused company can be while remaining competitive.

---

## Sources

1. [Lockheed Martin Skunk Works](https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks.html)
2. [Managing Lockheed's Skunk Works -- Eric Gilliam / Freaktakes](https://www.freaktakes.com/p/managing-lockheeds-skunk-works)
3. [Managing Lockheed's Skunk Works -- Good Science Project](https://goodscienceproject.org/articles/managing-lockheeds-skunk-works/)
4. [Kelly's 14 Rules (PDF) -- Lockheed Martin](https://www.lockheedmartin.com/content/dam/lockheed-martin/aero/photo/skunkworks/kellys-14-rules.pdf)
5. [Boeing Phantom Works -- Wikipedia](https://en.wikipedia.org/wiki/Boeing_Phantom_Works)
6. [NSF/NCSES: DoD RDT&E Funding Analysis FY2022](https://ncses.nsf.gov/pubs/nsf25301)
7. [CRS Defense Primer: RDT&E](https://www.congress.gov/crs-product/IF10553)
8. [AAAS: Department of Defense R&D Budget](https://www.aaas.org/programs/r-d-budget-and-policy/department-defense)
9. [AcqIRC: Valley of Death Beyond Flexible Funding](https://acqirc.org/publications/perspectives/challenges-to-innovation-transition-the-valley-of-death-results-from-more-than-a-lack-of-flexible-funding/)
10. [DefenseScoop: Multiple Valleys of Death](https://defensescoop.com/2023/03/01/there-isnt-just-one-valley-of-death-tackling-the-dod-transition-problem/)
11. [RAND: Strengthening the Defense Innovation Ecosystem](https://www.rand.org/pubs/research_reports/RRA1352-1.html)
12. [a16z: DoD Contracting for Startups 101](https://a16z.com/dod-contracting-for-startups-101/)
13. [a16z: American Dynamism](https://a16z.com/american-dynamism/)
14. [Breaking Defense: Anduril Arsenal-1 Production Approach (March 2026)](https://breakingdefense.com/2026/03/as-fury-production-starts-anduril-pledging-a-different-production-approach-at-arsenal-1/)
15. [Scioto Post: Anduril Fury Launch Team](https://www.sciotopost.com/andurils-fury-launch-team-returns-to-central-ohio-as-arsenal-1-production-nears/)
16. [Bain: A&D Engineering and R&D Report 2023](https://www.bain.com/insights/aerospace-and-defense-engineering-r-and-d-report-2023/)
17. [Itonics: 70-20-10 Rule of Innovation](https://www.itonics-innovation.com/blog/702010-rule-of-innovation)
18. [AFWERX: SBIR/STTR Program Overview](https://afwerx.com/divisions/ventures/sbir-sttr-program-overview/)
19. [ResearchGate: Ambidexterity in Aerospace & Defense Organizations](https://www.researchgate.net/publication/326259698_Ambidexterity_penetration_across_multiple_organizational_levels_in_an_aerospace_and_defense_organization)
20. [Conway's Law -- Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_law)
21. [Martin Fowler: Conway's Law](https://martinfowler.com/bliki/ConwaysLaw.html)
22. [Anduril Industries -- Wikipedia](https://en.wikipedia.org/wiki/Anduril_Industries)
23. [Contrary Research: Anduril Business Breakdown](https://research.contrary.com/company/anduril)
24. [CNBC: Saronic $1.75B Raise (March 2026)](https://www.cnbc.com/2026/03/31/autonomous-boat-startup-saronic-raises-1point75-billion-.html)
25. [Fast Company: Saronic Most Innovative Companies 2026](https://www.fastcompany.com/91503485/saronic-most-innovative-companies-2026)
26. [Shield AI](https://shield.ai/)
27. [CRS: DoD RDT&E Appropriations Structure](https://www.congress.gov/crs-product/R44711)
