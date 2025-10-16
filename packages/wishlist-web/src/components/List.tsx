import ListEntry from "./ListEntry";
import { iotms } from "@/data";
import type { IOTM } from "@/data";
import { useCallback, useMemo, useRef } from "react";
import type { ListEntryProps } from "./ListEntry";
import { useStore } from "@/stores/userStore";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { usePrices } from "@/hooks/usePrices";
import { useMallPrices } from "@/hooks/useMallPrices";
import { useWishlist } from "@/hooks/useWishlist";

function handleSort(
  sort: string
): (a: ListEntryProps, b: ListEntryProps) => number {
  const priceSort = (
    a: ListEntryProps,
    b: ListEntryProps,
    skipTie = false
  ): number => {
    const aLowest = Math.min(a.price || Infinity, a.lowestMall || Infinity);
    const bLowest = Math.min(b.price || Infinity, b.lowestMall || Infinity);

    // tie-breaker
    if (aLowest === bLowest) {
      return skipTie ? a.name.localeCompare(b.name) : dateSort(a, b, true);
    }

    return aLowest - bLowest;
  };
  const dateSort = (a: ListEntryProps, b: ListEntryProps, skipTie = false) => {
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
  };
  const tierSort = (a: ListEntryProps, b: ListEntryProps) => {
    const averageA =
      ((a.speed !== undefined ? a.speed : 6) +
        (a.farm !== undefined ? a.farm : 6)) /
      2;
    const averageB =
      ((b.speed !== undefined ? b.speed : 6) +
        (b.farm !== undefined ? b.farm : 6)) /
      2;

    return averageA - averageB !== 0 ? averageA - averageB : priceSort(a, b);
  };

  if (sort === "price") {
    return priceSort;
  } else if (sort === "tier") {
    return tierSort;
  }

  // default to date
  return dateSort;
}

function getUnboxedName(item: IOTM): string {
  if (
    item.type !== "skill" &&
    item.opened_names &&
    !Array.isArray(item.opened_names)
  ) {
    return item.opened_names;
  } else if (item.familiar_names && !Array.isArray(item.familiar_names)) {
    return item.familiar_names;
  } else {
    return item.packaged_name;
  }
}

function List() {
  const { currentOrder, currentSort } = useStore();

  // Fetch data using hooks
  const itemIds = useMemo(
    () => iotms.map((item) => item.packaged_id).concat([194]), // include Mr. A
    []
  );
  const { prices } = usePrices(itemIds);
  const { mallPrices: mall } = useMallPrices();
  const { wishlist } = useWishlist();

  const getPrice = useCallback(
    (itemId: number): { price: number | null; lowestMall: number | null } => {
      // this isn't strict equality because it's actually an evil lie:
      // JSON.parse() results in all object fields being strings,
      // so, fields that should be e.g. numbers are actually strings
      // (Zod would help fix this)
      const priceEntry = prices.find((price) => price.itemId == itemId);
      const mallEntry = mall.find((price) => price.id == itemId);

      return {
        price: priceEntry ? priceEntry.value : null,
        lowestMall:
          mallEntry && mallEntry.lowestMall > 0 ? mallEntry.lowestMall : null,
      };
    },
    [prices, mall]
  );

  const mrAs = useMemo(
    () =>
      Object.values(getPrice(194)).reduce(
        (acc: number, v) => (v !== null ? Math.min(acc, v) : acc),
        Infinity
      ),
    [getPrice]
  );

  const data = useMemo(
    () =>
      iotms
        .filter((item) => item.type !== "vip")
        .map((item) => ({
          img: item.img,
          name: getUnboxedName(item),
          packaged_name: item.packaged_name,
          type: item.type,
          year: item.year,
          month: item.month,
          speed: item.speed_tier,
          farm: item.aftercore_tier,
          isIOTY: item.is_ioty || false,
          isCon: item.is_con || false,
          ...getPrice(item.packaged_id),
          mrAs, // don't love this here
          status: wishlist.wishlist[item.packaged_id] || null,
        })),
    [mrAs, getPrice, wishlist]
  );

  const sortedData = data.sort(handleSort(currentSort));
  const orderedData = currentOrder ? sortedData.reverse() : sortedData;

  const listRef = useRef<HTMLDivElement>(null);

  const virtualizer = useWindowVirtualizer({
    count: orderedData.length,
    estimateSize: () => 75,
    gap: 8,
    overscan: 5,
    getItemKey: (item) => orderedData[item].packaged_name,
  });

  const items = virtualizer.getVirtualItems();
  const virtualOffset = items[0] ? items[0].start : 0;

  return (
    <div
      ref={listRef}
      className="relative w-full mb-12"
      style={{
        height: `${virtualizer.getTotalSize()}px`,
      }}
    >
      <div
        className="absolute flex flex-wrap gap-2 w-full items-stretch"
        style={{
          position: "absolute",
          transform: `translateY(${virtualOffset}px)`,
        }}
      >
        {items.map((row) => (
          <div
            className="flex-grow-1"
            key={row.key}
            data-index={row.index}
            ref={virtualizer.measureElement}
          >
            <ListEntry {...orderedData[row.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
