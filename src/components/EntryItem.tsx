import React from "react";

function EntryItem({
  children,
  label,
}: React.PropsWithChildren<{ label: string }>) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-normal text-xs text-muted-foreground select-none">
        {label}
      </span>
      {children}
    </div>
  );
}

export default EntryItem;
