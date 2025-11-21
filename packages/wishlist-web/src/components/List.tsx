import ListEntry, { ListEntryProps } from "./ListEntry";
import { IOTM, iotms } from "wishlist-shared";
import { useMemo, useRef } from "react";
import { useHydratedSettingsStore } from "@/stores/useSettingsStore.ts";
import { useMallPrices } from "@/hooks/useMallPrices";
import { getSortFunction } from "@/lib/sortWishlist";
import { useWishlist } from "@/contexts/WishlistContext";
import ListMiniMap from "./ListMiniMap.tsx";
import { ClientOnly } from "@tanstack/react-router";

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
  const { currentOrder, currentSort } = useHydratedSettingsStore();
  const { mallPrices } = useMallPrices();
  const { wishlist } = useWishlist();

  // TODO: just put data in a context
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
            price: mallPrices[item.packaged_id] ?? null,
            mrAs: mallPrices[194]?.value ?? Infinity, // don't love this here
            status: wishlist[item.packaged_id],
          }),
        ),
    [mallPrices, wishlist],
  );

  const sortedData = data.slice().sort(getSortFunction(currentSort));
  const orderedData = currentOrder ? sortedData.slice().reverse() : sortedData;

  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={listRef} className="relative mb-12 w-full">
      {/* TODO: Move this out of List and into ListView once data is in a context */}
      <ClientOnly>
        <ListMiniMap
          entries={orderedData}
          height={listRef.current?.clientHeight ?? 1080}
        />
      </ClientOnly>
      <div className="w-full space-y-2 [view-transition-name:foreground]">
        {orderedData.map((row) => (
          <div
            className="inline-block w-full"
            key={row.name}
            data-index={row.name}
          >
            <ListEntry {...row} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
