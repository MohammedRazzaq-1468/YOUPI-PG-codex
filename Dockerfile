# =============================================================================
# YOUPI PG — Multi-Stage Dockerfile
# Builds the entire Node.js monorepo with pnpm workspaces.
# =============================================================================

# ── Stage 1: base ─────────────────────────────────────────────────────────────
# Shared base layer: installs pnpm and sets up corepack.
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate
WORKDIR /app

# ── Stage 2: deps ─────────────────────────────────────────────────────────────
# Installs all production + workspace dependencies.
FROM base AS deps
# Copy manifests first for layer-cache efficiency.
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY packages/common/package.json   ./packages/common/package.json
COPY packages/db/package.json       ./packages/db/package.json
COPY packages/core/package.json     ./packages/core/package.json
COPY packages/observer-sdk/package.json ./packages/observer-sdk/package.json
COPY packages/merchant-sdk/package.json ./packages/merchant-sdk/package.json
COPY apps/payment-api/package.json    ./apps/payment-api/package.json
COPY apps/checkout-portal/package.json ./apps/checkout-portal/package.json
COPY apps/merchant-admin/package.json  ./apps/merchant-admin/package.json
COPY apps/payment-help/package.json    ./apps/payment-help/package.json
COPY apps/gmail-observer/package.json  ./apps/gmail-observer/package.json
COPY apps/sms-observer/package.json    ./apps/sms-observer/package.json
COPY apps/control-center/package.json  ./apps/control-center/package.json
COPY apps/coin-wallet-store/package.json ./apps/coin-wallet-store/package.json

# Install with frozen lockfile for reproducible builds.
RUN pnpm install --frozen-lockfile --prod=false

# ── Stage 3: build ────────────────────────────────────────────────────────────
# Compiles TypeScript (only the packages that have a tsconfig).
FROM deps AS builder
COPY . .
# Build only the common package (the only one with tsc output needed at runtime).
RUN pnpm --filter @youpi/common build || true

# ── Stage 4: runner ───────────────────────────────────────────────────────────
# Lean production image: copies sources + node_modules, omits dev tooling.
FROM base AS runner
ENV NODE_ENV=production
ENV YOUPI_MODE=production

# Create a non-root user for security.
RUN addgroup --system --gid 1001 youpi && \
    adduser  --system --uid 1001 youpi

WORKDIR /app

# Copy the fully-installed workspace from the builder stage.
COPY --from=builder --chown=youpi:youpi /app ./

# Persistent data volume mount point.
RUN mkdir -p data && chown youpi:youpi data
VOLUME ["/app/data"]

# Expose every service port (nginx / reverse-proxy selects the right one).
EXPOSE 5000 6001 6002 6003 6100 7000 8090

USER youpi

# Health-check: ping the Payment API.
HEALTHCHECK --interval=30s --timeout=10s --start-period=20s --retries=3 \
  CMD wget -qO- http://localhost:6100/health || exit 1

# Default command: development mode (override in docker-compose / k8s).
CMD ["node", "scripts/dev.js"]
