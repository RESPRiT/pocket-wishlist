import ListEntry from "./ListEntry";

import { iotms } from "@/data";
import type { IOTM } from "@/data";

function getUnboxedName(item: IOTM) {
  if (item.opened_names && !Array.isArray(item.opened_names)) {
    return item.opened_names;
  } else if (item.familiar_names && !Array.isArray(item.familiar_names)) {
    return item.familiar_names;
  } else {
    return item.packaged_name;
  }
}

function List() {
  /*
  const entry = {
    img: "src/assets/meat.gif",
    name: "prismatic beret",
    year: 2025,
    speed: 2,
    farm: 4,
    mall: 89,
  };
  const data = Array(100).fill(entry);
  */
  const data = iotms
    .filter((item) => item.type !== "vip")
    .map((item) => ({
      img: item.img,
      name: getUnboxedName(item),
      year: item.year,
      speed: item.speed_tier,
      farm: item.aftercore_tier,
      mall: 89,
    }));

  return (
    <div className="flex flex-col gap-2 w-full pb-12">
      {data.map((entry) => (
        <ListEntry {...entry} />
      ))}
    </div>
  );
}

export default List;
