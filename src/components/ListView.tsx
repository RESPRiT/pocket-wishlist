import List from "./List";
import ListControlMenu from "./ListControlMenu";

function ListView() {
  return (
    <div className="flex flex-col">
      <ListControlMenu />
      <List />
    </div>
  );
}

export default ListView;
