# LegalMitra Monorepo

Production-grade frontend foundation and monorepo scaffold for LegalMitra, India's AI-assisted, blockchain-secured digital justice infrastructure.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible component architecture
- Zustand
- Framer Motion
- Lucide React
- next-themes
- NestJS (modular monolith API)
- Prisma + PostgreSQL
- Redis
- MinIO
- Turborepo + pnpm workspaces

## Quick Start

```bash
pnpm install
pnpm dev
```

Web app runs at `http://localhost:3000`.

## Monorepo Scripts

```bash
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm format
```

## Workspace Layout

- `apps/web`: Official LegalMitra website + docs hub
- `apps/api`: Core Platform API (NestJS modular monolith)
- `apps/*`: Future platform services and deployable applications
- `packages/*`: Shared libraries and cross-platform packages
- `core`, `domain`, `infra`: Architecture foundations for future backend and platform evolution
- `governance`, `legal-corpus`, `data-platform`: Policy, legal data, and analytics foundations

## Web Pages

- `/`
- `/about`
- `/architecture`
- `/platform`
- `/ai-system`
- `/security`
- `/governance`
- `/developers`
- `/documentation`
- `/contact`
- `/auth/login`
- `/auth/register`
- `/dashboard`
- `/cases`
- `/cases/[id]`
- `/hearings`
- `/evidence`
- `/ai-assistant`

## Core API

API app path: `apps/api`

### Modules

- AuthModule
- UsersModule
- CasesModule
- EvidenceModule
- HearingsModule
- NotificationsModule
- AiModule

### API Endpoints

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `GET /users/me`
- `PATCH /users/me`
- `GET /users/:id`
- `POST /cases`
- `GET /cases`
- `GET /cases/:id`
- `PATCH /cases/:id`
- `POST /evidence/upload`
- `GET /evidence/:id`
- `POST /hearings`
- `GET /hearings/case/:caseId`
- `PATCH /hearings/:id`
- `POST /notifications`
- `GET /notifications`
- `PATCH /notifications/:id/read`
- `POST /ai/chat`
- `POST /ai/summarize-case`

### Prisma

Schema path: `apps/api/prisma/schema.prisma`

Run:

```bash
pnpm --filter @legalmitra/api prisma:generate
pnpm --filter @legalmitra/api prisma:migrate
```

## Docker

Infrastructure and apps:

```bash
docker compose up --build
```

Docker endpoints:

- Web: `http://localhost:3001`
- API: `http://localhost:4001`
- Postgres: `localhost:5433`

Run Prisma migration against Docker Postgres:

```bash
docker compose up -d postgres redis minio
pnpm --filter @legalmitra/api prisma:migrate
```

Standalone website container:

```bash
docker build -f apps/web/Dockerfile -t legalmitra-web .
```
