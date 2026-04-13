import type { Block, Phase, RaciActivity, Role, Scenario } from "./types";

// ---------- Phases ----------

export const PHASES: Phase[] = [
  {
    id: 1,
    name: "Foundation",
    shortLabel: "20 → 30",
    headcountRange: { min: 20, max: 30 },
    description:
      "Lean 4-block model. Leads operate as playing-coaches. QA sits inside Manufacturing with independent escalation to CEO. Operations is a single combined block. One primary government contract plus 1-2 pilots.",
  },
  {
    id: 2,
    name: "Growth",
    shortLabel: "30 → 50",
    headcountRange: { min: 30, max: 50 },
    description:
      "Quality & Test separates into an independent department reporting to CEO. PMO formalizes with dedicated program managers. Security Officer role appears. R&D scales to 14-18 people across three full teams. AS9100 certification.",
  },
  {
    id: 3,
    name: "Scale",
    shortLabel: "50 → 100+",
    headcountRange: { min: 50, max: 120 },
    description:
      "Full functional-matrix: functional verticals plus per-platform Integrated Product Teams. COO owns R&D, Manufacturing, and Supply Chain. Each platform has a dedicated Program Manager. Security covers the full stack (classification, cyber, export control).",
  },
];

// ---------- Blocks (top-level functional departments) ----------

export const DEFAULT_BLOCKS: Block[] = [
  {
    id: "ceo",
    code: "CEO",
    name: "CEO / Founder",
    purpose:
      "Strategic direction, government relations at MoD / procurement level, investor and donor programs, independent escalation path for Quality.",
    color: "zinc",
    isCore: true,
    headcountByPhase: {
      1: { min: 1, max: 1 },
      2: { min: 1, max: 2 },
      3: { min: 2, max: 3 },
    },
  },
  {
    id: "coo",
    code: "COO",
    name: "COO / Head of R&D",
    purpose:
      "Internally-focused leader. Owns technical strategy, TRL roadmap, cross-R&D coordination, and the R&D-to-Manufacturing interface. Chairs PDR / CDR / TRR / PRR gates.",
    color: "slate",
    parentId: "ceo",
    reportsTo: "CEO",
    isCore: true,
    headcountByPhase: {
      1: { min: 1, max: 1 },
      2: { min: 1, max: 1 },
      3: { min: 1, max: 2 },
    },
  },
  {
    id: "rnd",
    code: "R&D",
    name: "R&D — Engineering & Development",
    purpose:
      "Technical core. Mechanical platforms, embedded systems, video/comms. Maintains a dual portfolio — 70% platform evolution and 30% exploratory work.",
    color: "amber",
    parentId: "coo",
    reportsTo: "COO",
    isCore: true,
    headcountByPhase: {
      1: { min: 8, max: 10 },
      2: { min: 14, max: 18 },
      3: { min: 25, max: 35 },
    },
  },
  {
    id: "mfg",
    code: "MFG",
    name: "Manufacturing",
    purpose:
      "Low-rate assembly, procurement, and — in the Foundation phase — embedded QA with independent escalation to CEO. Focus on flexibility, traceability, and quality rather than throughput.",
    color: "emerald",
    parentId: "ceo",
    reportsTo: "CEO",
    isCore: true,
    headcountByPhase: {
      1: { min: 5, max: 7 },
      2: { min: 8, max: 12 },
      3: { min: 15, max: 25 },
    },
  },
  {
    id: "qat",
    code: "QAT",
    name: "Quality & Test",
    purpose:
      "Independent QA, environmental and EMC testing, IV&V for software, customer acceptance support. In the Foundation phase QA is embedded inside Manufacturing (headcount counted there) with independent escalation to CEO. Separates into its own block in the Growth phase.",
    color: "rose",
    parentId: "ceo",
    reportsTo: "CEO (from Phase 2)",
    isCore: true,
    headcountByPhase: {
      1: { min: 0, max: 0 },
      2: { min: 2, max: 4 },
      3: { min: 6, max: 10 },
    },
  },
  {
    id: "pmo",
    code: "PMO",
    name: "Program Management Office",
    purpose:
      "Central coordination hub for all platform programs. Program managers lead cross-functional Integrated Product Teams and own the government customer interface.",
    color: "violet",
    parentId: "ceo",
    reportsTo: "CEO",
    headcountByPhase: {
      1: { min: 0, max: 0 },
      2: { min: 1, max: 2 },
      3: { min: 4, max: 6 },
    },
  },
  {
    id: "bdg",
    code: "BDG",
    name: "Business Development & GR",
    purpose:
      "Capture management, proposal writing, government program office relations, international partnerships, and export-control aware BD.",
    color: "sky",
    parentId: "ceo",
    reportsTo: "CEO",
    isCore: true,
    headcountByPhase: {
      1: { min: 3, max: 3 },
      2: { min: 4, max: 6 },
      3: { min: 8, max: 12 },
    },
  },
  {
    id: "sec",
    code: "SEC",
    name: "Security & Compliance",
    purpose:
      "Classification, facility security, cyber (NIST 800-171 / CMMC), export control (ITAR / EAR / Wassenaar). Independent from operations — can halt activity on security breach.",
    color: "red",
    parentId: "ceo",
    reportsTo: "CEO",
    headcountByPhase: {
      1: { min: 0, max: 0 },
      2: { min: 1, max: 2 },
      3: { min: 2, max: 3 },
    },
  },
  {
    id: "ops",
    code: "OPS",
    name: "Operations",
    purpose:
      "Finance, HR, logistics, facilities, IT. Combined in the Foundation phase for efficiency; splits into Finance / HR / Supply Chain as headcount grows.",
    color: "teal",
    parentId: "ceo",
    reportsTo: "CEO",
    isCore: true,
    headcountByPhase: {
      1: { min: 3, max: 3 },
      2: { min: 5, max: 8 },
      3: { min: 10, max: 15 },
    },
  },
  // ---- R&D sub-teams ----
  {
    id: "rnd-p",
    code: "R&D-P",
    name: "Platforms",
    purpose:
      "Chassis, suspension, drivetrain, payload integration. CAD/CAE, FEA, structural analysis. Lead serves as Product Owner for the mechanical platform line.",
    color: "amber",
    parentId: "rnd",
    reportsTo: "R&D Lead / COO",
    headcountByPhase: {
      1: { min: 3, max: 4 },
      2: { min: 5, max: 7 },
      3: { min: 8, max: 12 },
    },
  },
  {
    id: "rnd-e",
    code: "R&D-E",
    name: "Embedded",
    purpose:
      "Firmware, motor control, sensor integration, autonomous navigation, ROS2. Lead serves as Product Owner for the Control System subsystem.",
    color: "amber",
    parentId: "rnd",
    reportsTo: "R&D Lead / COO",
    headcountByPhase: {
      1: { min: 2, max: 3 },
      2: { min: 4, max: 6 },
      3: { min: 7, max: 10 },
    },
  },
  {
    id: "rnd-v",
    code: "R&D-V",
    name: "Video & Comms",
    purpose:
      "Video streaming, radio links, channel encryption, operator control station. Lead serves as Product Owner for the Video Streaming subsystem.",
    color: "amber",
    parentId: "rnd",
    reportsTo: "R&D Lead / COO",
    headcountByPhase: {
      1: { min: 2, max: 2 },
      2: { min: 3, max: 4 },
      3: { min: 5, max: 8 },
    },
  },
  {
    id: "rnd-si",
    code: "R&D-SI",
    name: "Systems Integration",
    purpose:
      "Integrates mechanical, electronic, and software subsystems. Interface control, system-level test, configuration management. Appears in the Growth phase.",
    color: "amber",
    parentId: "rnd",
    reportsTo: "R&D Lead / COO",
    headcountByPhase: {
      1: { min: 0, max: 0 },
      2: { min: 1, max: 2 },
      3: { min: 3, max: 5 },
    },
  },
  // ---- MFG sub-teams ----
  {
    id: "mfg-a",
    code: "MFG-A",
    name: "Assembly",
    purpose:
      "Mechanical assembly, electronics assembly, wiring harnesses, final platform integration.",
    color: "emerald",
    parentId: "mfg",
    reportsTo: "Head of Manufacturing",
    headcountByPhase: {
      1: { min: 3, max: 4 },
      2: { min: 5, max: 8 },
      3: { min: 10, max: 16 },
    },
  },
  {
    id: "mfg-s",
    code: "MFG-S",
    name: "Procurement",
    purpose:
      "Supplier sourcing and qualification, ERP/MRP, second-source programs, long-lead item management (6-18 months lead time on defense-grade components).",
    color: "emerald",
    parentId: "mfg",
    reportsTo: "Head of Manufacturing",
    headcountByPhase: {
      1: { min: 1, max: 2 },
      2: { min: 2, max: 3 },
      3: { min: 4, max: 6 },
    },
  },
  {
    id: "mfg-pr",
    code: "MFG-PR",
    name: "Prototyping",
    purpose:
      "Rapid prototyping, 3D printing, one-off CNC parts, tooling. Separates from Assembly in the Growth phase to avoid bottlenecks.",
    color: "emerald",
    parentId: "mfg",
    reportsTo: "Head of Manufacturing",
    headcountByPhase: {
      1: { min: 0, max: 0 },
      2: { min: 1, max: 2 },
      3: { min: 2, max: 4 },
    },
  },
];

// ---------- Roles ----------

export const DEFAULT_ROLES: Role[] = [
  // CEO
  {
    id: "role-ceo",
    blockId: "ceo",
    title: "Chief Executive Officer / Founder",
    seniority: "lead",
    count: 1,
    phase: 1,
    responsibilities: [
      "Company strategic direction",
      "Government relations (MoD, General Staff, procurement agencies)",
      "Investor and donor program management",
      "Independent escalation path for Quality issues",
      "M&A and strategic partnerships",
    ],
    skills: [
      "Defense industry experience",
      "Government procurement",
      "Fundraising",
      "Engineering literacy",
    ],
  },
  // COO
  {
    id: "role-coo",
    blockId: "coo",
    title: "Chief Operating Officer / Head of R&D",
    seniority: "lead",
    count: 1,
    phase: 1,
    responsibilities: [
      "Technical strategy and TRL progression",
      "Coordination of three R&D tracks and resource allocation",
      "Chairing PDR, CDR, TRR, PRR design review gates",
      "Managing the 70 / 30 dual-portfolio split",
      "Ownership of the Engineering Change Order (ECO) process",
      "Primary engineering interface to customer program office",
    ],
    skills: [
      "Systems engineering background",
      "TRL / defense R&D experience",
      "People management",
      "Requirements management",
    ],
  },
  // R&D sub-block leads
  {
    id: "role-rnd-p-lead",
    blockId: "rnd-p",
    title: "Platforms Lead (Mechanical)",
    seniority: "lead",
    count: 1,
    phase: 1,
    responsibilities: [
      "Chassis, suspension, drivetrain, hull design",
      "Payload integration",
      "CAD/CAE, FEA, structural analysis",
      "Product Owner for the platform line",
    ],
    skills: ["SolidWorks", "ANSYS", "FEA", "Mechanical design leadership"],
  },
  {
    id: "role-rnd-e-lead",
    blockId: "rnd-e",
    title: "Embedded Lead",
    seniority: "lead",
    count: 1,
    phase: 1,
    responsibilities: [
      "Firmware architecture",
      "Motor control and sensor integration",
      "Autonomous navigation stack",
      "Product Owner for the Control System",
    ],
    skills: ["C/C++", "RTOS", "ROS2", "Embedded Linux"],
  },
  {
    id: "role-rnd-v-lead",
    blockId: "rnd-v",
    title: "Video & Comms Lead",
    seniority: "lead",
    count: 1,
    phase: 1,
    responsibilities: [
      "Video streaming pipeline",
      "Radio link design",
      "Channel encryption",
      "Operator control station",
    ],
    skills: ["GStreamer", "FFmpeg", "SDR", "RF engineering"],
  },
  {
    id: "role-rnd-p-eng",
    blockId: "rnd-p",
    title: "Mechanical Design Engineer",
    seniority: "senior",
    count: 3,
    phase: 1,
    responsibilities: [
      "Detailed mechanical design",
      "Drawings and BOMs",
      "DfM / DfA reviews with Manufacturing",
    ],
    skills: ["SolidWorks", "GD&T", "Prototyping"],
  },
  {
    id: "role-rnd-e-eng",
    blockId: "rnd-e",
    title: "Embedded Developer",
    seniority: "senior",
    count: 2,
    phase: 1,
    responsibilities: [
      "Firmware implementation",
      "Driver development",
      "Sensor fusion",
    ],
    skills: ["C/C++", "Linux", "ROS2", "CAN/Ethernet"],
  },
  {
    id: "role-rnd-v-eng",
    blockId: "rnd-v",
    title: "Video / RF Engineer",
    seniority: "senior",
    count: 1,
    phase: 1,
    responsibilities: [
      "Video encoder / decoder optimization",
      "Radio link tuning",
      "Field RF troubleshooting",
    ],
    skills: ["H.264/265", "SDR", "RF measurement"],
  },
  // MFG
  {
    id: "role-mfg-head",
    blockId: "mfg",
    title: "Head of Manufacturing",
    seniority: "lead",
    count: 1,
    phase: 1,
    responsibilities: [
      "Production planning and capacity",
      "Process improvement",
      "EHS and shop-floor discipline",
      "Direct QA-to-CEO escalation path",
    ],
    skills: [
      "Low-volume high-mix manufacturing",
      "ISO 9001 / AS9100",
      "Lean",
    ],
  },
  {
    id: "role-mfg-a",
    blockId: "mfg-a",
    title: "Assembly Technician",
    seniority: "mid",
    count: 3,
    phase: 1,
    responsibilities: [
      "Mechanical assembly and wiring harnesses",
      "Electronics assembly per IPC standards",
      "Final platform integration",
    ],
    skills: ["IPC-A-610", "Soldering", "Precision assembly"],
  },
  {
    id: "role-mfg-s",
    blockId: "mfg-s",
    title: "Procurement Specialist",
    seniority: "mid",
    count: 1,
    phase: 1,
    responsibilities: [
      "Supplier sourcing and qualification",
      "PO and ERP management",
      "Second-source programs",
      "Long-lead item tracking",
    ],
    skills: ["ERP/MRP", "Defense supply chain", "Export-aware sourcing"],
  },
  {
    id: "role-qat",
    blockId: "qat",
    title: "Quality Engineer",
    seniority: "senior",
    count: 1,
    phase: 1,
    responsibilities: [
      "Incoming, in-process, and final inspection",
      "Lifecycle documentation and NCR",
      "Government acceptance test support",
    ],
    skills: ["ISO 9001", "AS9100", "MIL-STD familiarity"],
  },
  // BDG
  {
    id: "role-bdg-c",
    blockId: "bdg",
    title: "Sales / Contracts Manager",
    seniority: "senior",
    count: 1,
    phase: 1,
    responsibilities: [
      "Tender preparation and submission",
      "Contract management and CDRL delivery",
      "Government customer relations",
    ],
    skills: ["Government procurement", "Proposal writing", "CRM"],
  },
  {
    id: "role-bdg-i",
    blockId: "bdg",
    title: "International / Export Manager",
    seniority: "senior",
    count: 1,
    phase: 1,
    responsibilities: [
      "Partner and distributor network",
      "International exhibitions",
      "Export control advisory (ITAR / EAR) for BD",
    ],
    skills: ["Export control", "International BD", "Defense markets"],
  },
  // OPS
  {
    id: "role-ops-fin",
    blockId: "ops",
    title: "Finance Manager",
    seniority: "senior",
    count: 1,
    phase: 1,
    responsibilities: [
      "Bookkeeping, contract accounting",
      "Budgeting and financial reporting",
      "Cost accounting for government contracts",
    ],
    skills: ["Government contract accounting", "Financial reporting"],
  },
  {
    id: "role-ops-hr",
    blockId: "ops",
    title: "HR & Logistics Manager",
    seniority: "senior",
    count: 2,
    phase: 1,
    responsibilities: [
      "Recruiting and onboarding",
      "Payroll and HR records",
      "Shipping, warehousing, and delivery logistics",
    ],
    skills: ["HR operations", "Logistics coordination"],
  },
  // Phase 2 additions
  {
    id: "role-pmo-head",
    blockId: "pmo",
    title: "Head of PMO",
    seniority: "lead",
    count: 1,
    phase: 2,
    responsibilities: [
      "Program governance across all platforms",
      "Risk and schedule management",
      "Customer reporting and deliverables",
    ],
    skills: ["PMP / PRINCE2", "Defense program management"],
  },
  {
    id: "role-sec-officer",
    blockId: "sec",
    title: "Security Officer",
    seniority: "senior",
    count: 1,
    phase: 2,
    responsibilities: [
      "Facility security program",
      "Classification and access control",
      "NIST 800-171 / CMMC compliance",
      "Empowered official for export control",
    ],
    skills: ["FSO training", "ITAR/EAR", "NIST 800-171"],
  },
];

// ---------- RACI activities ----------

export const DEFAULT_RACI: RaciActivity[] = [
  {
    id: "a-requirements",
    name: "Customer requirements capture",
    category: "Product lifecycle",
    description:
      "Understand and document what the government customer needs.",
    assignments: {
      ceo: "C",
      bdg: "R",
      coo: "C",
      rnd: "I",
      mfg: "I",
      qat: "I",
      pmo: "A",
      ops: "",
      sec: "I",
    },
  },
  {
    id: "a-architecture",
    name: "System architecture",
    category: "Product lifecycle",
    description:
      "Top-level architecture for a new platform or subsystem — functional bill-of-materials.",
    assignments: {
      ceo: "I",
      bdg: "I",
      coo: "A",
      rnd: "R",
      mfg: "C",
      qat: "C",
      pmo: "C",
      ops: "",
      sec: "C",
    },
  },
  {
    id: "a-detailed-design",
    name: "Detailed engineering design",
    category: "Product lifecycle",
    description: "Schematics, firmware, mechanical drawings, BOM freeze.",
    assignments: {
      ceo: "",
      bdg: "",
      coo: "A",
      rnd: "R",
      mfg: "C",
      qat: "C",
      pmo: "I",
      ops: "",
      sec: "I",
    },
  },
  {
    id: "a-prototyping",
    name: "Prototype build",
    category: "Product lifecycle",
    description: "First physical build of a new design.",
    assignments: {
      ceo: "",
      bdg: "I",
      coo: "A",
      rnd: "C",
      mfg: "R",
      qat: "C",
      pmo: "I",
      ops: "",
      sec: "",
    },
  },
  {
    id: "a-env-testing",
    name: "Environmental and EMC testing",
    category: "Quality",
    description:
      "MIL-STD-810 environmental, MIL-STD-461 EMC, functional and climatic tests.",
    assignments: {
      ceo: "I",
      bdg: "I",
      coo: "C",
      rnd: "C",
      mfg: "I",
      qat: "R",
      pmo: "A",
      ops: "",
      sec: "I",
    },
  },
  {
    id: "a-field-acceptance",
    name: "Government field acceptance trials",
    category: "Quality",
    description:
      "On-range acceptance trials with military end-users and the procurement agency.",
    assignments: {
      ceo: "A",
      bdg: "C",
      coo: "R",
      rnd: "C",
      mfg: "C",
      qat: "R",
      pmo: "C",
      ops: "",
      sec: "I",
    },
  },
  {
    id: "a-serial-production",
    name: "Serial production of accepted platform",
    category: "Product lifecycle",
    description:
      "Scaled assembly after passing PRR and design freeze.",
    assignments: {
      ceo: "",
      bdg: "",
      coo: "C",
      rnd: "C",
      mfg: "R",
      qat: "A",
      pmo: "I",
      ops: "I",
      sec: "",
    },
  },
  {
    id: "a-delivery-support",
    name: "Delivery, operator training, field support",
    category: "Product lifecycle",
    description:
      "Hardware handoff, operator training, and in-field support.",
    assignments: {
      ceo: "I",
      bdg: "R",
      coo: "C",
      rnd: "C",
      mfg: "A",
      qat: "C",
      pmo: "R",
      ops: "C",
      sec: "I",
    },
  },
  {
    id: "a-supplier-qual",
    name: "Supplier qualification and second-sourcing",
    category: "Supply chain",
    description:
      "Sourcing, auditing, and qualifying suppliers; planning alternate sources for critical components.",
    assignments: {
      ceo: "I",
      bdg: "",
      coo: "C",
      rnd: "C",
      mfg: "R",
      qat: "A",
      pmo: "I",
      ops: "C",
      sec: "C",
    },
  },
  {
    id: "a-export-control",
    name: "Export control determination",
    category: "Compliance",
    description:
      "ITAR / EAR classification for components, software, and documentation.",
    assignments: {
      ceo: "A",
      bdg: "C",
      coo: "C",
      rnd: "C",
      mfg: "I",
      qat: "",
      pmo: "C",
      ops: "",
      sec: "R",
    },
  },
  {
    id: "a-classification",
    name: "Classified program handling",
    category: "Compliance",
    description:
      "Access control, facility security, classification marking, document control.",
    assignments: {
      ceo: "A",
      bdg: "I",
      coo: "C",
      rnd: "I",
      mfg: "I",
      qat: "I",
      pmo: "C",
      ops: "I",
      sec: "R",
    },
  },
  {
    id: "a-proposals",
    name: "Proposal and tender writing",
    category: "BD",
    description:
      "Capture management, proposal development, pricing, and tender submission.",
    assignments: {
      ceo: "A",
      bdg: "R",
      coo: "C",
      rnd: "C",
      mfg: "C",
      qat: "I",
      pmo: "C",
      ops: "C",
      sec: "C",
    },
  },
  {
    id: "a-budget",
    name: "Annual budget and hiring plan",
    category: "Operations",
    description:
      "Top-down budget, hiring plan, runway, and cost allocation.",
    assignments: {
      ceo: "A",
      bdg: "C",
      coo: "C",
      rnd: "C",
      mfg: "C",
      qat: "C",
      pmo: "C",
      ops: "R",
      sec: "I",
    },
  },
  {
    id: "a-iso",
    name: "ISO 9001 / AS9100 QMS ownership",
    category: "Compliance",
    description:
      "Ownership of the Quality Management System and audits.",
    assignments: {
      ceo: "I",
      bdg: "",
      coo: "A",
      rnd: "C",
      mfg: "C",
      qat: "R",
      pmo: "C",
      ops: "",
      sec: "C",
    },
  },
];

// ---------- Default scenario ----------

export function makeDefaultScenario(): Scenario {
  return {
    id: "default",
    name: "Baseline — Foundation (20 people)",
    description:
      "Starting configuration for a 20-person defense hardware team. QA is embedded in Manufacturing, Operations are combined. Edit blocks, roles, and RACI to model alternatives.",
    currentPhase: 1,
    blocks: DEFAULT_BLOCKS,
    roles: DEFAULT_ROLES,
    raci: DEFAULT_RACI,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}
