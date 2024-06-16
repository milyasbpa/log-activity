"use client";
import * as React from "react";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";
import { MonthPickerActivityMobile } from "../monthpicker";
import { YearPickerActivityMobile } from "../yearpicker";
import { DayPickerActivityMobile } from "../daypicker";

const subtractYearNumber = (date: Date, number: number): Date => {
  const year = new Date(date).getFullYear();
  const newYear = year - number;
  const month = new Date(date).getMonth() + 1;
  const day = new Date().getDate();
  const newDate = new Date(`${newYear}-${month}-${day}`);
  return newDate;
};

const addYearNumber = (date: Date, number: number): Date => {
  const year = new Date(date).getFullYear();
  const newYear = year + number;
  const month = new Date(date).getMonth() + 1;
  const day = new Date().getDate();
  const newDate = new Date(`${newYear}-${month}-${day}`);
  return newDate;
};

const addMonthNumber = (date: Date, number: number): Date => {
  const year = new Date(date).getFullYear();

  const month = new Date(date).getMonth() + 1;
  let newMonth = month + number;
  let newYear = year;
  if (newMonth > 12) {
    newMonth = newMonth - 12;
    newYear = year + 1;
  }

  const day = new Date().getDate();
  const newDate = new Date(`${newYear}-${newMonth}-${day}`);
  return newDate;
};

const subtractMonthNumber = (date: Date, number: number): Date => {
  const year = new Date(date).getFullYear();

  const month = new Date(date).getMonth() + 1;
  let newMonth = month - number;
  let newYear = year;
  if (newMonth < 1) {
    newMonth = 12 - Math.abs(1 - newMonth) + 1;
    newYear = year - 1;
  }

  const day = new Date().getDate();
  const newDate = new Date(`${newYear}-${newMonth}-${day}`);
  console.log(month, newYear, newMonth, newDate, "ini new date");
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
    setDate(addMonthNumber(date, 1));
  };

  const handleClickPreviousMonth = () => {
    setDate(subtractMonthNumber(date, 1));
  };

  const handleClickNextYear = () => {
    setDate(addYearNumber(date, 1));
  };

  const handleClickPreviousYear = () => {
    setDate(subtractYearNumber(date, 1));
  };

  const handleClickNextPeriod = () => {
    setDate(addYearNumber(date, 12));
  };

  const handleClickPreviousPeriod = () => {
    setDate(subtractYearNumber(date, 12));
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
            onClickNext={handleClickNextMonth}
            onClickPrevious={handleClickPreviousMonth}
          />
          {/* <MonthPickerActivityMobile
            date={date}
            onClickNext={handleClickNextYear}
            onClickPrevious={handleClickPreviousYear}
          /> */}
          {/* <YearPickerActivityMobile
            date={date}
            onClickNext={handleClickNextPeriod}
            onClickPrevious={handleClickPreviousPeriod}
          /> */}
        </div>
        {/* end body */}
      </div>
    </div>
  );
};
