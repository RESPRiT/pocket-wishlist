import React from "react";

function EntrySection({
  children,
  className = "gap-5",
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}

export default EntrySection;
