import "@/styles/textures.css";
import { cn } from "@/lib/utils";
import {
  useEntryBackgroundColor,
  type EntryBackgroundColorProps,
} from "@/hooks/useEntryBackgroundColor";

type EntryBackgroundProps = EntryBackgroundColorProps;

export function EntryBackground({
  status,
  isStandard,
  standardYear,
  priceRatio,
  theme,
}: EntryBackgroundProps) {
  const { bgStyle, textureClass } = useEntryBackgroundColor({
    status,
    isStandard,
    standardYear,
    priceRatio,
    theme,
  });

  return (
    <>
      <div className="absolute -z-20 h-full w-full" style={bgStyle} />
      <div className={cn("absolute -z-10 h-full w-full", textureClass)} />
    </>
  );
}
