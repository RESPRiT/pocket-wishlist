import ListEntry from "./ListEntry";
import { iotms } from "@/data";
import type { IOTM, MallPrice } from "@/data";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import type { ListEntryProps } from "./ListEntry";
import { useStore } from "@/stores/userStore";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

type Price = {
  value: number;
  volume: number;
  date: Date;
  itemId: number;
  tradeable?: boolean;
};

type WishStatus = {
  lastUpdated: number;
  wishlist: Record<number, "NONE" | "PACKAGED" | "OPENED">;
};

function handleSort(
  sort: string
): (a: ListEntryProps, b: ListEntryProps) => number {
  const priceSort = (
    a: ListEntryProps,
    b: ListEntryProps,
    skipTie = false
  ): number => {
    const aLowest = Math.min(a.price || Infinity, a.lowestMall || Infinity);
    const bLowest = Math.min(b.price || Infinity, b.lowestMall || Infinity);

    // tie-breaker
    if (aLowest === bLowest) {
      return skipTie ? -1 : dateSort(a, b, true);
    }

    return aLowest - bLowest;
  };
  const dateSort = (a: ListEntryProps, b: ListEntryProps, skipTie = false) => {
    // compare years, bigger = "smaller" (newer)
    if (a.year !== b.year) return b.year - a.year;

    // compare months, monthless => bigger (so, 13 > 12)
    if ((a.month ?? 13) !== (b.month ?? 13))
      return (b.month ?? 13) - (a.month ?? 13);

    // compare con and ioty status
    if (a.isIOTY && !b.isIOTY) return -1;
    if (!a.isIOTY && b.isIOTY) return 1;
    if (a.isCon && !b.isCon) return -1;
    if (!a.isCon && b.isCon) return 1;

    if (skipTie) return -1;

    // tie-break
    return priceSort(a, b, true);
  };
  const tierSort = (a: ListEntryProps, b: ListEntryProps) => {
    const averageA =
      ((a.speed !== undefined ? a.speed : 6) +
        (a.farm !== undefined ? a.farm : 6)) /
      2;
    const averageB =
      ((b.speed !== undefined ? b.speed : 6) +
        (b.farm !== undefined ? b.farm : 6)) /
      2;

    return averageA - averageB !== 0 ? averageA - averageB : priceSort(a, b);
  };

  if (sort === "price") {
    return priceSort;
  } else if (sort === "tier") {
    return tierSort;
  }

  // default to date
  return dateSort;
}

// TODO: Move/hoist pricing logic elsewhere (and probably rework data schema)
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
  const [prices, setPrices] = useState([] as Price[]);
  const [mall, setMall] = useState([] as MallPrice[]);
  const [wishlist, setWishlist] = useState({
    lastUpdated: -1,
    wishlist: {},
  } as WishStatus);
  const { currentOrder, currentSort } = useStore();

  // memoize prevents useEffect from activating more than once;
  // no dependencies, so url is only calculated on the first render
  const priceGunUrl = useMemo(
    () =>
      `https://pricegun.loathers.net/api/${iotms
        .map((item) => item.packaged_id)
        .concat([194]) // also lookup Mr. A prices
        .join(",")}`,
    []
  );

  // TODO: fetching and caching logic feels kind of repetitive and DIY,
  // maybe a better pattern or library could be used
  useEffect(() => {
    async function getWishlist() {
      try {
        // TODO: Un-hardcode user
        const wishResponse = await fetch(
          "https://resprit--94d09ed2946611f08e910224a6c84d84.web.val.run/get-wishlist?u=1927026"
        );
        const wishResults = (await wishResponse.json()) as WishStatus;
        setWishlist(wishResults);
      } catch (error) {
        console.log("Couldn't get wishlist", error);
      }
    }
    getWishlist();

    const priceGunCached = localStorage.getItem("prices");
    const priceGunLastUpdated = localStorage.getItem("pricesLastUpdated");
    // if we wanted to be more robust, we could check if
    // lastUpdated is a valid Date
    const priceGunUpdateDate = priceGunLastUpdated
      ? new Date(parseInt(priceGunLastUpdated))
      : null;

    const mallCached = localStorage.getItem("mall");
    const mallLastUpdated = localStorage.getItem("mallLastUpdated");
    const mallUpdateDate = mallLastUpdated
      ? new Date(parseInt(mallLastUpdated))
      : null;

    function updatedToday(date: Date | null): boolean {
      if (date === null) return false;

      const today = new Date();

      const ret =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();

      return ret;
    }

    if (
      priceGunCached &&
      mallCached &&
      updatedToday(priceGunUpdateDate) &&
      updatedToday(mallUpdateDate)
    ) {
      setPrices(JSON.parse(priceGunCached) as Price[]); // type is a lie, see below
      setMall(JSON.parse(mallCached) as MallPrice[]);
      return;
    }

    async function storePrices() {
      try {
        const priceGunResponse = await fetch(priceGunUrl);
        const priceGunResults = (await priceGunResponse.json()) as Price[];
        localStorage.setItem("prices", JSON.stringify(priceGunResults));
        localStorage.setItem("pricesLastUpdated", String(Date.now()));
        setPrices(priceGunResults);
      } catch (error) {
        console.log("Couldn't store pricegun prices", priceGunUrl, error);
      }
    }

    async function storeMall() {
      try {
        const mallResponse = await fetch(
          "https://resprit--3e24629c912a11f0b6710224a6c84d84.web.val.run/lowest-mall"
        );
        const mallResults = (await mallResponse.json()) as MallPrice[];
        localStorage.setItem("mall", JSON.stringify(mallResults));
        localStorage.setItem("mallLastUpdated", String(Date.now()));
        setMall(mallResults);
      } catch (error) {
        console.log("Couldn't store mall prices", error);
      }
    }

    if (!priceGunCached || !updatedToday(priceGunUpdateDate)) storePrices();
    if (!mallCached || !updatedToday(mallUpdateDate)) storeMall();
  }, [priceGunUrl]);

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
        .map((item) => ({
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
        })),
    [mrAs, getPrice, wishlist]
  );

  const sortedData = data.sort(handleSort(currentSort));
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
