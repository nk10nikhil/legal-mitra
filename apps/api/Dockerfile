FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml turbo.json ./
COPY apps/api/package.json apps/api/package.json
COPY packages ./packages
RUN pnpm install --frozen-lockfile=false

FROM base AS builder
COPY --from=deps /app .
COPY . .
RUN pnpm --filter @legalmitra/api prisma:generate && pnpm --filter @legalmitra/api build

FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/apps/api/dist apps/api/dist
COPY --from=builder /app/apps/api/node_modules apps/api/node_modules
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 4000
CMD ["node", "apps/api/dist/main.js"]
