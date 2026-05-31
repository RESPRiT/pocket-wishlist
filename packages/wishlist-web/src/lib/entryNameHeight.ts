import { layout, prepare, type PreparedText } from "@chenglou/pretext";
import {
  nameColumnWidth,
  nameFontSizePx,
  nameLineHeightPx,
} from "./entryGeometry";

// TODO(pocket-wishlist-j4f): these mirror the name span's font-family/weight
// from the stylesheet by hand — drift silently breaks measurement (pretext
// would measure a different face than the browser paints). Same JS↔CSS coupling
// as the entryGeometry clamps; consolidate both onto a single source of truth.
const NAME_FONT_FAMILY = '"Inter Variable", sans-serif';
const NAME_FONT_WEIGHT = "400";

// FontFaceSet.check/.load query for just the variable face that pretext
// measures against — no sans-serif fallback, since a query that includes the
// fallback reports "available" before Inter loads. Callers gate measurement on
// this so prepare() never caches against fallback advances.
// — claude 464e7cab, 2026-05-31
export const NAME_FONT_FACE_QUERY = `${NAME_FONT_WEIGHT} 1em "Inter Variable"`;

// Snap font-size to a 0.25px grid for cache stability across continuous
// viewport changes. With Inter Variable the visual diff at this granularity is
// undetectable, but the prepare-cache hit rate during resize jumps from ~0 to
// ~99% (≤9 unique font-sizes across the 14→16px clamp range vs. one per pixel).
const SNAP_PX = 0.25;
const snapFontSize = (vp: number): number =>
  Math.round(nameFontSizePx(vp) / SNAP_PX) * SNAP_PX;

const cache = new Map<string, PreparedText>();

const getPrepared = (name: string, vp: number): PreparedText => {
  const snapped = snapFontSize(vp);
  const key = `${snapped.toFixed(2)}|${name}`;
  let p = cache.get(key);
  if (!p) {
    p = prepare(
      name,
      `${NAME_FONT_WEIGHT} ${snapped}px ${NAME_FONT_FAMILY}`,
    );
    cache.set(key, p);
  }
  return p;
};

export const nameTextHeight = (name: string, vp: number): number => {
  const { height } = layout(
    getPrepared(name, vp),
    nameColumnWidth(vp),
    nameLineHeightPx(vp),
  );
  return height;
};

export const nameTextLineCount = (name: string, vp: number): number =>
  layout(getPrepared(name, vp), nameColumnWidth(vp), nameLineHeightPx(vp))
    .lineCount;
