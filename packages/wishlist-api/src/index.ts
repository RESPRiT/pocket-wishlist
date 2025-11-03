import { Hono } from "npm:hono@4";
import mall from "./mall.ts";
import wishlist from "./wishlist.ts";

const app = new Hono();

app.get("/", (c) => c.text("howdy!"));
app.route("/", mall);
app.route("/", wishlist);

export default app.fetch;
