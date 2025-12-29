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
    console.log("lowestMall updated");

    // Asynchronously handle pricegun extraction and transformation
    // TODO: Broken, see below
    // const itemIds = Object.keys(lowestMall).map((id) => Number.parseInt(id));
    // extractAndTransformPriceGun(itemIds, lowestMall);

    return c.text("Mall prices updated successfully!");
  } catch (e) {
    return c.text(`Could not update mall prices: ${e}`, 400);
  }
});

// manually update pricegun prices for now
app.post("/update-pricegun", async (c) => {
  const secret = c.req.query("auth");

  if (secret !== Deno.env.get("secret")) {
    return c.text("Unauthorized, boo.", 401);
  }

  try {
    // Process update request data
    const pricegunRaw = await c.req.json();
    const pricegun = PriceGunResponseSchema.parse(pricegunRaw);
    await blob.setJSON("pricegun", pricegun);

    const lowestMall: MallPrice = await blob.getJSON("lowestMall");
    const itemIds = Object.keys(lowestMall).map((id) => Number.parseInt(id));

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

    return c.text(
      "Pricegun manually updated and combined data stored successfully!"
    );
  } catch (e) {
    return c.text(`Could not pricegun manually: ${e}`, 400);
  }
});

// no try-catch: if something goes wrong, just let stderr report it
async function extractAndTransformPriceGun(
  itemIds: number[],
  lowestMall: Record<number, number>
) {
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

    console.log("Combined data stored successfully!");
  } catch (error) {
    console.error("Couldn't get prices from Pricegun", error);

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

// TODO: The val seems to stop running after 10 seconds...?
// Here is the hacky wacky fix for now -- split up the calls, then merge
// EDIT: jk it doesn't work.
async function fetchPriceGun(itemIds: number[]) {
  const baseUrl = "https://pricegun.loathers.net/api/";
  const parallelRequests = 1;
  const chunkSize = Math.ceil(itemIds.length / parallelRequests);
  const urls = new Array(parallelRequests)
    .fill("")
    .map(
      (_, i) =>
        `${baseUrl}${itemIds
          .slice(i * chunkSize, Math.min((i + 1) * chunkSize, itemIds.length))
          .join(",")}`
    );

  console.log(urls);

  const timeout = setTimeout(
    () => console.error("Val timed out at 10s"),
    10000
  ); // 10s timeout

  const responses = await Promise.all(urls.map((url) => fetch(url)));
  clearTimeout(timeout);

  const pricegunRaw = (
    await Promise.all(responses.map((res) => res.json()))
  ).flat();
  return PriceGunResponseSchema.parse(pricegunRaw);
}

export default app;
