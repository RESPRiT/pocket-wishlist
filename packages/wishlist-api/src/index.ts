import { Hono } from "hono";
import { startPriceBackfill, startRefreshCron } from "./cron.ts";
import mall from "./mall.ts";
import wishlist from "./wishlist.ts";

const app = new Hono();

// /health stays at the root: docker + Traefik probes hit api:3001/health
// directly, bypassing the /api routing the SPA + mafia use on the wire.
app.get("/health", (c) => c.text("ok"));

const api = new Hono();
api.get("/", (c) => c.text("howdy!"));
api.route("/", mall);
api.route("/", wishlist);

app.route("/api", api);

startRefreshCron();
startPriceBackfill();

export default {
  port: Number(process.env.PORT ?? 3001),
  // POST /api/refresh-prices runs the full mall scrape inline (~30-60s for
  // ~300 items). 255s is Bun.serve's max — enough headroom that callers see
  // the summary instead of a connection-closed mid-flight.
  idleTimeout: 255,
  fetch: app.fetch,
};
