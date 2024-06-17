import * as React from "react";
import clsx from "clsx";

export interface SummaryItemActivityMobileProps {
  name?: string;
  value?: string;
}

export const SummaryItemActivityMobile = ({
  name = "",
  value = "",
}: SummaryItemActivityMobileProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.125rem]",
        "w-full",
        "rounded-[0.625rem]",
        "border border-[rgba(0,0,0,0.18)]",
        "px-[0.5rem] py-[0.5rem]"
      )}
    >
      <p className={clsx("text-[#5C5F62] text-[0.625rem] font-medium")}>
        {name}
      </p>
      <p
        className={clsx(
          "text-[#050708] text-[0.875rem] font-medium",
          !value.length ? "opacity-0" : "opacity-100"
        )}
      >
        {!value.length ? "placeholder" : value}
      </p>
    </div>
  );
};
