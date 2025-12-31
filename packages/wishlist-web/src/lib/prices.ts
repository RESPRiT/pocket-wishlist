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
