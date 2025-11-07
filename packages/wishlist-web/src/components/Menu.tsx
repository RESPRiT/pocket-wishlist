import IconButton from "./IconButton";

function Menu() {
  return (
    <div
      className="mt-3 flex shrink-0 items-center rounded-md bg-primary px-4
        py-2"
    >
      <IconButton icon="home" label="all iotms" selected={true} />
    </div>
  );
}

export default Menu;
