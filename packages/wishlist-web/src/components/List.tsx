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

  const {
    itemHeights,
    pageHeight,
    pageHeightSettled,
    needsMeasurement,
    containerRef,
  } = useEntryHeights(virtualItems);

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

  // Visible-range bounds in list-container coords. Used to size the
  // viewTransition wrapper below — naming the full list root for view
  // transitions snapshots its bounding box (height ≈ totalSize, tens of
  // thousands of px), which is catastrophic for the theme toggle. Sizing the
  // wrapper to just the visible items matches the previous layout.
  const visibleStart =
    viewportItems.length > 0 ? viewportItems[0].start - scrollMargin : 0;
  const visibleEnd =
    viewportItems.length > 0
      ? viewportItems[viewportItems.length - 1].end - scrollMargin
      : 0;

  // Group virtualItems into sections (heading + the entries it covers, up to
  // the next heading). Each section's wrapper acts as the scaffold for a
  // browser-native position: sticky heading: the sticky element pins inside
  // its parent's vertical bounds, so it stays at the viewport top while the
  // user scrolls the group and is lifted off when the next section's wrapper
  // pushes past viewport top. No scroll listener or per-frame translate
  // bookkeeping required.
  //
  // Each section's wrapper bottom is EXTENDED into the next section by the
  // height of the next heading. That keeps the current heading sticky-pinned
  // throughout the next heading's arrival, so both are at viewport top during
  // the transition (DOM order puts the next heading above). The current
  // heading then lifts off as the wrapper's bottom slides past viewport top,
  // producing a fully-overlapping handoff instead of an edge-to-edge meet.
  const sections = useMemo(() => {
    const raw: {
      heading: HeadingItem;
      startY: number;
      headingHeight: number;
      contentEndY: number;
    }[] = [];
    let y = 0;
    let pendingHeading: HeadingItem | null = null;
    let pendingStartY = 0;
    let pendingHeadingHeight = 0;
    for (let i = 0; i < virtualItems.length; i++) {
      const item = virtualItems[i];
      if (item.itemType === "heading") {
        if (pendingHeading) {
          raw.push({
            heading: pendingHeading,
            startY: pendingStartY,
            headingHeight: pendingHeadingHeight,
            contentEndY: y,
          });
        }
        pendingHeading = item;
        pendingStartY = y;
        pendingHeadingHeight = itemHeights.get(item.key) ?? 75;
      }
      y += itemHeights.get(item.key) ?? 75;
      y += 8;
    }
    if (pendingHeading) {
      raw.push({
        heading: pendingHeading,
        startY: pendingStartY,
        headingHeight: pendingHeadingHeight,
        contentEndY: y,
      });
    }
    return raw.map((s, i) => {
      const next = raw[i + 1];
      const height = next
        ? next.startY + next.headingHeight - s.startY
        : s.contentEndY - s.startY;
      return { heading: s.heading, startY: s.startY, height };
    });
  }, [virtualItems, itemHeights]);

  // Headings live in sectionWrappers; the regular viewport renders only
  // non-heading items (entries + subheadings). Entries are positioned
  // relative to the viewTransition wrapper below (top: visibleStart), so
  // their translateY subtracts visibleStart from the row's list-container Y.
  const renderedViewport = useMemo(
    () =>
      viewportItems
        .filter((row) => virtualItems[row.index].itemType !== "heading")
        .map((row) => (
          <div
            key={row.key}
            className="absolute top-0 right-0 left-0"
            style={{
              transform: `translateY(${row.start - scrollMargin - visibleStart}px)`,
            }}
          >
            <ListItem item={virtualItems[row.index]} />
          </div>
        )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [viewportItemsKey, virtualItems, scrollMargin, visibleStart],
  );

  // One wrapper per group, always rendered (cheap: a div with one sticky
  // child). The wrapper uses CSS top/height (not transform) so the
  // sticky descendant resolves its offset against the viewport rather than
  // the wrapper's transformed coordinate space. section.startY is already in
  // list-container coordinates (accumulated from 0 via itemHeights), so it's
  // applied directly as `top` — no scrollMargin subtraction. Entries by
  // contrast use row.start from the virtualizer, which is in page-scroll
  // coordinates and thus needs scrollMargin subtracted.
  // pointer-events-none on the wrapper keeps it from intercepting clicks on
  // entries that pass behind it.
  const sectionWrappers = useMemo(
    () =>
      sections.map((section) => (
        <div
          key={section.heading.key}
          className="pointer-events-none absolute right-0 left-0"
          style={{
            top: `${section.startY}px`,
            height: `${section.height}px`,
          }}
        >
          {/* top-4 (16px) gives the pinned heading breathing room from the
              viewport top, matching the previous layout's visual offset. */}
          <div className="pointer-events-auto sticky top-4 z-20">
            <ListItem item={section.heading} />
          </div>
        </div>
      )),
    [sections],
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
          pageHeightSettled={pageHeightSettled}
        />
      </ClientOnly>
      {sectionWrappers}
      {/* Viewport-sized wrapper carrying viewTransitionName so the theme
          toggle's foreground snapshot is bounded to the visible items'
          rectangle — not the 30000+ px list root. Section sticky headings
          stay outside this wrapper (they need full list height to function),
          so they participate in the default root transition. */}
      <div
        className="absolute right-0 left-0"
        style={{
          top: `${visibleStart}px`,
          height: `${visibleEnd - visibleStart}px`,
          viewTransitionName: "foreground",
        }}
      >
        {renderedViewport}
      </div>
    </div>
  );
}

export default List;
