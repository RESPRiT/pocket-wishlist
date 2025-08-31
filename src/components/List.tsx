import ListEntry from "./ListEntry";

function List() {
  const entry = {
    img: "src/assets/meat.gif",
    name: "prismatic beret",
    year: 2025,
    speed: 2,
    farm: 4,
    mall: 89,
  };
  const data = Array(100).fill(entry);

  return (
    <div className="flex flex-col gap-2 w-full pb-12">
      {data.map((entry) => (
        <ListEntry {...entry} />
      ))}
    </div>
  );
}

export default List;
