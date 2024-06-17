"use client";
import * as React from "react";
import clsx from "clsx";

export interface MonthActivitySearchInputActivityDesktopProps
  extends React.HTMLProps<HTMLInputElement> {
  startIcon?: React.ReactNode;
}

export const MonthActivitySearchInputActivityDesktop = ({
  startIcon,
  ...otherProps
}: MonthActivitySearchInputActivityDesktopProps) => {
  return (
    <div
      className={clsx(
        "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.75rem]",
        "w-full",
        "border border-[#D0D5DD]",
        "rounded-[0.25rem]",
        "px-[1rem] py-[0.625rem]"
      )}
    >
      {startIcon && startIcon}
      <input
        className={clsx(
          "text-[13px] text-[#000] font-normal",
          "placeholder:text-[13px] placeholder:text-[#1D2939] placeholder:font-normal",
          "outline-none",
          "border-[0px]",
          "w-full"
        )}
        {...otherProps}
      />
    </div>
  );
};
