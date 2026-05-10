import { Hono } from "hono";
import {
  type CombinedPrice,
  type MallPrice,
  MallPriceResponseSchema,
  MallPriceSchema,
  PriceGunResponseSchema,
} from "wishlist-shared";
import { store } from "./db.ts";

const app = new Hono();

app.get("/get-prices", (c) => {
  try {
    const prices = store.getPrices();
    const lastUpdated = store.getPricesLastUpdate();

    return c.json(MallPriceResponseSchema.parse({ prices, lastUpdated }));
  } catch (e) {
    return c.text(`Could not return price data: ${e}`, 500);
  }
});

app.get("/lowest-mall", (c) => {
  try {
    const lowestMall = store.getLowestMall();
    return c.json(MallPriceSchema.parse(lowestMall));
  } catch (e) {
    return c.text(`Could not return mall prices: ${e}`, 500);
  }
});

app.post("/update-prices", async (c) => {
  const secret = c.req.query("auth");

  if (secret !== process.env.SECRET) {
    return c.text("Unauthorized, boo.", 401);
  }

  try {
    const lowestMallRaw = await c.req.json();
    const lowestMall = MallPriceSchema.parse(lowestMallRaw);
    store.setLowestMall(lowestMall);
    console.log("lowestMall updated");

    return c.text("Mall prices updated successfully!");
  } catch (e) {
    return c.text(`Could not update mall prices: ${e}`, 400);
  }
});

// manually update pricegun prices for now
app.post("/update-pricegun", async (c) => {
  const secret = c.req.query("auth");

  if (secret !== process.env.SECRET) {
    return c.text("Unauthorized, boo.", 401);
  }

  try {
    const pricegunRaw = await c.req.json();
    const pricegun = PriceGunResponseSchema.parse(pricegunRaw);
    store.setPricegun(pricegun);

    const lowestMall = store.getLowestMall() ?? {};
    const itemIds = Object.keys(lowestMall).map((id) => Number.parseInt(id));

    const prices = itemIds.reduce<CombinedPrice>((acc, id) => {
      const price = pricegun.find((p) => p.itemId === id);
      acc[id] = {
        lowestMall: lowestMall[id]!,
        value: price?.value,
        volume: price?.volume,
      };
      return acc;
    }, {});

    store.setPrices(prices);
    store.setPricesLastUpdate(new Date());

    return c.text(
      "Pricegun manually updated and combined data stored successfully!"
    );
  } catch (e) {
    return c.text(`Could not pricegun manually: ${e}`, 400);
  }
});

export default app;
