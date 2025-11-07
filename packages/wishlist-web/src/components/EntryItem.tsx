import React from "react";

function EntryItem({
  children,
  className = "",
  label,
}: React.ComponentPropsWithoutRef<"div"> & { label: string }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 ${className}`}>
      <span
        className="clamp-[text,0.6rem,0.7rem,xs,md] font-normal
          text-muted-foreground select-none md:clamp-[text,0.7rem,xs,md,lg]"
      >
        {label}
      </span>
      {children}
    </div>
  );
}

export default EntryItem;
