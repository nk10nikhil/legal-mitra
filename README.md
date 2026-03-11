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

## Docker

Build website container:

```bash
docker build -f apps/web/Dockerfile -t legalmitra-web .
```
