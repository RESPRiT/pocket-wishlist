import { HeadingItem } from "@/components/List";
import { VirtualListItem } from "@/components/ListItem";
import { ListEntryProps } from "@/components/ListEntry";
import { HeadingType } from "@/components/ListHeading";

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
        : price.value > price.lowestMall
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

export function insertListHeadings(
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
    return entries.map((entry) => ({
      entry,
      itemType: "entry" as const,
      key: entry.packagedName,
    }));
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
        if (entry.status === "OPENED" || entry.status === "PACKAGED")
          status.iotms.owned++;
      } else if (entry.isIOTY) {
        status.iotys.total++;
        if (entry.status === "OPENED" || entry.status === "PACKAGED")
          status.iotys.owned++;
      } else {
        status.special.total++;
        if (entry.status === "OPENED" || entry.status === "PACKAGED")
          status.special.owned++;
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
        result.push({
          entry: e,
          itemType: "entry" as const,
          key: e.packagedName,
        }),
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
        result.push({
          entry: e,
          itemType: "entry" as const,
          key: e.packagedName,
        }),
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
        result.push({
          entry: e,
          itemType: "entry" as const,
          key: e.packagedName,
        }),
      );
    }
  }

  return result;
}
