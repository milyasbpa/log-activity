"use client";
import * as React from "react";
import clsx from "clsx";

export interface InputActivityMobileProps
  extends React.HTMLProps<HTMLInputElement> {
  helperText?: string;
  isError?: boolean;
}

export const InputActivityMobile = ({
  helperText = "",
  isError = false,
  ...otherProps
}: InputActivityMobileProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
        "w-full"
      )}
    >
      <p className={clsx("text-[15px] text-[#212121] font-normal")}>
        {otherProps.label}
      </p>
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.75rem]",
          "w-full",
          "border border-[#D0D5DD]",
          "rounded-[0.25rem]",
          "px-[1rem] py-[0.625rem]",
          "bg-[#F9FAFB]"
        )}
      >
        <input
          className={clsx(
            "text-[13px] text-[#000] font-normal",
            "placeholder:text-[12px] placeholder:text-[#1D2939] placeholder:font-normal",
            "outline-none",
            "border-[0px]",
            "w-full"
          )}
          {...otherProps}
        />
      </div>
      {helperText.length > 0 && (
        <p
          className={clsx(
            "text-[15px] font-normal",
            isError ? "text-[red]" : "text-[#212121]"
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
