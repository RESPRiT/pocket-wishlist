import { Hono } from "hono";
import { cors } from "hono/cors";
import mall from "./mall.ts";
import wishlist from "./wishlist.ts";

const app = new Hono();

const corsOrigin = process.env.CORS_ORIGIN;
if (corsOrigin) {
  app.use("/*", cors({ origin: corsOrigin }));
}

app.get("/", (c) => c.text("howdy!"));
app.get("/health", (c) => c.text("ok"));
app.route("/", mall);
app.route("/", wishlist);

export default {
  port: Number(process.env.PORT ?? 3001),
  fetch: app.fetch,
};
