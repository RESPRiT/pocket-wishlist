import { blob } from "https://esm.town/v/std/blob";
import { Hono } from "npm:hono@4";
import {
  MallPrice,
  MallPriceResponseSchema,
  MallPriceSchema,
  PriceGunResponseSchema,
} from "../schemas/api.ts";

const app = new Hono();

app.get("/get-prices", async (c) => {
  try {
    const prices = await blob.getJSON("prices");
    const lastUpdated = await blob.getJSON("pricesLastUpdate");

    return c.json(MallPriceResponseSchema.parse({ prices, lastUpdated }));
  } catch (e) {
    return c.text(`Could not return price data: ${e}`, 500);
  }
});

app.get("/lowest-mall", async (c) => {
  try {
    const lowestMall = await blob.getJSON("lowestMall");
    return c.json(MallPriceSchema.parse(lowestMall));
  } catch (e) {
    return c.text(`Could not return mall prices: ${e}`, 500);
  }
});

app.post("/update-prices", async (c) => {
  const secret = c.req.query("auth");

  if (secret !== Deno.env.get("secret")) {
    return c.text("Unauthorized, boo.", 401);
  }

  try {
    // Process update request data
    const lowestMallRaw = await c.req.json();
    const lowestMall = MallPriceSchema.parse(lowestMallRaw);
    await blob.setJSON("lowestMall", lowestMall);

    // Asynchronously handle pricegun extraction and transformation
    const itemIds = Object.keys(lowestMall)
      .concat(["194"]) // include Mr. A
      .map((id) => Number.parseInt(id));
    extractAndTransformPriceGun(itemIds);

    return c.text("Mall prices updated successfully!");
  } catch (e) {
    return c.text(`Could not update mall prices: ${e}`, 400);
  }
});

// no try-catch: if something goes wrong, just let stderr report it
async function extractAndTransformPriceGun(itemIds: number[]) {
  // Get lowest mall data
  const lowestMall: MallPrice = await blob.getJSON("lowestMall");

  try {
    // Fetch pricegun data and store
    const pricegun = await fetchPriceGun(itemIds);
    await blob.setJSON("pricegun", pricegun);

    // Combine lowest mall and pricegun data
    const prices = itemIds.reduce((acc, id) => {
      const price = pricegun.find((p) => p.itemId === id);

      acc[id] = {
        lowestMall: lowestMall[id],
        value: price?.value,
        volume: price?.volume,
      };

      return acc;
    }, {});

    // Store combined data
    blob.setJSON("prices", prices);
    blob.setJSON("pricesLastUpdate", new Date());
  } catch {
    console.error("Couldn't get prices from Pricegun");

    // Fallback to just lowestmall if pricegun errors
    const prices = itemIds.reduce((acc, id) => {
      acc[id] = {
        lowestMall: lowestMall[id],
        value: undefined,
        volume: undefined,
      };

      return acc;
    }, {});

    // Store just mall data
    blob.setJSON("prices", prices);
    blob.setJSON("pricesLastUpdate", new Date());
  }
}

async function fetchPriceGun(itemIds: number[]) {
  const url = `https://pricegun.loathers.net/api/${itemIds.join(",")}`;

  const pricegunResponse = await fetch(url);
  const pricegunRaw = await pricegunResponse.json();
  return PriceGunResponseSchema.parse(pricegunRaw);
}

export default app;
