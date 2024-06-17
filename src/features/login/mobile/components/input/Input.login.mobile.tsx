"use client";
import * as React from "react";
import clsx from "clsx";

export interface InputLoginMobileProps
  extends React.HTMLProps<HTMLInputElement> {
  helperText?: string;
  isError?: boolean;
  startIcon?: React.ReactNode;
}

export const InputLoginMobile = ({
  helperText = "",
  isError = false,
  startIcon = "",
  ...otherProps
}: InputLoginMobileProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
        "w-full"
      )}
    >
      {(otherProps?.label ?? "").length > 0 && (
        <p className={clsx("text-[15px] text-[#212121] font-normal")}>
          {otherProps.label}
        </p>
      )}

      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.75rem]",
          "w-full",
          "rounded-[1rem]",
          "px-[1rem] py-[1rem]",
          "bg-[white]"
        )}
        style={{
          boxShadow: "0px 1px 8px 0px #00000014",
        }}
      >
        {startIcon && startIcon}
        <input
          className={clsx(
            "text-[1rem] text-[#1C1243] font-normal",
            "placeholder:text-[1rem] placeholder:text-[#1D2939] placeholder:font-normal",
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
