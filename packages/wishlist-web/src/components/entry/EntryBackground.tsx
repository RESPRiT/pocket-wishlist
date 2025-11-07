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
      <div className="-z-20 absolute w-full h-full" style={bgStyle} />
      <div className={cn("-z-10 absolute w-full h-full", textureClass)} />
    </>
  );
}
