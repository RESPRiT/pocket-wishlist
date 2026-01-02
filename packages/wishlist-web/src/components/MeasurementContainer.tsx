import { RefObject } from "react";
import { VirtualListItem } from "./List";
import ListItem, { getListItemKey } from "./ListItem";

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
        <ListItem item={v} key={getListItemKey(v)} />
      ))}
    </div>
  );
}

export default MeasurementContainer;
