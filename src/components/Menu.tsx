import IconButton from "./IconButton";

function Menu() {
  return (
    <div className="flex items-center mt-3 px-4 py-2 bg-primary rounded-md shrink-0">
      <IconButton icon="home" label="all iotms" selected={true} />
    </div>
  );
}

export default Menu;
