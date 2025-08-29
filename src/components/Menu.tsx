import IconButton from "./IconButton";

function Menu() {
  return (
    <div className="flex items-center mt-3 p-2 bg-primary rounded-md">
      <IconButton icon="home" label="all iotms" selected={true} />
    </div>
  );
}

export default Menu;
