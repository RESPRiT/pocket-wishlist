import { RefObject, useEffect, useRef } from "react";
import type { ListEntryProps } from "@/components/ListEntry";
import type { Theme } from "@/contexts/ThemeContext";
import {
  deriveEntryColorInputs,
  getEntryBgColorString,
} from "@/hooks/useEntryBackgroundColor";

// Height of one entry row in CSS px — mirrors the old h-0.5 (2px) div the
// minimap used to render per entry. — claude, 2026-05-31
export const ENTRY_HEIGHT_PX = 2;

// Matches the transition-colors duration-400 the per-entry divs carried, so a
// status/price change fades over the same window it always did.
// — claude, 2026-05-31
const ANIM_MS = 400;

type RGBA = [number, number, number, number];

// Approximates the CSS `ease` timing function (the transition default) closely
// enough for a 2px bar. — claude, 2026-05-31
function ease(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Resolves CSS color strings — which reference var(--…)/color-mix/oklch — to
// concrete sRGB bytes. Canvas fillStyle cannot parse var(), so we let the
// cascade resolve the variables via getComputedStyle, then read the painted
// pixel back to normalize whatever the browser serializes (rgb/oklab/…) into
// plain bytes we can interpolate. The probe lives under document.body, which
// inherits data-theme from <html>, so vars resolve in the active theme.
// — claude, 2026-05-31
function makeColorResolver() {
  const probe = document.createElement("span");
  probe.style.cssText =
    "position:absolute;width:0;height:0;visibility:hidden;pointer-events:none";
  document.body.appendChild(probe);

  const off = document.createElement("canvas");
  off.width = 1;
  off.height = 1;
  const octx = off.getContext("2d", { willReadFrequently: true });

  // Resolve a whole list in one pass, deduping identical strings (many rows
  // share a color — e.g. every OPENED entry). The cache is per-call because
  // var() resolution depends on the current theme. — claude, 2026-05-31
  function resolveAll(cssList: string[]): RGBA[] {
    const cache = new Map<string, RGBA>();
    return cssList.map((css) => {
      const hit = cache.get(css);
      if (hit) return hit;

      probe.style.color = css;
      const literal = getComputedStyle(probe).color;
      let rgba: RGBA = [0, 0, 0, 255];
      if (octx) {
        octx.clearRect(0, 0, 1, 1);
        octx.fillStyle = literal;
        octx.fillRect(0, 0, 1, 1);
        const d = octx.getImageData(0, 0, 1, 1).data;
        rgba = [d[0], d[1], d[2], d[3]];
      }
      cache.set(css, rgba);
      return rgba;
    });
  }

  return { resolveAll, dispose: () => probe.remove() };
}

/**
 * Drives the minimap's entry strip on a single <canvas> instead of one div per
 * entry. Returns a ref to attach to the canvas. Colors are resolved only when
 * the entries or theme change; a requestAnimationFrame loop then tweens the
 * painted colors to their targets, replacing the old per-div CSS transition.
 */
export function useMiniMapCanvas(
  entries: ListEntryProps[],
  theme: Theme,
  width: number,
): RefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resolverRef = useRef<ReturnType<typeof makeColorResolver> | null>(null);

  // All animation state lives in refs so the rAF loop can mutate it every frame
  // without re-rendering React. displayed = what's painted now, target = where
  // we're tweening to, start = the displayed snapshot when the tween began.
  const displayedRef = useRef<RGBA[]>([]);
  const targetRef = useRef<RGBA[]>([]);
  const startRef = useRef<RGBA[]>([]);
  const tweenStartRef = useRef(0);
  const rafRef = useRef(0);
  const widthRef = useRef(width);
  // Signature of the last resolved color set, so identity churn in `entries`
  // (a fresh array each render) doesn't trigger a needless re-resolve.
  const sigRef = useRef<string>("");

  widthRef.current = width;

  // Paint/step are created once via a lazy ref: they close over only the
  // (stable) refs above, so they never go stale and never need to be recreated
  // or listed in effect deps. — claude, 2026-05-31
  const fnsRef = useRef<{ paint: () => void; step: () => void } | null>(null);
  if (!fnsRef.current) {
    const paint = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const colors = displayedRef.current;
      const n = colors.length;
      const cssW = widthRef.current;
      const cssH = n * ENTRY_HEIGHT_PX;
      const dpr = window.devicePixelRatio || 1;

      const bw = Math.max(1, Math.round(cssW * dpr));
      const bh = Math.max(1, Math.round(cssH * dpr));
      if (canvas.width !== bw) canvas.width = bw;
      if (canvas.height !== bh) canvas.height = bh;
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssW, cssH);
      for (let i = 0; i < n; i++) {
        const [r, g, b, a] = colors[i];
        ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
        // Slight row overlap avoids hairline seams once dpr scaling rounds.
        ctx.fillRect(0, i * ENTRY_HEIGHT_PX, cssW, ENTRY_HEIGHT_PX + 0.5);
      }
    };

    const step = () => {
      const t = Math.min(
        1,
        (performance.now() - tweenStartRef.current) / ANIM_MS,
      );
      const e = ease(t);
      const start = startRef.current;
      const target = targetRef.current;
      const displayed = displayedRef.current;
      for (let i = 0; i < target.length; i++) {
        const s = start[i] ?? target[i];
        const g = target[i];
        displayed[i] = [
          s[0] + (g[0] - s[0]) * e,
          s[1] + (g[1] - s[1]) * e,
          s[2] + (g[2] - s[2]) * e,
          s[3] + (g[3] - s[3]) * e,
        ];
      }
      paint();
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    fnsRef.current = { paint, step };
  }

  // Resolver lifecycle. Declared before the resolve effect so resolverRef is
  // populated by the time that effect first runs.
  useEffect(() => {
    resolverRef.current = makeColorResolver();
    return () => {
      cancelAnimationFrame(rafRef.current);
      resolverRef.current?.dispose();
      resolverRef.current = null;
    };
  }, []);

  // Resolve + animate when the entries or theme change.
  useEffect(() => {
    const resolver = resolverRef.current;
    const fns = fnsRef.current;
    if (!resolver || !fns) return;

    const cssList = entries.map((entry) =>
      getEntryBgColorString({ ...deriveEntryColorInputs(entry), theme }),
    );
    const sig = `${theme}|${cssList.join("|")}`;
    if (sig === sigRef.current) return; // nothing color-relevant changed
    sigRef.current = sig;

    const next = resolver.resolveAll(cssList);
    const prev = displayedRef.current;
    targetRef.current = next;

    // First paint, or the row count changed (filter/search): snap to the new
    // colors — there's no meaningful previous color to tween from.
    if (prev.length !== next.length) {
      displayedRef.current = next.map((c) => [...c] as RGBA);
      startRef.current = next;
      cancelAnimationFrame(rafRef.current);
      fns.paint();
      return;
    }

    // Same rows, colors shifted (theme flip or a price/status update): tween
    // from whatever is on screen now to the new targets.
    startRef.current = prev.map((c) => [...c] as RGBA);
    tweenStartRef.current = performance.now();
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(fns.step);
  }, [entries, theme]);

  // Width is geometry-only: repaint the current colors at the new size.
  useEffect(() => {
    fnsRef.current?.paint();
  }, [width]);

  return canvasRef;
}
