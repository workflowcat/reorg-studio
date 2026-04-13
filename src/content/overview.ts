// Дослідницький контент для оглядової / головної сторінки.
// Секції збагачено з трьох паралельних research-прогонів, заархівованих
// verbatim у /research/ у цьому репо для рецензентів:
//   benchmarks.md  — як Anduril, Shield AI, Saronic, Skydio, Epirus,
//                    Hadrian і Helsing насправді будували команди
//                    при чисельності 20 → 100+
//   compliance.md  — ISO 9001/AS9100, MIL-STD, TRL, ITAR/EAR, CMMC/
//                    NIST 800-171, IV&V і як compliance формує орг
//   hiring.md      — критичні перші найми, defense IQ, compensation
//                    з Levels.fyi, реалії з допусками, хвилі найму
//
// Секція Org design theory опирається на встановлений academic-канон
// (Skunk Works, IPT, Conway, Dunbar, Team Topologies) і не потребує
// окремого research-брифу.
//
// Джерела залишаємо на картках, щоб рецензенти могли перевірити провенанс.

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
    title: "Як насправді організовані ці компанії",
    summary:
      "Сім компаній, що пройшли або проходять шлях 20 → 100+. Усі зрештою зійшлися до схожої форми, але обрали дуже різні шляхи.",
    profiles: [
      {
        name: "Anduril",
        tagline: "Софт спочатку, залізо потім",
        founded: 2017,
        headcount: "~6 200 (кін. 2025)",
        engRatio: "42%",
        founders: "5 — тільки один з hardware (Joe Chen, ex-Oculus)",
        hq: "Costa Mesa, CA",
        production: "Arsenal-1, Ohio",
        keyMove: "Lattice OS побудували до першої hardware-платформи. Кожна наступна програма — Ghost Shark, Fury, Roadrunner — амортизує одну software-інвестицію.",
        whatToCopy: "Дві окремі SVP-ролі: SVP Engineering (core, ~413 осіб) vs SVP Programs & Engineering (customer-aligned, ~122). IPT з SV-лейблом.",
        sources: [
          { label: "Anduril Leadership", url: "https://www.anduril.com/anduril-leadership" },
          { label: "Arsenal-1", url: "https://www.anduril.com/news/anduril-building-arsenal-1-hyperscale-manufacturing-facility-in-ohio" },
          { label: "Contrary Research", url: "https://research.contrary.com/company/anduril" },
        ],
      },
      {
        name: "Shield AI",
        tagline: "Купити виробниче плече, не будувати",
        founded: 2015,
        headcount: "~1 300 (поч. 2026)",
        engRatio: "—",
        founders: "3 осі: consumer HW · ex-SEAL · CV/research",
        hq: "San Diego, CA",
        production: "Batcave, Dallas (107k → 200k sqft)",
        keyMove: "Придбали Martin UAV у 2021 замість піднімання виробництва V-BAT з нуля. Успадкували команду + facilities.",
        whatToCopy: "CPEO (Chief Product & Engineering Officer) — product strategy всередині engineering, а не антагоністичний split.",
        sources: [
          { label: "Shield AI Batcave", url: "https://shield.ai/its-all-systems-go-at-shield-ais-texas-unified-facility/" },
          { label: "Contrary Research", url: "https://research.contrary.com/company/shield-ai" },
        ],
      },
      {
        name: "Saronic",
        tagline: "Від 20 до 500 за 18 місяців",
        founded: 2022,
        headcount: "~1 300+ (поч. 2026)",
        engRatio: "—",
        founders: "CEO Navy SEAL (Mavrookas) · CTO autonomy (Altekar)",
        hq: "Austin, TX",
        production: "New Orleans",
        keyMove: "CTO володіє Forward Deployed Engineering як named org з Day 1 — Palantir FDE model у hardware. Окрема функція Defense Growth живе поза eng і BD.",
        whatToCopy: "Географія = функція: engineering в Austin, production + testing в New Orleans.",
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
        keyMove: "Перейшли з prosumer дронів у ~50%+ defense revenue. Geographic talent hubs: HQ (autonomy), Boston (MIT), Zürich (multi-vehicle GPS-denied).",
        whatToCopy: "National Security Advisory Board замінює in-house DoD-експертизу до ~100 осіб.",
        sources: [
          { label: "Skydio Zürich R&D", url: "https://dronexl.co/2026/04/06/skydio-zurich-rd-office-autonomous-drone/" },
          { label: "NSAB", url: "https://www.skydio.com/blog/skydio-announces-new-national-security-advisory-board-with-leading-experts-in-national-security-and" },
        ],
      },
      {
        name: "Epirus",
        tagline: "Найбільш defense-native з нових",
        founded: 2018,
        headcount: "~240 (плато)",
        engRatio: "—",
        founders: "CTO ex-Raytheon (Markel), команда heavy on Raytheon alumni",
        hq: "Torrance, CA",
        keyMove: "Свідомо наймали з Raytheon. Повільніший growth curve, зате глибокий domain knowledge. Якщо замовник — program-of-record процеси, це правильна відповідь.",
        whatToCopy: "R&D + BD ко-локовані, але організаційно розділені — explicit boundary.",
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
        production: "Власний завод — core business",
        keyMove: "SW engineers парують 1:1 з операторами shop-floor. Head of quality (Mueller) — ex-SpaceX. Quality leadership — senior import, не organic growth.",
        whatToCopy: "'Ми керуємо заводом — немає місця для bullshit software.'",
        sources: [
          { label: "Breaking Defense", url: "https://breakingdefense.com/2024/08/how-startup-hadrian-plans-to-take-over-the-defense-manufacturing-world/" },
          { label: "TechCrunch", url: "https://techcrunch.com/2024/02/21/hadrian-automations-ceo-wants-to-defy-history-and-revitalize-american-industry/" },
        ],
      },
      {
        name: "Helsing",
        tagline: "Expansion через юрисдикції",
        founded: 2021,
        headcount: "~500 (2024)",
        engRatio: "—",
        founders: "3 осі: MoD veteran · AI research · repeat entrepreneur",
        hq: "Munich",
        production: "Estonia (€70M facility)",
        keyMove: "Масштабуються через країни (Естонія, UK, Франція), а не через нові продукти. R&D і production розділені географічно, під одним legal umbrella.",
        whatToCopy: "One founder per axis — той самий патерн, що Shield AI і Saronic.",
        sources: [
          { label: "Helsing Series D", url: "https://techfundingnews.com/helsing-raises-600m-series-d-european-defence/" },
          { label: "Contrary Research", url: "https://research.contrary.com/company/helsing" },
        ],
      },
    ],
    cards: [
      {
        title: "Що помітно, коли дивишся на всіх разом",
        body: [
          "Одна форма з'являється раз за разом: трикутник засновників (mission + engineering + ops), непропорційно великий eng-блок, і виробнича функція, зчеплена з R&D доки обсяги не змусять розділити.",
          "Eng-ratio по фазах, на яке можна орієнтуватися:",
        ],
        bullets: [
          "~20 осіб → 70–80% інженерів. Решта ролей суміщені.",
          "~50 осіб → ~60%. З'являється PM, Head of QA (import з прайма або SpaceX), recruiter.",
          "~100+ осіб → 40–50%. PMO, capture writers, GC, security stack.",
          "Autonomy/AI виокремлюється від embedded/software у всіх вибірках — ритм інший.",
          "DC-офіс з'являється рано. Інтерфейс до держави вимагає.",
        ],
        sources: [
          { label: "Bolt: hardware teams", url: "https://blog.bolt.io/the-complete-guide-to-building-hardware-startup-teams-part-3-management-scale-95bd856e14f5" },
        ],
      },
      {
        title: "Де живе quality — два різні місця",
        body: [
          "Integration & Test — частина Engineering. Production Quality — частина Manufacturing/Operations. Це два різні quality, і вони розходяться десь на 50–80 осіб, коли починається LRIP.",
          "До цього — один quality engineer з пунктирною лінією до CEO.",
          "Quality leadership — senior import. Hadrian найняли з SpaceX. Дешевше і швидше, ніж будувати з нуля.",
        ],
        sources: [
          { label: "Breaking Defense: Hadrian", url: "https://breakingdefense.com/2024/08/how-startup-hadrian-plans-to-take-over-the-defense-manufacturing-world/" },
        ],
      },
      {
        title: "Lattice team breakdown — функції по числах",
        body: [
          "Найкращий публічний datapoint. Anduril Lattice Solutions (Built In):",
        ],
        bullets: [
          "Engineering: 99+ · Operations/Support: 99+ — практично рівні",
          "HR/Recruiting: 57 · Program/PM: 57 — теж рівні. У SaaS PMO у 3–5x менше.",
          "Finance: 19 · Customer Success: 17 · AI/ML: 13 · Sales: 13",
          "Manufacturing: 12 (Lattice — software; hardware programs окремо)",
          "Product: 11 · Design: 10 · Cybersecurity: 7 · Legal: 7 · Marketing: 1",
          "PMO ≈ HR і у 57x більший за Marketing. Defense наймає PMO, не маркетинг.",
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
    title: "Які фреймворки працюють, а які ні",
    summary:
      "Половина org-design фреймворків зі SaaS тут не працює. Ті, що переносяться, в основному з аерокосмосу і systems engineering.",
    cards: [
      {
        title: "Functional-matrix гібрид",
        body: [
          "Дві осі одночасно. Вертикалі (механіка, електроніка, embedded, autonomy, quality) володіють стандартами і кар'єрним ростом. Горизонтальні продуктові команди — доставкою конкретної платформи. Інженер має домівку у функції, але працює в одній-двох продуктових командах.",
          "Патерн від Skunk Works (Lockheed, 1943). Kelly Johnson витяг кращих інженерів з функціональної орги і зліпив крос-функціональну команду, що володіла апаратом end-to-end. U-2, SR-71, F-117, F-22 — все звідти.",
          "Чому матриця стала дефолтом: hardware-програми одночасно потребують глибокої domain-експертизи (аеродинаміка, RF, структурна механіка) і щільної крос-domain інтеграції. Ні чиста функціональна, ні чиста проєктна орга не дає обох.",
        ],
        sources: [
          { label: "Lockheed Martin: Skunk Works origin", url: "https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks/skunk-works-origin-story.html" },
          { label: "PMI: The Matrix Organization", url: "https://www.pmi.org/learning/library/matrix-organization-structure-reason-evolution-1837" },
        ],
      },
      {
        title: "Сила матриці: weak, balanced, strong",
        body: [
          "Таксономія PMI розрізняє три точки на спектрі. У weak matrix функціональні менеджери зберігають більшість повноважень, а 'project manager' — насправді координатор без контролю над бюджетом. У balanced matrix повноваження розділені між функціональним і program management. У strong matrix program manager контролює бюджет і розподіл ресурсів і має організаційну вагу, рівну функціональному менеджеру.",
          "IPT-based defense-програми зазвичай потребують strong matrix, щоб функціонувати. Слабкість weak-matrix добре задокументована: program managers без бюджетної влади не можуть робити delivery trade-offs, тож delivery сповзає до того, що хочуть внутрішні пріоритети функціональної організації.",
          "Практичний наслідок при 20 людях: матриця зазвичай фейкова (та сама людина носить і функціональний, і program-капелюх), і по суті ви керуєте чистою функціональною орг-структурою. Це нормально — не вдавайте інше, доки штат не виправдає реальний dual-reporting.",
        ],
        sources: [
          { label: "Whizlabs: Matrix strengths", url: "https://www.whizlabs.com/blog/matrix-organizations-weak-balanced-strong/" },
        ],
      },
      {
        title: "Integrated Product Teams (IPT)",
        body: [
          "IPT — це улюблений execution-патерн Department of Defense, формалізований у DoD 5000 guidance в 1990-х. Кожен IPT — це single-threaded, крос-функціональна команда, відповідальна за один deliverable — зазвичай платформу, підсистему або велику фазу програми. Члени беруться з функціональних домівок (engineering-дисципліни, виробництво, quality, supply chain, program office) і репортують одночасно 'вгору' своєму функціональному менеджеру і 'вбік' IPT-ліду.",
          "Program manager володіє delivery IPT. Функціональні ліди володіють технічними стандартами і людьми. Саме цей розподіл робить матрицю здійсненною на меншому масштабі: program manager не мусить ставати босом інженерів — він стає босом deliverable.",
          "Три рівні IPT, які типово існують на великих програмах: Overarching IPT (стратегічний), Working IPTs (виконання на великих підсистемах) і Integrating IPTs (ті, що охоплюють границі підсистем). При 20–50 штаті Working IPT зазвичай єдиний рівень, який потрібен.",
        ],
        sources: [
          { label: "DoDD 5000.01", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodd/500001p.pdf" },
        ],
      },
      {
        title: "Conway's Law",
        body: [
          "'Організації видають проєкти, що копіюють їхню структуру комунікацій.' У hardware це проявляється жорстко: розділіть embedded і механіку на вежі — отримаєте чистий mechanical-electronic interface і жахливий кабельний жгут.",
          "Inverse Conway maneuver — організуватися навколо продукту, а не дисциплін. Team Topologies формалізує це: stream-aligned teams (доставка), platform teams (інфраструктура), enabling teams (capabilities), complicated-subsystem teams (глибока спеціалізація). IPT — аерокосмічна версія stream-aligned.",
          "Якщо хочеш інтеграцію крізь межі — крос-дисциплінарна команда, що живе разом. Якщо хочеш чисті interfaces — команди, що мапляться на ці interfaces.",
        ],
        sources: [
          { label: "Conway's Law (original essay)", url: "https://www.melconway.com/Home/Conways_Law.html" },
          { label: "Team Topologies", url: "https://teamtopologies.com/key-concepts" },
        ],
      },
      {
        title: "Dual portfolio R&D — правило 70/30",
        body: [
          "Рule of thumb defense-індустрії для розподілу R&D-портфоліо — приблизно 70% на інкрементальне покращення наявних платформ і 30% на exploratory / next-generation роботу. Google's 70-20-10 rule і McKinsey's Three Horizons вказують на ту саму ідею: більшість енергії на те, що працює сьогодні, трохи на суміжні ставки, менша частина на речі, що могли б замінити core.",
          "Це формує те, як організовано R&D. Робота в 70%-смузі живе всередині IPT-структури — delivery-focused, прив'язана до milestones, за графіком контрактів замовника. Робота в 30%-смузі зазвичай живе в окремій exploratory під-команді, в прямій організації CTO або в виділеній 'advanced projects' групі — захищена від program milestones, щоб могла дозволити собі провал.",
          "Здорова defense R&D-організація може показати на конкретну мапу, де сидить кожен активний проєкт у цьому розподілі. Хвора має весь бюджет у 70%-смузі і потім дивується, коли конкурент висаджує нову спроможність.",
        ],
        sources: [
          { label: "McKinsey's Three Horizons", url: "https://lucid.co/blog/mckinseys-three-horizons-of-growth" },
          { label: "ITONICS: The 70-20-10 model", url: "https://www.itonics-innovation.com/blog/702010-rule-of-innovation" },
        ],
      },
      {
        title: "Чому правило 'two-pizza team' чисто не переноситься",
        body: [
          "Two-pizza team rule від Amazon (автономні команди до ~8 осіб максимум) працює для software, бо software-команди можуть незалежно шипити в production. У hardware повна platform team потребує механічної, електронної, embedded, systems-integration і test компетентності — це мінімум 12–15 осіб, і розбивати їх жорсткіше означає лише перенести координаційний cost кудись гірше.",
          "Dunbar's number дає правильну ментальну модель: ~150 осіб — це верхня межа когезивної соціальної одиниці, 50 — межа близької робочої групи, 15 — межа команди, що може побудувати спільне неявне знання. Hardware IPT живуть у діапазоні 15–50. Нижче 15 їм бракує покриття дисциплін; вище 50 вони фрагментуються на під-команди і потребують формальної програмної структури.",
          "Практичний переклад: 'одна платформа — один IPT' — команда достатньо велика, щоб насправді побудувати річ, але не більша. При 20 осіб у вас один IPT. При 50 — два. При 100 — 3–4 плюс тонкий шар PMO, який їх координує.",
        ],
        sources: [
          { label: "Dunbar's number (BBC)", url: "https://www.bbc.com/future/article/20191001-dunbars-number-why-we-can-only-maintain-150-relationships" },
          { label: "Amazon two-pizza team", url: "https://www.atlassian.com/work-management/agile/two-pizza-team" },
        ],
      },
      {
        title: "Що типово ламається на кожному переході чисельності",
        body: [
          "Передбачувані режими провалу на кожному переході масштабу — це точки тиску, які ваш реорг повинен передбачати:",
        ],
        bullets: [
          "При ~20 → 30: playing-coach ліди перестають встигати і керувати, і робити individual contributor роботу. З'являється формальний шар engineering director, і CTO мусить вирішити, масштабуватися як менеджер чи як IC.",
          "При ~30 → 50: CEO більше не може бути в кожному рішенні. З'являється COO-подібна роль для внутрішнього виконання. QA відділяється від Manufacturing і стає організаційно незалежним. З'являється перший виділений Program Manager. Finance стає реальною функцією (а не бухгалтерією).",
          "При ~50 → 100: повна functional-matrix вмикається. Кожна платформа отримує виділеного Program Manager. Engineering розщеплюється на 4–6 дисциплін з названими лідами. Supply chain виходить з Operations і стає власною групою. Перший in-house General Counsel.",
          "При ~100 → 150 (межа Dunbar): неформальна комунікація ламається. Названі процеси замінюють 'запитай колегу'. VP замінюють директорів. Окремі BD, capture і program management функції існують незалежно.",
        ],
        sources: [
          { label: "Index Ventures: People challenges by stage", url: "https://www.indexventures.com/scaling-through-chaos/people-challenges-by-headcount-stage" },
          { label: "HBR: Getting reorgs right", url: "https://hbr.org/2016/11/getting-reorgs-right" },
          { label: "McKinsey: Reorganization without tears", url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/reorganization-without-tears" },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────────────────────
  {
    id: "compliance",
    eyebrow: "Defense compliance",
    title: "Compliance визначає форму орга",
    summary:
      "Compliance — не опціональний шар. Він визначає, хто може бути в якій кімнаті, які функції мусять бути незалежними, і скільки місяців до ramp-у нового інженера.",
    cards: [
      {
        title: "Стандарти якості: ISO 9001 → AS9100",
        body: [
          "ISO 9001 — це базовий міжнародний стандарт quality management. AS9100 — це aerospace & defense розширення, опубліковане SAE International, що додає ~100 aerospace-specific вимог поверх ~300 вимог ISO 9001 — configuration management, counterfeit parts prevention, first article inspection, product safety, FOD control, human factors, supply chain traceability і спеціальні процеси (зварювання, термообробка, NDT).",
          "Для UGV-компанії, що продає в DoD через праймів або напряму в program offices, ISO 9001 сам по собі зазвичай недостатній — прайми каскадують AS9100 контрактно до Tier-2 і Tier-3 постачальників. Розумний тригер для AS9100 — перший виробничий контракт або перший prime cascade requirement; йти одразу в AS9100 дозволяє уникнути подвійної міграції.",
          "Реалістичні таймлайни для малих компаній (10–50 працівників) — 4–9 місяців від kickoff до Stage 2 certification audit, за умови, що ви стартуєте з певною процесною дисципліною. Загальний трирічний cost — типово $20 000–$45 000 включно з консалтингом і registrar fees. Більші або хаотичніші організації займають 12–18 місяців.",
        ],
        sources: [
          { label: "SAE AS9100 family", url: "https://www.sae.org/standards/content/as9100d/" },
          { label: "ISO 9001 overview", url: "https://www.iso.org/iso-9001-quality-management.html" },
        ],
      },
      {
        title: "Мінімальні ролі для справжнього QMS",
        body: [
          "Робочий QMS (а не просто сертифікат на стіні) потребує конкретних ролей з першого дня:",
        ],
        bullets: [
          "Quality Manager / Management Representative — володіє QMS, проводить management reviews, інтерфейситься з аудиторами і замовниками. Роль з першого дня для будь-якої defense hardware-компанії, що виробляє deliverables.",
          "Document Controller — підтримує controlled documents, ревізії, release workflow. Може бути part-time або суміщеним з Config Manager при <30 штаті.",
          "Internal Auditor(s) — треновані на AS9100. Мусять бути незалежними від процесу, який аудитують. Зазвичай це shared responsibility між engineering і quality на малому масштабі.",
          "Configuration Manager — коли BOM росте, а ECO стають частими, ця роль відділяється приблизно на 30–50 осіб. PLM-системи як Windchill, Teamcenter або Duro стають релевантними саме тут.",
        ],
        sources: [
          { label: "AS9100 implementation guide", url: "https://www.ndcdynamics.com/as9100-certification-process-phases-timelines-costs-strategies/" },
        ],
      },
      {
        title: "MIL-STD тестування і рішення про test lab",
        body: [
          "Defense hardware повинен пережити MIL-STD-810 (environmental — температура, вологість, вібрація, удар), MIL-STD-461 (EMC/EMI) і різні стандарти живлення та безпеки (MIL-STD-704 для avionics, MIL-STD-1275 для ground vehicles, MIL-STD-1474 для шуму). Це дорогі, спеціалізовані тести.",
          "При 20 осіб рішення про test lab завжди те саме: аутсорсити у кваліфіковану third-party лабораторію (NTS, Element, Dayton T. Brown, Wyle). Будувати in-house environmental спроможність нижче ~50 осіб рідко окупається. Що має існувати in-house — це test engineer, який може писати test plans, запускати pre-qualification screens, керувати зовнішньою лабораторією і володіти test data.",
          "Functional test lab (не environmental) — окрема історія — деякі ранньостадійні UGV-компанії будують малі in-house test-спроможності для HIL, field trials і operator simulators, бо цикл ітерацій тісний, а зовнішні лаби додають тижні turnaround.",
        ],
        sources: [
          { label: "DLA ASSIST (MIL-STDs)", url: "https://quicksearch.dla.mil" },
          { label: "MIL-STD-810H", url: "https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=35978" },
        ],
      },
      {
        title: "Прогрес TRL і contract gating",
        body: [
          "Державні замовники гейтать фінансування і прогрес програми за Technology Readiness Level — шкалою на 9 пунктів від 'basic principles observed' (TRL 1) до 'system proven in operational environment' (TRL 9). Contract language зазвичай вказує, який TRL повинна продемонструвати платформа на кожному milestone, і customer program office очікує credible TRL reporting на кожному review.",
          "Грубий мапінг на R&D-організацію: exploratory R&D живе на TRL 1–4 (30%-а exploratory смуга). Platform engineering живе на TRL 5–7 (70%-а delivery смуга). Manufacturing ramp живе на TRL 8–9. Здорова R&D-організація може назвати, де на цій шкалі сидить кожен активний проєкт — і program manager може сказати, до якого TRL gate прямує кожна програма.",
          "DoD CTO Technology Readiness Assessment Guidebook (лютий 2025) — канонічна референція. Якщо ви берете державні гроші, ваші program managers мусять вільно володіти нею.",
        ],
        sources: [
          { label: "DoD TRA Guidebook 2025", url: "https://www.cto.mil/wp-content/uploads/2025/03/TRA-Guide-Feb2025.v2-Cleared.pdf" },
        ],
      },
      {
        title: "ITAR / EAR — export control",
        body: [
          "Майже кожен UGV, autonomy stack і radio system — або ITAR (State Department), або EAR (Commerce). Це регулює не тільки експорт, а й хто може торкатися дизайну — 'deemed exports' покривають доступ до technical data foreign persons навіть всередині США.",
          "Прямий наслідок: non-US persons обмежені від ITAR technical data без export license. Тому потрібен Empowered Official (US-person з повноваженнями робити export determinations) і FSO, що репортує CEO, а не HR.",
          "Штрафи: до $1 млн за порушення, до 20 років ув'язнення. 'Розберемося пізніше' — найдорожча стратегія.",
        ],
        sources: [
          { label: "State Department DDTC", url: "https://www.pmddtc.state.gov" },
          { label: "22 CFR Parts 120–130 (ITAR)", url: "https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M/part-120" },
        ],
      },
      {
        title: "Security — NIST 800-171 і CMMC",
        body: [
          "Cybersecurity Maturity Model Certification (CMMC 2.0) від US DoD вимагає, щоб defense contractors, які обробляють Controlled Unclassified Information, задовольняли контролі NIST SP 800-171 — MFA, encrypted storage, access logging, incident response, media protection, personnel screening і більше. CMMC Final Rule (опублікований 2024) прогресивно з'являється в DoD-контрактах.",
          "Більшість 20-особових defense-стартапів недооцінюють це. Реальна імплементація — це проєкт на 6–12 місяців з реальним infrastructure cost (compliant cloud environments, logging, MDM, SIEM). IT-функція в defense-компанії — це не 'help desk', а 'compliance officer з клавіатурою', і вона заслуговує на відповідний role definition.",
          "Classification — це окрема розмова. Personnel clearances (Secret займає ~4–6 місяців; Top Secret ~12–18 місяців) не можна прискорити, тож якщо ви чекаєте contract award, щоб почати спонсорувати clearances, ви пропустите програму. Стандартна порада — починати clearance-процес, щойно у вас з'являється credible шлях до контракту, що їх вимагає.",
        ],
        sources: [
          { label: "NIST SP 800-171", url: "https://csrc.nist.gov/publications/detail/sp/800-171/rev-2/final" },
          { label: "DoD CIO CMMC", url: "https://dodcio.defense.gov/CMMC/" },
          { label: "DCSA: facility & personnel clearances", url: "https://www.dcsa.mil" },
        ],
      },
      {
        title: "Independent V&V і правило незалежності QA",
        body: [
          "Defense-контракти зазвичай вимагають Independent Verification & Validation — команда, що сертифікує quality продукту, не може бути командою, яка його побудувала. Принцип старший за регуляцію: якщо будівник також виставляє оцінки, ви отримуєте оптимістичні оцінки. Це найбільше обмеження на org design у defense-hardware.",
          "При 20 осіб прагматичне рішення — QA всередині Manufacturing з пунктирною лінією незалежного escalation-шляху безпосередньо до CEO — QA engineer може зупинити роботу, якщо бачить щось небезпечне, і ескалювати, обходячи номінальний reporting chain. При 50+ QA повинен бути організаційно окремим департаментом, що репортує CEO.",
          "Для software специфічно, IV&V зазвичай вимагає окремої команди або організації — інколи по контракту з third party. SW-CMM, DO-178C (для flight-safety software) і DO-254 (для airborne hardware) всі прописують експліцитне розділення test від розробки.",
        ],
      },
      {
        title: "Десять типових пасток ранньостадійних defense-стартапів",
        body: [
          "Режими провалу, які постійно з'являються в research-інтерв'ю і post-mortems:",
        ],
        bullets: [
          "Відкладати QMS до 'після першого контракту' — QMS має існувати на момент підпису контракту.",
          "Не спонсорувати clearances достатньо рано — TS/SCI — це 12–18 місячний процес.",
          "Трактувати ITAR як паперову роботу, а не як обмеження org-дизайну — ви наймете крутого інженера і потім зрозумієте, що він не може торкатися дизайну.",
          "Підписувати prime flowdown clauses не читаючи — default-мова каскадує FAR, DFARS, CMMC, AS9100 і IP-умови, які ворожі до малих постачальників.",
          "Не відстежувати CDRL (Contract Data Requirements List) як окремий графік — поставки CDRL часто вимогливіші за hardware build schedule.",
          "Залишати quality закопаним всередині build team — замовник помітить і audit провалиться.",
          "Повністю аутсорсити quality consultant — консультанти можуть допомогти пройти audit, але не можуть керувати вашим QMS.",
          "Трактувати CMMC як щось, чим володіє IT — це business-wide програма, що торкається HR, facilities, supply chain і engineering.",
          "Недоштатовувати test engineering — ви не пройдете acceptance без виділеного test engineer, і ця людина не може бути одночасно software lead.",
          "Ігнорувати MIL-STD test budget під час fundraising — environmental test campaigns — це шестизначні цифри на платформу.",
        ],
      },
      {
        title: "CDRL — 20–40% вашої program-labor піде на документацію",
        body: [
          "Contract Data Requirements List (CDRL, подається як DD Form 1423) — це authoritative список data deliverables, який contractor винен government під контрактом: technical data packages, test reports, PMR slides, software documentation, failure analysis reports, configuration audit reports. Кожна line item вказує на Data Item Description (DID) — п'ятицифровий-кодований стандартизаційний документ (напр. DI-SESS-81000 для product drawings, DI-CMAN-81253A для configuration audit reports) з обов'язковим content, format і delivery cadence.",
          "Найбільш недооцінений факт про CDRL: в практиці CDRL-и drive-ять величезні обсяги engineering-роботи — часто 20–40% program labor йде на production CDRL deliverables, а не на design самого продукту. Недооцінка CDRL-labor — єдина найбільш поширена причина cost overrun у програм малих компаній DoD.",
          "Org-наслідок: program manager мусить читати КОЖНУ CDRL line item і перекладати її в deliverable ownership, format і schedule. CDRL-delivery schedule треба відстежувати окремим Gantt-ом, паралельним до hardware build schedule. Якщо ваш PM ставиться до CDRL як до 'paperwork, яке ми доробимо в кінці' — ви завалите milestone review.",
        ],
        sources: [
          { label: "CDRL - Wikipedia", url: "https://en.wikipedia.org/wiki/Contract_data_requirements_list" },
          { label: "CDRL/DID - DAU", url: "https://www.dau.edu/blogs/product-support-contract-data-requirements-list-cdrl" },
          { label: "CDRL - AcqNotes", url: "https://acqnotes.com/acqnote/careerfields/contract-data-requirements-list-cdrl" },
        ],
      },
      {
        title: "Configuration Management і PLM — коли CAD перестає бути 'мій файл'",
        body: [
          "Weapon systems мають 20–40 річний service life, і їх обслуговують організації, які ніколи не зустрічали оригінальних дизайнерів. Configuration Management (стандарти: EIA-649, MIL-HDBK-61A) — це дисципліна, що робить будь-що з цього можливим. Кожна delivered одиниця повинна бути traceable до as-built configuration record, і кожна engineering change повинна бути записана з повним impact analysis.",
          "У rigorous CM-середовищі ви не можете змінити released drawing або spec без формального ECR (Engineering Change Request), impact analysis, CCB (Change Control Board) approval, ECO (Engineering Change Order) release і каскадних оновлень BOM, production work instructions, test procedures і training materials. Це повільно порівняно з startup engineering-звичками. Орг мусить прийняти, що як тільки part released to production або delivered — це не особистий файл, а controlled artifact. Це великий культурний шок, що топить багато defense hardware-стартапів, які виросли в agile iterate-fast режимі.",
          "Домінантні defense PLM-платформи: PTC Windchill (market leader в A&D, DISA-approved cloud environments, DoD IL5 accreditation), Siemens Teamcenter (deep customizability, strong change management), Dassault ENOVIA/3DEXPERIENCE (tightly coupled з CATIA), Aras Innovator (lower TCO). Cloud-native альтернативи — Arena, Upchain, Duro — все частіше adopted defense-стартапами до ~50 осіб.",
        ],
        sources: [
          { label: "Windchill PLM - PTC", url: "https://www.ptc.com/en/products/windchill" },
          { label: "Windchill vs Teamcenter - CLEVR", url: "https://www.clevr.com/blog/ptc-windchill-vs-teamcenter-which-tool-is-better-for-your-team" },
        ],
      },
      {
        title: "IV&V — чотири осі незалежності",
        body: [
          "Для mission- і safety-critical software (а це включає autonomy, fire control і будь-яку систему, чий provenance може призвести до casualty, mission abort або втрати major platform) DoD-програми часто вимагають Independent Verification & Validation, виконану entity-м, незалежним від розробника. Rationale — confirmation bias і accountability: команда, що написала код, має сильні psychological і financial incentives вірити, що він працює.",
          "NIST і DoD визначають чотири виміри незалежності IV&V, і всі чотири мають бути задоволені. Це не style guide — це structural constraint на ваш org design.",
        ],
        bullets: [
          "Technical independence — IV&V personnel не залучені в requirements, design або implementation.",
          "Managerial independence — responsibility сидить в окремому management chain від development.",
          "Financial independence — IV&V budget owned окремою організацією, тож developer не може starve IV&V, щоб врятувати власний schedule.",
          "Contractual independence — IV&V виконується на окремому контракті, тож developer не може redirect scope.",
          "Organizational implication: QA/Test мусить бути organizationally independent від Engineering — reporting-ом до Chief Quality Officer, VP Quality або напряму до CEO, не до VP Engineering. Budget test-команди не може бути line item під program manager-ом, що під schedule pressure. Для критичного software справжньо незалежний IV&V contractor engaged під окремим government-контрактом, який developer не контролює.",
        ],
        sources: [
          { label: "IV&V - NIST Glossary", url: "https://csrc.nist.gov/glossary/term/independent_verification_and_validation" },
          { label: "IV&V Through the Eyes of DoD - Logapps", url: "https://logapps.com/insights/blog/independent-verification-and-validation-ivv-through-eyes-of-dod/" },
          { label: "NASA SWE-141 IV&V", url: "https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604595/SWE-141+-+Software+Independent+Verification+and+Validation" },
        ],
      },
      {
        title: "SCIF, FCL і вартість classified-ready infrastructure",
        body: [
          "Contractor не може отримати доступ або зберігати classified information без Facility Clearance (FCL), і не може бути sponsored for FCL без government або cleared-prime sponsor. FCL processing: 3–12 місяців. Key Management Personnel (KMP) — типово CEO, senior executives, FSO — мусять тримати personnel clearances на рівні FCL.",
          "Фізичні security-фасилітеті тієї ж градації:",
        ],
        bullets: [
          "Controlled Unclassified Area — access-controlled space для CUI / ITAR data; немає classified work. Більшість малих defense-компаній стартують тут.",
          "Closed Area — approved DCSA для open storage і processing classified material до певного рівня, з GSA-approved locks, access control, alarms і guard force requirements.",
          "SCIF (Sensitive Compartmented Information Facility) — regulated під ICD/ICS 705. Required для TS/SCI work. Construction специалізована і дорога: RF shielding, TEMPEST considerations, sound attenuation, vault doors, continuous monitoring. Малий SCIF коштує $500k–$2M+ to build і мусить бути accredited перед use.",
          "Clearance timelines (2025 data): Interim Secret 5–30 днів, full Secret медіана ~138 днів (fastest 90%, range 4–8 місяців), full Top Secret 8–18 місяців. Це означає, що classified-program readiness мусить бути заплановано 12+ місяців до будь-якого classified-контракту award.",
          "Organizational constraint: FSO репортує для security matters напряму CEO (не через engineering або operations), бо FSO personally accountable перед DCSA і мусить мати authority to halt operations, якщо security violation detected. Це hard structural requirement, не best practice.",
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
    title: "Кого наймати, у якому порядку",
    summary:
      "Defense-найм не схожий на SaaS. Менше кандидатів, clearance і громадянство мають значення, mission — реальний compensation lever. Ось що ми помітили в перших 20 → 100 наймах.",
    cards: [
      {
        title: "Трикутник засновників",
        body: [
          "У SaaS два co-founders (CEO/CTO) випускають MVP. У defense hardware потрібні три осі: mission/government CEO, systems-level CTO, і operations/manufacturing COO. Бо одночасно треба виграти замовника, побудувати апарат і поставити compliant supply chain.",
          "Saronic: CEO Navy SEAL + CTO autonomy. Shield AI: consumer HW + ex-SEAL + CV research. Той самий патерн — one per axis — скрізь.",
          "Defense CEO — інший профіль. Замовники купують через відносини і program-office access. Потрібен 'defense IQ', зароблений через військову службу або DoD-кар'єру.",
        ],
        sources: [
          { label: "Saronic Team", url: "https://www.saronic.com/team" },
          { label: "TechCrunch: defense tech and Silicon Valley", url: "https://techcrunch.com/2022/02/05/the-rise-of-defense-tech-is-bringing-silicon-valley-back-to-its-roots/" },
        ],
      },
      {
        title: "Day-1 критичні найми vs Month 3–6 vs 'зачекайте'",
        body: [
          "Triage-список на перших шість місяців defense-hardware стартапу:",
        ],
        bullets: [
          "Day 1: CEO (mission/government обличчя), CTO/Head of Engineering, systems architect (може бути CTO), ops/contracts lead (часто COO або fractional), cleared US-person Empowered Official для ITAR",
          "Month 3–6: перший mechanical engineer, перший electrical/firmware engineer, перший software/autonomy engineer, перший program/project manager, test engineer",
          "Зачекайте: Head of Marketing, виділений HR, виділений finance (використовуйте fractional CFO), виділений Facility Security Officer (часто dual-hatted на ранніх етапах), виділений рекрутер",
          "COO / Head of Engineering стає необхідним, щойно компанія має (а) перший контракт з hardware deliverables на графіку і (б) більше ніж ~10 інженерів. До цього моменту CTO подвоюється як Head of Engineering.",
        ],
        sources: [
          { label: "Instrumental hardware handbook", url: "https://instrumental.com/resources/guide/building-a-hardware-startup" },
        ],
      },
      {
        title: "Звідки беруться таланти",
        body: [
          "Типові pipelines, у грубому порядку mission-fit для нової UGV-компанії:",
          "1) Ex-military інженери, які бачили end-user сторону — високий mission-fit, інколи нижча формальна engineering-глибина, незрівнянна інтуїція щодо того, що насправді працюватиме в полі.",
          "2) Aerospace прайми (Lockheed, Raytheon/RTX, Northrop Grumman, BAE, Rheinmetall) — глибоке знання процесів, інколи повільні до адаптації до startup pace. Стратегія Epirus по активному найму з Raytheon — свідома версія цього trade-off.",
          "3) Державні лабораторії (NRL, AFRL, APL, MITRE) — сильні фундаментали, тонкий product sense, часто відмінні research-таланти.",
          "4) Dual-use robotics і hardware-стартапи (alumni Boston Dynamics, iRobot, Skydio) — сильна engineering velocity, потребують коучингу на defense-specifics.",
          "Найкращі команди мішають два з цих pipelines, щоб жодна культура не домінувала. Чисті прайми стають повільними; чисті Silicon Valley стартапи стають розфокусованими щодо реального замовника.",
        ],
        sources: [
          { label: "ClearanceJobs", url: "https://www.clearancejobs.com" },
        ],
      },
      {
        title: "Неправильні найми",
        body: [
          "Failure mode #1: senior ex-big-tech, що ніколи не шипили фізичний продукт. Сильна software-інтуїція, погані hardware-інстинкти — хочуть ітеруватися над дизайном, що фізично заморожений за три місяці до trial.",
          "Failure mode #2: пере-наймати з праймів. Process-compliant команда, що не може рухатися зі startup-швидкістю. При 20 осіб відповідь на 'чому немає ECO-процесу' — 'бо нас четверо і ми говоримо щодня'.",
          "Red flags на інтерв'ю: не називають жодної абревіатури (CDRL, CDR, PRR, ECP); кілька років не торкались прототипу; формулюють проблеми тільки в software-термінах.",
        ],
      },
      {
        title: "Реальність компенсацій",
        body: [
          "Defense-hardware компенсації історично відставали від FAANG і growth-stage SaaS по кешу, але суттєво підтяглися за хвилею 2023–2026 нових defense-компаній. Компенсаційні цифри Anduril, Shield AI і Saronic з публічних агрегаторів показують senior engineering compensation у діапазоні $200K–$400K залежно від рівня — приблизно 70–85% порівнянних FAANG-ролей.",
          "Equity — зазвичай важіль, що закриває розрив. Mission-pull кандидати приймають кеш-розрив в обмін на значний ранній equity. Non-cash важелі, які важать тут більше, ніж у SaaS: mission clarity, доступ до реальних операторів, довгострокова стабільність роботи і career asset від дотику до програми, яка полетіла / проїхала / відшипилася — у defense hardware 'я керував збіркою перших 20 Ghost Sharks' — це career-defining буллет.",
          "Практична замітка про діапазони: Levels.fyi має обмежені дані для defense-стартапів (вони не self-report так агресивно), тож діапазони варто тріангулювати проти ClearanceJobs і прямих розмов з рекрутерами.",
        ],
        sources: [
          { label: "Levels.fyi — Anduril", url: "https://www.levels.fyi/companies/anduril" },
        ],
      },
      {
        title: "Таймлайни clearance і реалії ramp-up",
        body: [
          "Обробка security clearance вимірюється в місяцях, не тижнях. Типові поточні таймлайни:",
        ],
        bullets: [
          "Secret: 4–6 місяців end-to-end",
          "Top Secret: 8–14 місяців",
          "TS/SCI з polygraph: 12–18 місяців (і довше для деяких biographies)",
          "Interim clearances (корисний міст): 30–90 днів для Secret",
          "Ramp-up інженера на defense hardware теж вимірюється місяцями — 3–6 місяців для senior-інженера, що приходить з non-defense hardware, щоб стати продуктивним у MIL-STD practices, CDRL authoring і program management cadence. Закладайте це в hiring plans.",
        ],
        sources: [
          { label: "Support ClearanceJobs on interim clearances", url: "https://support.clearancejobs.com/security-clearance-faqs/what-is-an-interim-security-clearance" },
          { label: "2025 clearance bottleneck", url: "https://ccsglobaltech.com/security-clearance-hiring-challenges-and-strategies/" },
        ],
      },
      {
        title: "Хвилі найму: 20 → 30 → 50 → 100+",
        body: [
          "Кожен перехід штату має характерну хвилю найму, що його визначає:",
        ],
        bullets: [
          "20 → 30: виділений quality engineer, перший program manager, перший supply chain / procurement спеціаліст, початок шару engineering directors.",
          "30 → 50: виділений Head of Quality (організаційно незалежний), перший Security Officer / FSO, другий і третій program managers, перший виділений test engineer, формується systems integration під-команда, перший full-time рекрутер.",
          "50 → 100: VP of Engineering замінює playing-coach CTO, виділений CFO замінює fractional finance, security-функція виростає в повний стек (FSO + Export Control Officer + Cyber), supply chain відокремлюється від operations, виділені capture/proposal writers, General Counsel замінює outside counsel.",
          "100 → 150 (Dunbar wall): неформальна комунікація перестає працювати. Названі процеси замінюють 'запитай колегу'. Окремі BD, capture і program management функції існують незалежно. Це точка, де починається плейбук 'scale stage' від Brittany Laughlin.",
        ],
        sources: [
          { label: "Brittany Laughlin: Scale Stage 75–150", url: "https://medium.com/startup-maturity/maturity-map-scale-stage-75-150-employees-98532a1e44cf" },
          { label: "Index Ventures: scaling through chaos", url: "https://www.indexventures.com/scaling-through-chaos/people-challenges-by-headcount-stage" },
        ],
      },
      {
        title: "Composition команди з 20 осіб — конкретні ролі",
        body: [
          "Instrumental's hardware team-building guidance вказує, що ефективні hardware-команди стартують з ~5 осіб і стають комфортними при 15–25 у міру того, як продукт наближається до readiness. Для defense UGV-компанії з 20 загальним штатом реалістичний engineering split (приблизно 14–15 інженерів з 20) виглядає так:",
        ],
        bullets: [
          "Systems engineering / systems architect: 1 (часто CTO). Володіє requirements, interfaces і verification plan",
          "Mechanical design: 2–3. Chassis, suspension, payload interfaces, packaging",
          "Electrical / power / electronics: 2. Power distribution, motor drive, PCB design",
          "Embedded / firmware: 1–2. Motor control, sensor drivers, safety interlocks",
          "Software / autonomy: 2–3. Perception, planning, ROS2, middleware, comms",
          "Test & integration engineer: 1. Environmental, EMI, field trials, corner cases",
          "Manufacturing / production engineer: 1. Bridges engineering і production line",
          "Senior-роль, що мусить існувати Day 1: systems architect (зазвичай CTO на цьому масштабі) і щонайменше один principal/staff engineer на дисципліну, що face-ить замовника на design review. Уникайте 20-person team, де всі на IC-рівні — design reviews і TRRs потребують когось senior enough, щоб робити trade decisions у real time.",
          "Playing-coach leads vs dedicated managers: при 20 людях кожен discipline lead має бути 70–80% hands-on. Dedicated people managers з нульовим IC-output починають мати сенс близько 30–40 інженерів (~50 загального штату). Промотувати найкращого IC у pure-manager роль занадто рано — один з найпоширеніших failure modes на цьому масштабі.",
        ],
        sources: [
          { label: "Building the Hardware Development Team - Instrumental", url: "https://instrumental.com/build-better-handbook/building-hardware-development-team" },
        ],
      },
      {
        title: "Anduril compensation — Levels.fyi benchmark",
        body: [
          "Defense hardware compensation виросла різко з 2020-го, бо new-space і defense-tech unicorns (Anduril, Shield AI, Saronic, Epirus, Skydio) мусять match-ити або близько підходити до FAANG для рекрутингу software-таланту. Hardware-discipline comp виросла повільніше, але зараз matеріально вище за legacy-prime pay у тих самих геoграфіях.",
          "Anduril (як high-benchmark reference, Levels.fyi):",
        ],
        bullets: [
          "Software Engineer: $207K (L3) до $517K+ (L7); median ~$268K total comp; Software Engineering Manager до $735K на high end",
          "Mechanical Engineer: $156K (L3) до $279K+ (L6); median ~$175K; L5 median total ~$250K",
          "Manufacturing Engineer: $134K–$343K range",
          "Company-wide median total comp: ~$237K",
          "vs FAANG: на топі ринку (Anduril, Shield AI senior engineers) software-comp зараз у межах 10–20% від FAANG base+bonus, з equity upside більшим в абсолюті (великі private valuations), але менш ліквідним",
          "vs legacy primes (Lockheed, RTX, Northrop): defense-tech стартапи платять 20–50% більше за comparable інженерів, особливо у software і autonomy",
          "vs SaaS стартапи тої ж стадії: кеш-comp порівнянний; equity grants раннього defense часто трохи менші на percentage-базі, бо valuations вищі",
        ],
        sources: [
          { label: "Anduril Software Engineer - Levels.fyi", url: "https://www.levels.fyi/companies/anduril-industries/salaries/software-engineer" },
          { label: "Anduril Mechanical Engineer - Levels.fyi", url: "https://www.levels.fyi/companies/anduril-industries/salaries/mechanical-engineer" },
          { label: "Anduril Salaries Overview", url: "https://www.levels.fyi/companies/anduril-industries/salaries" },
        ],
      },
      {
        title: "Clearance як career asset + non-salary benefits",
        body: [
          "Три речі постійно з'являються в accepted offers у defense-стартапах, і чому кандидати обмінюють comp на них:",
        ],
        bullets: [
          "Mission — framed конкретно навколо specific end user (a platoon, a ship, a convoy), не абстрактно. 'Ми робимо autonomy для Marine Corps UGV' бʼє 'ми робимо robotics platform' у 9 з 10 interviews з mission-motivated кандидатами",
          "Clearance як career asset — active Secret або TS/SCI вартий $20K–$50K/year в perpetuity на open market, і кандидат залишає вашу компанію з ним. Це частково пояснює, чому primes тримають retention незважаючи на нижчу comp",
          "Job stability — довгі defense program cycles означають менше layoff wave-ів, ніж у consumer tech. Після хвиль 2022–2023 це стало реальним selling point",
          "Lifetime exemption — багато mission-motivated кандидатів активно ХОЧУТЬ identity 'я працюю у defense'. Цей pull не треба sell-ити — треба просто не відштовхувати",
          "Equity norms (Index Ventures Series A benchmarks): Lead/Principal engineer, що приходить на Series A, типово отримує ~0.3%–1.0%; senior IC ~0.1%–0.35%; стандартний 4-year vest з 1-year cliff. Все частіше раннього-стадії команди пропонують 7–10 year post-termination exercise windows, щоб прибрати 90-day exercise cliff",
        ],
        sources: [
          { label: "Index Ventures: Series A option grants", url: "https://www.indexventures.com/rewarding-talent/option-grants-at-series-a" },
          { label: "Holloway: Employee Equity Levels", url: "https://www.holloway.com/g/equity-compensation/sections/typical-employee-equity-levels" },
          { label: "McKinsey: A&D Tech Talent Shortage", url: "https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/debugging-the-software-talent-gap-in-aerospace-and-defense" },
        ],
      },
      {
        title: "Interview red flags — хто провалиться у defense environment",
        body: [
          "Конкретні сигнали, що кандидат з commercial background struggle-итиме, навіть якщо на папері виглядає чудово. Screen-ити експліцитно на interview — якщо хоча б три з цих сигналів присутні, hire буде unhappy протягом 12 місяців.",
        ],
        bullets: [
          "Visceral негативна реакція на paperwork, configuration control або audits",
          "Не може назвати жодного MIL-STD або пояснити, чому environmental qualification має значення",
          "Міряє success тільки в velocity — 'скільки PRs per week' без жодної згадки про verification",
          "Здивування, що роботу треба виконувати на government-furnished laptop або у cleared room",
          "Negative або dismissive щодо роботи з uniformed end users",
          "Foreign-national status без existing green card (створює ITAR-обмеження, які рідко resolvуються вчасно для стартапу)",
          "'Ex-Google engineer anti-pattern' — не талант, а культура, яка не transfer-иться: (а) infinite-resource assumptions (compute, parts, vendors), (б) A/B-test thinking застосоване до safety-critical hardware, (в) небажання писати documentation для замовника, (г) intolerance до slow feedback loops (hardware iterations — це тижні, не хвилини), (д) discomfort з mission",
          "Інженери, що transfer-яться добре, майже завжди self-select hard — вони вже motivated mission-ом і свідомо обмінюють comp і velocity на meaning. Screen-ити на це explicitly",
        ],
        sources: [
          { label: "Defense culture clash - Defense News", url: "https://www.defensenews.com/smr/cultural-clash/2019/01/28/it-wasnt-a-fun-place-to-work-dods-cultural-hurdles-in-attracting-tech-talent/" },
          { label: "Silicon Valley back to roots", url: "https://techcrunch.com/2022/02/05/the-rise-of-defense-tech-is-bringing-silicon-valley-back-to-its-roots/amp" },
        ],
      },
      {
        title: "Defense buddy pattern і реальний ramp",
        body: [
          "Engineer ramp-up у defense hardware суттєво довший за SaaS. General software ramp data показує 3–9 місяців до full productivity. У defense hardware додайте MIL-STD/CDRL learning curve: реалістична оцінка — 6 місяців до першого meaningful технічного contribution, 12 місяців до ownership підсистеми, і до 24 місяців до deep defense-native judgment для інженера, що приходить з commercial background.",
          "Компанії, які швидко ramp-ять інженерів, застосовують експліцитний патерн: кожен новий hire отримує 'defense buddy' — людину з 10+ роками defense-досвіду, яка пояснює acronyms і norms протягом перших шести місяців. Це не mentor — це translator. Buddy відповідає на питання типу 'що означає DR у цьому контексті?' і 'чому я не можу просто переписати цей документ?'",
          "Що більшість нових hires з commercial background потребують явного тренінгу: (а) як читати і відповідати на SOW і CDRL list, (б) purpose і структура MIL-STD-810 test plans, (в) як produce-ити DID-compliant deliverable document, (г) configuration management (ECPs, ECRs, ECNs) з real rigor, (д) як behave-итись у customer design review.",
          "Pre-clearance productivity: покладіть uncleared hires на unclassified work (більшість early-stage UGV engineering — unclassified technical data, що ITAR-controlled, але не classified), segment facilities і networks, щоб uncleared employees могли contribute, і використовуйте pipeline cleared contractors або consultants to cover classified reviews протягом першого року. Interim Secret, яка приходить за 5–30 днів, часто достатня, щоб розблокувати більшість roles.",
        ],
        sources: [
          { label: "Engineer Onboarding Ramp-Up - HackerNoon", url: "https://hackernoon.com/engineer-onboarding-the-ugly-truth-about-ramp-up-time-7e323t9j" },
          { label: "Interim Security Clearance", url: "https://support.clearancejobs.com/security-clearance-faqs/what-is-an-interim-security-clearance" },
        ],
      },
    ],
  },
];
