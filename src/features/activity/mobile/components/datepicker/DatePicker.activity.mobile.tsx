"use client";
import * as React from "react";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";
import { ChevronLeft, ChevronRight } from "emotion-icons/bootstrap";
import { DayPickerActivityMobile } from "../daypicker/DayPicker.activity.mobile";

const addOneMonth = (date: Date): Date => {
  // Clone the original date to avoid mutating it
  const newDate = new Date(date.getTime());

  // Get the current year and month
  const currentYear = newDate.getFullYear();
  const currentMonth = newDate.getMonth();

  // Set the new month, handling year overflow if necessary
  newDate.setMonth(currentMonth + 1);

  // If the day in the new month is not as expected (e.g., adding one month to January 31 results in March 3),
  // set the date to the last day of the previous month
  if (newDate.getMonth() !== (currentMonth + 1) % 12) {
    newDate.setDate(0);
  }

  return newDate;
};

const subtractOneMonth = (date: Date): Date => {
  // Clone the original date to avoid mutating it
  const newDate = new Date(date.getTime());

  // Get the current month and year
  const currentMonth = newDate.getMonth();
  const currentYear = newDate.getFullYear();

  // Set the new month, handling year overflow if necessary
  newDate.setMonth(currentMonth - 1);

  // If the resulting month is not as expected (e.g., subtracting one month from March 31 results in March 3),
  // set the date to the last day of the previous month
  if (
    newDate.getMonth() === currentMonth - 1 + 12 ||
    newDate.getMonth() === currentMonth + 1 - 12
  ) {
    newDate.setDate(0);
  }

  return newDate;
};

export interface DatePickerActivityMobileProps {
  label?: string;
  placeholder?: string;
  value?: null | { id: string; name: string };
  options?: { id: string; name: string }[];
  onSelect?: (data: { id: string; name: string }) => void;
}

export const DatePickerActivityMobile = ({
  label = "",
  placeholder = "",
  value = null,
  options = [],
  onSelect = (data: { id: string; name: string }) => {},
}: DatePickerActivityMobileProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {
    setIsOpen((_) => false);
  });

  const [date, setDate] = React.useState<Date>(new Date());

  const handleClickDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickNextMonth = () => {
    setDate(addOneMonth(date));
  };

  const handleClickPreviousMonth = () => {
    setDate(subtractOneMonth(date));
  };

  console.log(date, "ini date");
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
        </button>

        {/* body */}

        <div
          className={clsx(
            "absolute top-[60px]",
            "z-10",
            "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[0.75rem]",
            "w-full",
            "border border-[#D0D5DD]",
            "rounded-[0.25rem]",
            "bg-[#F9FAFB]"
          )}
        >
          <DayPickerActivityMobile
            date={date}
            onClickNextMonth={handleClickNextMonth}
            onClickPreviousMonth={handleClickPreviousMonth}
          />
        </div>
        {/* end body */}
      </div>
    </div>
  );
};
