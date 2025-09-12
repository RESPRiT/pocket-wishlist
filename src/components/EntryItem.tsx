import React from "react";

function EntryItem({
  children,
  className = "",
  label,
}: React.ComponentPropsWithoutRef<"div"> & { label: string }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 ${className}`}>
      <span className="font-normal text-xs text-muted-foreground select-none">
        {label}
      </span>
      {children}
    </div>
  );
}

export default EntryItem;
