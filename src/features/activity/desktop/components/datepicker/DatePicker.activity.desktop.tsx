"use client";
import * as React from "react";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";
import { MonthPickerActivityDesktop } from "../monthpicker";
import { YearPickerActivityDesktop } from "../yearpicker";
import { DayPickerActivityDesktop } from "../daypicker";

export interface DatePickerActivityDesktopProps {
  label?: string;
  value?: Date;
  disabled?: boolean;
  onSelect?: (data: Date) => void;
}

export const DatePickerActivityDesktop = ({
  label = "",
  value = new Date(),
  disabled = false,
  onSelect = (data: Date) => {},
}: DatePickerActivityDesktopProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [date, setDate] = React.useState<Date>(value);

  const [isDayShow, setIsDayShow] = React.useState<boolean>(false);
  const [isMonthShow, setIsMonthShow] = React.useState<boolean>(false);
  const [isYearShow, setIsYearShow] = React.useState<boolean>(false);

  useOnClickOutside(ref, () => {
    setIsOpen((_) => false);
    setIsDayShow(false);
    setIsMonthShow(false);
    setIsYearShow(false);
  });

  const handleClickDropdown = () => {
    setIsOpen((prev) => !prev);
    if (isOpen === true) {
      setIsDayShow(false);
      setIsMonthShow(false);
      setIsYearShow(false);
    } else {
      setIsDayShow(true);
    }
  };

  const handleClickMonth = () => {
    setIsDayShow(false);
    setIsMonthShow(true);
  };

  const handleSelectDate = (data: Date) => {
    setDate(data);
    setIsDayShow(false);
    setIsMonthShow(true);
  };

  const handleClickYear = () => {
    setIsMonthShow(false);
    setIsYearShow(true);
  };

  const handleSelectMonth = (data: Date) => {
    console.log(data, "ini data");
    const newDate = new Date(
      `${date.getFullYear()}-${data.getMonth() + 1}-${date.getDate()}`
    );
    setDate(newDate);
    setIsMonthShow(false);
    setIsYearShow(true);
  };

  const handleSelectYear = (data: Date) => {
    const newDate = new Date(
      `${data.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setDate(newDate);
    setIsYearShow(false);
    setIsOpen(false);
    onSelect(newDate);
  };

  const formattedValue = new Date(value).toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

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
            "text-[12px] text-[#1D2939] font-normal"
          )}
          disabled={disabled}
          onClick={handleClickDropdown}
        >
          {formattedValue}
        </button>

        {/* body */}
        {isOpen && (
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
            {isDayShow && (
              <DayPickerActivityDesktop
                date={date}
                onClickMonth={handleClickMonth}
                onClickDate={handleSelectDate}
              />
            )}

            {isMonthShow && (
              <MonthPickerActivityDesktop
                date={date}
                onClickYear={handleClickYear}
                onClickMonth={handleSelectMonth}
              />
            )}

            {isYearShow && (
              <YearPickerActivityDesktop
                date={date}
                onClickYear={handleSelectYear}
              />
            )}
          </div>
        )}

        {/* end body */}
      </div>
    </div>
  );
};
