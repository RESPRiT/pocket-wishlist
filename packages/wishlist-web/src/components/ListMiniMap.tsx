import {
  PointerEventHandler,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { ListEntryProps } from "./ListEntry";
import { useTheme } from "@/contexts/ThemeContext";
import { ENTRY_HEIGHT_PX, useMiniMapCanvas } from "@/hooks/useMiniMapCanvas";
import { cn } from "@/lib/utils";

// Constants
const HOVER_PADDING_MULTIPLIER = 1.5;
const TOP_OFFSET = 24; // top-6 class = 24px
const MINIMAP_MIN_VIEWPORT_WIDTH = 1080;

// useSyncExternalStore wiring for window.scrollY. Defined at module scope so
// the subscribe and getSnapshot references are stable across renders.
function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => {
    window.removeEventListener("scroll", onChange);
  };
}
function getScrollY() {
  return window.scrollY;
}
function getServerScrollY() {
  return 0;
}

function ListMiniMap({
  entries,
  height,
  pageHeight,
  pageHeightSettled,
}: {
  entries: ListEntryProps[];
  height: number;
  pageHeight: number;
  pageHeightSettled: boolean;
}) {
  const { theme } = useTheme();
  const scrollWindowRef = useRef<HTMLDivElement>(null);
  // Drag override: when the user is actively dragging the scroll-window, the
  // minimap position is driven by cursor delta math rather than window.scrollY
  // (window.scroll calls fire scroll events asynchronously, which would lag
  // behind the cursor by ~1 frame). Cleared on pointerUp to fall back to the
  // derived value.
  const [dragPosition, setDragPosition] = useState<number | null>(null);
  const [initialScrollPosition, setInitialScrollPosition] = useState(0);
  const [initialScrollY, setInitialScrollY] = useState<number | null>(null);
  const [innerHeight, setInnerHeight] = useState(1080);
  const [innerWidth, setInnerWidth] = useState(1920);
  const [isActive, setIsActive] = useState(false);
  const [showMiniMap, setShowMiniMap] = useState(true);

  // Subscribe to window.scrollY via useSyncExternalStore so renders always
  // reflect the current scroll position — including the one tanstack-router
  // restores after reload, which arrives between mount and the first effect.
  // Deriving scrollPosition during render (rather than tracking it in state)
  // eliminates the intermediate-commit window where stale values could ship
  // to the compositor.
  const scrollY = useSyncExternalStore(
    subscribeScroll,
    getScrollY,
    getServerScrollY,
  );

  // Calculate derived values
  const scrollFactor = pageHeight / (entries.length * ENTRY_HEIGHT_PX);
  const miniMapWidth = innerWidth / scrollFactor;
  const scrollPosition =
    dragPosition !== null ? dragPosition : scrollY / scrollFactor;

  // Setup initial window size + resize event handler
  useEffect(() => {
    const handleWindowResize = () => {
      const _innerWidth = window.innerWidth;
      setShowMiniMap(_innerWidth >= MINIMAP_MIN_VIEWPORT_WIDTH);
      setInnerWidth(_innerWidth);
      setInnerHeight(window.innerHeight);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Event handlers
  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setInitialScrollY(e.clientY);
    setInitialScrollPosition(scrollPosition);
    setDragPosition(scrollPosition);
    setIsActive(true);
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (e) => {
    if (initialScrollY === null) return;

    const maxScrollHeight = innerHeight / scrollFactor;
    const maxScrollAmount = pageHeight / scrollFactor - maxScrollHeight;
    const _scrollPosition = Math.min(
      Math.max(initialScrollPosition + e.clientY - initialScrollY, 0),
      maxScrollAmount,
    );
    setDragPosition(_scrollPosition);

    if (scrollPosition !== _scrollPosition) {
      window.scroll(0, _scrollPosition * scrollFactor);
    }
  };

  const handlePointerUp: PointerEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setInitialScrollY(null);
    setDragPosition(null);
    setIsActive(false);
  };

  const handleJumpPointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    if (initialScrollY === null) {
      const maxScrollHeight = innerHeight / scrollFactor;
      const maxScrollAmount = pageHeight / scrollFactor - maxScrollHeight;
      const jumpY = Math.min(
        Math.max(e.clientY - TOP_OFFSET - maxScrollHeight / 2, 0),
        maxScrollAmount,
      );
      // jump to center of pointer + scroll to position
      setDragPosition(jumpY);
      window.scroll(0, jumpY * scrollFactor);

      if (!scrollWindowRef.current) {
        throw new Error(
          "Could not find scroll window element (and we really should!)",
        );
      }

      // focus scroll window
      scrollWindowRef.current.setPointerCapture(e.pointerId);
      setInitialScrollY(e.clientY);
      setInitialScrollPosition(jumpY);

      setIsActive(true);
    }
  };

  // Renders the entry strip onto a single canvas (one fillRect per entry)
  // rather than one div per entry. — claude, 2026-05-31
  const canvasRef = useMiniMapCanvas(entries, theme, miniMapWidth);

  return (
    showMiniMap && (
      <div
        className="group absolute -right-6 select-none"
        style={{
          // Hidden until pageHeight settles via ResizeObserver — see comment
          // on pageHeightSettled in useEntryHeights.ts. Children still render
          // and animate (transition-colors on entries), they just don't
          // contribute to any paint until visibility flips.
          visibility: pageHeightSettled ? "visible" : "hidden",
        }}
      >
        {/* Extra hover padding */}
        <div
          className="fixed top-0 h-full"
          style={{
            width: miniMapWidth * HOVER_PADDING_MULTIPLIER,
            // shift by half of extra size to center
            transform: `translateX(-${(miniMapWidth * (HOVER_PADDING_MULTIPLIER - 1)) / 2}px)`,
          }}
        />
        {/* Minimap */}
        <div
          className={cn(
            `fixed z-0 rounded-xs bg-background/0 opacity-25 outline-1
            outline-foreground/50 transition-opacity duration-200
            group-hover:opacity-100`,
            isActive && "opacity-100",
          )}
          style={{ width: miniMapWidth, top: TOP_OFFSET }}
          onPointerDown={handleJumpPointerDown}
        >
          <canvas ref={canvasRef} className="block w-full" />
        </div>
        {/* Scroll window */}
        <div
          ref={scrollWindowRef}
          className={cn(
            `fixed top-0 z-10 opacity-10 outline-2 outline-foreground
            transition-opacity duration-200 group-hover:opacity-100
            hover:cursor-pointer hover:bg-background/20
            hover:outline-foreground/50`,
            isActive &&
              `opacity-100 hover:cursor-grabbing hover:bg-background/50
              hover:outline-foreground/25`,
          )}
          style={{
            width: miniMapWidth,
            transform: `translateY(${TOP_OFFSET + scrollPosition}px)`,
            height:
              (innerHeight -
                Math.max(
                  0,
                  pageHeight - height - scrollPosition * scrollFactor,
                )) /
              scrollFactor,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        ></div>
      </div>
    )
  );
}

export default ListMiniMap;
