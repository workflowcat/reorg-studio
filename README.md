# Reorg Studio

> Внутрішній planning-інструмент для проєктування і stress-testing орг-структури малої defense-hardware R&D команди при масштабуванні від 20 → 50 → 100+ осіб.

Reorg Studio — single-page web app (Next.js 16, деплой на Vercel без конфігурації), створений для leadership-команди, щоб спільно планувати реорганізацію. Має три тісно інтегровані workspace-и:

1. **Overview** — research-backed брифінг про те, як насправді організовані співставні defense-hardware компанії, які org-design frameworks переносяться (а які ні), який compliance floor формує організацію, і які hiring waves визначають кожен перехід між фазами росту.
2. **Org Chart** — інтерактивний block-based org-chart builder. Редагуйте блоки, purposes, діапазони штату і parent-relationships для кожної фази росту (Foundation / Growth / Scale).
3. **RACI Matrix** — кольоровий RACI-редактор з автоматичним аудитом, що позначає активності без Accountable-власника або без Responsible-сторони.

Усе живе в `localStorage`. Немає бекенду, немає телеметрії, немає серверних даних. Команда шерить сценарії через експорт JSON зі сторінки Scenarios.

## Мова інтерфейсу

UI повністю українською, з англійськими термінами там, де англійська — фактична робоча мова цього домену: RACI, R&D, ITAR, AS9100, CMMC, NIST, TRL, IPT, CEO/COO/CTO, Program Manager, Skunk Works, ROS2, SolidWorks, ANSYS і назви компаній-бенчмарків (Anduril, Shield AI, Saronic тощо).

## Вимоги

- Node.js 20.9 або новіше (вимога Next.js 16)
- npm 10 або новіше

## Як запустити

```bash
npm install
npm run dev
```

Відкрийте <http://localhost:3000>.

## Доступні скрипти

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build
npm run start    # запуск production build
npm run lint     # ESLint
```

## Деплой на Vercel

Проєкт спроєктовано для деплою на Vercel без додаткової конфігурації.

1. Запушити репо в GitHub, GitLab або Bitbucket.
2. Перейти на <https://vercel.com/new> і імпортувати репо.
3. Прийняти авто-детектовані налаштування Vercel для Next.js (framework preset: Next.js, root directory: `./`, build command: `next build`, output directory: `.next`).
4. Натиснути **Deploy**.

Змінних середовища немає, зовнішніх сервісів налаштовувати не треба. Перший деплой має завершитись менш ніж за 90 секунд. Кожен push у `main` тригерить production-деплой; кожен push у будь-яку іншу гілку створює preview URL, який можна шерити команді.

### Self-hosting alternative

Якщо Vercel не підходить, будь-який Node 20+ host, що вміє запускати `next start`, спрацює. Можна також запустити production build у Docker:

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

## Структура проєкту

```
src/
├── app/
│   ├── layout.tsx              Root layout + глобальна навігація
│   ├── page.tsx                Overview / лендінг
│   ├── org-chart/page.tsx      Org-chart builder
│   ├── raci/page.tsx           RACI matrix
│   └── scenarios/page.tsx      Метадані сценарію + експорт/імпорт
├── components/
│   ├── site-header.tsx         Глобальна навігація
│   ├── hydrated.tsx            Hydration-safe wrapper
│   ├── ui/primitives.tsx       Button, Card, Badge, Input і т.д.
│   ├── org-chart/
│   │   ├── workspace.tsx       Дерево + toolbar + phase switcher
│   │   └── block-editor.tsx    Side-panel для редагування вибраного блока
│   ├── raci/workspace.tsx      Matrix editor + audit
│   └── scenarios/workspace.tsx Метадані, експорт, імпорт, reset
├── content/
│   └── overview.ts             Research-backed контент для overview-сторінки
└── lib/
    ├── types.ts                Domain-типи
    ├── default-data.ts         Seed-сценарій (phases, blocks, roles, RACI)
    ├── store.ts                Zustand store + localStorage persistence
    └── utils.ts                Хелпери (cn, formatRange, slug)
```

## Data model

Застосунок оперує **Scenario** — це чистий JSON-об&#39;єкт, який містить:

- `phases` (фіксовано: Foundation, Growth, Scale)
- `blocks` — функціональні департаменти з parent-child ієрархією і діапазонами штату по фазах
- `roles` — визначення окремих ролей, прив&#39;язаних до блоків
- `raci` — активності з R / A / C / I призначеннями по блоках

Сценарій персистується у `localStorage` під ключем `reorg-tool-v2-ua`. Його можна експортувати в JSON і закомітити у version control поруч із вашим product roadmap — це дає реально корисний planning-артефакт, що еволюціонує разом з бізнесом.

## Типовий workflow

1. Член leadership-team відкриває застосунок і читає **Overview**, щоб отримати спільний словник.
2. В **Org Chart** клікає через Фазу 1 / 2 / 3, щоб побачити, як дефолтна структура еволюціонує.
3. Починає редагувати блоки — змінює діапазони штату, перейменовує, reparent-ить команди — щоб відповідало живій компанії.
4. Переходить до **RACI Matrix** і редагує ownership-и активностей, доки аудит не стане зеленим (кожна активність має рівно одного Accountable-власника).
5. Зі сторінки **Scenarios** експортує сценарій як JSON і шерить у Slack / email / git на рев&#39;ю.
6. Команда імпортує JSON, вносить правки, експортує знову. Сценарії можна version-контролити.

## Що свідомо відсутнє (v0.1)

- **Multi-user колаборація в браузері** — це single-user інструмент. Шеринг — через JSON-експорт. Для real-time колаборації найпростіший upgrade — додати Vercel KV або Supabase і зберігати сценарій під shareable URL.
- **Diff між сценаріями** — можна експортувати кілька сценаріїв, але візуального diff UI немає. Якщо треба — відправна точка це `scenarios/compare/page.tsx`, що приймає два JSON-и.
- **Role editor** — ролі є в data model і заcідані, але UI для індивідуального редагування ще не побудований. Block editor покриває більшість use case-ів на малому масштабі.
- **Print / PDF export** — сторінки print-friendly, але дедикованої кнопки «Export to PDF» немає.
- **Auth** — логіну немає. Свідомо для v0.1, оскільки все живе у браузері.

## Стек

- Next.js 16.2 (App Router, Turbopack)
- React 19.2
- TypeScript 5
- Tailwind CSS 4
- Zustand 5 (client state + localStorage persistence)
- dnd-kit (встановлено для майбутньої drag-and-drop реорг-фічі)
- lucide-react (іконки)

## Ліцензія

Внутрішній інструмент. Не перерозповсюджувати без згоди leadership-team.
