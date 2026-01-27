import { mutationOptions, queryOptions } from "@tanstack/react-query";
import {
  WishlishToggleRequest,
  WishlistResponse,
  WishlistResponseSchema,
} from "wishlist-shared";

export type WishlistError = {
  userId: number;
  error: Error;
};

async function fetchWishlist(
  userId?: number,
): Promise<WishlistResponse | WishlistError | null> {
  if (userId === undefined) return new Promise((resolve) => resolve(null));

  const url = `https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/get-wishlist?u=${userId}`;

  const response = await fetch(url);
  if (!response.ok) {
    const message = await response.text();

    return new Promise((resolve) =>
      resolve({
        userId,
        error: {
          name: response.statusText,
          message,
        },
      }),
    );
  }

  const wishlist = await response.json();
  return WishlistResponseSchema.parse(wishlist);
}

export const wishlistQuery = (userId: number) =>
  queryOptions({
    queryKey: ["wishlist", userId],
    queryFn: () => fetchWishlist(userId),
    staleTime: 5000, // prevent client from immediately refetching
    refetchOnWindowFocus: false, // a bit much
    enabled: userId > 0, // is this weird? Should it just be nullish?
  });

export async function requestWishlistToggle(
  body: WishlishToggleRequest,
): Promise<WishlishToggleRequest["itemUpdates"]> {
  const url = `https://resprit--dd94f3deb77f11f08e0c0224a6c84d84.web.val.run/toggle-wishlist`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.error(`Failed to fetch wishlist: ${response.statusText}`);
  }

  return response.json();
}

export const toggleWishlistMutation = (userId: number) =>
  mutationOptions({
    mutationFn: ({
      itemUpdates,
      auth = "",
    }: {
      itemUpdates: WishlishToggleRequest["itemUpdates"];
      auth: WishlishToggleRequest["auth"];
    }) => requestWishlistToggle({ userId, auth, itemUpdates }),
    onMutate: async (
      {
        itemUpdates,
        auth,
      }: {
        itemUpdates: WishlishToggleRequest["itemUpdates"];
        auth: WishlishToggleRequest["auth"];
      },
      context,
    ) => {
      const prevWishlist: WishlistResponse | undefined =
        context.client.getQueryData(["wishlist", userId]);

      if (prevWishlist === undefined)
        throw new Error("Couldn't update wishlist");

      const updatedWishlist = structuredClone(prevWishlist);

      itemUpdates.forEach(({ id, status }) => {
        updatedWishlist.wishlist[id] = status ? "WISHED" : "NONE";
      });

      context.client.setQueryData(["wishlist", userId], updatedWishlist);

      return { prevWishlist };
    },
    onError: async (_err, _vars, result, context) => {
      context.client.setQueryData(["wishlist", userId], result?.prevWishlist);
    },
  });
