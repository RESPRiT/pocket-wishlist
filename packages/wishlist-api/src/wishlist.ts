import { blob } from "https://esm.town/v/std/blob";
import { Hono } from "npm:hono@4";
import jsoncrush from "npm:jsoncrush@1";
import { WishlistResponseSchema } from "../schemas/api.ts";

const app = new Hono();

app.on(["POST", "GET"], "/update-wishlist", async (c) => {
  const crushed = c.req.query("d");

  if (crushed === undefined) return c.text("No data provided", 400);

  try {
    const decoded = jsoncrush.uncrush(
      decodeURIComponent(crushed.replace(/\n/g, ""))
    );

    const data = JSON.parse(decoded);

    const stored = WishlistResponseSchema.parse({
      username: data.player.name,
      userId: data.player.id,
      wishlist: data.wishlist,
      lastUpdated: Date.now(),
    });

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
  if (!wishlist) return c.text(`Could not find wishlist for ${user}`, 400);

  try {
    return c.json(WishlistResponseSchema.parse(wishlist));
  } catch (e) {
    return c.text(`Could not return wishlist: ${e}`, 500);
  }
});

export default app;
