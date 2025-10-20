import ListEntry, { ListEntryProps } from "./ListEntry";
import { iotms } from "@/data";
import type { IOTM } from "@/data";
import { useCallback, useMemo, useRef } from "react";
import { useStore } from "@/stores/userStore";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { usePrices } from "@/hooks/usePrices";
import { useMallPrices } from "@/hooks/useMallPrices";
import { useWishlistContext } from "@/contexts/WishlistContext";
import { getSortFunction } from "@/lib/sortWishlist";

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
  "use no memo"; // react compiler breaks tanstack virtual

  const { currentOrder, currentSort } = useStore();

  // Fetch data using hooks
  const itemIds = useMemo(
    () => iotms.map((item) => item.packaged_id).concat([194]), // include Mr. A
    []
  );
  const { prices } = usePrices(itemIds);
  const { mallPrices: mall } = useMallPrices();
  const { wishlist } = useWishlistContext();

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
        .map(
          (item): ListEntryProps => ({
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
          })
        ),
    [mrAs, getPrice, wishlist]
  );

  const sortedData = data.sort(getSortFunction(currentSort));
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
