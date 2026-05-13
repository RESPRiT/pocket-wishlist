import { memo } from "react";
import { EntryItem, HeadingItem } from "./List";
import ListEntry from "./ListEntry";
import ListHeading from "./ListHeading";
import ListSubHeading, { SubHeadingItem } from "./ListSubHeading";

export type VirtualListItem = EntryItem | HeadingItem | SubHeadingItem;

function ListItem({ item }: { item: VirtualListItem }) {
  if (item.itemType === "heading") {
    return (
      <ListHeading
        type={item.headingType}
        label={item.label}
        status={item.status}
        info={item.info}
      />
    );
  } else if (item.itemType === "subheading") {
    return <ListSubHeading type={item.subheadingType} owned={item.owned} />;
  }

  return <ListEntry {...item.entry} />;
}

// memo so mid-viewport items skip re-render during scroll: List.tsx is
// opted out of the React Compiler ("use no memo" — tanstack-virtual
// incompatibility), so its <ListItem item={…} /> elements are created
// fresh on every render. The `item` prop here points back into the
// virtualItems array (a useMemo result), so its reference is stable
// across scroll-only renders and memo's default shallow compare skips
// the re-render. Step 3 of pocket-wishlist-on5.
export default memo(ListItem);
