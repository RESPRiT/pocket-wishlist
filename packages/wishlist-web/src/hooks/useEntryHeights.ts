import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ListEntryProps } from "@/components/ListEntry";
import { useTheme } from "@/contexts/ThemeContext";

export function useEntryHeights(items: ListEntryProps[]) {
  const [heights, setHeights] = useState<Map<string, number>>(new Map());
  const [pageHeight, setPageHeight] = useState(75 * items.length);
  const [needsMeasurement, setNeedsMeasurement] = useState(true);
  const measureContainerRef = useRef<HTMLDivElement>(null);

  const { isTransitioning } = useTheme();

  // Stable reference for measurement (doesn't change on re-sort)
  const measurementItems = useRef(items);

  // Measure when container is ready (before paint)
  useLayoutEffect(() => {
    if (!needsMeasurement || !measureContainerRef.current) return;

    // Batch layout calculations: measure items and page height together
    const newHeights = new Map<string, number>();
    const children = Array.from(measureContainerRef.current.children);

    children.forEach((child, index) => {
      const height = (child as HTMLElement).clientHeight;
      newHeights.set(measurementItems.current[index].packagedName, height);
    });

    const newPageHeight = document.documentElement.scrollHeight;

    setHeights(newHeights);
    setPageHeight(newPageHeight);
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

  // Track page height changes with ResizeObserver
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (isTransitioning) return;

      const newPageHeight = document.documentElement.scrollHeight;
      setPageHeight(newPageHeight);
    });

    observer.observe(document.body);

    return () => observer.disconnect();
  }, [isTransitioning]);

  return {
    heights,
    pageHeight,
    needsMeasurement,
    measureContainerRef,
    measurementItems: measurementItems.current,
  };
}
