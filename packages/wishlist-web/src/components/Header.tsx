function Header() {
  return (
    <header className="flex justify-between mt-10 shrink-0">
      <div className="flex items-end gap-2">
        <span className="font-medium text-4xl">{"pocket wishlist"}</span>
        <span className="text-sm">{``}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xs text-accent">{`prices updated: yesterday`}</span>
        <span className="text-md text-foreground">
          {"tamedtheturtle's wishlist "}
          <span className="text-sm font-playwrite">{"as of "}</span>
          <b>{"2 days ago"}</b>
        </span>
      </div>
    </header>
  );
}

export default Header;
