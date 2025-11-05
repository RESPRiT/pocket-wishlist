import { z } from "npm:zod@4";

// TODO: Copy from wishlist-shared in build/dev script instead of separate copy
export const WishlistSchema = z.record(
  z.coerce.number<number>(), // JSON keys are strings
  z.literal(["NONE", "PACKAGED", "OPENED"])
);
export const WishlistResponseSchema = z.object({
  username: z.string(),
  userId: z.number(),
  wishlist: WishlistSchema,
  lastUpdated: z.number(),
});
export type Wishlist = z.infer<typeof WishlistSchema>;
export type WishlistResponse = z.infer<typeof WishlistResponseSchema>;

export const PriceGunSchema = z.object({
  // value across ALL transactions, not just past 2 weeks
  value: z.number(),
  // volume across the past 2 weeks
  volume: z.number(),
  // last time the price value was calculated by PriceGun
  date: z.coerce.date(), // JSON dates are strings
  itemId: z.number(),
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
  lastUpdated: z.coerce.date(),
});
export type MallPrice = z.infer<typeof MallPriceSchema>;
export type Price = z.infer<typeof PriceSchema>;
export type CombinedPrice = z.infer<typeof CombinedPriceSchema>;
export type MallPriceResponse = z.infer<typeof MallPriceResponseSchema>;
