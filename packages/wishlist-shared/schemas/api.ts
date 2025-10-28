import { z } from "zod";

export const WishlistSchema = z.object({
  name: z.string(),
});

export type Wishlist = z.infer<typeof WishlistSchema>;
