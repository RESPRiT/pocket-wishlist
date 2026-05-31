This is a monorepo for **pocket wishlist**, a web app that helps you manage your IOTM wishlist.

## Local development

One-time setup: `cp .env.example .env` (the api reads it for `SECRET` and the
optional `KOL_*` mall-scrape credentials; read-only endpoints work without it).

Three modes, run from the repo root:

| Command | Mode | What it runs |
| --- | --- | --- |
| `bun run dev:web` | **Frontend-only fastloop** | Just `wishlist-web` (Vite HMR). `/api/*` is proxied to production (`https://kol.resprit.com`), so you get live data without a local backend — the post-ValTown equivalent of pointing the SPA at a hosted API. |
| `bun run dev` | **Full fastloop** | `wishlist-web` (Vite HMR) + `wishlist-api` (Bun `--watch`) + `wishlist-mafia` (esbuild `--watch`). `/api/*` proxies to the local api on `:3001`. Edit any of the three and the change is live. |
| `bun run dev:docker` | **Smoke test** | Builds and runs the production topology via Docker Compose (`compose.yaml` + `compose.dev.yaml`): the web server reverse-proxies `/api/*` to the api, web-only ingress. No HMR — use this to verify a prod-like build, not to iterate. |

The wire path is the same in every mode: the SPA calls same-origin `/api/*` and
something forwards it to the api. What differs is *where* — prod (mode 1), the
local api process (mode 2), or the in-container reverse proxy (mode 3). Mode 1's
target is set by `API_PROXY_TARGET` (see `packages/wishlist-web/vite.config.ts`);
mode 3's topology is documented in `compose.yaml`.
