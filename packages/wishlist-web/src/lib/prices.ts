import type { Price } from "wishlist-shared";

export type MallStatus = "extinct" | "lowestMall" | "recentSales";

// The single price an entry is judged by: the PriceGun sales average when
// there are recent sales and it exceeds the lowest listing, otherwise the
// lowest mall listing. A missing `value` (no sales history yet, e.g. a
// brand-new IOTM) falls back to `lowestMall`. `price` is -1 when nothing is
// known (extinct, or no price entry at all).
// — claude 3989dcf1, 2026-11-23
export function getMallPrice(price: Price | null): {
  status: MallStatus;
  price: number;
} {
  const status: MallStatus =
    price?.value === undefined && price?.lowestMall === -1
      ? "extinct"
      : price?.value === undefined || price?.volume === 0
        ? "lowestMall"
        : price.value > price.lowestMall
          ? "recentSales"
          : "lowestMall";

  const value =
    (status === "lowestMall"
      ? price?.lowestMall
      : status === "recentSales"
        ? price?.value
        : -1) ?? -1;

  return { status, price: value };
}

// Entry price in Mr. As; unknown prices (-1) count as infinitely expensive.
export function getMrARatio(price: Price | null, mrAs: number): number {
  const { price: value } = getMallPrice(price);
  return value === -1 ? Infinity : value / mrAs;
}

export function formatMeatPrice(price: number | null): string {
  if (price === null) return "x";
  if (price === -1) return "∞";

  const millions = Math.round(price / 1_000_000);
  return millions < 1000
    ? // Use whole millions below billion
      `${millions}m`
    : // Use 1 digit for sub-10 billion, whole beyond
      `${Math.min(price / 1_000_000_000, 999).toFixed(
        millions < 10_000 ? 1 : 0,
      )}b`;
}

export function formatMrARatio(price: number | null, mrAs: number): string {
  if (price === null) return "x";

  // Infinite if no prices found (or something went wrong?)
  if (price === -1) return "∞";
  const ratio = price / mrAs;
  // Use 1 digit for sub-100 Mr. As
  if (price < mrAs * 100) return ratio.toFixed(1);
  // Use whole numbers for sub-1000
  if (ratio < 1000) return Math.round(ratio).toString();
  // Use thousands (k's) past 1000
  return `${Math.round(ratio / 1000)}k`;
}
