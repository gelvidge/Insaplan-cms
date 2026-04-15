# Declare build-time variables globally so Railway can inject them
ARG DATABASE_URL
ARG PAYLOAD_SECRET
ARG PAYLOAD_PUBLIC_SERVER_URL
ARG NEXT_PUBLIC_APP_URL

# Multi-stage build for PayloadCMS + Next.js
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate

# Dependencies stage
FROM base AS deps
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# Builder stage
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Re-declare ARGs in this stage to make them available, then set as ENV
ARG DATABASE_URL
ARG PAYLOAD_SECRET
ARG PAYLOAD_PUBLIC_SERVER_URL
ARG NEXT_PUBLIC_APP_URL

ENV DATABASE_URL=$DATABASE_URL
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV PAYLOAD_PUBLIC_SERVER_URL=$PAYLOAD_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL

RUN NODE_OPTIONS="--max-old-space-size=4096" pnpm build

# Production stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files for Next.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Create media directory
RUN mkdir -p /app/media

EXPOSE 3001

CMD ["node", "server.js"]
