import { blob } from "https://esm.town/v/std/blob";
import { Hono } from "npm:hono@4";
import jsoncrush from "npm:jsoncrush@1";
import {
  WishlistResponse,
  WishlistResponseSchema,
  WishlistSchema,
  WishlistToggleRequestSchema,
} from "../schemas/api.ts";

const app = new Hono();

app.on(["POST", "GET"], "/update-wishlist", async (c) => {
  const crushed = c.req.query("d");

  if (crushed === undefined) return c.text("No data provided", 400);

  try {
    const decoded = jsoncrush.uncrush(
      decodeURIComponent(crushed.replace(/\n/g, ""))
    );

    const data = JSON.parse(decoded);
    const curr: WishlistResponse = await blob.getJSON(`wish/${data.player.id}`);
    const newWishlist = WishlistSchema.parse(curr.wishlist ?? data.wishlist);

    if (curr !== undefined) {
      Object.keys(newWishlist).forEach((key) => {
        // don't override wishes if the IOTM isn't reported, isn't acquired yet,
        // or if it's already been marked as opened (e.g. if missed in HC)
        if (
          data.wishlist[key] === undefined ||
          data.wishlist[key] === "NONE" ||
          curr.wishlist[key] === "OPENED"
        ) {
          newWishlist[key] = curr.wishlist[key];
        } else {
          newWishlist[key] = data.wishlist[key];
        }
      });
    }

    const update = WishlistResponseSchema.parse({
      username: data.player.name,
      userId: data.player.id,
      wishlist: newWishlist,
      lastUpdated: Date.now(),
    });

    // TODO: Move away from blob storage
    await blob.setJSON(`wish/${data.player.id}`, update);
    return c.text("Wishlist data updated! (I think?)");
  } catch (e) {
    return c.text(`Invalid data: ${e}`, 400);
  }
});

// TODO: handle auth
app.on(["POST"], "/toggle-wishlist", async (c) => {
  try {
    const { userId, auth, itemUpdates } = WishlistToggleRequestSchema.parse(
      await c.req.json()
    );

    const wishlist = await blob.getJSON(`wish/${userId}`);
    if (!wishlist) return c.text(`Could not find wishlist for ${userId}`, 400);

    // TODO: would prefer if this was immutable
    const updatedWishlist = WishlistResponseSchema.parse(wishlist);
    for (const { id, status } of itemUpdates) {
      updatedWishlist.wishlist[id] = status ? "WISHED" : "NONE";
    }

    await blob.setJSON(`wish/${userId}`, updatedWishlist);
    return c.json(itemUpdates);
  } catch (e) {
    return c.text(`Invalid toggle request: ${e}`, 400);
  }
});

app.get("/get-wishlist", async (c) => {
  const userId = c.req.query("u");
  const secret = c.req.query("secret");

  // TODO: Implement secret phrase handling

  if (userId === undefined) return c.text("No user specified", 400);

  const wishlist = await blob.getJSON(`wish/${userId}`);
  if (!wishlist) return c.text(`Could not find wishlist for ${userId}`, 400);

  try {
    return c.json(WishlistResponseSchema.parse(wishlist));
  } catch (e) {
    return c.text(`Could not return wishlist: ${e}`, 500);
  }
});

export default app;
