import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ListEntryProps } from "@/components/ListEntry";

export function useItemHeights(items: ListEntryProps[]) {
  const [heights, setHeights] = useState<Map<string, number>>(new Map());
  const [needsMeasurement, setNeedsMeasurement] = useState(true);
  const measureContainerRef = useRef<HTMLDivElement>(null);

  // Stable reference for measurement (doesn't change on re-sort)
  const measurementItems = useRef(items);

  // Measure when container is ready (before paint)
  useLayoutEffect(() => {
    if (!needsMeasurement || !measureContainerRef.current) return;

    const newHeights = new Map<string, number>();
    const children = Array.from(measureContainerRef.current.children);

    children.forEach((child, index) => {
      const height = (child as HTMLElement).clientHeight;
      newHeights.set(measurementItems.current[index].packagedName, height);
    });

    setHeights(newHeights);
    setNeedsMeasurement(false);
  }, [needsMeasurement]);

  // Re-measure on window resize (debounced)
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setNeedsMeasurement(true);
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return {
    heights,
    needsMeasurement,
    measureContainerRef,
    measurementItems: measurementItems.current,
  };
}
