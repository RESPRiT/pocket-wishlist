import ListEntry, { ListEntryProps } from "./ListEntry";
import ListHeading, {
  HeadingInfo,
  HeadingStatus,
  HeadingType,
} from "./ListHeading";
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
import { useEntryHeights } from "@/hooks/useEntryHeights.ts";
import { cn } from "@/lib/utils.ts";

// TODO: Clean up a lot of this code because it's a mess rn
// In particular, data flow for handling grouping and group-statistics is clumsy
export type EntryItem = ListEntryProps & { itemType: "entry" };
export type HeadingItem = {
  itemType: "heading";
  headingType: HeadingType;
  label: string;
  key: string;
  status: HeadingStatus;
  info: HeadingInfo;
};
export type SubHeadingType = "iotm" | "ioty" | "special";
export type SubHeadingItem = {
  itemType: "subheading";
  subheadingType: SubHeadingType;
  owned: ListEntryProps["status"][];
  key: string;
};
export type VirtualListItem = EntryItem | HeadingItem | SubHeadingItem;

const PRICE_RANGES = [
  { max: 1, label: "<1 Mr. A" },
  { max: 2, label: "1-2 Mr. As" },
  { max: 3, label: "2-3 Mr. As" },
  { max: 5, label: "3-5 Mr. As" },
  { max: 10, label: "5-10 Mr. As" },
  { max: 50, label: "10-50 Mr. As" },
  { max: Infinity, label: "50+ Mr. As" },
] as const;

function getYearGroup(entry: ListEntryProps): string {
  return String(entry.year);
}

function getTierGroup(entry: ListEntryProps): string {
  const speed = entry.speed ?? 6;
  const farm = entry.farm ?? 6;
  const average = (speed + farm) / 2;
  const tier = Math.floor(average);
  return `Tier ${tier}`;
}

function getPriceGroup(entry: ListEntryProps): string {
  const price = entry.price;
  const mallStatus =
    price?.value === undefined && price?.lowestMall === -1
      ? "extinct"
      : price?.value === undefined || price?.volume === 0
        ? "lowestMall"
        : price.value < price.lowestMall
          ? "recentSales"
          : "lowestMall";

  const lowestPrice =
    (mallStatus === "lowestMall"
      ? price?.lowestMall
      : mallStatus === "recentSales"
        ? price?.value
        : -1) ?? -1;

  const costInMrAs = lowestPrice === -1 ? Infinity : lowestPrice / entry.mrAs;

  for (const range of PRICE_RANGES) {
    if (costInMrAs < range.max) {
      return range.label;
    }
  }
  return PRICE_RANGES[PRICE_RANGES.length - 1].label;
}

// TODO: lots of redundant loops in here
// also, I don't like these side effects for calculations
function insertHeadings(
  entries: ListEntryProps[],
  currentSort: string,
): VirtualListItem[] {
  let getGroup: (entry: ListEntryProps) => string;
  let headingType: HeadingType;

  if (currentSort === "date") {
    getGroup = getYearGroup;
    headingType = "year";
  } else if (currentSort === "tier") {
    getGroup = getTierGroup;
    headingType = "tier";
  } else if (currentSort === "price") {
    getGroup = getPriceGroup;
    headingType = "price";
  } else {
    return entries.map((entry) => ({ ...entry, itemType: "entry" as const }));
  }

  const groupedEntries = new Map<string, ListEntryProps[]>();
  for (const entry of entries) {
    const group = getGroup(entry);
    if (!groupedEntries.has(group)) {
      groupedEntries.set(group, []);
    }
    groupedEntries.get(group)!.push(entry);
  }

  const groupStatus = new Map<string, HeadingItem["status"]>();
  const groupInfo = new Map<string, HeadingItem["info"]>();
  for (const [group, groupEntries] of groupedEntries) {
    const status = {
      iotms: { owned: 0, total: 0 },
      iotys: { owned: 0, total: 0 },
      special: { owned: 0, total: 0 },
    };

    for (const entry of groupEntries) {
      if (entry.month !== undefined) {
        status.iotms.total++;
        if (entry.status !== "NONE") status.iotms.owned++;
      } else if (entry.isIOTY) {
        status.iotys.total++;
        if (entry.status !== "NONE") status.iotys.owned++;
      } else {
        status.special.total++;
        if (entry.status !== "NONE") status.special.owned++;
      }
    }

    groupStatus.set(group, status);

    const pricesOutliersRemoved = groupEntries
      .map((entry) => entry.price?.lowestMall ?? Infinity)
      .sort((a, b) => a - b)
      .slice(1, -1);

    const info = {
      avgPrice:
        pricesOutliersRemoved.reduce((acc, price) => acc + price, 0) /
        pricesOutliersRemoved.length,
    };

    groupInfo.set(group, info);
  }

  // Subdivide each group into sub-categories
  const subGroupedEntries = new Map<
    string,
    {
      iotms: ListEntryProps[];
      iotys: ListEntryProps[];
      specials: ListEntryProps[];
    }
  >();

  for (const [group, groupEntries] of groupedEntries) {
    const iotms = groupEntries.filter((e) => e.month !== undefined);
    const iotys = groupEntries.filter((e) => e.month === undefined && e.isIOTY);
    const specials = groupEntries.filter(
      (e) => e.month === undefined && !e.isIOTY,
    );

    subGroupedEntries.set(group, { iotms, iotys, specials });
  }

  // Build final list with headings, sub-headings, and entries
  const seenGroups = new Set<string>();
  const result: VirtualListItem[] = [];

  for (const entry of entries) {
    const group = getGroup(entry);

    if (seenGroups.has(group)) {
      continue; // Skip - already inserted this group's entries
    }

    seenGroups.add(group);

    // Insert main heading
    result.push({
      itemType: "heading",
      headingType,
      label: group,
      key: `heading-${headingType}-${group}`,
      status: groupStatus.get(group)!,
      info: groupInfo.get(group)!,
    });

    const subGroups = subGroupedEntries.get(group)!;

    // Insert IOTMs sub-heading and entries
    if (subGroups.iotms.length > 0) {
      result.push({
        itemType: "subheading",
        subheadingType: "iotm",
        key: `subheading-iotm-${group}`,
        owned: subGroups.iotms.map((entry) => entry.status),
      });
      subGroups.iotms.forEach((e) =>
        result.push({ ...e, itemType: "entry" as const }),
      );
    }

    // Insert IOTYs sub-heading and entries
    if (subGroups.iotys.length > 0) {
      result.push({
        itemType: "subheading",
        subheadingType: "ioty",
        key: `subheading-ioty-${group}`,
        owned: subGroups.iotys.map((entry) => entry.status),
      });
      subGroups.iotys.forEach((e) =>
        result.push({ ...e, itemType: "entry" as const }),
      );
    }

    // Insert Specials sub-heading and entries
    if (subGroups.specials.length > 0) {
      result.push({
        itemType: "subheading",
        subheadingType: "special",
        key: `subheading-specials-${group}`,
        owned: subGroups.specials.map((entry) => entry.status),
      });
      subGroups.specials.forEach((e) =>
        result.push({ ...e, itemType: "entry" as const }),
      );
    }
  }

  return result;
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

  const virtualItems = useMemo(
    () => insertHeadings(orderedData, currentSort),
    [orderedData, currentSort],
  );

  // Setup virtualizer
  const listRef = useRef<HTMLDivElement>(null);

  // Get pre-measured heights and page height
  const {
    heights,
    pageHeight,
    needsMeasurement,
    measureContainerRef,
    measurementItems,
  } = useEntryHeights(orderedData, virtualItems);

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
        const item = virtualItems[index];
        const key = item.itemType !== "entry" ? item.key : item.packagedName;
        return heights.get(key) ?? 75;
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
        const item = virtualItems[index];
        return item.itemType !== "entry" ? item.key : item.packagedName;
      },
    };
  }, [virtualItems, heights, rangeExtractor]);

  const virtualizer = useWindowVirtualizer(virtualizerOptions);

  // check virtual items state
  const items = virtualizer.getVirtualItems();
  const itemsKey = items.map((v) => v.key).join(",");

  // Find the first item in the contiguous natural range for offset/height calculations
  // Persisted sticky headings appear before gaps in the index sequence
  const firstNaturalIdx = items.findIndex((item, i) => {
    if (i === items.length - 1) return true;
    return items[i + 1].index === item.index + 1;
  });

  const safeFirstNaturalIdx = firstNaturalIdx === -1 ? 0 : firstNaturalIdx;
  const firstNaturalItem = items[safeFirstNaturalIdx];

  // Calculate height taken by persisted sticky headings (rendered before natural items in flex)
  // We need to adjust offset/height to account for this space
  const gap = virtualizer.options.gap;
  let persistedHeight = 0;
  for (let i = 0; i < safeFirstNaturalIdx; i++) {
    persistedHeight += items[i].size + gap;
  }

  const height =
    items[items.length - 1].end - firstNaturalItem.start + persistedHeight;
  const offset = firstNaturalItem
    ? firstNaturalItem.start -
      virtualizer.options.scrollMargin -
      persistedHeight
    : 0;

  const ListSubHeading = ({
    type,
    owned,
  }: {
    type: SubHeadingType;
    owned: SubHeadingItem["owned"];
  }) => {
    const textColor =
      type === "iotm"
        ? "text-[oklch(from_var(--confirm)_var(--foreground-lightness)_0.09_h)]"
        : type === "ioty"
          ? "text-[oklch(from_var(--accent)_var(--foreground-lightness)_0.09_h)]"
          : "text-[oklch(from_var(--secondary)_var(--foreground-lightness)_0.09_h)]";

    const iconColor =
      type === "iotm"
        ? "bg-[oklch(from_var(--confirm)_var(--foreground-lightness)_0.075_h)]"
        : type === "ioty"
          ? "bg-[oklch(from_var(--accent)_var(--foreground-lightness)_0.075_h)]"
          : "bg-[oklch(from_var(--secondary)_var(--foreground-lightness)_0.075_h)]";

    const label =
      type === "iotm"
        ? "IOTMS"
        : type === "ioty"
          ? "IOTYS"
          : "KOL CON & SPECIAL MR. STORE ITEMS";

    return (
      <div
        className={cn(
          "mx-2 mt-1 flex w-full items-center justify-start gap-2 font-medium",
          textColor,
        )}
      >
        <span className={cn("shrink-0 clamp-[text,xs,sm,xs,sm]", textColor)}>
          {label}
        </span>
        {/* <Badge className="w-11 rounded-sm text-xs tracking-tighter">
          12 / 12
        </Badge> */}
        <div
          className="flex min-w-0 flex-wrap items-center justify-start gap-0.75
            rounded-sm bg-primary px-2 py-1 text-xs"
        >
          <span className="mr-1">
            {owned.filter((v) => v !== "NONE").length} / {owned.length}
          </span>
          {owned.map((v) => (
            <div
              className={cn(
                "h-2.5 w-1.5 rounded-xs",
                v === "OPENED"
                  ? iconColor
                  : v === "PACKAGED"
                    ? [iconColor, "opacity-40"]
                    : "border-[0.5px] border-dashed border-foreground",
              )}
            />
          ))}
        </div>
      </div>
    );
  };

  const entries = useMemo(
    () =>
      items.map((row) => {
        const item = virtualItems[row.index];

        if (item.itemType === "heading") {
          return (
            <div className="sticky -top-4 z-20 h-min w-full" key={row.key}>
              <ListHeading
                type={item.headingType}
                label={item.label}
                status={item.status}
                info={item.info}
              />
            </div>
          );
        } else if (item.itemType === "subheading") {
          return (
            <ListSubHeading
              type={item.subheadingType}
              owned={item.owned}
              key={row.key}
            />
          );
        }

        return (
          <div className="grow" key={row.key}>
            <ListEntry {...item} />
          </div>
        );
      }),
    // update when item values change, not array reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [itemsKey, virtualItems],
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
          {/* TODO: Abstract duplicate rendering logic */}
          {measurementItems.map((item) =>
            item.itemType === "heading" ? (
              <div key={item.key} className="w-full">
                <ListHeading
                  type={item.headingType}
                  label={item.label}
                  status={item.status}
                  info={item.info}
                />
              </div>
            ) : item.itemType === "subheading" ? (
              <ListSubHeading
                type={item.subheadingType}
                owned={item.owned}
                key={item.key}
              />
            ) : (
              <div key={item.packagedName} className="grow">
                <ListEntry {...item} />
              </div>
            ),
          )}
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
        {entries}
      </div>
    </div>
  );
}

export default List;
