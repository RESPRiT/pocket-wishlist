import { layout, prepare, type PreparedText } from "@chenglou/pretext";
import {
  nameColumnWidth,
  nameFontSizePx,
  nameLineHeightPx,
} from "./entryGeometry";

const NAME_FONT_FAMILY = '"Inter Variable", sans-serif';
const NAME_FONT_WEIGHT = "400";

const fontString = (vp: number): string =>
  `${NAME_FONT_WEIGHT} ${nameFontSizePx(vp)}px ${NAME_FONT_FAMILY}`;

const cache = new Map<string, PreparedText>();

const getPrepared = (name: string, vp: number): PreparedText => {
  const key = `${nameFontSizePx(vp).toFixed(3)}|${name}`;
  let p = cache.get(key);
  if (!p) {
    p = prepare(name, fontString(vp));
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

// TEMP: dev-only debug exposure for Phase 2 validation. Remove after pretext
// integration is wired into the production height computation.
if (import.meta.env.DEV) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__nameTextHeight = nameTextHeight;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__nameTextLineCount = nameTextLineCount;
}
