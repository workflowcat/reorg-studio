# Defense Compliance, Standards & Org Structure — Research Brief

> Archived verbatim from a parallel research run. Source material for the
> "Defense compliance" section of `src/content/overview.ts`. Kept in
> English because the underlying standards, agencies, and URLs are English.

A practical reference for a ~20-person defense-technology company building unmanned ground vehicles (UGVs) for U.S. government customers, scaling toward 100+ headcount. This brief covers what the defense ecosystem actually demands, why each demand exists, and how each one reshapes how the company must be organized.

---

## 1. Quality Standards: ISO 9001 and AS9100

**ISO 9001** is the baseline international quality management system (QMS) standard. It requires documented processes for customer focus, leadership commitment, risk-based thinking, competence/training records, design and development controls, supplier controls, inspection and test, nonconforming product handling, corrective action, and management review. Certification is valid for three years with annual surveillance audits.

**AS9100** is the aerospace and defense extension of ISO 9001, published by SAE International and required by most primes (Lockheed, Northrop, RTX, GD, AeroVironment, etc.) and many DoD programs. AS9100 adds ~100 aerospace-specific requirements on top of ISO 9001's ~300 baseline requirements, including: risk management in program planning, configuration management, counterfeit-parts prevention, first article inspection (FAI), product safety, foreign object debris (FOD) control, human factors, supply chain traceability, and special processes (welding, heat-treat, NDT).

**Which to pursue, when.** For a UGV company selling to DoD through primes or directly to program offices, ISO 9001 is usually insufficient — primes cascade AS9100 down to Tier-2/3 suppliers contractually. Pursue ISO 9001 only if you are pre-product and need the cheapest checkbox to bid; otherwise go directly to AS9100 and save the double migration. A reasonable trigger for AS9100 is the first production contract or first prime-cascade requirement.

**Implementation timeline.** Realistic small-company (10–50 employees) AS9100 timelines are 4–9 months from kickoff to stage-2 certification audit, assuming you start with some process discipline. The Wikipedia AS9100 article and implementation guides cite roughly 4 months for a small, well-run shop; larger and messier organizations run 12–18 months. Total three-year cost for a small defense shop is typically $20,000–$45,000 including consulting and registrar fees.

**Minimum roles for a working QMS (not just a certificate):**
- **Quality Manager / Management Representative** — owns the QMS, runs management reviews, interfaces with auditors and customers. Day-1 role for any defense hardware company producing deliverables.
- **Document Controller** — maintains controlled documents, revisions, release workflow. Can be part-time or combined with Config Manager at <30 heads.
- **Internal Auditor(s)** — trained to AS9100; must be independent of the process being audited. At <30 heads this can be rotating engineers with formal internal-auditor training.
- **Inspector(s) / Quality Engineer** — first article, in-process, and final inspection. Scales with production volume.

Sources: [AS9100 - Wikipedia](https://en.wikipedia.org/wiki/AS9100), [ISO 9001 vs AS9100 - Manex](https://manexconsulting.com/blog/iso-9001-vs-as9100-for-the-aerospace-and-defense-industry/), [AS9100 Implementation Guide - NQA](https://www.nqa.com/en-us/resources/blog/march-2021/as9100-implementation-guide), [AS9100 Cost - QMS Collective](https://www.theqmscollective.com/post/how-much-does-as9100-certification-cost-for-a-small-shop).

---

## 2. MIL-STD Environmental & Electrical Testing

Three MIL-STDs drive most hardware qualification for a UGV:

- **MIL-STD-810** (environmental) — 29+ test methods covering low pressure/altitude, high/low temperature, temperature shock, solar radiation, rain, humidity, fungus, salt fog, sand and dust, explosive atmosphere, immersion, acceleration, transport shock, gunfire vibration, random vibration, acoustic noise, pyro shock, and more. Revision H is current. MIL-STD-810 is the single most-cited spec for "ruggedization" of deployed ground hardware.
- **MIL-STD-461** (EMC/EMI) — electromagnetic interference emissions (CE101, CE102, RE101, RE102) and susceptibility (CS101, CS114–118, RS103). Required anywhere the UGV has to coexist with other electronic systems without interfering with them or being disrupted by them.
- **MIL-STD-704** (power) — aircraft power characteristics. Relevant if the UGV draws or interfaces with platform power (e.g., vehicle- or helicopter-transported); for pure ground systems with their own batteries, the analogous spec is **MIL-STD-1275** for 28V DC vehicle systems.

**Why this drives a test-lab function.** These tests are expensive, slow, and destructive. A single chamber run at an external lab can cost $5k–$50k per method and take weeks to schedule. Iterating designs against test failures — which happens constantly — becomes a schedule killer unless you can pre-screen in-house. Most defense hardware startups operate a tiered model:

- **Early stage (<30 people):** everything outsourced to third-party labs (Element, NTS, Keystone, Eurofins, Washington Labs, etc.). Hire a part-time "test engineer" who writes test plans, manages lab relationships, and witnesses formal runs.
- **Mid stage (~50–150 people):** bring in-house environmental-screening capability — thermal chamber, vibration table, basic EMI pre-scan (near-field probes, GTEM cell, line conducted emissions). You run internal dev tests against MIL-STD-810/461 procedures, then book external labs only for formal qualification runs with witnessing and certified reports.
- **Later stage:** full in-house lab with accredited EMC chamber, 3-axis shaker, environmental chambers, and potentially A2LA/NVLAP accreditation.

The trade-off is capex and facilities (EMC chambers need RF-shielded rooms; shakers need seismic isolation) vs. schedule risk and cumulative external-lab spend. A rough break-even is when you're running 10+ external test weeks per year.

Sources: [MIL-STD-810 - Wikipedia](https://en.wikipedia.org/wiki/MIL-STD-810), [MIL-STD Testing - Hermon Labs](https://hermonlabs.com/military-testing-standards-mil-std-461-mil-std-704-mil-std-1275-mil-std-810/), [MIL-STD-461 vs 810 - KIMDU](https://kimdu.com/mil-std-461-vs-mil-std-810-understanding-the-difference/), [MIL-STD-810 Testing - Element](https://www.element.com/defense/mil-std-810-testing).

---

## 3. Technology Readiness Levels (TRL)

NASA developed TRLs in 1974 and formalized the 9-level scale in the 1990s; DoD adopted them for acquisition in the early 2000s. The DoD CTO publishes the official [Technology Readiness Assessment Guidebook (Feb 2025)](https://www.cto.mil/wp-content/uploads/2025/03/TRA-Guide-Feb2025.v2-Cleared.pdf).

**The 9 levels (condensed):**

1. Basic principles observed and reported.
2. Technology concept and/or application formulated.
3. Analytical and experimental proof-of-concept.
4. Component/breadboard validated in **laboratory** environment.
5. Component/breadboard validated in **relevant** environment.
6. System/subsystem model or prototype demonstrated in a **relevant** environment.
7. System prototype demonstration in an **operational** environment.
8. Actual system completed and **qualified** through test and demonstration.
9. Actual system **proven** in operational environment (successful mission operations).

**How DoD uses TRL to gate funding.** TRL is the common language for acquisition program managers and 6.1/6.2/6.3/6.4/6.5 R&D categories. SBIR Phase I is typically TRL 2–3; Phase II targets TRL 4–6; Phase III / transition-to-PoR requires TRL 6+. DoD policy historically requires TRL 6 (demonstration in a relevant environment) at the Milestone B review (entry into EMD) and TRL 7+ at Milestone C (entry into production). The Middle Tier of Acquisition (MTA) and Software Acquisition pathways have relaxed this, but TRL is still the default lingua franca in a proposal narrative.

**Implications for program management and R&D phasing.** A company's tech roadmap should be explicitly mapped against TRL milestones, because funding vehicles are gated to them. R&D work should be organized in distinct phases: lab demo (TRL 3–4), integrated breadboard in representative environment (TRL 5), engineering development unit in relevant environment (TRL 6), operational prototype at a customer test site (TRL 7), and qualification test (TRL 8). Each transition is a funding inflection — and typically a customer sign-off point that requires documented evidence. This shapes the PMO role: program managers must produce TRL evidence packages, not just CAD and test data.

Sources: [Technology Readiness Level - Wikipedia](https://en.wikipedia.org/wiki/Technology_readiness_level), [NASA TRL Definitions](https://www.nasa.gov/wp-content/uploads/2017/12/458490main_trl_definitions.pdf), [DoD TRA Guidebook Feb 2025](https://www.cto.mil/wp-content/uploads/2025/03/TRA-Guide-Feb2025.v2-Cleared.pdf), [TRL Overview - AcqNotes](https://acqnotes.com/acqnote/tasks/technology-readiness-level).

---

## 4. Configuration Management, CDRL/DID, and PLM

**Why CM is non-negotiable in defense.** Every unit delivered to a government customer must be traceable to an as-built configuration record, and every engineering change must be recorded with full impact analysis. This is because weapons systems have 20–40 year service lives, are maintained and repaired by organizations that never met the original design team, and are safety-critical. Configuration Management (CM) is the discipline that makes any of that possible. Standard references are EIA-649 (NCMA) and MIL-HDBK-61A.

**CDRL and DID.** The **Contract Data Requirements List (CDRL)**, filed as DD Form 1423, is the authoritative list of data deliverables the contractor owes the government under a contract: technical data packages, test reports, program management review slides, software documentation, failure analysis reports, configuration audit reports, etc. Each line item points to a **Data Item Description (DID)** — a five-digit-coded standardization document (e.g., DI-SESS-81000 for product drawings, DI-CMAN-81253A for configuration audit reports) that specifies the data's content, format, and delivery cadence. DIDs are catalogued in the DLA's ASSIST database.

In practice, CDRLs drive enormous amounts of engineering effort — often 20–40% of a program's labor is producing CDRL deliverables rather than designing the product. Underestimating CDRL effort is the single most common cost-overrun cause in small-company DoD programs. The program manager must read every CDRL line item and translate it into deliverable ownership, format, and schedule.

**PLM/PDM systems.** The dominant defense PLM platforms are:
- **PTC Windchill** — market leader in aerospace/defense, with DISA-approved cloud environments and DoD IL5 accreditation. Strong configuration management and variant control.
- **Siemens Teamcenter** — deep customizability, strong change management, widely used at prime contractors and auto/aerospace.
- **Dassault ENOVIA / 3DEXPERIENCE** — tightly coupled with CATIA CAD, common at airframers.
- **Aras Innovator** — lower TCO, popular with mid-market defense suppliers.
- **Arena / Upchain / Duro** — cloud-native alternatives increasingly adopted by defense startups.

**How document control shapes engineering workflow.** In a rigorous CM environment, you cannot change a released drawing or spec without a formal Engineering Change Request (ECR), impact analysis, Change Control Board (CCB) approval, Engineering Change Order (ECO) release, and cascading updates to the BOM, production work instructions, test procedures, and training materials. This is slow compared to startup engineering habits. The org must accept that once a part is released to production or delivered, it is no longer a personal file — it is a controlled artifact. This is a major culture shock that sinks many defense hardware startups that grew up in agile iterate-fast mode.

Sources: [CDRL - Wikipedia](https://en.wikipedia.org/wiki/Contract_data_requirements_list), [CDRL/DID - DAU](https://www.dau.edu/blogs/product-support-contract-data-requirements-list-cdrl), [CDRL - AcqNotes](https://acqnotes.com/acqnote/careerfields/contract-data-requirements-list-cdrl), [Windchill PLM - PTC](https://www.ptc.com/en/products/windchill), [Windchill vs Teamcenter - CLEVR](https://www.clevr.com/blog/ptc-windchill-vs-teamcenter-which-tool-is-better-for-your-team).

---

## 5. Export Control — ITAR, EAR, Wassenaar

**ITAR** (International Traffic in Arms Regulations, 22 CFR 120–130) is administered by the State Department's **Directorate of Defense Trade Controls (DDTC)**. It governs defense articles and services on the **U.S. Munitions List (USML)** — including unmanned ground vehicles designed for military application, their components, and related technical data.

**EAR** (Export Administration Regulations, 15 CFR 730–774) is administered by the Commerce Department's **Bureau of Industry and Security (BIS)**. It governs dual-use items on the **Commerce Control List (CCL)** — commercial items with potential military application (e.g., certain sensors, navigation, computing).

**Wassenaar Arrangement** is the 42-nation multilateral export-control regime that informs USML and CCL content. U.S. companies don't directly comply with Wassenaar — they comply with ITAR/EAR, which implement Wassenaar-aligned controls plus unilateral U.S. additions.

**Empowered Official requirement.** An ITAR-registered company must designate an **Empowered Official** — a U.S. person employee with authority to sign license applications, stop exports, and be held accountable. This is often the CEO/COO early on, then migrates to a dedicated Export Control Officer (ECO) or Trade Compliance Manager as the company grows. The 2023 updated DDTC ITAR Compliance Program (ICP) Guidelines outline seven core elements; the first is a written Export Compliance Management Commitment Statement signed by the CEO.

**How export control reshapes the company:**

- **Hiring.** Technical staff with access to ITAR-controlled data must be "U.S. persons" (citizens, lawful permanent residents, refugees, asylees) — unless the company obtains an export license for a specific foreign national, which is slow and often denied. This dramatically narrows the engineer talent pool, especially for ML/autonomy roles. Recruiters must pre-screen for U.S.-person status legally (not by national origin, which is discrimination — by citizenship status, which is permitted under the ITAR carve-out).
- **Supply chain.** Every supplier gets a flow-down ITAR clause. Foreign suppliers require export authorization. Even sharing a CAD file or a specification with a non-U.S. vendor is a "deemed export" and can be a violation.
- **Facility access.** Foreign national visitors need escort, logged access, and in some cases pre-authorization. Cloud storage of ITAR data must use U.S.-person-only administered, U.S.-geo-fenced environments (most companies use AWS GovCloud, Azure Government, or ITAR-compliant Google Cloud).
- **Leadership roles.** Non-U.S. persons cannot serve as CEO/COO of most ITAR manufacturers without complications.

**Penalties.** Civil penalties up to ~$1.27M per ITAR violation (as of 2023). Criminal penalties for willful violations: up to **20 years in prison** and up to **$1M per violation** per individual. Debarment from all USG contracting. These penalties are why ITAR is treated as a board-level risk at every serious defense company — senior leadership is personally exposed, not just the corporate entity.

Sources: [ITAR - Wikipedia](https://en.wikipedia.org/wiki/International_Traffic_in_Arms_Regulations), [Export Compliance Penalties - CVG Strategy](https://cvgstrategy.com/export-compliance-penalties/), [22 CFR Part 120 - eCFR](https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M/part-120), [DDTC ICP Guidelines](https://www.pmddtc.state.gov/ddtc_public?id=ddtc_kb_article_page&sys_id=KB0010123), [ITAR Compliance Program - Shipping Solutions](https://shippingsolutionssoftware.com/blog/itar-compliance-program-7-core-requirements-from-ddtc-guidelines).

---

## 6. Security — Personnel, Physical, Information

**Personnel clearances.** Administered by the Defense Counterintelligence and Security Agency (DCSA) under the National Industrial Security Program (NISP), documented in the NISPOM (32 CFR Part 117). Common levels: Confidential, Secret, Top Secret, TS/SCI. Typical 2025 processing times:
- **Secret:** 6–8 months, with interim clearances often available in 30–90 days.
- **Top Secret:** 12–18 months; TS/SCI 8–15+ months total.
- Interim clearance approval rates: ~70% for Secret, ~40–50% for TS.

This timeline means classified-program readiness must be planned 12+ months ahead of any classified contract award.

**Facility clearances (FCL).** A contractor cannot access or store classified information without an FCL, and cannot be sponsored for an FCL without a government or cleared-prime sponsor. FCL processing: 3–12 months. Required roles: **Facility Security Officer (FSO)**, **Insider Threat Program Senior Official (ITPSO)**, and **Information Systems Security Manager (ISSM)**. Key Management Personnel (KMP) — typically CEO, senior executives, FSO — must hold personnel clearances at the FCL level.

**Physical security facilities:**
- **Controlled Unclassified Area** — access-controlled space for CUI / ITAR data; no classified work. Most small defense companies start here.
- **Closed Area** — approved by DCSA for open storage and processing of classified material up to a certain level, with GSA-approved locks, access control, alarms, and guard force requirements.
- **SCIF (Sensitive Compartmented Information Facility)** — governed by **ICD/ICS 705**. Required for TS/SCI work. Construction is specialized and expensive: RF shielding, TEMPEST considerations, sound attenuation, vault doors, continuous monitoring. A small SCIF costs $500k–$2M+ to build and must be accredited before use.

**NIST SP 800-171 and CMMC.** Even without classified work, any defense contractor handling **Controlled Unclassified Information (CUI)** — which includes most engineering data on a DoD program — must comply with NIST SP 800-171's 110 security controls, per **DFARS 252.204-7012**. **CMMC 2.0** (launched Jan 2025) formalizes verification: Level 1 (17 practices, self-assessment) for FCI; Level 2 (110 controls aligned to 800-171, third-party C3PAO assessment) for CUI; Level 3 (enhanced, DIBCAC assessment) for high-sensitivity programs. Any UGV company handling program technical data needs to plan for CMMC Level 2.

**Why security is independent of operations.** The FSO role reports for security matters directly to the CEO (not through engineering or operations), because the FSO is personally accountable to DCSA and must have authority to halt operations if a security violation is detected. This is a hard structural requirement, not a best practice. Similarly, the ISSM and insider threat program must be able to operate independently of the programs they oversee. This is why defense orgs typically have a Security function reporting to the CEO or COO, not buried inside Engineering or IT.

Sources: [DCSA Facility Clearances](https://www.dcsa.mil/FCL/Maintaining-Personnel-Security-Clearances/), [SCIF Requirements - VERTEX](https://vertexeng.com/insights/requirements-and-challenges-construction-of-scifs/), [Security Clearance Timelines 2025 - gcheck](https://gcheck.com/blog/how-long-does-dod-background-check-take/), [CMMC 2.0 - Exostar](https://www.exostar.com/blog/cmmc-compliance/cmmc-2-0-compliance-101-essential-insights-for-businesses/), [CMMC vs NIST 800-171 - TrustCloud](https://www.trustcloud.ai/grc/cmmc-vs-nist-key-differences-defense-contractors-must-understand/), [NIST 800-171 - PreVeil](https://www.preveil.com/blog/nist-800-171/).

---

## 7. Independent Verification & Validation (IV&V)

**Why DoD requires IV&V.** For mission- and safety-critical software (which includes autonomy, fire control, and any system whose failure could result in casualty, mission abort, or loss of a major platform), DoD programs often require IV&V performed by an entity independent of the developer. The rationale is confirmation bias and accountability: the team that wrote the code has strong psychological and financial incentives to believe it works. An external team verifying against requirements and validating against mission needs catches errors the dev team literally cannot see.

**The four dimensions of independence** (per NIST and DoD practice):
- **Technical independence** — IV&V personnel are not involved in requirements, design, or implementation.
- **Managerial independence** — responsibility sits in a separate management chain from development.
- **Financial independence** — IV&V budget is owned by a separate organization, so the developer cannot starve IV&V to save their own schedule.
- **Contractual independence** — IV&V is executed on a separate contract, so the developer cannot redirect scope.

**Organizational implications.** Even inside a single company, this drives a structural pattern: **QA/Test must be organizationally independent from Engineering** — reporting to a Chief Quality Officer, VP Quality, or directly to the CEO, not to the VP Engineering. The test team's budget must not be a line item under the project manager who is schedule-pressured. The mature pattern is:

- **Engineering** owns design and developer testing (unit, integration).
- **Systems Engineering / V&V team** owns requirements verification.
- **Quality** owns independent audit, test witnessing, and sign-off authority.
- For critical software, a truly independent **IV&V contractor** is engaged under a separate government contract that the developer does not control.

This independence is not optional signaling — it is how DoD customers validate that software for a UGV (where errors can injure or kill operators or bystanders) is actually fit for purpose.

Sources: [IV&V - NIST Glossary](https://csrc.nist.gov/glossary/term/independent_verification_and_validation), [IV&V Through the Eyes of DoD - Logapps](https://logapps.com/insights/blog/independent-verification-and-validation-ivv-through-eyes-of-dod/), [NASA SWE-141 IV&V](https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604595/SWE-141+-+Software+Independent+Verification+and+Validation), [IV&V - REI Systems](https://www.reisystems.com/achieving-success-in-software-development-the-essential-role-of-verification-validation-and-independence-for-ensuring-mission-quality/).

---

## 8. Defense Procurement Cycles and BD/PM Org Implications

**Typical cycle lengths.** From first conversation with a government customer to contract award, expect:
- **SBIR Phase I:** 3–9 months from topic release to award.
- **Traditional RDT&E/procurement:** 12–36 months from initial customer engagement to contract award — often longer for new-entrant companies.
- **Program-of-Record award:** 3–5+ years of ecosystem engagement before primary competitive bid.

This long-horizon sales cycle fundamentally shapes how the commercial/BD/program-management function must be structured.

**Three distinct roles, often confused:**

- **Business Development (BD)** — long-horizon, relationship-driven, ecosystem participation. BD identifies future opportunities, understands customer roadmaps, attends industry conferences, tracks warfighter needs, and shapes acquisition strategies. BD is *not* about winning a specific contract — it's about being in the room 18 months before the RFP drops.
- **Capture Management** — tactical, opportunity-specific. Once an opportunity is identified, a capture manager runs the "capture plan" for that specific pursuit: customer intimacy (understanding hot buttons, gaps, discriminators), competitive analysis, teaming arrangements, solution architecture, price-to-win, win strategy, and gate reviews (Gate 0/1/2/3 in Shipley methodology). Capture culminates in a proposal.
- **Proposal Management** — a distinct discipline. Proposal managers orchestrate the 30–60 day sprint from RFP release to submission: section owners, color team reviews (Pink, Red, Gold, White Glove), compliance matrix, cost volume coordination, production and submission. In a small company this may be contracted out, but the capture manager typically owns the proposal.
- **Program Management** — takes over at contract award. PMs own execution: schedule (IMS), budget (EVMS for larger programs), customer interface (TIMs, program reviews, monthly status), CDRL delivery, risk management, and subcontractor management.

**Proposal writing as a competence.** Good defense proposal writing is a learnable, specialized skill — not technical writing, not marketing copy. It requires responding directly to the Statement of Work (SOW) and Section L/M requirements, using "ghosting" against competitors, threaded win themes, compliance tables, and specific Shipley conventions. Hiring an experienced proposal writer or professional consultant is one of the highest-ROI moves for an early-stage defense company. Losing a proposal on non-compliance (failing to respond to a Section L instruction) is both common and catastrophic.

**Customer relationship management.** Government program offices are not buying purely on best value — they are buying on trust, risk reduction, and political cover for the contracting officer. This means BD/capture/PM must cultivate multi-year relationships with specific program managers, chief engineers, contracting officers, warfighter representatives, and congressional staff. CRM systems in defense are less about sales funnels and more about mapping the org chart of the customer and tracking every touchpoint.

Sources: [DoD Acquisition - Hinz Consulting](https://hinzconsulting.com/dod-acquisition/), [DoD Acquisition Basics - SBIR](https://www.sbir.gov/tutorials/acquisition-basics/tutorial-1), [Capture Management - Capture2Proposal](https://capture2proposal.com/capture-management-pursuing-government-opportunities-procurements/), [BD vs Capture - Jefferson SG](https://jeffersonsg.com/distinguishing-federal-business-development-from-capture/), [DoDD 5000.01 Defense Acquisition System](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodd/500001p.pdf).

---

## 9. Practical Implications for a 20-Person Defense Startup

### Day 1 (0–6 months from first government contract)

- **Empowered Official / Export Control Officer** — must exist on paper before any ITAR work. Initially the CEO or COO.
- **Quality Manager (could be a senior engineer wearing the hat)** — start building documented procedures even before AS9100 pursuit. Essential because quality debt compounds and is painful to retrofit.
- **Facility Security Officer** — required if any FCL is being pursued; part-time role initially.
- **Consult-out:** legal (ITAR/FAR/DFARS specialized counsel — not a generalist), quality (consultant to set up AS9100 document tree), cybersecurity (NIST 800-171 gap assessment), proposal writing (for major pursuits).
- **Systems:** get into a proper PLM/PDM early (even Arena or Duro at this stage beats Dropbox+Google Drive). Set up AWS GovCloud or Microsoft GCC High for ITAR/CUI data handling — doing this after you have 10 engineers spread across Google Workspace is miserable.

### Month 6 → Year 2 (20 → 50 heads)

- **Full-time Quality Manager** at ~25–30 employees (cannot be wearing three hats).
- **Dedicated Export Control Officer** — once you have foreign-national candidates you want to hire or any foreign customer/supplier engagement.
- **Dedicated FSO** once FCL is active and personnel clearances are in flight.
- **Program Management Office** (at least one full-time PM per active program).
- **CMMC Level 2 compliance complete** — required to bid on most DoD primes. This is a ~6–12 month effort.
- **First internal auditor** trained and independent from the processes being audited.
- **Proposal manager** (or strong consulting relationship) — once you're submitting >2 proposals per quarter.

### Year 2+ (50 → 100+ heads)

- **Chief Quality Officer or VP Quality** reporting to CEO, independent of Engineering.
- **Director of Security** owning FSO, ITPSO, ISSM roles.
- **Test Lab Manager** running in-house environmental screening.
- **Capture Manager** role distinct from BD and from PM.
- **Configuration Manager** as a distinct role from Document Controller.
- **Subcontracts Manager** — once supply chain has >10 flow-down-required suppliers.

### What can be outsourced

- **ITAR/export-control legal counsel** — always. This is too specialized for in-house generalists until you are 100+ heads.
- **AS9100 consulting** — essential for implementation, optional for maintenance.
- **Cybersecurity / CMMC** — outsourced assessors are required (C3PAOs) and outsourced implementers are common.
- **Formal environmental and EMC testing** — outsourced until lab break-even.
- **Proposal writing specialists** — common on pursuit-by-pursuit basis.
- **SCIF design and build** — always specialized contractors.
- **DCMA and DCAA audit preparation** — specialized accounting firms know what FAR Part 31 allowable costs actually look like.

### Red flags and common trip-ups

1. **Treating ITAR as "we'll deal with it later."** The moment you hire one non-U.S.-person engineer without a plan, you have a potential criminal exposure. Every defense lawyer has war stories about startups that onboarded a brilliant foreign PhD student and then couldn't show them any CAD files.
2. **Underestimating CDRL labor.** Program bids that don't budget 20–40% of hours to documentation lose money.
3. **Agile habits colliding with configuration management.** Startup engineering culture ("I just pushed a fix, YOLO") is incompatible with controlled baselines. This cultural transition usually requires leadership intervention.
4. **Quality as a checkbox for a certificate vs. quality as a working system.** Companies that buy an AS9100 certificate from a sketchy registrar without building real internal processes fail their first major customer audit and lose the contract.
5. **CUI spillage on commercial IT.** Sending ITAR drawings over personal Gmail or collaborating on a standard Google Drive is a reportable violation. Must move to GCC High / GovCloud before you have any ITAR-controlled data at all.
6. **Confusing BD with sales.** Defense BD is not transactional; it's relationship-driven ecosystem work. Hiring a commercial sales leader and expecting them to sell to a Program Office ends in 18 months of wasted headcount.
7. **Running IV&V inside the dev team.** Not independent. Fails scrutiny. Have to redo it under someone else's budget.
8. **Not sponsoring clearances early enough.** If you wait until contract award to start the 12–18 month TS process, you miss the program.
9. **Signing prime-flowdown clauses without reading them.** Prime subcontract agreements cascade FAR, DFARS, CMMC, AS9100, and intellectual property clauses down without negotiation unless you push back. The default clauses are hostile to small suppliers.
10. **Not tracking the CDRL as a schedule in its own right.** The CDRL delivery schedule is often more demanding than the hardware build schedule, and many small companies discover it too late.

---

### Key official sources to bookmark

- **DoD CTO — Technology Readiness Assessment Guidebook (Feb 2025):** <https://www.cto.mil/wp-content/uploads/2025/03/TRA-Guide-Feb2025.v2-Cleared.pdf>
- **State Department DDTC (ITAR):** <https://www.pmddtc.state.gov>
- **22 CFR Parts 120–130 (ITAR — eCFR):** <https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M/part-120>
- **DCSA (facility and personnel clearances):** <https://www.dcsa.mil>
- **NIST SP 800-171 and CMMC 2.0 information:** <https://csrc.nist.gov> and <https://dodcio.defense.gov/CMMC/>
- **DLA ASSIST (DIDs and MIL-STDs):** <https://quicksearch.dla.mil>
- **DoDD 5000.01 - Defense Acquisition System:** <https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodd/500001p.pdf>
- **SAE AS9100 standard family:** SAE International (purchase required)
