// Reads the <script id="__BOOTSTRAP__"> tag injected by server.ts and seeds
// the React Query cache so the first paint already has data — no client
// fetch round-trip for the initial wishlist + mall prices.
//
// This runs *after* the persister rehydrates from localStorage so fresh
// server-fetched data wins over any stale persisted entries.

import type { QueryClient } from "@tanstack/react-query";
import {
  MallPriceResponseSchema,
  WishlistResponseSchema,
} from "wishlist-shared";

type Bootstrap = {
  mallPrices?: unknown;
  wishlist?: { userId: number; data: unknown };
};

function readBootstrap(): Bootstrap | null {
  if (typeof document === "undefined") return null;
  const el = document.getElementById("__BOOTSTRAP__");
  if (!el || el.textContent === null || el.textContent === "") return null;
  try {
    return JSON.parse(el.textContent) as Bootstrap;
  } catch {
    return null;
  }
}

let hydrated = false;

export function hydrateBootstrap(queryClient: QueryClient) {
  if (hydrated) return;
  hydrated = true;

  const bootstrap = readBootstrap();
  if (!bootstrap) return;

  if (bootstrap.mallPrices !== undefined) {
    const parsed = MallPriceResponseSchema.safeParse(bootstrap.mallPrices);
    if (parsed.success) {
      queryClient.setQueryData(["mallPrices"], parsed.data);
    }
  }

  if (bootstrap.wishlist !== undefined) {
    const { userId, data } = bootstrap.wishlist;
    const parsed = WishlistResponseSchema.safeParse(data);
    if (parsed.success) {
      queryClient.setQueryData(["wishlist", userId], parsed.data);
    }
  }
}
