import { EntryItem, HeadingItem } from "./List";
import ListEntry from "./ListEntry";
import ListHeading from "./ListHeading";
import ListSubHeading, { SubHeadingItem } from "./ListSubHeading";

export type VirtualListItem = EntryItem | HeadingItem | SubHeadingItem;

function ListItem({ item }: { item: VirtualListItem }) {
  if (item.itemType === "heading") {
    return (
      <div className="sticky -top-4 z-20 h-min w-full" key={item.key}>
        <ListHeading
          type={item.headingType}
          label={item.label}
          status={item.status}
          info={item.info}
        />
      </div>
    );
  } else if (item.itemType === "subheading") {
    return (
      <div className="w-full" key={item.key}>
        <ListSubHeading type={item.subheadingType} owned={item.owned} />
      </div>
    );
  }

  return (
    <div className="w-full grow" key={item.key}>
      <ListEntry {...item.entry} />
    </div>
  );
}

export default ListItem;
