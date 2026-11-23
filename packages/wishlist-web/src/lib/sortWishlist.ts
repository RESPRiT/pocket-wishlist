import type { ListEntryProps } from "@/components/ListEntry";
import { getMrARatio } from "@/lib/prices";

function priceSort(
  a: ListEntryProps,
  b: ListEntryProps,
  skipTie = false,
): number {
  // Same price the entry displays and is grouped by; unknown sorts last.
  const aLowest = getMrARatio(a.price, 1);
  const bLowest = getMrARatio(b.price, 1);

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
  if ((a.month ?? 0) !== (b.month ?? 0)) return (b.month ?? 0) - (a.month ?? 0);

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
