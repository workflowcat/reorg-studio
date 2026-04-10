import type { Block, Phase, RaciActivity, Role, Scenario } from "./types";

// ---------- Phases ----------

export const PHASES: Phase[] = [
  {
    id: 1,
    name: "Foundation",
    shortLabel: "20 → 30",
    headcountRange: { min: 20, max: 30 },
    description:
      "Струнка 4-блокова модель. Ліди працюють як playing-coaches. QA сидить всередині Manufacturing з незалежною ескалацією до CEO. Operations — один об'єднаний блок. Один основний державний контракт плюс 1–2 пілоти.",
  },
  {
    id: 2,
    name: "Growth",
    shortLabel: "30 → 50",
    headcountRange: { min: 30, max: 50 },
    description:
      "Quality & Test відділяється в незалежний департамент, що репортує CEO. PMO формалізується з виділеними program managers. З'являється роль Security Officer. R&D масштабується до 14–18 осіб у трьох повних командах. AS9100 certification.",
  },
  {
    id: 3,
    name: "Scale",
    shortLabel: "50 → 100+",
    headcountRange: { min: 50, max: 120 },
    description:
      "Повна functional-matrix: функціональні вертикалі плюс per-platform Integrated Product Teams. COO володіє R&D, Manufacturing і Supply Chain. Кожна платформа має виділеного Program Manager. Security — повний стек (classification, cyber, export control).",
  },
];

// ---------- Blocks (top-level functional departments) ----------

export const DEFAULT_BLOCKS: Block[] = [
  {
    id: "ceo",
    code: "CEO",
    name: "CEO / Founder",
    purpose:
      "Стратегічний напрям, урядові відносини на рівні МО / procurement, інвесторські і донорські програми, незалежна ескалація від Quality.",
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
      "Внутрішньо-орієнтований лідер. Володіє технічною стратегією, TRL roadmap, крос-R&D координацією та інтерфейсом R&D → Manufacturing. Головує на PDR / CDR / TRR / PRR gates.",
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
      "Технічне ядро. Механічні платформи, embedded системи, відео/зв'язок. Тримає dual portfolio — 70% еволюція платформ і 30% exploratory робота.",
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
      "Мало-серійна збірка, закупівлі та — у фазі Foundation — вбудована QA з незалежною ескалацією до CEO. Фокус на гнучкості, traceability і якості, а не throughput.",
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
      "Незалежна QA, environmental і EMC тестування, IV&V для software, підтримка acceptance з боку замовника. У фазі Foundation QA вбудована всередині Manufacturing (штат рахується там) з незалежною ескалацією до CEO. Відокремлюється у власний блок у фазі Growth.",
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
      "Центральний координаційний хаб для всіх платформних програм. Program managers ведуть крос-функціональні Integrated Product Teams і володіють інтерфейсом до державного замовника.",
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
      "Capture management, proposal writing, відносини з урядовими program offices, міжнародні партнерства і export-control aware BD.",
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
      "Classification, facility security, cyber (NIST 800-171 / CMMC), export control (ITAR / EAR / Wassenaar). Незалежний від operations — може зупинити активність при security breach.",
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
      "Finance, HR, логістика, facilities, IT. Об'єднаний у фазі Foundation заради ефективності; розщеплюється на Finance / HR / Supply Chain зі зростанням штату.",
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
      "Шасі, підвіска, трансмісія, інтеграція payload. CAD/CAE, FEA, structural analysis. Лід — Product Owner для лінії механічних платформ.",
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
      "Firmware, motor control, інтеграція сенсорів, автономна навігація, ROS2. Лід — Product Owner для підсистеми Control System.",
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
      "Відеостримінг, радіолінки, шифрування каналу, операторська консоль. Лід — Product Owner для підсистеми Video Streaming.",
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
      "Інтегрує механічні, електронні і software підсистеми. Interface control, system-level test, configuration management. З'являється у фазі Growth.",
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
      "Механічна збірка, збірка електроніки, розводка, фінальна інтеграція платформ.",
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
      "Пошук і кваліфікація постачальників, ERP/MRP, second-source програми, керування long-lead позиціями (6–18 місяців lead time на defense-grade комплектуючі).",
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
      "Швидке прототипування, 3D друк, одиничні CNC-деталі, tooling. Відокремлюється від Assembly у фазі Growth, щоб уникнути bottlenecks.",
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
      "Стратегічний напрям компанії",
      "Урядові відносини (МО, Генштаб, procurement-агентства)",
      "Керування інвесторськими і донорськими програмами",
      "Незалежна ескалація для Quality-питань",
      "M&A та стратегічні партнерства",
    ],
    skills: [
      "Досвід у defense-індустрії",
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
      "Технічна стратегія і прогрес TRL",
      "Координація трьох R&D-напрямків і розподіл ресурсів",
      "Головування на PDR, CDR, TRR, PRR design review gates",
      "Керування 70 / 30 dual-portfolio",
      "Володіння процесом Engineering Change Order (ECO)",
      "Головний engineering-інтерфейс до customer program office",
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
      "Шасі, підвіска, трансмісія, дизайн корпусу",
      "Інтеграція payload",
      "CAD/CAE, FEA, structural analysis",
      "Product Owner для лінії платформ",
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
      "Motor control і інтеграція сенсорів",
      "Стек автономної навігації",
      "Product Owner для Control System",
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
      "Дизайн радіолінка",
      "Шифрування каналу",
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
      "Детальний механічний дизайн",
      "Креслення і BOMs",
      "DfM / DfA ревʼю з Manufacturing",
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
      "Імплементація firmware",
      "Розробка драйверів",
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
      "Оптимізація video encoder / decoder",
      "Тюнінг радіолінка",
      "Польовий RF troubleshooting",
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
      "Production planning і потужності",
      "Покращення процесів",
      "EHS і дисципліна на shop-floor",
      "Прямий шлях ескалації від QA до CEO",
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
      "Механічна збірка і розводка",
      "Збірка електроніки за IPC-стандартами",
      "Фінальна інтеграція платформ",
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
      "Пошук і кваліфікація постачальників",
      "Керування PO і ERP",
      "Second-source програми",
      "Трекінг long-lead items",
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
      "Incoming, in-process і final inspection",
      "Lifecycle документація і NCR",
      "Підтримка державних acceptance tests",
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
      "Підготовка і подача тендерів",
      "Керування контрактами і поставка CDRL",
      "Відносини з державними замовниками",
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
      "Мережа партнерів і дистрибʼюторів",
      "Міжнародні виставки",
      "Консультації з export control (ITAR / EAR) для BD",
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
      "Бухгалтерія, contract accounting",
      "Бюджетування і звітність",
      "Cost accounting для державних контрактів",
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
      "Рекрутинг і onboarding",
      "Payroll і HR records",
      "Відвантаження, склад і логістика доставки",
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
      "Program governance по всіх платформах",
      "Керування ризиком і графіком",
      "Звітність замовнику і deliverables",
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
      "Програма facility security",
      "Classification і access control",
      "NIST 800-171 / CMMC compliance",
      "Empowered official для export control",
    ],
    skills: ["FSO training", "ITAR/EAR", "NIST 800-171"],
  },
];

// ---------- RACI activities ----------

export const DEFAULT_RACI: RaciActivity[] = [
  {
    id: "a-requirements",
    name: "Збір вимог замовника",
    category: "Product lifecycle",
    description:
      "Зрозуміти і задокументувати, що саме хоче державний замовник.",
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
    name: "Системна архітектура",
    category: "Product lifecycle",
    description:
      "Top-level архітектура нової платформи або підсистеми — bill-of-materials функцій.",
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
    name: "Детальний engineering-дизайн",
    category: "Product lifecycle",
    description: "Схеми, firmware, механічні креслення, заморозка BOM.",
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
    name: "Збірка прототипу",
    category: "Product lifecycle",
    description: "Перша фізична збірка нового дизайну.",
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
    name: "Environmental і EMC тестування",
    category: "Quality",
    description:
      "MIL-STD-810 environmental, MIL-STD-461 EMC, функціональні і кліматичні тести.",
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
    name: "Державні польові acceptance trials",
    category: "Quality",
    description:
      "On-range acceptance trials з військовими end-users і procurement-агентством.",
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
    name: "Серійне виробництво прийнятої платформи",
    category: "Product lifecycle",
    description:
      "Масштабована збірка після проходження PRR і заморозки дизайну.",
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
    name: "Поставка, тренінг операторів, польова підтримка",
    category: "Product lifecycle",
    description:
      "Передача hardware, тренінг операторів і in-field підтримка.",
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
    name: "Кваліфікація постачальників і second-sourcing",
    category: "Supply chain",
    description:
      "Пошук, аудит і кваліфікація постачальників; планування other sources для критичних комплектуючих.",
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
    name: "Визначення export control",
    category: "Compliance",
    description:
      "ITAR / EAR класифікація для комплектуючих, software і документації.",
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
    name: "Поводження з classified програмами",
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
    name: "Написання proposals і тендерів",
    category: "BD",
    description:
      "Capture management, розробка proposal, ціноутворення і подача тендеру.",
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
    name: "Річний бюджет і план найму",
    category: "Operations",
    description:
      "Top-down бюджет, план найму, runway і розподіл витрат.",
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
    name: "Володіння ISO 9001 / AS9100 QMS",
    category: "Compliance",
    description:
      "Володіння Quality Management System і аудитами.",
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
    name: "Baseline — Foundation (20 осіб)",
    description:
      "Стартова конфігурація для 20-особової defense hardware команди. QA вбудована в Manufacturing, Operations об'єднані. Редагуйте блоки, ролі і RACI, щоб моделювати альтернативи.",
    currentPhase: 1,
    blocks: DEFAULT_BLOCKS,
    roles: DEFAULT_ROLES,
    raci: DEFAULT_RACI,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}
