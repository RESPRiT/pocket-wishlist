import { z } from "zod";

export const WishlistSchema = z.object({
  username: z.string(),
  userId: z.coerce.number(),
  wishlist: z.record(
    z.coerce.number<number>(),
    z.literal(["NONE", "PACKAGED", "OPENED"])
  ),
  lastUpdated: z.coerce.number(),
});

export const MallPricesSchema = z.array(
  z.object({
    id: z.coerce.number(),
    lowestMall: z.coerce.number(),
  })
);

export const PriceGunSchema = z.array(
  z.object({
    value: z.number(),
    volume: z.number(),
    date: z.date(),
    itemId: z.number(),
    tradeable: z.optional(z.boolean()),
  })
);

export type Wishlist = z.infer<typeof WishlistSchema>;
export type MallPrices = z.infer<typeof MallPricesSchema>;
export type PriceGun = z.infer<typeof PriceGunSchema>;
