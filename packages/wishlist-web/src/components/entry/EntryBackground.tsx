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

    // Default case - complex calculation
    return adjustLightness(
      isStandard
        ? `color-mix(in oklch, ${
            theme === "light"
              ? "var(--secondary-light)"
              : "var(--secondary-dark)"
          } ${
            (theme === "light" ? 30 : 0) + 65 * (1 - standardYear / 3)
          }%, var(--primary))`
        : "var(--primary)",
      isStandard
        ? theme === "light"
          ? "black"
          : "white"
        : "var(--destructive)",
      theme === "light"
        ? logBracketScale(priceRatio ?? -1)
        : logBracketScale(priceRatio ?? -1, [0, -60]),
      theme === "light" ? "white" : "black"
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
