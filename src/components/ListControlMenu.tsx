import IconButton from "./IconButton";
import { useStore } from "@/stores/userStore";

function ListControlMenu() {
  const { currentSort, setSort, currentOrder, setOrder } = useStore();

  // TODO: Definitely some not-DRY shenanigans going on here...
  return (
    <div className="flex justify-center sticky top-2 z-30">
      <div
        className="flex flex-wrap justify-center items-center gap-0 bg-background/95
        min-w-min m-2 p-1 rounded-md"
      >
        <IconButton
          icon={
            currentSort === "date" && currentOrder === true
              ? "arrow-up-short-wide"
              : "arrow-down-wide-short"
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
              ? "arrow-up-short-wide"
              : "arrow-down-wide-short"
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
              ? "arrow-up-short-wide"
              : "arrow-down-wide-short"
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
