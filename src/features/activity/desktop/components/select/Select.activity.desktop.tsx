"use client";
import * as React from "react";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";

export interface SelectActivityDesktopProps {
  label?: string;
  placeholder?: string;
  value?: null | { id: string; name: string };
  options?: { id: string; name: string }[];
  isShowIndicator?: boolean;
  onSelect?: (data: { id: string; name: string }) => void;
}

export const SelectActivityDesktop = ({
  label = "",
  placeholder = "",
  value = null,
  options = [],
  isShowIndicator = true,
  onSelect = (data: { id: string; name: string }) => {},
}: SelectActivityDesktopProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {
    setIsOpen((_) => false);
  });

  const handleClickDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
        "w-full"
      )}
    >
      {label.length > 0 && (
        <p className={clsx("text-[15px] text-[#212121] font-normal")}>
          {label}
        </p>
      )}

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
          "w-full",
          "relative"
        )}
        ref={ref}
      >
        <button
          className={clsx(
            "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.75rem]",
            "w-full",
            "border border-[#D0D5DD]",
            "rounded-[0.25rem]",
            "px-[1rem] py-[0.625rem]",
            "bg-[#F9FAFB]",
            value !== null && value.name !== undefined
              ? "text-[13px] text-[#000] font-normal"
              : "text-[12px] text-[#1D2939] font-normal"
          )}
          onClick={handleClickDropdown}
        >
          {value === null ? placeholder : value.name}

          {isShowIndicator && (
            <div className={clsx(isOpen ? "rotate-180" : "rotate-0")}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_203_17438)">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#667085"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_17438">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
        </button>

        {/* body */}
        {isOpen && options.length > 0 && (
          <div
            className={clsx(
              "absolute top-[60px]",
              "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[0.75rem]",
              "w-full",
              "border border-[#D0D5DD]",
              "rounded-[0.25rem]",
              "px-[1rem] py-[0.625rem]",
              "bg-[#F9FAFB]",
              "h-[120px]",
              "overflow-auto"
            )}
          >
            {options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className={clsx("text-[13px] text-[#000] font-normal")}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
