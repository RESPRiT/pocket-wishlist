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
