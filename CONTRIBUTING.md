# Contributing to YOUPI PG

Thank you for your interest in contributing! This guide explains how to set up
the project locally using **pnpm** and Docker.

---

## Prerequisites

| Tool | Minimum Version | Notes |
|------|----------------|-------|
| Node.js | 20.x | `node -v` |
| pnpm | 9.x | `pnpm -v` — or enable via `corepack enable` |
| Docker | 24+ | Optional, for containerised runs |
| Docker Compose | v2 | `docker compose version` |

> **Tip — no global pnpm install needed:**  
> Node.js 20 ships with Corepack. Just run `corepack enable` once and pnpm 9.15.4
> (pinned in `package.json#packageManager`) will be activated automatically.

---

## Local Development (bare Node — fastest)

```bash
# 1. Clone
git clone git@github.com:gxurav1710/YouPI-PG.git
cd YouPI-PG

# 2. Install all workspace dependencies with pnpm
corepack enable       # activates pnpm via Corepack (one-time)
pnpm install          # installs all packages & generates pnpm-lock.yaml

# 3. Configure environment
cp .env.example .env
# Edit .env — the SQLite fallback works out of the box (USE_SQLITE_FALLBACK=true)

# 4. Start all services (dev mode, auto-migrates DB)
pnpm dev
```

All six services will start on their default ports:

| Service | URL |
|---------|-----|
| Merchant Admin | http://localhost:6001 |
| Payment Core API | http://localhost:6100 |
| Checkout Portal | http://localhost:7000 |
| Demo Store | http://localhost:5000 |
| Gmail Observer | http://localhost:6003 |
| SMS Observer | http://localhost:6002 |

---

## Running with Docker

The repo ships with a production-grade multi-stage `Dockerfile` and a
`docker-compose.yml` for one-command startup.

```bash
# Build & start (development mode, SQLite volume)
docker compose up --build

# Detached
docker compose up -d --build

# Stop & clean volumes
docker compose down -v
```

### Production mode

```bash
# Set CLOUDFLARE_DOMAIN in .env, then:
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

---

## pnpm Workspace Commands

```bash
# Run a script across all packages
pnpm -r run test

# Run a script in a specific package
pnpm --filter @youpi/common build
pnpm --filter payment-api start

# Add a dependency to a specific package
pnpm --filter payment-api add some-package

# Add a dev dependency to the workspace root
pnpm add -D -w some-dev-tool
```

---

## Pull Request Checklist

- [ ] `pnpm install` runs without errors
- [ ] `pnpm dev` starts all services without crashes
- [ ] No secrets committed (double-check `.env` is gitignored)
- [ ] PR description explains *what* changed and *why*

---

## Project Structure

```
YouPI-PG/
├── apps/
│   ├── payment-api/        # Core REST API & SSE engine   :6100
│   ├── checkout-portal/    # Checkout iframe & youpi.js   :7000
│   ├── merchant-admin/     # Admin hub                    :6001
│   ├── coin-wallet-store/  # Demo store                   :5000
│   ├── gmail-observer/     # Gmail payment observer       :6003
│   ├── sms-observer/       # SMS payment observer         :6002
│   ├── control-center/     # In-process supervisor        :8090
│   └── android-observer-app/ # Android companion driver
├── packages/
│   ├── common/             # Shared types, utils, contracts
│   ├── db/                 # SQLite migrations & repos
│   ├── core/               # Payment state machine
│   ├── observer-sdk/       # Observer submission SDK
│   └── merchant-sdk/       # Merchant integration SDK
├── scripts/                # Utility & lifecycle scripts
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Dev compose
├── docker-compose.prod.yml # Production override
└── pnpm-workspace.yaml     # pnpm workspace config
```
