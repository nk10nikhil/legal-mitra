FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml turbo.json ./
COPY apps/web/package.json apps/web/package.json
COPY packages ./packages
RUN pnpm install --frozen-lockfile=false

FROM base AS builder
COPY --from=deps /app .
COPY . .
RUN pnpm --filter @legalmitra/web build

FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/apps/web/.next apps/web/.next
COPY --from=builder /app/apps/web/public apps/web/public
COPY --from=builder /app/apps/web/package.json apps/web/package.json
COPY --from=builder /app/apps/web/node_modules apps/web/node_modules
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "apps/web/node_modules/next/dist/bin/next", "start", "apps/web", "-p", "3000"]
