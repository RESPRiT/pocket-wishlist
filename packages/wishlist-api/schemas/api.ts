import { z } from "npm:zod@4";

// TODO: Copy from wishlist-shared in build/dev script instead of separate copy
export const WishlistSchema = z.record(
  z.coerce.number<number>(), // JSON keys are strings
  z.preprocess(
    (val) => val ?? "NONE",
    z.literal(["NONE", "PACKAGED", "OPENED", "WISHED"])
  )
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
    })
  ),
});
export type Wishlist = z.infer<typeof WishlistSchema>;
export type WishlistResponse = z.infer<typeof WishlistResponseSchema>;
export type WishlishToggleRequest = z.infer<typeof WishlistToggleRequestSchema>;

// most recent sales data
export const PriceGunSalesDataSchema = z.object({
  date: z.coerce.date(),
  unitPrice: z.number(),
  quantity: z.number(),
});
// data for a specific date
export const PriceGunHistoricalDataSchema = z.object({
  itemId: z.number(),
  date: z.coerce.date(),
  volume: z.number(),
  price: z.coerce.number(), // TODO: this coercion is to get around a type bug with pricegun
});
export const PriceGunSchema = z.object({
  // value across ALL transactions, not just past 2 weeks
  value: z.number(),
  // volume across the past 2 weeks
  volume: z.number(),
  // last time the price value was calculated by PriceGun
  date: z.coerce.date(), // JSON dates are strings
  itemId: z.number(),
  name: z.string().nullable(), // new IOTMs can have a missing name field, I guess?
  image: z.string(),
  sales: z.array(PriceGunSalesDataSchema),
  history: z.array(PriceGunHistoricalDataSchema),
});
export const PriceGunResponseSchema = z.array(PriceGunSchema);
export type PriceGun = z.infer<typeof PriceGunSchema>;
export type PriceGunResponse = z.infer<typeof PriceGunResponseSchema>;

// TODO: Maybe rename MallPriceResponseSchema
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
  PriceSchema
);
export const MallPriceResponseSchema = z.object({
  prices: CombinedPriceSchema,
  lastUpdated: z.coerce.date<string>(),
});
export type MallPrice = z.infer<typeof MallPriceSchema>;
export type Price = z.infer<typeof PriceSchema>;
export type CombinedPrice = z.infer<typeof CombinedPriceSchema>;
export type MallPriceResponse = z.infer<typeof MallPriceResponseSchema>;
