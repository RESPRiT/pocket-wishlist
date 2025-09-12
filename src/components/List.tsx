import ListEntry from "./ListEntry";
import { iotms, mall } from "@/data";
import type { IOTM } from "@/data";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ListEntryProps } from "./ListEntry";
import { useStore } from "@/stores/userStore";

type Price = {
  value: number;
  volume: number;
  date: Date;
  itemId: number;
  tradeable?: boolean;
};

function handleSort(
  sort: string
): (a: ListEntryProps, b: ListEntryProps) => number {
  if (sort === "price") {
    return (a, b) => (b.mall && a.mall ? b.mall - a.mall : b.mall ? -1 : 1);
  } else if (sort === "tier") {
    return (a, b) => {
      const averageA = ((a.speed ? a.speed : 6) + (a.farm ? a.farm : 6)) / 2;
      const averageB = ((b.speed ? b.speed : 6) + (b.farm ? b.farm : 6)) / 2;

      return averageB - averageA;
    };
  }

  // default to date
  return (a, b) =>
    // compare the year + months (bigger = newer)
    // put non-monthly items at the top (11.01 > 11)
    a.year +
    (a.month ? a.month - 1 : 11.01) * (1 / 12) -
    (b.year + (b.month ? b.month - 1 : 11.01) * (1 / 12)) +
    // tie-breaker for IOTYs (above Con)
    (a.isIOTY ? 0.02 : 0) -
    (b.isIOTY ? 0.02 : 0) +
    // tie-breaker for Con items (below IOTY)
    (a.isCon ? 0.01 : 0) -
    (b.isCon ? 0.01 : 0);
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
  const { currentOrder, currentSort } = useStore();

  // memoize prevents useEffect from activating more than once;
  // no dependencies, so url is only calculated on the first render
  const url = useMemo(
    () =>
      `https://pricegun.loathers.net/api/${iotms
        .map((item) => item.packaged_id)
        .concat([194]) // also lookup Mr. A prices
        .join(",")}`,
    []
  );

  useEffect(() => {
    const cached = localStorage.getItem("prices");
    const lastUpdated = localStorage.getItem("pricesLastUpdated");
    // if we wanted to be more robust, we could check if
    // lastUpdated is a valid Date
    const updateDate = lastUpdated ? new Date(parseInt(lastUpdated)) : null;

    function updatedToday(date: Date | null): boolean {
      if (date === null) return false;

      const today = new Date();

      const ret =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();

      return ret;
    }

    if (cached && updatedToday(updateDate)) {
      setPrices(JSON.parse(cached) as Price[]); // type is a lie, see below
      return;
    }

    async function storePrices() {
      try {
        const response = await fetch(url);
        const results = (await response.json()) as Price[];
        localStorage.setItem("prices", JSON.stringify(results));
        localStorage.setItem("pricesLastUpdated", String(Date.now()));
        setPrices(results);
      } catch (error) {
        console.log("Couldn't store prices", url, error);
      }
    }

    storePrices();
  }, [url]);

  const getPrice = useCallback(
    (itemId: number): number | null => {
      // this isn't strict equality because it's actually an evil lie:
      // JSON.parse() results in all object fields being strings,
      // so, fields that should be e.g. numbers are actually strings
      // (Zod would help fix this)
      const priceEntry = prices.find((price) => price.itemId == itemId);
      const mallEntry = mall.find((price) => price.id == itemId);

      if (priceEntry === undefined) {
        if (mallEntry === undefined) return null;
        if (mallEntry.lowestMall > 0) return mallEntry.lowestMall;
        return null;
      }
      if (mallEntry !== undefined && mallEntry.lowestMall < priceEntry.value)
        return mallEntry.lowestMall;
      return priceEntry.value;
    },
    [prices]
  );

  const mrAs = useMemo(() => getPrice(194), [getPrice]);

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
          mall: getPrice(item.packaged_id),
          mrAs, // don't love this here
        })),
    [mrAs, getPrice]
  );

  const sortedData = data.sort(handleSort(currentSort));
  const orderedData = currentOrder ? sortedData : sortedData.reverse();

  return (
    <div className="flex flex-wrap lg:flex-col lg:flex-nowrap justify-center items-center gap-2 w-full pb-12">
      {orderedData.map((entry) => (
        <ListEntry key={entry.name} {...entry} />
      ))}
    </div>
  );
}

export default List;
