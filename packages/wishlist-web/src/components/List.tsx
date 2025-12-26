import ListEntry, { ListEntryProps } from "./ListEntry";
import { IOTM, iotms } from "wishlist-shared";
import { useMemo, useRef } from "react";
import { useHydratedSettingsStore } from "@/stores/useSettingsStore.ts";
import { Range, useWindowVirtualizer } from "@tanstack/react-virtual";
import { useMallPrices } from "@/hooks/useMallPrices";
import { getSortFunction } from "@/lib/sortWishlist";
import { useWishlist } from "@/contexts/WishlistContext";
import ListMiniMap from "./ListMiniMap.tsx";
import { ClientOnly } from "@tanstack/react-router";
import { useEntryHeights } from "@/hooks/useEntryHeights.ts";

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

  const orderedData = useMemo(() => {
    const sortedData = data.slice().sort(getSortFunction(currentSort));

    return currentOrder ? sortedData.slice().reverse() : sortedData;
  }, [data, currentSort, currentOrder]);

  // Setup virtualizer
  const listRef = useRef<HTMLDivElement>(null);

  // Get pre-measured heights and page height
  const {
    heights,
    pageHeight,
    needsMeasurement,
    measureContainerRef,
    measurementItems,
  } = useEntryHeights(orderedData);

  const virtualizerOptions = useMemo(() => {
    return {
      count: orderedData.length,
      estimateSize: (index: number) => {
        const packagedName = orderedData[index].packagedName;
        return heights.get(packagedName) ?? 75;
      },
      gap: 8,
      // used as an asymetrical overscan
      // note: probably could just handle the initial offset on the page better, too
      rangeExtractor: (range: Range) => {
        const overscanTop = 5;
        const overscanBottom = 1;

        const start = Math.max(range.startIndex - overscanTop, 0);
        const end = Math.min(range.endIndex + overscanBottom, range.count - 1);
        const total = end - start + 1;

        const arr = new Array(total).fill(0).map((_, i) => start + i);
        return arr;
      },
      // size of the window during SSR
      initialRect: {
        height: 15 * (75 + 8),
        width: (64 - 5) * 16,
      },
      getItemKey: (index: number) => orderedData[index].packagedName,
    };
  }, [orderedData, heights]);

  const virtualizer = useWindowVirtualizer(virtualizerOptions);

  // check virtual items state
  const items = virtualizer.getVirtualItems();
  const itemsKey = items.map((v) => v.key).join(",");

  const entries = useMemo(
    () =>
      items.map((row) => (
        <div className="grow" key={row.key}>
          {currentSort === "date" &&
            (row.index === 0 ||
              orderedData[row.index].year !==
                orderedData[row.index - 1].year) && (
              <div>{orderedData[row.index].year}</div>
            )}
          <ListEntry {...orderedData[row.index]} />
        </div>
      )),
    // update when item values change, not array reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [itemsKey, currentSort, orderedData],
  );

  const offset = items[0] ? items[0].start : 0;

  return (
    <div
      ref={listRef}
      className="relative mb-12 w-full"
      style={{
        height: `${virtualizer.getTotalSize()}px`,
      }}
    >
      {/* Hidden measurement container - only rendered when measuring */}
      {needsMeasurement && (
        <div
          ref={measureContainerRef}
          className="flex w-full flex-wrap items-stretch gap-2"
          style={{
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {measurementItems.map((item) => (
            <div key={item.packagedName} className="grow">
              <ListEntry {...item} />
            </div>
          ))}
        </div>
      )}

      {/* TODO: Move this out of List and into ListView once data is in a context */}
      <ClientOnly>
        <ListMiniMap
          entries={orderedData}
          height={virtualizer.getTotalSize()}
          pageHeight={pageHeight}
        />
      </ClientOnly>
      <div
        className="absolute flex w-full flex-wrap items-stretch gap-2"
        style={{
          position: "absolute",
          transform: `translateY(${offset}px)`,
          viewTransitionName: "foreground",
        }}
      >
        {entries}
      </div>
    </div>
  );
}

export default List;
