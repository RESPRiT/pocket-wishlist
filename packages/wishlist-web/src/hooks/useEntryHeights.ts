import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { VirtualListItem } from "@/components/List";

const DEFAULT_HEIGHTS = {
  entry: 75,
  heading: 40 + 44,
  subheading: 4 + 28,
};

export function useEntryHeights(virtualItems: VirtualListItem[]) {
  // variables returned by hook
  const [itemHeights, setItemHeights] = useState<Map<string, number>>(
    new Map(),
  );
  const [pageHeight, setPageHeight] = useState<number>(
    virtualItems.reduce((acc, v) => acc + DEFAULT_HEIGHTS[v.itemType], 0),
  );
  const needsMeasurement = virtualItems.filter((v) => !itemHeights.has(v.key));
  const containerRef = useRef<HTMLDivElement | null>(null);

  // headings are all the same height, so only need one measurement
  const [lastKeySet, setLastKeySet] = useState<Set<string>>(new Set());
  const headingHeightRef = useRef<number>(0);
  const lastWindowWidthRef = useRef<number>(0);

  // measure before paint so we can get nix the container before rendering
  useLayoutEffect(() => {
    if (containerRef.current === null) return;

    // check if keys have actually changed
    // sorting = keys don't change; order = keys change (sub-headers)
    if (
      virtualItems.length === lastKeySet.size &&
      virtualItems.every((v) => lastKeySet.has(v.key))
    ) {
      return;
    }

    // measure each element and cache measurements
    const newHeights = new Map(itemHeights);
    Array.from(containerRef.current.children).forEach((el, i) => {
      //  it's safe to assume that children is 1:1 with measureItems
      const item = needsMeasurement[i];

      if (item.key !== null && !itemHeights.has(item.key)) {
        if (item?.itemType === "heading") {
          if (headingHeightRef.current > 0) {
            newHeights.set(item.key, headingHeightRef.current);
            return;
          }
          headingHeightRef.current = el.clientHeight;
        }

        newHeights.set(item.key, el.clientHeight);
      }
    });

    setLastKeySet(new Set(virtualItems.map((v) => v.key)));
    setPageHeight(document.documentElement.scrollHeight);
    setItemHeights(newHeights);
  }, [itemHeights, lastKeySet, needsMeasurement, virtualItems]);

  // Re-measure on window resize (debounced)
  // TODO: This is logic is _fine_ but it probably could be nicer
  useEffect(() => {
    // stupid SSR shit
    if (typeof window === "undefined") return;

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const innerWidth = window.innerWidth;

        // hack: heights only change between xs and lg breakpoints
        if (
          (lastWindowWidthRef.current >= 1024 && innerWidth >= 1024) ||
          (lastWindowWidthRef.current < 320 && innerWidth < 320)
        )
          return;

        // Clear measurements to trigger re-measurement
        setLastKeySet(new Set());
        setItemHeights(new Map());
        headingHeightRef.current = 0;
        lastWindowWidthRef.current = innerWidth;
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [virtualItems]);

  return {
    itemHeights,
    pageHeight,
    needsMeasurement,
    containerRef,
  };
}
