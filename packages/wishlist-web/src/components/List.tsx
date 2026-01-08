import { ListEntryProps } from "./ListEntry";
import { HeadingInfo, HeadingStatus, HeadingType } from "./ListHeading";
import { IOTM, iotms } from "wishlist-shared";
import { useCallback, useMemo, useRef } from "react";
import { useHydratedSettingsStore } from "@/stores/useSettingsStore.ts";
import {
  defaultRangeExtractor,
  Range,
  useWindowVirtualizer,
} from "@tanstack/react-virtual";
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

  // Indexes of sticky headings for rangeExtractor
  const stickyIndexes = useMemo(
    () =>
      virtualItems
        .map((item, index) => (item.itemType === "heading" ? index : null))
        .filter((index): index is number => index !== null),
    [virtualItems],
  );

  const activeStickyIndexRef = useRef(0);

  const rangeExtractor = useCallback(
    (range: Range) => {
      activeStickyIndexRef.current =
        [...stickyIndexes]
          .reverse()
          .find((index) => range.startIndex >= index) ?? 0;

      const activeIdx = stickyIndexes.indexOf(activeStickyIndexRef.current);
      const previousStickyIndex =
        activeIdx > 0 ? stickyIndexes[activeIdx - 1] : null;

      // Include previous sticky if within 1 item of transition (overstay)
      const includePrevious =
        previousStickyIndex !== null &&
        range.startIndex <= activeStickyIndexRef.current + 1;

      const next = new Set([
        activeStickyIndexRef.current,
        ...(includePrevious ? [previousStickyIndex] : []),
        ...defaultRangeExtractor(range),
      ]);

      return [...next].sort((a, b) => a - b);
    },
    [stickyIndexes],
  );

  const virtualizerOptions = useMemo(() => {
    return {
      count: virtualItems.length,
      estimateSize: (index: number) => {
        return itemHeights.get(virtualItems[index].key) ?? 75;
      },
      gap: 8,
      scrollMargin: listRef.current?.offsetTop ?? 0,
      overscan: 3,
      rangeExtractor,
      // size of the window during SSR
      initialRect: {
        height: 15 * (75 + 8),
        width: (64 - 5) * 16,
      },
      getItemKey: (index: number) => {
        return virtualItems[index].key;
      },
    };
  }, [virtualItems, itemHeights, rangeExtractor]);

  const virtualizer = useWindowVirtualizer(virtualizerOptions);

  // check virtual items state
  const viewportItems = virtualizer.getVirtualItems();
  const viewportItemsKey = viewportItems.map((v) => v.key).join(",");

  // Find the first item in the contiguous natural range for offset/height calculations
  // Persisted sticky headings appear before gaps in the index sequence
  const firstNaturalIdx = viewportItems.findIndex((item, i) => {
    if (i === viewportItems.length - 1) return true;
    return viewportItems[i + 1].index === item.index + 1;
  });

  const safeFirstNaturalIdx = firstNaturalIdx === -1 ? 0 : firstNaturalIdx;
  const firstNaturalItem = viewportItems[safeFirstNaturalIdx];

  // Calculate height taken by persisted sticky headings (rendered before natural items in flex)
  // We need to adjust offset/height to account for this space
  const gap = virtualizer.options.gap;
  let persistedHeight = 0;
  for (let i = 0; i < safeFirstNaturalIdx; i++) {
    persistedHeight += viewportItems[i].size + gap;
  }

  const height =
    viewportItems[viewportItems.length - 1].end -
    firstNaturalItem.start +
    persistedHeight;
  const offset = firstNaturalItem
    ? firstNaturalItem.start -
      virtualizer.options.scrollMargin -
      persistedHeight
    : 0;

  const renderedViewport = useMemo(
    () =>
      viewportItems.map((row) => (
        <ListItem
          item={virtualItems[row.index]}
          key={virtualItems[row.index].key}
        />
      )),
    // update when item values change, not array reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [viewportItemsKey, virtualItems],
  );

  return (
    <div
      ref={listRef}
      className="relative mb-12 w-full"
      style={{
        height: `${virtualizer.getTotalSize()}px`,
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
      <div
        className="absolute top-0 left-0 flex w-full flex-wrap items-stretch
          gap-2"
        style={{
          // transform: `translateY(${offset}px)`,
          // TODO: do the annoying math to make sticky play nicely with transform
          //   top works for now, but it forces layout calculation
          top: offset,
          height,
          viewTransitionName: "foreground",
        }}
      >
        {renderedViewport}
      </div>
    </div>
  );
}

export default List;
