import React from "react";

function EntrySection({
  children,
  ref,
  className = "gap-5",
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div ref={ref} className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}

export default EntrySection;
