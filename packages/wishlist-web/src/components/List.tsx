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

  // Heading positions within virtualItems. Subheadings are deliberately not
  // sticky — only top-level group headings pin to the viewport top.
  const stickyIndexes = useMemo(
    () =>
      virtualItems
        .map((item, i) => (item.itemType === "heading" ? i : -1))
        .filter((i) => i !== -1),
    [virtualItems],
  );

  // The currently-active sticky heading is the largest stickyIndex <=
  // range.startIndex (i.e. the most-recently-passed heading). Updated
  // synchronously by rangeExtractor so render sees the right value.
  const activeStickyIdxRef = useRef<number | null>(null);

  const rangeExtractor = useCallback(
    (range: Range) => {
      let active: number | null = null;
      for (const i of stickyIndexes) {
        if (i <= range.startIndex) active = i;
        else break;
      }
      activeStickyIdxRef.current = active;
      const defaultRange = defaultRangeExtractor(range);
      if (active === null || defaultRange.includes(active)) return defaultRange;
      return [active, ...defaultRange].sort((a, b) => a - b);
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

  const viewportItems = virtualizer.getVirtualItems();
  const viewportItemsKey = viewportItems
    .map((v) => `${v.key}:${v.start}`)
    .join(",");
  const scrollMargin = virtualizer.options.scrollMargin;
  const scrollOffset = virtualizer.scrollOffset ?? 0;
  // Scroll position in list-container coordinates (excluding scrollMargin).
  const listScrollY = scrollOffset - scrollMargin;

  // Cumulative Y of every item from the list-container top. Needed for the
  // sticky lift-off clamp because the next heading may be outside the
  // viewport (and thus absent from viewportItems).
  const itemOffsets = useMemo(() => {
    const offsets = new Float64Array(virtualItems.length);
    let y = 0;
    for (let i = 0; i < virtualItems.length; i++) {
      offsets[i] = y;
      y += itemHeights.get(virtualItems[i].key) ?? 75;
      y += 8; // matches virtualizer's gap
    }
    return offsets;
  }, [virtualItems, itemHeights]);

  const activeStickyIdx = activeStickyIdxRef.current;

  // Each item is absolute-positioned at its computed Y. For the active sticky
  // heading we override that Y with clamp(scrollY, naturalY, nextHeadingY −
  // activeSize): it pins at the viewport top while scrolling past, and lifts
  // off when the next heading arrives.
  const renderedViewport = useMemo(
    () =>
      viewportItems.map((row) => {
        const isActiveSticky = row.index === activeStickyIdx;
        let translateY = row.start - scrollMargin;
        if (isActiveSticky) {
          const orderIdx = stickyIndexes.indexOf(row.index);
          const nextStickyIdx = stickyIndexes[orderIdx + 1] ?? null;
          const upperBound =
            nextStickyIdx !== null
              ? itemOffsets[nextStickyIdx] - row.size
              : Infinity;
          translateY = Math.min(
            Math.max(translateY, listScrollY),
            upperBound,
          );
        }
        return (
          <div
            key={row.key}
            className={`absolute top-0 right-0 left-0${
              isActiveSticky ? " z-20" : ""
            }`}
            style={{
              transform: `translateY(${translateY}px)`,
            }}
          >
            <ListItem item={virtualItems[row.index]} />
          </div>
        );
      }),
    // update when items, positions, or active sticky change. listScrollY is in
    // the deps so the active heading's clamped Y updates on every scroll.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      viewportItemsKey,
      virtualItems,
      scrollMargin,
      activeStickyIdx,
      stickyIndexes,
      itemOffsets,
      listScrollY,
    ],
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
