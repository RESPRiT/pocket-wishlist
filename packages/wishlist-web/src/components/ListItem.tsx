import { VirtualListItem } from "./List";
import ListEntry from "./ListEntry";
import ListHeading from "./ListHeading";
import ListSubHeading from "./ListSubHeading";

export const getListItemKey = (item: VirtualListItem) => item.key;
// item.itemType !== "entry" ? item.key : item.packagedName;

function ListItem({ item }: { item: VirtualListItem }) {
  if (item.itemType === "heading") {
    return (
      <div
        className="sticky -top-4 z-20 h-min w-full"
        key={getListItemKey(item)}
        data-key={getListItemKey(item)}
      >
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
      <div key={getListItemKey(item)} data-key={getListItemKey(item)}>
        <ListSubHeading type={item.subheadingType} owned={item.owned} />
      </div>
    );
  }

  return (
    <div
      className="grow"
      key={getListItemKey(item)}
      data-key={getListItemKey(item)}
    >
      <ListEntry {...item.entry} />
    </div>
  );
}

export default ListItem;
