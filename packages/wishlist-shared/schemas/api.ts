import { z } from "zod";

export const WishlistSchema = z.record(
  z.coerce.number<number>(),
  z.literal(["NONE", "PACKAGED", "OPENED"])
);
export const WishlistResponseSchema = z.object({
  username: z.string(),
  userId: z.coerce.number(),
  wishlist: WishlistSchema,
  lastUpdated: z.coerce.number(),
});
export type Wishlist = z.infer<typeof WishlistSchema>;
export type WishlistResponse = z.infer<typeof WishlistResponseSchema>;

export const MallPriceSchema = z.object({
  id: z.coerce.number(),
  lowestMall: z.coerce.number(),
});
export const MallPriceResponseSchema = z.array(MallPriceSchema);
export type MallPrice = z.infer<typeof MallPriceSchema>;
export type MallPriceResponse = z.infer<typeof MallPriceResponseSchema>;

export const PriceGunSchema = z.object({
  value: z.number(),
  volume: z.number(),
  date: z.date(),
  itemId: z.number(),
  tradeable: z.optional(z.boolean()),
});
export const PriceGunResponseSchema = z.array(PriceGunSchema);
export type PriceGun = z.infer<typeof PriceGunSchema>;
export type PriceGunResponse = z.infer<typeof PriceGunResponseSchema>;
