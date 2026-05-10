import { Hono } from "hono";
import jsoncrush from "jsoncrush";
import {
  WishlistResponseSchema,
  WishlistSchema,
  WishlistToggleRequestSchema,
} from "wishlist-shared";
import { store } from "./db.ts";

const app = new Hono();

app.on(["POST", "GET"], "/update-wishlist", async (c) => {
  const crushed = c.req.query("d");

  if (crushed === undefined) return c.text("No data provided", 400);

  try {
    const decoded = jsoncrush.uncrush(
      decodeURIComponent(crushed.replace(/\n/g, ""))
    );

    const data = JSON.parse(decoded);
    const curr = store.getWishlist(data.player.id);
    const newWishlist = WishlistSchema.parse({ ...data.wishlist });

    if (curr?.wishlist !== undefined) {
      const allKeys = new Set([
        ...Object.keys(data.wishlist),
        ...Object.keys(curr.wishlist),
      ]);
      for (const key of allKeys) {
        // don't override wishes if the IOTM isn't reported, isn't acquired yet,
        // or if it's already been marked as opened (e.g. if missed in HC)
        if (
          data.wishlist[key] === undefined ||
          data.wishlist[key] === "NONE" ||
          curr.wishlist[key] === "OPENED"
        ) {
          if (curr.wishlist[key] !== undefined) {
            newWishlist[key] = curr.wishlist[key];
          }
        } else {
          newWishlist[key] = data.wishlist[key];
        }
      }
    }

    const update = WishlistResponseSchema.parse({
      username: data.player.name,
      userId: data.player.id,
      wishlist: newWishlist,
      lastUpdated: Date.now(),
    });

    store.setWishlist(data.player.id, update);
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

    const wishlist = store.getWishlist(userId);
    if (!wishlist) return c.text(`Could not find wishlist for ${userId}`, 400);

    // TODO: would prefer if this was immutable
    const updatedWishlist = WishlistResponseSchema.parse(wishlist);
    for (const { id, status } of itemUpdates) {
      updatedWishlist.wishlist[id] = status ? "WISHED" : "NONE";
    }

    store.setWishlist(userId, updatedWishlist);
    return c.json(itemUpdates);
  } catch (e) {
    return c.text(`Invalid toggle request: ${e}`, 400);
  }
});

app.get("/get-wishlist", (c) => {
  const userIdRaw = c.req.query("u");
  const secret = c.req.query("secret");

  // TODO: Implement secret phrase handling

  if (userIdRaw === undefined) return c.text("No user specified", 400);
  const userId = Number.parseInt(userIdRaw);

  const wishlist = store.getWishlist(userId);
  if (!wishlist) return c.text(`Could not find wishlist for ${userId}`, 400);

  try {
    return c.json(WishlistResponseSchema.parse(wishlist));
  } catch (e) {
    return c.text(`Could not return wishlist: ${e}`, 500);
  }
});

export default app;
