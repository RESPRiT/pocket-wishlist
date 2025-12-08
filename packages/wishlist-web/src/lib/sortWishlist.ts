import type { ListEntryProps } from "@/components/ListEntry";

function priceSort(
  a: ListEntryProps,
  b: ListEntryProps,
  skipTie = false,
): number {
  const aPrice = (a.price?.volume ?? 0 > 0) ? a.price?.value : null;
  const bPrice = (b.price?.volume ?? 0 > 0) ? b.price?.value : null;

  const aLowest = Math.min(
    aPrice || Infinity,
    a.price?.lowestMall === -1 ? Infinity : a.price?.lowestMall || Infinity,
  );
  const bLowest = Math.min(
    bPrice || Infinity,
    b.price?.lowestMall === -1 ? Infinity : b.price?.lowestMall || Infinity,
  );

  // tie-breaker
  if (aLowest === bLowest) {
    return skipTie ? a.name.localeCompare(b.name) : dateSort(a, b, true);
  }

  return aLowest - bLowest;
}

function dateSort(a: ListEntryProps, b: ListEntryProps, skipTie = false) {
  // compare years, bigger = "smaller" (newer)
  if (a.year !== b.year) return b.year - a.year;

  // compare months, monthless => bigger (so, 13 > 12)
  if ((a.month ?? 13) !== (b.month ?? 13))
    return (b.month ?? 13) - (a.month ?? 13);

  // compare con and ioty status
  if (a.isIOTY && !b.isIOTY) return -1;
  if (!a.isIOTY && b.isIOTY) return 1;
  if (a.isCon && !b.isCon) return -1;
  if (!a.isCon && b.isCon) return 1;

  if (skipTie) return a.name.localeCompare(b.name);

  // tie-break
  return priceSort(a, b, true);
}

function tierSort(a: ListEntryProps, b: ListEntryProps) {
  const averageA =
    ((a.speed !== undefined ? a.speed : 6) +
      (a.farm !== undefined ? a.farm : 6)) /
    2;
  const averageB =
    ((b.speed !== undefined ? b.speed : 6) +
      (b.farm !== undefined ? b.farm : 6)) /
    2;

  return averageA - averageB !== 0 ? averageA - averageB : priceSort(a, b);
}

export function getSortFunction(
  sort: string,
): (a: ListEntryProps, b: ListEntryProps) => number {
  if (sort === "price") {
    return priceSort;
  } else if (sort === "tier") {
    return tierSort;
  }

  // default to date
  return dateSort;
}
