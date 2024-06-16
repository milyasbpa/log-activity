"use client";
import * as React from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "emotion-icons/bootstrap";

function monthsAreEqual(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth()
  );
}

type MonthInfo = {
  month: Date; // 0 for January, 1 for February, ..., 11 for December
};

function generateMonthList(year: number): MonthInfo[] {
  const months: MonthInfo[] = [];

  // Loop through each month (0 for January, 1 for February, ..., 11 for December)
  for (let month = 0; month < 12; month++) {
    // months.push({ month, year });

    months.push({
      month: new Date(
        `${year}-${month + 1 < 10 ? `0${month + 1}` : `${month + 1}`}-01`
      ),
    });
  }

  return months;
}

export interface MonthPickerActivityMobileProps {
  date?: Date;
  onClickYear?: () => void;
  onClickPrevious?: () => void;
  onClickNext?: () => void;
  onClickMonth?: (date: Date) => void;
}

export const MonthPickerActivityMobile = ({
  date = new Date(),
  onClickYear = () => {},
  onClickPrevious = () => {},
  onClickNext = () => {},
  onClickMonth = (date: Date) => {},
}: MonthPickerActivityMobileProps) => {
  const yearName = date.toLocaleString("en-US", {
    year: "numeric",
  });

  const calendarMonths = generateMonthList(date.getFullYear());

  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[0.75rem]",
        "w-full",
        "px-[1rem] py-[1rem]"
      )}
    >
      {/* header */}
      <div
        className={clsx(
          "grid grid-cols-[auto_1fr_auto] items-center content-center justify-start justify-items-start",
          "w-full"
        )}
      >
        <button onClick={onClickPrevious}>
          <ChevronLeft
            className={clsx("w-[0.75rem] h-[0.75rem]", "text-[#5C5F62]")}
          />
        </button>

        <button
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center",
            "w-full",
            "text-[15px] text-[#000000] font-medium"
          )}
          onClick={onClickYear}
        >
          {yearName}
        </button>

        <button onClick={onClickNext}>
          <ChevronRight
            className={clsx("w-[0.75rem] h-[0.75rem]", "text-[#5C5F62]")}
          />
        </button>
      </div>
      {/* end header */}

      {/* body */}
      <div
        className={clsx(
          "grid grid-cols-3 place-content-start place-items-start gap-y-[0.5rem]",
          "w-full"
        )}
      >
        {calendarMonths.map((calendarItem, calendarIndex) => (
          <button
            key={calendarIndex}
            className={clsx(
              "grid grid-cols-1 place-content-center place-items-center",
              "w-full",
              "text-[14px] font-semibold",
              "rounded-[0.25rem]",
              monthsAreEqual(calendarItem.month, date)
                ? "bg-[#EEE9FD]"
                : "bg-transparent",
              monthsAreEqual(calendarItem.month, date)
                ? "text-[#6F47EB]"
                : "text-[#000000]"
            )}
            onClick={() => onClickMonth(calendarItem.month)}
          >
            {calendarItem.month.toLocaleString("en-US", {
              month: "short",
            })}
          </button>
        ))}
      </div>
    </div>
  );
};
