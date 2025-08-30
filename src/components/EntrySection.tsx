import React from "react";

function EntrySection({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-around items-center gap-5">{children}</div>
  );
}

export default EntrySection;
