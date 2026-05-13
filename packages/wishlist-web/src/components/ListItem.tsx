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

export default ListItem;
