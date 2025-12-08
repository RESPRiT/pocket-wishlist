import "@/styles/textures.css";
import { cn } from "@/lib/utils";
import {
  useEntryBackgroundColor,
  type EntryBackgroundColorProps,
} from "@/hooks/useEntryBackgroundColor";
import { useTheme } from "@/contexts/ThemeContext";

type EntryBackgroundProps = Omit<EntryBackgroundColorProps, "theme">;

export function EntryBackground({
  status,
  isStandard,
  standardYear,
  priceRatio,
}: EntryBackgroundProps) {
  const { theme } = useTheme();
  const { bgStyle, textureClass } = useEntryBackgroundColor({
    status,
    isStandard,
    standardYear,
    priceRatio,
    theme,
  });

  // TODO: Somehow use CSS variables to avoid suppressing hydration warnings
  return (
    <>
      <div
        suppressHydrationWarning
        className="absolute -z-20 h-full w-full"
        style={bgStyle}
      />
      <div className={cn("absolute -z-10 h-full w-full", textureClass)} />
    </>
  );
}
