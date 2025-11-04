import ListEntry, { ListEntryProps } from "./ListEntry";
import { IOTM, iotms, PriceGun } from "wishlist-shared";
import { useCallback, useMemo, useRef } from "react";
import { useStore } from "@/stores/userStore";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { usePrices } from "@/hooks/usePrices";
import { useMallPrices } from "@/hooks/useMallPrices";
import { getSortFunction } from "@/lib/sortWishlist";
import { useWishlist } from "@/contexts/WishlistContext";
import { useTheme } from "../contexts/ThemeContext.tsx";

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
  const wishlist = useWishlist();
  const { theme } = useTheme();

  const getPrice = useCallback(
    (itemId: number): { price: PriceGun | null; lowestMall: number | null } => {
      // this isn't strict equality because it's actually an evil lie:
      // JSON.parse() results in all object fields being strings,
      // so, fields that should be e.g. numbers are actually strings
      // (Zod would help fix this)
      const priceEntry = prices.find((price) => price.itemId == itemId);
      const mallEntry = mall.find((price) => price.id == itemId);

      return {
        price: priceEntry ?? null,
        lowestMall:
          mallEntry && mallEntry.lowestMall > 0 ? mallEntry.lowestMall : null,
      };
    },
    [prices, mall]
  );

  const mrAs = useMemo(() => {
    const { price, lowestMall } = getPrice(194);

    return Math.min(price?.value ?? Infinity, lowestMall ?? Infinity);
  }, [getPrice]);

  const data = useMemo(
    () =>
      iotms
        .filter((item) => item.type !== "vip")
        .map(
          (item): ListEntryProps => ({
            img: item.img,
            name: getUnboxedName(item),
            packagedName: item.packaged_name,
            type: item.type,
            year: item.year,
            month: item.month,
            speed: item.speed_tier,
            farm: item.aftercore_tier,
            isIOTY: item.is_ioty || false,
            isCon: item.is_con || false,
            ...getPrice(item.packaged_id),
            mrAs, // don't love this here
            // TODO: wishlist.wishlist is weird
            status: wishlist?.wishlist[item.packaged_id],
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
    getItemKey: (item) => orderedData[item].packagedName,
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
          viewTransitionName: `${theme === "light" ? "foreground-light" : "foreground-dark"}`,
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
