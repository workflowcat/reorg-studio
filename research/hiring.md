# Hiring, Critical Roles, and Role Definition for Defense Hardware Companies

> Archived verbatim from a parallel research run. Source material for the
> "Hiring & roles" section of `src/content/overview.ts`. Kept in English
> because the underlying job market data, compensation benchmarks, and
> government-process terminology are English.

Research report for an internal planning tool — small defense-technology company (UGVs, 20 → 100+ headcount). Synthesizes publicly available data from defense startup postings, Levels.fyi, ClearanceJobs, Bessemer/Index Ventures scaling research, Instrumental's hardware handbook, DCSA/DDTC primary sources, and trade press.

---

## 1. Critical First Hires (Day 1 – Month 6)

**The founding triangle in defense hardware looks different from SaaS.** In consumer software, a two-founder CEO/CTO team can credibly ship an MVP. In defense hardware, a viable founding team usually needs three archetypes — a mission/government-credible CEO, a systems-level CTO, and an operations/manufacturing-oriented COO-equivalent — because the business simultaneously has to (a) win a customer who speaks a specialized dialect, (b) engineer a physical product against brutal environmental specs, and (c) stand up a compliant supply and production system.

**Day-1 critical vs "nice to have":**

| Day-1 critical | Month 3–6 | Wait |
|---|---|---|
| CEO (mission/government face) | First mechanical engineer | Head of Marketing |
| CTO / Head of Engineering | First electrical/firmware engineer | Dedicated HR |
| Systems architect (can be CTO) | First software/autonomy engineer | Dedicated finance (use fractional CFO) |
| Operations/contracts lead (often COO or fractional) | Program/project manager | Dedicated Facility Security Officer (can be dual-hatted) |
| Cleared US-person Empowered Official (ITAR) | Test engineer | Dedicated recruiter |

**Why the defense CEO profile is different.** Defense customers buy through relationships and program-office access, not through self-service funnels. Founding teams need what investors call high *"defense IQ"* — earned through prior military service, civilian DoD career service, or deep program-office relationships — because contracting officers need to trust the team enough to take risk on an SBIR, OT, or other non-traditional vehicle. Real examples: **Saronic Technologies** — co-founder and CEO Dino Mavrookas was a Navy SEAL with eleven years of service including eight combat tours, paired with a CTO (Vibhav Altekar) who drives autonomy architecture. **Anduril** is the common counter-example but atypical: Palmer Luckey brought consumer-hardware credibility (Oculus), and CEO Brian Schimpf came from Palantir, where he had learned the DoD sales motion. The pattern across both: at least one founder with deep end-customer fluency, paired with a technically serious builder.

**When does a COO or Head of Engineering become necessary?** As soon as the company has (a) a first contract with hardware deliverables on a schedule, and (b) more than ~10 engineers. Before that, the CTO doubles as Head of Engineering. After that the CTO typically pivots to systems architecture, external tech credibility, and R&D, and a separate engineering manager owns day-to-day execution. A dedicated COO/VP Operations tends to be needed once you have a physical facility, a production line of any kind, inventory, and vendor relationships — usually around employee 15–25.

---

## 2. Role Definitions — Key Positions

**Head of R&D / CTO.** Owns the product technical strategy, systems architecture, and R&D roadmap. Reports to the CEO. In a 20-person defense hardware company, good CTOs function as the systems architect and the technical face to DoD customers. KPIs: on-time technical milestones against CDRLs (Contract Data Requirements Lists), subsystem-level TRL progression, test-event pass rates, and recruiting senior technical talent. Common pitfall: CTOs from pure software backgrounds underestimate the cost of environmental qualification and configuration management.

**Head of Manufacturing.** Typical background: 10+ years of manufacturing experience, 5+ in leadership, with a mechanical or manufacturing engineering degree. In defense, add: AS9100 familiarity, understanding of DFARS material/country-of-origin flow-down, and experience with low-volume/high-mix production. Reports to COO or CEO. Responsibilities: production line design, make-vs-buy analysis, supplier qualification, manufacturing readiness reviews, first-article inspections, and managing the transition from engineering prototypes to LRIP (low-rate initial production).

**Head of Quality & Test (must be structurally independent).** The independence of QA from engineering is a fundamental expectation of AS9100 and of defense customer audits — quality cannot report into the head they are checking. The Head of Quality owns the Quality Management System, nonconformance/corrective action processes, first-article inspection, configuration control, and the relationship with DCMA (Defense Contract Management Agency) quality assurance representatives. Credentials that matter: ASQ CQE or CQA, AS9100 lead auditor certification, prior experience at an AS9100-certified supplier to a prime, and hands-on familiarity with MIL-STD-810 (environmental), MIL-STD-461 (EMI/EMC), and MIL-STD-883 (microcircuits) test planning and reporting.

**Program Manager (defense-specific).** A defense PM is not a software PM with a different calendar. Defense PMs operate inside the DoD acquisition system (Acquisition, JCIDS, PPBE processes), manage to government milestones (SRR, PDR, CDR, TRR), own CDRL deliverables, track Earned Value Management (EVMS on larger programs), and manage the customer interface with the government program office. A good defense PM bridges government expectations and engineering reality and can read an RFP, a SOW, and a WBS fluently. Note: capture management and proposal management are *different* skill sets from program management — a Program Manager is typically not the right person to run a capture. Capture managers are business developers who qualify and shape opportunities before an RFP drops; proposal managers are compliance-driven writers and document managers. At 20 people you may have one person wearing both hats, but plan to separate them by ~40 people.

**Head of Business Development / Government Relations.** "BD" in defense is not outbound SaaS sales. It is a three-layer function: (1) **Capture management** — identifying opportunities 12–24 months before RFP release, shaping requirements with program offices, and positioning the company; (2) **Proposal management** — writing compliant Section L/M responses, past performance citations, and technical volumes; (3) **Program-office engagement** — maintaining relationships with PEOs, PMs, and requirements sponsors across the services and OSD. Good candidates have served in government acquisition roles, at a prime's BD function, or as military requirements/capability officers. At a 20-person UGV company, this is one of the most important hires after the founding team — commonly made within the first 6–12 months.

**Facility Security Officer (FSO).** The FSO must be a US citizen employee, cleared to the level of the Facility Security Clearance (FCL), and formally designated in DCSA records. In a 20-person company, this is almost always dual-hatted (often by a COO, HR lead, or office manager who gets the clearance). The FSO becomes a dedicated full-time role somewhere between 75 and 150 employees, or sooner if the company holds multiple FCLs, handles significant classified material, or stands up a SCIF. Dedicated FSO salaries typically run ~$60K–$115K base, higher with NISPOM expertise and industrial security certifications.

**ITAR Empowered Official.** An Empowered Official (EO) is a formal role defined at 22 C.F.R. § 120.25 and required for any company registered with DDTC. The EO must be a US person directly employed by the company in a position with policy/management authority, have independent authority to refuse to sign license applications, and have documented knowledge of ITAR and EAR. Responsibilities include signing DSP-5/DSP-83 license applications, owning the ITAR compliance program, training employees, controlling technical data exposure to foreign persons (including employees), and reporting violations. At a 20-person defense hardware company this is typically the COO, General Counsel, or a dedicated Compliance/Export lead.

**Supply Chain Manager (defense-specific).** Different from a commercial supply chain manager in three specific ways. First, **country-of-origin and specialty metals**: DFARS 252.225-7014 (specialty metals), 252.225-7008/7009, and BAA flow-downs mean the SCM must track origin at component level and maintain traceability. Second, **counterfeit prevention**: DFARS 252.246-7007/7008 require a counterfeit electronic parts control plan with AS5553/AS6081 process alignment. Third, **ITAR/EAR classification of every inbound and outbound item**, flow-down of ITAR clauses to subcontractors, and managing foreign-person exposure at suppliers. Commercial SCMs optimize for cost and lead time; defense SCMs add a third dimension of compliance that can block a shipment regardless of price.

---

## 3. Engineering Team Composition at ~20 People

Published hardware team-building guidance (Instrumental) suggests effective hardware teams start at ~5 people and become comfortable at 15–25 as a product approaches readiness. For a defense UGV company at 20 total headcount, a realistic engineering split (roughly 14–15 engineers out of 20 total) is:

| Function | Heads | Notes |
|---|---|---|
| Systems engineering / systems architect | 1 (often CTO) | Owns requirements, interfaces, and verification plan |
| Mechanical design | 2–3 | Chassis, suspension, payload interfaces, packaging |
| Electrical / power / electronics | 2 | Power distribution, motor drive, PCB design |
| Embedded / firmware | 1–2 | Motor control, sensor drivers, safety interlocks |
| Software / autonomy | 2–3 | Perception, planning, ROS2, middleware, comms |
| Test & integration engineer | 1 | Environmental, EMI, field trials, corner cases |
| Manufacturing / production engineer | 1 | Bridges engineering and the production line |

**Which senior roles must exist on Day 1:** a systems architect (usually the CTO at this scale) and at least one principal/staff engineer per discipline that will face the customer in a design review. Avoid a 20-person team that is all IC-level; design reviews and TRRs need someone senior enough to make trade decisions in real time.

**Playing-coach leads vs dedicated managers.** At 20 people, every discipline lead should still be 70–80% hands-on. Dedicated people managers with no IC output start to make sense around 30–40 engineers (~50 total headcount). Promoting the best IC into a pure manager role too early is one of the most common failure modes at this stage.

---

## 4. Where Defense Hardware Talent Comes From

Four canonical pipelines, with tradeoffs:

**(1) Military veterans and SkillBridge.** RTX, Northrop, Lockheed, and most defense primes maintain formal veteran pipelines and DoD SkillBridge programs. Veterans bring mission fluency, tolerance for ambiguity, and often operator insight into how the product will be used. Best for: operators, test leads, BD, program managers. Weaker for: deep technical IC roles unless the veteran has an engineering degree and post-service industry experience. ClearanceJobs and RecruitMilitary are the dominant job boards.

**(2) Aerospace/defense primes** (Lockheed, RTX/Raytheon, Northrop, Boeing, BAE, General Dynamics, L3Harris, Rheinmetall, etc.). Prime-trained engineers bring MIL-STD, AS9100, configuration management, and qualification-test discipline — which is valuable and hard to learn on the job. They also often arrive with active clearances, which compresses the startup's ramp. The tradeoff: process gravity. Engineers from large primes can struggle with the velocity and ambiguity of a 20-person team where they have to do their own ordering and build their own test fixtures.

**(3) Government labs and FFRDCs** (JHU/APL, MIT LL, MITRE, Sandia, LLNL, DEVCOM ARL, NSWC Crane, etc.). Strong on deep tech, systems integration, and domain knowledge. Active clearances are common. Weaker on cost/schedule discipline.

**(4) Dual-use startups, robotics, and autonomous vehicles.** The best source for software/autonomy talent. Ex-Cruise, Waymo, Zoox, Nuro, Boston Dynamics, and Tesla Autopilot engineers bring perception/planning skills that are rare in traditional primes. Sitting adjacent to these: robotics-heavy academic groups (CMU RI, MIT CSAIL, Stanford, Georgia Tech, Michigan).

**What makes a candidate attractive.** In priority order: (1) active security clearance (instant schedule compression), (2) relevant platform experience (UGVs, quadrupeds, field robots, combat vehicles), (3) specific standards experience (MIL-STD-810/461, AS9100, DO-178/254 if any aviation crossover), (4) experience with the specific subsystem stack (ROS2, Nav2, specific autopilots, motor controllers).

**Software/autonomy talent — the culture challenge.** The biggest public friction points since Project Maven (2018) have produced a persistent cultural divide in Silicon Valley between engineers who will work on defense and those who will not. The practical implication for hiring: you must be able to articulate a mission that motivates engineers who are turning down FAANG total-comp packages, and you need to recruit from the subset of the market that is already mission-sympathetic (ex-military, mission-aligned robotics folks, people explicitly looking to move off consumer tech). McKinsey's A&D talent research also highlights that the primes currently hire ~2 software engineers for every hardware engineer but still cannot close their gaps — meaning startups compete with the primes for the same thin pool, and mission plus clearance-as-a-career-asset are the key differentiators.

**Remote work vs on-site.** Defense hardware is mostly on-site by physical necessity. Hardware must be touched. Controlled Unclassified Information (CUI) and ITAR technical data cannot be accessed from personal devices or arbitrary geographies. Classified work requires a cleared facility. The realistic policy at a 20-person UGV company: engineering is on-site 4–5 days per week; software and autonomy engineers may have more flexibility, but only if their workstations and data handling have been architected for remote CUI access (GCC High, approved endpoints). Foreign nationals cannot access ITAR-controlled technical data without specific licensing — this is a common hiring blocker when pulling autonomy talent from the Bay Area.

---

## 5. Compensation Patterns (2024–2026)

Defense hardware compensation has risen sharply since 2020 because new-space and defense-tech unicorns (Anduril, Shield AI, Saronic, Epirus, Skydio) have had to match or come close to FAANG to recruit software talent. Hardware-discipline comp has risen more slowly but is now materially above legacy-prime pay in the same geographies.

**Anduril (as a high-benchmark reference, from Levels.fyi):**
- Software Engineer: $207K (L3) to $517K+ (L7); median ~$268K total comp; Software Engineering Manager up to $735K at the high end.
- Mechanical Engineer: $156K (L3) to $279K+ (L6); median ~$175K; L5 median total ~$250K.
- Manufacturing Engineer: $134K–$343K range.
- Company median total comp: ~$237K.

**How defense comp compares:**
- **vs FAANG**: At the top of the market (Anduril, Shield AI senior engineers), software comp is now within 10–20% of FAANG base+bonus, with equity upside that is larger in absolute terms given private valuations but less liquid.
- **vs legacy primes** (Lockheed, RTX, Northrop): Defense-tech startups pay 20–50% more for comparable engineers, especially in software and autonomy.
- **vs SaaS startups at similar stage**: Cash comp is comparable; equity grants at early-stage defense are often slightly smaller on a percentage basis because valuations are higher (Anduril, Shield AI, Saronic all raised at mid/high 9-figure to 10-figure valuations by Series B).

**Equity norms at early-stage defense hardware.** Same playbook as mainstream tech, adjusted for valuation. Series A benchmarks from Index Ventures: a Lead/Principal engineer joining at Series A typically receives ~0.3%–1.0%; a senior IC ~0.1%–0.35%; standard 4-year vest with 1-year cliff; increasingly, early-stage teams offer 7–10 year post-termination exercise windows to remove the 90-day exercise cliff.

**Non-salary benefits that matter — and why candidates trade comp for them.** Three things repeatedly show up in accepted offers at defense startups: (1) **mission**, framed concretely around a specific end user (a platoon, a ship, a convoy), not abstractly; (2) **clearance as a career asset** — an active Secret or TS/SCI is worth $20K–$50K/year in perpetuity on the open market and a candidate leaves your company with it; (3) **job stability** — long-cycle defense programs mean fewer layoff waves than consumer tech; (4) **lifetime exemption from deciding whether to work on defense** — many mission-motivated candidates actively want the identity.

---

## 6. Onboarding and Ramp-Up Realities

**Engineer ramp-up in defense hardware is materially longer than in SaaS.** General software engineering ramp-up data shows 3–9 months to full productivity. In defense hardware, add the MIL-STD/CDRL learning curve: realistic assumption is 6 months to first meaningful technical contribution, 12 months to own a subsystem, and up to 24 months for deep defense-native judgment on an engineer coming from a commercial background.

**Security clearance timelines (2025 data).**
- **Interim Secret**: 5–30 days after a clean SF-86 submission — achievable for most new hires, lets them start real work quickly.
- **Full Secret**: The fastest 90% of DoD contractor Secret clearances completed in ~138 days end-to-end; typical range 4–8 months.
- **Interim Top Secret**: 30–90 days, significantly less common than interim Secret, denied more often.
- **Full Top Secret**: 8–18 months, commonly 12 months or more.
- **SCI / SAP access**: Additional months on top of TS; interim is very rare.

**How companies handle pre-clearance work.** Put uncleared hires on unclassified work (the majority of early-stage UGV engineering is unclassified technical data that is ITAR-controlled but not classified), segment facilities and networks so uncleared employees can still contribute, and use a pipeline of cleared contractors or consultants to cover classified reviews during the first year.

**The MIL-STD / CDRL / defense engineering learning curve.** Most new hires from commercial backgrounds need explicit training in: (a) how to read and respond to a SOW and CDRL list, (b) the purpose and structure of MIL-STD-810 test plans, (c) how to produce a DID-compliant deliverable document, (d) configuration management (ECPs, ECRs, ECNs) with real rigor, and (e) how to behave in a customer design review. Companies that ramp engineers quickly assign each new hire a "defense buddy" — someone with 10+ years of defense experience who explains the acronyms and norms for the first six months.

---

## 7. Role-Specific Hiring Pitfalls

**Signals a candidate will struggle in the defense environment:**
- Visceral negative reaction to paperwork, configuration control, or audits.
- Cannot name any MIL-STD or explain why environmental qualification matters.
- Measures success in velocity only — "how many PRs per week" without any mention of verification.
- Expresses surprise that work must be done on a government-furnished laptop or in a cleared room.
- Negative or dismissive of working with uniformed end users.
- Foreign national status without existing green card (creates ITAR constraints that rarely get resolved in time for a startup).

**The "ex-Google engineer" anti-pattern.** The failure mode is not talent — these engineers are often brilliant — it is when big-tech *culture* doesn't transfer: (a) infinite-resource assumptions (compute, parts, vendors), (b) A/B-test thinking applied to safety-critical hardware, (c) unwillingness to write documentation for customers, (d) intolerance of slow feedback loops (hardware iterations are weeks, not minutes), (e) discomfort with the mission. The engineers who do transfer well almost always self-select hard — they are already motivated by the mission and consciously trading comp and velocity for meaning. Screen for this explicitly in interviews; if it isn't there, the hire will be unhappy within 12 months.

**Process maturity vs speed.** At 20 people the right balance is "speed with just enough process to pass a government audit." Hiring a Head of Quality who comes from a legacy prime often overshoots — they will try to stand up a QMS that a 500-person company would run. Hiring someone with no defense experience will undershoot — their QMS will fail AS9100 stage-1. The best hires have run quality at another defense or aerospace startup (e.g., a new-space or small-sat company) and have calibrated what "minimum viable QMS" looks like.

---

## 8. Growth Hiring Waves: 20 → 50 → 100+

Drawing on the Brittany Laughlin / Index Ventures *Scaling Through Chaos* maturity maps and applying the defense-specific overlay:

**~30 headcount (first layer emerges):**
- First dedicated people manager in engineering (engineering manager or director) — CTO can no longer cover all 1:1s.
- First dedicated Program Manager (if one wasn't on Day 1).
- First dedicated Test Engineer and first dedicated Integration Lead.
- Dedicated contracts/compliance admin (the COO is now overloaded).
- First HR/people ops hire (often generalist, fractional recruiter).

**~50 headcount (QA separates, PMO forms):**
- Head of Quality hired as a dedicated, independent role reporting to CEO/COO (structural independence from engineering is enforceable at this size).
- Small PMO (2–4 people): head of programs, plus PMs for each active contract, plus a capture/proposal manager.
- Director-level engineering leads per discipline (mech, EE, software, systems).
- Head of Manufacturing (if not already present) — inventory, tooling, and first production ramp make this essential.
- Dedicated Supply Chain Manager with DFARS/ITAR background.
- Dedicated FSO if holding multiple FCLs or standing up a SCIF (otherwise still dual-hatted).
- First dedicated recruiter (cleared candidates have long cycles; generalist recruiting does not work).
- General Counsel or fractional GC relationship (government contracts, ITAR, IP).

**~100+ headcount (VPs replace directors, functions split):**
- VP Engineering (often replaces the "Director of Engineering" who grew organically) — may be a net-new hire from a prime or another defense-tech company.
- VP Operations / COO as a dedicated scaled role, distinct from the founding ops person.
- VP Business Development, with capture and proposal management reporting in.
- VP People.
- VP Quality (independent from Engineering) with a team underneath covering supplier quality, product quality, and compliance.
- Dedicated CFO (replaces fractional), often with FAR/CAS and government contract accounting experience (common backgrounds: Deltek Costpoint shops, former Big-4 gov-con practice).
- Dedicated Security Director / CISO if holding substantial classified work.
- Functional split within engineering: manufacturing engineering separates from design engineering; sustainment engineering forms once fielded units exist.
- Program Executives (PEs) own portfolios of programs, sitting between PMs and the CEO.

---

## Sources

- [Anduril Industries — Wikipedia](https://en.wikipedia.org/wiki/Anduril_Industries)
- [Saronic Technologies team](https://www.saronic.com/team)
- [Anduril CEO on defense industry — Cornell Chronicle](https://news.cornell.edu/stories/2025/11/anduril-ceo-offers-inside-look-defense-industry-dynamo)
- [Meet Defense Tech's New Guard — Inc. Magazine](https://www.inc.com/sam-blum/defense-techs-new-guard-theyre-young-patriotic-and-building-the-future-of-warfare/91184820)
- [More ex-military officials becoming VCs — TechCrunch](https://techcrunch.com/2024/07/10/ex-military-officials-becoming-vcs-defense-tech-investment-reached-35-billion/)
- [Beyond SaaS: New Business Models in Defense Tech](https://maggiegray.us/p/beyond-saas-new-business-models-in)
- [Roadmap: Defense Tech — Bessemer Venture Partners](https://www.bvp.com/atlas/roadmap-defense-tech)
- [The Hard Truth About Startups in Defense Technology — Defense Mavericks podcast](https://www.defensemavericks.com/the-hard-truth-about-startups-in-defense-technology-with-matthew-steckman/)
- [Anduril Software Engineer Salary — Levels.fyi](https://www.levels.fyi/companies/anduril-industries/salaries/software-engineer)
- [Anduril Mechanical Engineer Salary — Levels.fyi](https://www.levels.fyi/companies/anduril-industries/salaries/mechanical-engineer)
- [Anduril Industries Salaries — Levels.fyi](https://www.levels.fyi/companies/anduril-industries/salaries)
- [Anduril executive pay — TechCrunch](https://techcrunch.com/2024/11/26/anduril-salaries-palmer-luckey-other-execs-how-much-do-they-make/)
- [Anduril salaries on Glassdoor](https://www.glassdoor.com/Salary/Anduril-Salaries-E3546800.htm)
- [Anduril Industries compensation — 6figr](https://6figr.com/us/salary/anduril-industries)
- [Rewarding Talent: Series A option grants — Index Ventures](https://www.indexventures.com/rewarding-talent/option-grants-at-series-a)
- [Typical Employee Equity Levels — Holloway Guide](https://www.holloway.com/g/equity-compensation/sections/typical-employee-equity-levels)
- [Guide to Becoming a Facility Security Officer — ISI Defense](https://isidefense.com/blog/become-a-facility-security-officer)
- [Do You Need a Facility Security Officer? — ISI Defense](https://isidefense.com/blog/do-you-need-a-facility-security-officer-what-fsos-actually-do)
- [Facility Clearance (FCL) Setup — Industry FSO](https://industryfso.com/fcl-formation)
- [FSO salary data — ZipRecruiter](https://www.ziprecruiter.com/Jobs/Facility-Security-Officer-Fso)
- [Understanding ITAR Empowered Official Requirements — CTP Inc.](https://www.ctp-inc.com/articles/understanding-itar-empowered-official-requirements-and-responsibilities)
- [ITAR Empowered Official — FD Associates](https://fdassociates.net/itar-empowered-official/)
- [Empowered Officials Are Necessary For ITAR Compliance — Tucker Arensberg](https://www.tuckerlaw.com/2019/03/20/empowered-officials-are-necessary-for-itar-compliance/)
- [Is Your ITAR Empowered Official Qualified? — Holland & Hart](https://www.hollandhart.com/is-your-itar-empowered-official-qualified-better-check)
- [Directorate of Defense Trade Controls — US Department of State](https://www.state.gov/bureaus-offices/under-secretary-for-arms-control-and-international-security-affairs/bureau-of-political-military-affairs/directorate-of-defense-trade-controls-pm-ddtc)
- [Program Manager Responsibilities — AcqNotes](https://acqnotes.com/acqnote/careerfields/program-manager)
- [Guide to DoD Program Management Business Processes — DAU](https://aaf.dau.edu/storage/2023/09/A-Guide-to-DoD-Program-Management-Business-Processes.pdf)
- [Why Your Program Manager Would Make a Bad Capture/Proposal Manager — KSI Advantage](https://info.ksiadvantage.com/blog/articles/too-many-hats-program-manager-versus-proposal-manager)
- [Capture Management Process — VisibleThread](https://www.visiblethread.com/blog/capture-management-process/)
- [Capture Management — GovDash Glossary](https://www.govdash.com/glossary/capture-management)
- [ITAR and DFARS for Electronics Procurement — Altium](https://resources.altium.com/p/itar-and-dfars-for-electronics-procurement-and-manufacturing)
- [DFARS, BAA & ITAR Compliance for Small Contractors — NX Defense](https://nxdefense.com/dfars-baa-itar-compliance-for-small-contractors/)
- [ITAR, DFARS & CMMC Compliance in Contract Manufacturing — Armes Precision](https://armesprecision.com/itar-dfars-flowdown-compliance-contract-manufacturing/)
- [AS9100 — Wikipedia](https://en.wikipedia.org/wiki/AS9100)
- [AS9100 Aerospace/Defense Standard — Intertek](https://www.intertek.com/assurance/as9100/)
- [Head of Manufacturing Role — Techneeds](https://www.techneeds.com/2025/01/19/what-is-a-head-of-manufacturing-job-description-understanding-the-role-and-responsibilities/)
- [Engineering of Defense Systems Guidebook — OSD](https://ac.cto.mil/wp-content/uploads/2022/02/Eng-Defense-Systems_Feb2022-Cleared-slp.pdf)
- [Building the Hardware Development Team — Instrumental](https://instrumental.com/build-better-handbook/building-hardware-development-team)
- [UGV Systems Engineer job listing — Field AI](https://jobs.digitalhire.com/job-listing/opening/wrZdJO7u8pnHmfRaWtnSg)
- [Unmanned ground vehicle — Wikipedia](https://en.wikipedia.org/wiki/Unmanned_ground_vehicle)
- [Top 10 Large A&D Contractors for Cleared Job Seekers — ClearanceJobs](https://news.clearancejobs.com/2025/01/15/top-10-large-aerospace-and-defense-contractors-for-cleared-job-seekers/)
- [RTX Military and Veterans Careers](https://careers.rtx.com/global/en/militaryandveterans)
- [Northrop Grumman Careers](https://www.northropgrumman.com/careers)
- [The Aerospace and Defense Tech Talent Shortage — McKinsey](https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/debugging-the-software-talent-gap-in-aerospace-and-defense)
- [DoD's Cultural Hurdles in Attracting Tech Talent — Defense News](https://www.defensenews.com/smr/cultural-clash/2019/01/28/it-wasnt-a-fun-place-to-work-dods-cultural-hurdles-in-attracting-tech-talent/)
- [Silicon Valley back to its roots — TechCrunch](https://techcrunch.com/2022/02/05/the-rise-of-defense-tech-is-bringing-silicon-valley-back-to-its-roots/amp)
- [How Long Does a DoD Contractor Background Check Take — GCheck](https://gcheck.com/blog/how-long-does-dod-background-check-take/)
- [Navigating the 2025 Security Clearance Bottleneck — CCS Global Tech](https://ccsglobaltech.com/security-clearance-hiring-challenges-and-strategies/)
- [Interim security clearance — ClearanceJobs](https://support.clearancejobs.com/security-clearance-faqs/what-is-an-interim-security-clearance)
- [How Long to Get a Security Clearance — National Security Law Firm](http://www.nationalsecuritylawfirm.com/how-long-does-it-take-to-get-a-security-clearance-realistic-timelines-for-2025/)
- [Engineer Onboarding: The Ugly Truth About Ramp-Up Time — HackerNoon](https://hackernoon.com/engineer-onboarding-the-ugly-truth-about-ramp-up-time-7e323t9j)
- [Maturity Map: Expansion Stage (30–50) — Brittany Laughlin](https://medium.com/startup-maturity/maturity-map-expansion-stage-30-50-employees-b2bec6433f4d)
- [Maturity Map: Growth Stage (50–75) — Brittany Laughlin](https://medium.com/startup-maturity/maturity-map-growth-stage-50-75-employees-ee1d88e7b40)
- [Maturity Map: Scale Stage (75–150) — Brittany Laughlin](https://medium.com/startup-maturity/maturity-map-scale-stage-75-150-employees-98532a1e44cf)
- [Scaling Through Chaos: People Challenges by Stage — Index Ventures](https://www.indexventures.com/scaling-through-chaos/people-challenges-by-headcount-stage)
