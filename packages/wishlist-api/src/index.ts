import { Hono } from "hono";
import { cors } from "hono/cors";
import { startRefreshCron } from "./cron.ts";
import mall from "./mall.ts";
import wishlist from "./wishlist.ts";

const app = new Hono();

const corsOrigin = process.env.CORS_ORIGIN;
if (corsOrigin) {
  app.use("/*", cors({ origin: corsOrigin }));
}

app.get("/", (c) => c.text("howdy!"));
app.route("/", mall);
app.route("/", wishlist);

startRefreshCron();

export default {
  port: Number(process.env.PORT ?? 3001),
  // POST /refresh-prices runs the full mall scrape inline (~30-60s for ~300
  // items). 255s is Bun.serve's max — enough headroom that callers see the
  // summary instead of a connection-closed mid-flight.
  idleTimeout: 255,
  fetch: app.fetch,
};
