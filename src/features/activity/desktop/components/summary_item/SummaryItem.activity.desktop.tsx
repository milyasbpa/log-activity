import * as React from "react";
import clsx from "clsx";

export interface SummaryItemActivityDesktopProps {
  name?: string;
  value?: string;
  src?: React.ReactNode;
}

export const SummaryItemActivityDesktop = ({
  name = "",
  value = "",
  src = "",
}: SummaryItemActivityDesktopProps) => {
  return (
    <div
      className={clsx(
        "grid grid-flow-col place-content-start place-items-start gap-[0.875rem]",
        "w-full",
        "rounded-[0.625rem]",
        "border border-[rgba(0,0,0,0.18)]",
        "px-[0.5rem] py-[0.5rem]"
      )}
    >
      <div
        className={clsx(
          "w-[2.5rem] h-[2.5rem]",
          "bg-[#D9D9D9]",
          "rounded-[0.5rem]"
        )}
      />

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[0.125rem]",
          "w-full"
        )}
      >
        <p className={clsx("text-[#5C5F62] text-[13px] font-medium")}>
          {name}
        </p>
        <p className={clsx("text-[#050708] text-[17px] font-medium")}>
          {value}
        </p>
      </div>
    </div>
  );
};
