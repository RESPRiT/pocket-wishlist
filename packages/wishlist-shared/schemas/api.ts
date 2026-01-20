import { z } from "zod";

// TODO: Don't copy to wishlist-api
export const WishlistSchema = z.record(
  z.coerce.number<number>(), // JSON keys are strings
  z.preprocess(
    (val) => val ?? "NONE",
    z.literal(["NONE", "PACKAGED", "OPENED", "WISHED"]),
  ),
);
export const WishlistResponseSchema = z.object({
  username: z.string(),
  userId: z.number(),
  wishlist: WishlistSchema,
  lastUpdated: z.number(),
});
export const WishlistToggleRequestSchema = z.object({
  userId: z.number(),
  auth: z.string(),
  itemUpdates: z.array(
    z.object({
      id: z.number(),
      status: z.boolean(),
    }),
  ),
});
export type Wishlist = z.infer<typeof WishlistSchema>;
export type WishlistResponse = z.infer<typeof WishlistResponseSchema>;
export type WishlishToggleRequest = z.infer<typeof WishlistToggleRequestSchema>;

// NOTE: All pricegun number values are coerced from strings bc all the bigint
//       values are converted into strings by the API
// most recent sales data
export const PriceGunSalesDataSchema = z.object({
  date: z.coerce.date(),
  unitPrice: z.coerce.number(),
  quantity: z.coerce.number(),
});
// data for a specific date
export const PriceGunHistoricalDataSchema = z.object({
  itemId: z.coerce.number(),
  date: z.coerce.date(),
  volume: z.coerce.number(),
  price: z.coerce.number(),
});
export const PriceGunSchema = z.object({
  // value across ALL transactions, not just past 2 weeks
  value: z.coerce.number(),
  // volume across the past 2 weeks
  volume: z.coerce.number(),
  // last time the price value was calculated by PriceGun
  date: z.coerce.date(), // JSON dates are strings
  itemId: z.coerce.number(),
  name: z.string().nullable(), // new IOTMs can have a missing name field, I guess?
  image: z.string(),
  sales: z.array(PriceGunSalesDataSchema),
  history: z.array(PriceGunHistoricalDataSchema),
});
export const PriceGunResponseSchema = z.array(PriceGunSchema);
export type PriceGun = z.infer<typeof PriceGunSchema>;
export type PriceGunResponse = z.infer<typeof PriceGunResponseSchema>;

export const MallPriceSchema = z.record(z.coerce.number<number>(), z.number());
export const PriceSchema = z.object({
  // from lowest mall
  lowestMall: z.number(),
  // from pricegun
  value: z.number().optional(),
  volume: z.number().optional(),
});
export const CombinedPriceSchema = z.record(
  z.coerce.number<number>(),
  PriceSchema,
);
export const MallPriceResponseSchema = z.object({
  prices: CombinedPriceSchema,
  lastUpdated: z.coerce.date<string>(),
});
export type MallPrice = z.infer<typeof MallPriceSchema>;
export type Price = z.infer<typeof PriceSchema>;
export type CombinedPrice = z.infer<typeof CombinedPriceSchema>;
export type MallPriceResponse = z.infer<typeof MallPriceResponseSchema>;
