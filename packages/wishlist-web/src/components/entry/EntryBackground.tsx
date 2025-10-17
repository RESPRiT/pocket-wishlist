import { useMemo } from "react";
import { adjustLightness, logBracketScale } from "@/lib/colors";
import "@/styles/textures.css";
import { cn } from "@/lib/utils";

type EntryBackgroundProps = {
  status: "NONE" | "PACKAGED" | "OPENED";
  isStandard: boolean;
  standardYear: number;
  priceRatio: number | null;
  theme: "light" | "dark";
};

// Constants for standard year color mixing
const STANDARD_YEAR_CONFIG = {
  maxYears: 3,
  lightThemeOffset: 30,
  darkThemeOffset: 0,
  yearProgressMultiplier: 65,
} as const;

const PRICE_DARKNESS_RANGE = {
  light: [0, -30] as [number, number],
  dark: [0, -60] as [number, number],
} as const;

/**
 * Computes the base color for the entry background.
 * Standard items get a gradient based on year, others get primary color.
 */
function getBaseColor(
  isStandard: boolean,
  standardYear: number,
  theme: "light" | "dark"
): string {
  if (!isStandard) return "var(--primary)";

  const themeVar =
    theme === "light" ? "var(--secondary-light)" : "var(--secondary-dark)";

  const themeOffset =
    theme === "light"
      ? STANDARD_YEAR_CONFIG.lightThemeOffset
      : STANDARD_YEAR_CONFIG.darkThemeOffset;

  const yearProgress = 1 - standardYear / STANDARD_YEAR_CONFIG.maxYears;
  const mixPercent =
    themeOffset + STANDARD_YEAR_CONFIG.yearProgressMultiplier * yearProgress;

  return `color-mix(in oklch, ${themeVar} ${mixPercent}%, var(--primary))`;
}

/**
 * Determines the end color for lightness adjustment.
 * Standard items darken/lighten towards black/white, others towards destructive.
 */
function getEndColor(isStandard: boolean, theme: "light" | "dark"): string {
  if (!isStandard) return "var(--destructive)";
  return theme === "light" ? "black" : "white";
}

/**
 * Calculates how much to darken based on price ratio.
 * Uses logarithmic scale for expensive items.
 */
function getPriceDarkness(
  priceRatio: number | null,
  theme: "light" | "dark"
): number {
  const range =
    theme === "light"
      ? PRICE_DARKNESS_RANGE.light
      : PRICE_DARKNESS_RANGE.dark;
  return logBracketScale(priceRatio ?? -1, range);
}

/**
 * Returns the contrast color for the theme.
 */
function getContrastColor(theme: "light" | "dark"): string {
  return theme === "light" ? "white" : "black";
}

export function EntryBackground({
  status,
  isStandard,
  standardYear,
  priceRatio,
  theme,
}: EntryBackgroundProps) {
  const bgStyle = useMemo(() => {
    if (status === "OPENED") {
      return { backgroundColor: "var(--confirm)" };
    }

    if (status === "PACKAGED") {
      return {
        backgroundColor: "color-mix(in hsl, var(--accent) 50%, white 0%)",
      };
    }

    // Default case - compute dynamic background with helper functions
    return adjustLightness(
      getBaseColor(isStandard, standardYear, theme),
      getEndColor(isStandard, theme),
      getPriceDarkness(priceRatio, theme),
      getContrastColor(theme)
    );
  }, [status, isStandard, standardYear, priceRatio, theme]);

  const textureClass = useMemo(() => {
    const classes: string[] = [];

    if (status === "PACKAGED") {
      classes.push("houndstooth");
    } else if (status === "OPENED") {
      classes.push("banknote");
    } else if (isStandard) {
      classes.push("dotted");
    }

    return classes.join(" ");
  }, [status, isStandard]);

  return (
    <>
      <div className="-z-20 absolute w-full h-full" style={bgStyle} />
      <div className={cn("-z-10 absolute w-full h-full", textureClass)} />
    </>
  );
}
