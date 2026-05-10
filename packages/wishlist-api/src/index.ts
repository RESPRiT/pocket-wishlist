import { Hono } from "hono";
import mall from "./mall.ts";
import wishlist from "./wishlist.ts";

const app = new Hono();

app.get("/", (c) => c.text("howdy!"));
app.route("/", mall);
app.route("/", wishlist);

export default {
  port: Number(process.env.PORT ?? 3001),
  fetch: app.fetch,
};
