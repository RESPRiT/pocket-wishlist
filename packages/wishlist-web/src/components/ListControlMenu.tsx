import IconButton from "./IconButton";
import { useHydratedSettingsStore } from "@/stores/useSettingsStore";

function ListControlMenu() {
  const { currentSort, setSort, currentOrder, setOrder } =
    useHydratedSettingsStore();

  // TODO: Definitely some not-DRY shenanigans going on here...
  return (
    <div className="z-30 flex justify-center">
      <div
        className="m-2 flex min-w-min flex-wrap items-center justify-center
          gap-0 rounded-md bg-background/95 p-1"
      >
        <IconButton
          icon={
            currentSort === "date" && currentOrder === true
              ? "arrow-up-wide-short"
              : "arrow-down-short-wide"
          }
          label="sort by date"
          color="text-primary"
          selected={currentSort === "date"}
          onClick={() => {
            if (currentSort === "date") {
              setOrder(!currentOrder);
            } else {
              setSort("date");
              setOrder(false);
            }
          }}
        />
        <IconButton
          icon={
            currentSort === "tier" && currentOrder === true
              ? "arrow-up-wide-short"
              : "arrow-down-short-wide"
          }
          label="sort by tier"
          color="text-primary"
          selected={currentSort === "tier"}
          onClick={() => {
            if (currentSort === "tier") {
              setOrder(!currentOrder);
            } else {
              setSort("tier");
              setOrder(false);
            }
          }}
        />
        <IconButton
          icon={
            currentSort === "price" && currentOrder === true
              ? "arrow-up-wide-short"
              : "arrow-down-short-wide"
          }
          label="sort by price"
          color="text-primary"
          selected={currentSort === "price"}
          onClick={() => {
            if (currentSort === "price") {
              setOrder(!currentOrder);
            } else {
              setSort("price");
              setOrder(false);
            }
          }}
        />
      </div>
    </div>
  );
}

export default ListControlMenu;
