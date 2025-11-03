import { Hono } from "npm:hono@4";
import { blob } from "https://esm.town/v/std/blob";

const app = new Hono();

app.get("/lowest-mall", async (c) => {
  const prices = await blob.getJSON("mall-prices");
  return c.json(prices);
});

app.post("/update-prices", async (c) => {
  const secret = c.req.query("auth");

  if (secret !== Deno.env.get("secret")) {
    return c.text("Unauthorized, boo.", 401);
  }

  const prices = await c.req.json();

  await blob.setJSON("mall-prices", prices);

  // TODO: Validate price update
  return c.text("Mall prices updated successfully! (I think?)");
});

export default app;
