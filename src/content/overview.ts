// Дослідницький контент для оглядової / головної сторінки.
// Секції збагачено з чотирьох паралельних research-прогонів, заархівованих
// у /research/ у цьому репо:
//   benchmarks.md  — як Anduril, Shield AI, Saronic, Skydio, Epirus,
//                    Hadrian і Helsing насправді будували команди
//                    при чисельності 20 → 100+
//   theory.md      — Skunk Works, IPT, спектр сили матриці,
//                    Conway's Law, 70/30 dual portfolio, що ламається
//                    на кожному переході масштабу
//   compliance.md  — ISO 9001/AS9100, MIL-STD, TRL, ITAR/EAR, CMMC/
//                    NIST 800-171 і як compliance формує орг-структуру
//   hiring.md      — критичні перші найми, defense IQ, реалії з
//                    допусками, хвилі найму 20 → 50 → 100+
//
// Джерела залишаємо на картках, щоб рецензенти могли перевірити провенанс.

export type OverviewSource = { label: string; url?: string };

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
  cards: OverviewCard[];
};

export const OVERVIEW: OverviewSection[] = [
  // ──────────────────────────────────────────────────────────────
  {
    id: "benchmarks",
    eyebrow: "Benchmarks",
    title: "Як насправді організовані співставні defense-hardware компанії",
    summary:
      "Реальні компанії, що проходять перехід 20 → 100 осіб, не виглядають як акуратна схема з підручника. Anduril, Shield AI, Saronic, Skydio, Epirus, Hadrian і Helsing зрештою приходять до схожої форми — але роблять дуже різні вибори щодо того, коли розділяти функції, де розмістити quality та як інтерфейситися з державним замовником.",
    cards: [
      {
        title: "Anduril — software-first, розділена engineering-організація",
        body: [
          "Anduril (заснована 2017) — це еталонний приклад. Її п'ятеро засновників свідомо стартували з software-centric композиції — Palmer Luckey, Trae Stephens, Brian Schimpf (ex-Palantir director of engineering), Joe Chen (ex-Oculus hardware lead) і Matt Grimm (COO) — і побудували Lattice OS ще до hardware-платформ, а потім наростили навколо нього Ghost Shark, Fury, Roadrunner і Sentry.",
          "При ~6 200 працівниках станом на кінець 2025, engineering становить приблизно 42% штату. Структурна деталь, яку варто копіювати: дві окремі SVP-ролі — SVP Engineering (~413 прямих/непрямих підлеглих) і SVP Programs & Engineering (~122) — що свідомо розділяють core engineering від engineering, прив'язаного до customer-програм. Це модель IPT з силіконово-долинним лейблом.",
          "Історія виробництва не менш повчальна. Arsenal-1 в Огайо — це перший виділений виробничий майданчик Anduril, але перші 25 production leads — 'Fury Launch Team' — місяцями тренувалися в Costa Mesa разом з R&D-командою перед деплоєм. Саме цю фазу спільного навчання пропускає більшість провалених hardware-стартапів.",
        ],
        sources: [
          { label: "Anduril Leadership", url: "https://www.anduril.com/anduril-leadership" },
          { label: "Arsenal-1 announcement", url: "https://www.anduril.com/news/anduril-building-arsenal-1-hyperscale-manufacturing-facility-in-ohio" },
          { label: "Contrary Research deep dive", url: "https://research.contrary.com/company/anduril" },
          { label: "HR Grapevine: +1000 hires in 9 months", url: "https://www.hrgrapevine.com/us/content/article/2024-09-09-defense-tech-start-up-anduril-hires-over-1000-employees-in-9-months-how-fast-is-too-fast" },
        ],
      },
      {
        title: "Shield AI — купити виробниче плече",
        body: [
          "Shield AI (заснована 2015) проходила відстежувану референс-криву: <30 осіб наприкінці 2017 → ~150 до 2020 → ~900 на квітень 2025 → ~1 319 на початок 2026. Засновники покривають три осі — CEO Ryan Tseng (consumer hardware, попередній exit у wireless-charging у Qualcomm), President Brandon Tseng (ex-Navy SEAL + HBS MBA) і CTO Andrew Reiter (computer vision, Draper Labs). Патерн — один засновник на кожну вісь — повторюється у всіх miltech-компаніях з цієї вибірки.",
          "Найбільший структурний урок: Shield AI нарощував hardware-плече через придбання Martin UAV у 2021, а не намагався органічно підняти виробництво V-BAT. Вона успадкувала 107k-sqft 'Batcave' у Далласі разом з наявною командою виробництва. Ко-локація дизайну, engineering і виробництва на цьому майданчику — свідомий вибір. VP Manas Menon (Production & Supply Chain): 'На ранньому етапі нас було 15 в одній кімнаті, які намагалися зібрати п'ять квадрокоптерів. Зараз ми виробляємо Group 3 aircraft і робимо їх сотнями щороку.'",
          "Також варто відзначити: Chirag Shah тримає комбінований титул Chief Product and Engineering Officer. Тримати product strategy всередині engineering замість того, щоб створювати антагоністичний product/eng split — це свідомий структурний вибір.",
        ],
        sources: [
          { label: "Shield AI Batcave", url: "https://shield.ai/its-all-systems-go-at-shield-ais-texas-unified-facility/" },
          { label: "Shield AI team", url: "https://shield.ai/our-team/" },
          { label: "Contrary Research Shield AI", url: "https://research.contrary.com/company/shield-ai" },
          { label: "Fortune on Shield AI inflection", url: "https://fortune.com/2025/12/21/shield-ai-ukraine-defense-tech-gary-steele/" },
        ],
      },
      {
        title: "Saronic — найближча крива до старту з 20 осіб",
        body: [
          "Saronic має найближчу криву зростання до того, з чим зіткнеться нова UGV-компанія. Заснована 2022; ~271 працівник наприкінці 2024, ~404 до червня 2025, ~471 до липня 2025, ~1 300+ на початку 2026. Арк 20 → 100 → 500 відбувся приблизно за 18 місяців.",
          "Її виконавчий розподіл на двох засновників варто вивчити: Dino Mavrookas (CEO) — Navy SEAL з одинадцятьма роками служби і вісьмома бойовими турами. Doug Lambert (COO) володіє R&D, engineering і виробництвом — сидить між потребами замовника і виробничими таймлайнами. Vibhav Altekar (CTO, ко-засновник) керує Forward Deployed Engineering, Product, Special Programs і Software у сферах perception, navigation, ML, C2 і systems integration.",
          "Незвичайні структурні сигнали: CTO володіє організацією 'Forward Deployed Engineering' з першого дня — модель FDE від Palantir, імпортована в hardware-компанію. Окрема функція 'Defense Growth' (на чолі з Nick Stoner) перетворює R&D-спроможності на фінансовані program of record; вона явно відокремлена і від engineering, і від загальної BD. Географія віддзеркалює функцію: Austin (HQ/engineering), New Orleans (naval architects, marine engineers, systems testing — все ко-локовано).",
        ],
        sources: [
          { label: "Saronic Team", url: "https://www.saronic.com/team" },
          { label: "Saronic Louisiana expansion", url: "https://insideunmannedsystems.com/saronic-raises-1-75b-expands-louisiana-shipbuilding-footprint-as-autonomous-surface-vessel-production-scales/" },
          { label: "Pragmatic Engineer on FDEs", url: "https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers" },
        ],
      },
      {
        title: "Структурна форма, до якої вони сходяться",
        body: [
          "Крізь Anduril, Shield AI, Saronic, Skydio, Epirus, Hadrian і Helsing постійно з'являється одна й та сама форма: трикутник засновників, що покриває mission/government-авторитет, systems-level engineering і operations/виробництво; непропорційно великий engineering-блок; і виробнича функція, що починає життя тісно зчепленою з R&D і відокремлюється лише тоді, коли обсяги змушують.",
          "Співвідношення 'інженери до не-інженерів', на яке можна планувати:",
        ],
        bullets: [
          "При ~20 осіб: 70–80% інженерів",
          "При ~50 осіб: ~60% інженерів, з'являється перший виділений Program Manager, Head of QA імпортується з праймa або SpaceX",
          "При ~100 осіб: 40–50% інженерів, декілька названих Program Managers, Forward Deployed Engineering стає названою дисципліною, виділені capture/proposal writers, перший in-house General Counsel",
          "Autonomy/AI завжди виокремлюється як окрема дисципліна від embedded/software — вона research-heavy і працює в іншому ритмі",
          "DC (або DC-area) офіс з'являється непропорційно рано в кожної компанії з цього списку, бо інтерфейс до держави цього вимагає",
        ],
        sources: [
          { label: "Contrary Research Helsing", url: "https://research.contrary.com/company/helsing" },
          { label: "Contrary Research Epirus", url: "https://research.contrary.com/company/epirus" },
          { label: "Bolt on hardware team building", url: "https://blog.bolt.io/the-complete-guide-to-building-hardware-startup-teams-part-3-management-scale-95bd856e14f5" },
          { label: "Skydio exec announcements", url: "https://medium.com/skydio/autonomous-drone-maker-skydio-adds-key-product-and-engineering-executives-to-growing-team-1968647c0fc9" },
        ],
      },
      {
        title: "Де насправді живе quality",
        body: [
          "У всіх семи досліджених компаніях є послідовний патерн, який правильно розв'язує питання QA:",
          "Integration & Test живе всередині Engineering (не Manufacturing). Це частина R&D-сторони — Anduril, Shield AI і Skydio всі підтверджують це у публічній орг-структурі. Production Quality живе всередині Manufacturing/Operations. VP Production & Supply Chain у Shield AI володіє production quality; Head of Quality у Hadrian (ex-SpaceX) вбудований у завод.",
          "Розділення між ними зазвичай відбувається на позначці 50–80 осіб, коли компанія переходить від 'один прототип за раз' до low-rate initial production. Нижче цього достатньо одного quality-інженера з незалежним шляхом ескалації.",
          "Патерн senior-імпорту в Hadrian вартує уваги: вони найняли quality-лідерство безпосередньо зі SpaceX, а не ростили його внутрішньо. Імпорт досвідченого quality-лідера дешевший і швидший, ніж спроба будувати функцію органічно.",
        ],
        sources: [
          { label: "Breaking Defense on Hadrian", url: "https://breakingdefense.com/2024/08/how-startup-hadrian-plans-to-take-over-the-defense-manufacturing-world/" },
          { label: "TechCrunch on Hadrian", url: "https://techcrunch.com/2024/02/21/hadrian-automations-ceo-wants-to-defy-history-and-revitalize-american-industry/" },
        ],
      },
      {
        title: "Контрінтуїтивні структурні вибори, що спрацювали",
        body: [
          "Декілька виборів з бенчмарк-набору, які на папері виглядають дивно, але спрацювали на практиці:",
        ],
        bullets: [
          "Software-first hardware-філософія Anduril — побудова Lattice OS ще до будь-якої платформи, щоб наступні hardware-програми амортизували одну software-інвестицію.",
          "Shield AI придбав Martin UAV заради готового виробничого плеча замість того, щоб піднімати його з нуля — це врятувало їх від пастки 'перший раз масштабуємо виробництво'.",
          "Epirus агресивно наймає з Raytheon — трейд-оф у тому, що виконання повільніше (плато на ~240), але є глибокий defense domain knowledge. Правильна відповідь, якщо твій замовник домінує в program-of-record процесах.",
          "Hadrian парує software-інженерів 1:1 з операторами shop-floor і трактує quality-лідерство як senior-імпорт зі SpaceX.",
          "Advisory boards як замінник in-house DoD-експертизи до ~100 осіб (Skydio's National Security Advisory Board, Strategic Advisory Board у Epirus).",
          "Концентрація BD/capture у DC, а engineering у talent hubs — кожна benchmarked-компанія має DC-footprint, непропорційний до загального розміру.",
        ],
        sources: [
          { label: "Ghost Shark: prototype to fleet in 3 years", url: "https://www.anduril.com/news/ghost-shark-enters-program-of-record-from-prototype-to-fleet-in-three-years" },
          { label: "Skydio National Security Advisory Board", url: "https://www.skydio.com/blog/skydio-announces-new-national-security-advisory-board-with-leading-experts-in-national-security-and" },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────────────────────
  {
    id: "theory",
    eyebrow: "Org design theory",
    title: "Фреймворки, які застосовуються (і ті, що ні)",
    summary:
      "Defense hardware — це незвичайна суміш аерокосмічної дисципліни і стартап-швидкості. Фреймворки, які переносяться чисто, в основному походять з аерокосмосу і systems engineering — не з SaaS org design. Ось ті, які справді варто застосовувати.",
    cards: [
      {
        title: "Гібрид functional-matrix і його походження",
        body: [
          "Functional-matrix гібрид поєднує дві осі організації одночасно. Функціональні вертикалі — механіка, електроніка, embedded, autonomy, виробництво, quality, test — володіють технічною досконалістю, кар'єрним ростом, стандартами і tooling. Крос-функціональні продуктові команди, складені з цих вертикалей, володіють доставкою конкретної платформи або програми. Інженери мають домівку у функціональному департаменті, але деплояться в одну або кілька продуктових команд.",
          "Патерн бере початок від Skunk Works у Lockheed, заснованого 1943 року під керівництвом Kelly Johnson для побудови XP-80. Lockheed витягнув найкращих інженерів і механіків з функціональної організації і вбудував їх у малу крос-функціональну команду, що володіла усім апаратом end-to-end — сильна матриця ще до того, як це слово існувало. Та команда створила U-2, SR-71, F-117, F-22 і F-35.",
          "Defense-індустрія стандартизувалася на матриці, бо hardware-програми потребують двох речей одночасно, яких не може дати ані суто функціональна, ані суто проєктна організація: глибокої domain-експертизи (аеродинаміка, RF, термо, структурна механіка), що вимагає довгостроку в спеціалізованих спільнотах; і щільної крос-domain інтеграції навколо одного апарата з вимогливими обмеженнями щодо графіку, вартості і performance.",
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
        title: "Conway's Law і inverse Conway maneuver",
        body: [
          "Conway's Law (1968): 'Організації, які проєктують системи, змушені видавати проєкти, що копіюють структуру комунікацій цих організацій.' У defense hardware це проявляється брутально — якщо ви розділите embedded і механіку на окремі вежі, що зустрічаються лише на review gates, ваш продукт матиме чистий mechanical-electronic інтерфейс і жахливу кабельну мережу.",
          "Inverse Conway maneuver — це свідомо організуватися навколо продукту, який ви хочете, а не дисциплін, які у вас є. Team Topologies (Matthew Skelton і Manuel Pais) формалізує це чотирма типами команд — stream-aligned teams володіють потоком доставки, platform teams знижують когнітивне навантаження на stream-aligned teams, enabling teams проштовхують спроможності крізь команди, а complicated-subsystem teams володіють компонентами глибокої спеціалізації. IPT — це аерокосмічна версія stream-aligned teams.",
          "Практично: якщо ви хочете продукт з чистими platform-embedded-comms межами, ваша орг-структура повинна мати команди, що мапляться на ці межі. Якщо ви хочете продукт з агресивною інтеграцією крізь ці межі, вам потрібні крос-дисциплінарні команди, які живуть разом і шипляться разом.",
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
    title: "Compliance-підлога, що формує вашу орг-структуру",
    summary:
      "Defense compliance — це не опція і не щось, що можна відокремити. Він визначає, куди йде штат, хто може бути в якій кімнаті, чому деякі функції мусять бути організаційно незалежними і скільки часу треба, щоб довести нового інженера до продуктивного output. Планувати орг без планування compliance-footprint — це причина, з якої більшість first-time defense-стартапів пропускають перший acceptance milestone.",
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
        title: "Export control — ITAR, EAR, Wassenaar",
        body: [
          "Export control — це не опція, і штрафи кримінальні. Майже кожен UGV, autonomy stack і radio system або ITAR-controlled (State Department, 22 CFR parts 120–130), або EAR-controlled (Commerce Department). Це регулює не лише те, хто може отримати експорт, а й хто може торкатися дизайну — 'deemed exports' покривають доступ до technical data з боку foreign persons навіть всередині США.",
          "Прямі наслідки для найму: non-US persons можуть бути обмежені від певних technical data, якщо ви не тримаєте для них export license. Саме тому defense-hardware орги зазвичай мають Empowered Official — названу US-person з юридичною повноваженням робити export determinations — і Facility Security Officer (FSO), який сидить незалежно від HR і engineering і репортує безпосередньо CEO.",
          "Штрафи серйозні: ITAR violations можуть сягати $1 млн за порушення і 20 років ув'язнення. Це та функція, де 'розберемося пізніше' — найдорожча з можливих стратегій.",
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
    ],
  },
  // ──────────────────────────────────────────────────────────────
  {
    id: "hiring",
    eyebrow: "Hiring & roles",
    title: "Кого ви наймаєте, у якому порядку і чому",
    summary:
      "Найм у defense-hardware не схожий ні на що з SaaS-найму. Кандидатів менше, обмеження clearance і громадянства мають значення, mission pull — це реальний compensation lever, а неправильний найм може втопити program milestone. Ось як виглядають перші 20 → 100 наймів на практиці.",
    cards: [
      {
        title: "Трикутник засновників",
        body: [
          "У consumer software команда з двох засновників CEO/CTO може credibly випустити MVP. У defense hardware життєздатна команда засновників зазвичай потребує трьох архетипів — mission/government-credible CEO, systems-level CTO, і operations/виробничо-орієнтований COO-еквівалент — бо бізнес одночасно мусить виграти замовника, який говорить спеціалізованим діалектом, інженерити фізичний продукт проти брутальних environmental specs, і поставити compliant supply та production систему.",
          "Комбінація Saronic — канонічний приклад: CEO Dino Mavrookas (Navy SEAL, одинадцять років служби, вісім бойових турів) у парі з CTO Vibhav Altekar (autonomy architecture). Тріо Shield AI (Ryan Tseng, Brandon Tseng, Andrew Reiter) покриває ті самі три осі: hardware commercial experience, operational/uniformed domain knowledge і глибокий research.",
          "Профіль defense-CEO справді інший. Defense-замовники купують через відносини і доступ до program office, а не через self-service funnels. Засновникам потрібен високий 'defense IQ' — зароблений через попередню військову службу, цивільну DoD-кар'єру або глибокі program-office relationships — бо contracting officers повинні довіряти команді достатньо, щоб взяти ризик на SBIR, OTA або інший non-traditional vehicle.",
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
        title: "Неправильні найми і як вони провалюються",
        body: [
          "Класичний failure mode — наймати senior ex-big-tech інженерів, які ніколи не шипили фізичний продукт. Вони приносять сильну software-інтуїцію і погані hardware-інстинкти: хочуть швидко ітеруватися над дизайном, який фізично заморожено за три місяці до trial, недооцінюють документацію і трактують compliance як бюрократичний overhead, а не feature requirement.",
          "Інший failure mode — пере-наймати з праймів: отримуєте повністю process-compliant команду, яка не може рухатися зі startup-швидкістю. Вони звикли до контексту, де питання 'чому немає формального ECO-процесу для цієї маленької зміни' має sensible відповідь, а при 20 особах відповідь — 'бо нас тут лише четверо і ми спілкуємося щодня'.",
          "Warning signs на інтерв'ю: кандидати, що не можуть назвати абревіатури, з якими працювали (CDRL, DID, DR, FCA, PCA, ECP, PRR, CDR); кандидати, що кілька років не торкалися фізичного прототипу; кандидати, що формулюють engineering-проблеми виключно в software-термінах; кандидати, що mission-curious, але не мають релевантного hardware-досвіду.",
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
    ],
  },
];
