import ListEntry from "./ListEntry";

import { iotms } from "@/data";
import type { IOTM } from "@/data";
import { useCallback, useEffect, useMemo, useState } from "react";

type Price = {
  value: number;
  volume: number;
  date: Date;
  itemId: number;
  tradeable?: boolean;
};

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
  // memoize prevents useEffect from activating more than once
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
      // JSON.parse() results in all object fields being strings
      // (Zod would help fix this)
      const priceEntry = prices.find((price) => price.itemId == itemId);

      // TO-DO: Probably need to scrape the Marketplace for IOTMs (most)
      // that haven't had a sale in the past 2 weeks
      if (priceEntry === undefined) return null;
      return priceEntry.value;
    },
    [prices]
  );

  const mrAs = useMemo(() => getPrice(194), [getPrice]);

  const data = useMemo(
    () =>
      iotms
        .filter((item) => item.type !== "vip")
        .sort(
          (a, b) =>
            (a.month ? a.year - a.month * (1 / 12) : a.year) -
            (b.month ? b.year + b.month * (1 / 12) : b.year)
        )
        .reverse()
        .map((item) => ({
          img: item.img,
          name: getUnboxedName(item),
          year: item.year,
          speed: item.speed_tier,
          farm: item.aftercore_tier,
          mall: getPrice(item.packaged_id),
          mrAs, // don't love this here
        })),
    [mrAs, getPrice]
  );

  return (
    <div className="flex flex-col gap-2 w-full pb-12">
      {data.map((entry) => (
        <ListEntry key={entry.name} {...entry} />
      ))}
    </div>
  );
}

export default List;
