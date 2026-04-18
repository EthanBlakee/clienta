# Clienta MVP (Project Structure)

Minimal Next.js + Tailwind + Prisma scaffold for an AI lead automation SaaS MVP.

## Features covered in structure

- Chat simulation page (`/chat`) with conversation state
- AI auto-response API (`/api/chat`) wired for OpenAI
- Lead qualification question config (service, budget, timeline)
- Lead persistence model via Prisma (`Lead` table)
- Dashboard page (`/dashboard`) listing leads/status/answers
- Scheduling API (`/api/schedule`) with basic slot booking

## Project structure

```txt
clienta/
├── app/
│   ├── api/
│   │   ├── chat/route.ts
│   │   ├── leads/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   └── schedule/route.ts
│   ├── chat/page.tsx
│   ├── dashboard/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── chat-window.tsx
│   └── schedule-slots.tsx
├── lib/
│   ├── prisma.ts
│   └── qualification.ts
├── prisma/
│   └── schema.prisma
├── .env.example
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## How to install dependencies

From the project root:

```bash
npm install
```

If you prefer a clean, lockfile-based install in CI/local reproducible setups:

```bash
npm ci
```

> If `npm` is missing, install Node.js 20+ first and then re-run `npm install`.

## Local run instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set environment variables:
   ```bash
   cp .env.example .env
   ```
   Then add your `OPENAI_API_KEY` in `.env`.
3. Generate Prisma client and create DB:
   ```bash
   npm run db:generate
   npm run db:migrate -- --name init
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```
5. Open:
   - `http://localhost:3000/chat`
   - `http://localhost:3000/dashboard`

## Notes

- Uses SQLite for MVP simplicity.
- No authentication included (per MVP scope).
- This is intentionally minimal and modular to avoid overengineering.
