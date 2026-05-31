import { RefObject } from "react";
import { VirtualListItem } from "./ListItem";
import ListItem from "./ListItem";
import { EntryPriceSection } from "./entry/EntryPriceSection";

// /// CLAUDE 3d254f35 ///
// Discriminated render target for the offscreen measurement container.
// `item` reuses the full ListItem render path (entry rows, headings);
// `extinctPrice` renders just the price section in its infinite-style
// font so useEntryHeights can read that one element's height delta
// without paying for a second full entry render.
// /// --------------- ///
export type MeasurementProbe =
  | { type: "item"; key: string; item: VirtualListItem }
  | { type: "extinctPrice"; key: string };

const EXTINCT_PRICE = { lowestMall: -1 };

function MeasurementContainer({
  probes,
  containerRef,
}: {
  probes: MeasurementProbe[];
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={containerRef}
      className="invisible absolute top-0 left-0 -z-10 flex w-full flex-col
        items-stretch gap-2"
    >
      {probes.map((p) =>
        p.type === "item" ? (
          <ListItem item={p.item} key={p.key} />
        ) : (
          <EntryPriceSection
            key={p.key}
            price={EXTINCT_PRICE}
            mrAs={1}
            packagedName=""
          />
        ),
      )}
    </div>
  );
}

export default MeasurementContainer;
