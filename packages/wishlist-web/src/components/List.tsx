import { ListEntryProps } from "./ListEntry";
import { HeadingInfo, HeadingStatus, HeadingType } from "./ListHeading";
import { IOTM, iotms } from "wishlist-shared";
import { useMemo, useRef } from "react";
import { useHydratedSettingsStore } from "@/stores/useSettingsStore.ts";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useMallPrices } from "@/hooks/useMallPrices";
import { getSortFunction } from "@/lib/sortWishlist";
import { useWishlist } from "@/contexts/WishlistContext";
import ListMiniMap from "./ListMiniMap.tsx";
import { ClientOnly } from "@tanstack/react-router";
import ListItem from "./ListItem.tsx";
import MeasurementContainer from "./MeasurementContainer.tsx";
import { insertListHeadings } from "../lib/insertListHeadings.ts";
import { useEntryHeights } from "@/hooks/useEntryHeights.ts";

// TODO: Reorganize these types
export type EntryItem = {
  entry: ListEntryProps;
  itemType: "entry";
  key: string;
};
export type HeadingItem = {
  itemType: "heading";
  headingType: HeadingType;
  label: string;
  key: string;
  status: HeadingStatus;
  info: HeadingInfo;
};
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
            id: item.packaged_id,
            type: item.type,
            year: item.year,
            month: item.month,
            speed: item.speed_tier,
            farm: item.aftercore_tier,
            isIOTY: item.is_ioty || false,
            isCon: item.is_con || false,
            price: mallPrices[item.packaged_id] ?? null,
            mrAs: mallPrices[194]?.value ?? Infinity, // don't love this here
            status: wishlist[item.packaged_id] ?? "NONE",
          }),
        ),
    [mallPrices, wishlist],
  );

  const orderedData = useMemo(() => {
    const sortedData = data.slice().sort(getSortFunction(currentSort));

    return currentOrder ? sortedData.slice().reverse() : sortedData;
  }, [data, currentSort, currentOrder]);

  const virtualItems = useMemo(
    () => insertListHeadings(orderedData, currentSort),
    [orderedData, currentSort],
  );

  const { itemHeights, pageHeight, needsMeasurement, containerRef } =
    useEntryHeights(virtualItems);

  // Setup virtualizer
  const listRef = useRef<HTMLDivElement>(null);

  const virtualizerOptions = useMemo(() => {
    return {
      count: virtualItems.length,
      estimateSize: (index: number) => {
        return itemHeights.get(virtualItems[index].key) ?? 75;
      },
      gap: 8,
      scrollMargin: listRef.current?.offsetTop ?? 0,
      overscan: 3,
      // size of the window during SSR
      initialRect: {
        height: 15 * (75 + 8),
        width: (64 - 5) * 16,
      },
      getItemKey: (index: number) => {
        return virtualItems[index].key;
      },
    };
  }, [virtualItems, itemHeights]);

  const virtualizer = useWindowVirtualizer(virtualizerOptions);

  const viewportItems = virtualizer.getVirtualItems();
  const viewportItemsKey = viewportItems
    .map((v) => `${v.key}:${v.start}`)
    .join(",");
  const scrollMargin = virtualizer.options.scrollMargin;

  // Each item is absolute-positioned at its computed Y. The list container's
  // height holds the scroll surface; entries float at their translated Y.
  // Sticky headings will be reintroduced in a follow-up via JS-driven
  // translateY clamping (Step 2 of pocket-wishlist-on5).
  const renderedViewport = useMemo(
    () =>
      viewportItems.map((row) => (
        <div
          key={row.key}
          className="absolute top-0 right-0 left-0"
          style={{
            transform: `translateY(${row.start - scrollMargin}px)`,
          }}
        >
          <ListItem item={virtualItems[row.index]} />
        </div>
      )),
    // update when item values or positions change, not array reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [viewportItemsKey, virtualItems, scrollMargin],
  );

  return (
    <div
      ref={listRef}
      className="relative mb-12 w-full"
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        viewTransitionName: "foreground",
      }}
    >
      {/* Hidden measurement container - only rendered when measuring */}
      {needsMeasurement.length > 0 && (
        <MeasurementContainer
          virtualItems={needsMeasurement}
          containerRef={containerRef}
        />
      )}

      {/* TODO: Move this out of List and into ListView once data is in a context */}
      <ClientOnly>
        <ListMiniMap
          entries={orderedData}
          height={virtualizer.getTotalSize()}
          pageHeight={pageHeight}
        />
      </ClientOnly>
      {renderedViewport}
    </div>
  );
}

export default List;
