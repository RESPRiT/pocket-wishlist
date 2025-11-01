import { Hono } from "npm:hono@4";
import jsoncrush from "npm:jsoncrush@1";
import { blob } from "https://esm.town/v/std/blob";

const app = new Hono();

app.get("/", (c) => c.text("howdy!"));

app.on(["POST", "GET"], "/update-wishlist", async (c) => {
  const crushed = c.req.query("d");
  console.log(crushed);

  if (crushed === undefined) return c.text("No data provided", 400);

  // TODO: Schema validation
  try {
    const decoded = jsoncrush.uncrush(
      decodeURIComponent(crushed.replace(/\n/g, ""))
    );

    const data = JSON.parse(decoded);

    const stored = {
      username: data.player.name,
      userId: data.player.id,
      wishlist: data.wishlist,
      lastUpdated: Date.now(),
    };

    // TODO: Move away from blob storage
    await blob.setJSON(`wish/${data.player.id}`, stored);
    return c.json("Wishlist data updated! (I think?)");
  } catch (e) {
    return c.text(`Invalid data: ${e}`, 400);
  }
});

app.get("/get-wishlist", async (c) => {
  const user = c.req.query("u");

  if (user === undefined) return c.text("No user specified", 400);

  const wishlist = await blob.getJSON(`wish/${user}`);
  return c.json(wishlist);
});

// for http trigger
export default app.fetch;
