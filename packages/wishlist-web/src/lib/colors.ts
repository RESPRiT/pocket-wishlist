import type { CSSProperties } from "react";

export const PRICE_BRACKETS = [
  [1, 2],
  [2, 3],
  [3, 5],
  [5, 10],
  [10, 50],
  [50, 12_500],
] as const;

export function interpolateColorScale(percent: number): CSSProperties {
  return {
    backgroundColor: `color-mix(in srgb, var(--destructive) ${
      100 * percent
    }%, var(--secondary))`,
  };
}

export function adjustLightness(
  startColor: string,
  endColor = "black",
  percent: number,
  contrastColor = "white",
): CSSProperties {
  const adjustedColor = `color-mix(in oklch, ${startColor} ${
    100 - Math.abs(percent)
  }%, ${percent < 0 ? endColor : contrastColor})`;

  return {
    backgroundColor: adjustedColor,
  };
}

export function logBracketScale(
  x: number,
  range: [number, number] = [0, -30],
  brackets = PRICE_BRACKETS,
): number {
  const bracketNum = brackets.findIndex(
    (bracket) =>
      Math.ceil(x - 0.8) >= bracket[0] && Math.ceil(x - 0.8) < bracket[1],
  );

  if (bracketNum === -1) return range[1];

  const from = brackets[bracketNum];
  const to: [number, number] = [
    range[0] + ((range[1] - range[0]) * bracketNum) / brackets.length,
    range[0] + ((range[1] - range[0]) * (bracketNum + 0.5)) / brackets.length,
  ];

  return (
    to[0] +
    ((Math.log(x) - Math.log(from[0])) * (to[1] - to[0])) /
      (Math.log(from[1]) - Math.log(from[0]))
  );
}
