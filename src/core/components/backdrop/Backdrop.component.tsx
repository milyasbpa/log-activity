import * as React from "react";
import clsx from "clsx";

export const Backdrop = () => {
  return (
    <div
      className={clsx(
        "fixed",
        "top-0 left-0 right-0 bottom-0",
        "z-[100]",
        "bg-[#0000004D]"
      )}
    />
  );
};
