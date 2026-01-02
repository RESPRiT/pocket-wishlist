import { RefObject } from "react";
import { VirtualListItem } from "./ListItem";
import ListItem from "./ListItem";

function MeasurementContainer({
  virtualItems,
  containerRef,
}: {
  virtualItems: VirtualListItem[];
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={containerRef}
      className="invisible absolute top-0 left-0 -z-10 flex w-full flex-wrap
        items-stretch gap-2"
    >
      {virtualItems.map((v) => (
        <ListItem item={v} key={v.key} />
      ))}
    </div>
  );
}

export default MeasurementContainer;
