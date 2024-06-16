"use client";
import * as React from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "emotion-icons/bootstrap";

type CalendarDate = {
  date: Date;
  isCurrentMonth: boolean;
};

function datesAreEqual(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function generateCalendarDates(year: number, month: number): CalendarDate[] {
  const dates: CalendarDate[] = [];

  // Create a date object for the first day of the current month
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);

  // Calculate the day of the week of the first day (0-6, Sunday-Saturday)
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Calculate the total days in the current month
  const totalDaysInMonth = lastDayOfMonth.getDate();

  // Calculate the previous month's last day
  const lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate();

  // Fill the dates for the previous month
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    dates.push({
      date: new Date(year, month - 2, lastDayOfPrevMonth - i),
      isCurrentMonth: false,
    });
  }

  // Fill the dates for the current month
  for (let day = 1; day <= totalDaysInMonth; day++) {
    dates.push({
      date: new Date(year, month - 1, day),
      isCurrentMonth: true,
    });
  }

  // Fill the dates for the next month
  const daysInCalendar = dates.length;
  const totalDaysToFill = 42; // Assuming a 6x7 grid (6 weeks)
  for (let i = 1; daysInCalendar + i <= totalDaysToFill; i++) {
    dates.push({
      date: new Date(year, month, i),
      isCurrentMonth: false,
    });
  }

  return dates;
}

export interface DayPickerActivityMobileProps {
  date?: Date;
  onClickMonth?: () => void;
  onClickPrevious?: () => void;
  onClickNext?: () => void;
  onClickDate?: (date: Date) => void;
}

export const DayPickerActivityMobile = ({
  date = new Date(),
  onClickMonth = () => {},
  onClickPrevious = () => {},
  onClickNext = () => {},
  onClickDate = (date: Date) => {},
}: DayPickerActivityMobileProps) => {
  const monthName = date.toLocaleString("en-US", {
    month: "long",
  });

  const calendarDates = generateCalendarDates(
    date.getFullYear(),
    date.getMonth() + 1
  );

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
          onClick={onClickMonth}
        >
          {monthName}
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
          "grid grid-cols-7 place-content-start place-items-start gap-y-[0.5rem]",
          "w-full"
        )}
      >
        {calendarDates.map((calendarItem, calendarIndex) => (
          <button
            key={calendarIndex}
            className={clsx(
              "grid grid-cols-1 place-content-center place-items-center",
              "w-full",
              "text-[14px] font-semibold",
              "rounded-[0.25rem]",
              calendarItem.isCurrentMonth &&
                datesAreEqual(calendarItem.date, date)
                ? "bg-[#EEE9FD]"
                : "bg-transparent",
              calendarItem.isCurrentMonth &&
                datesAreEqual(calendarItem.date, date)
                ? "text-[#6F47EB]"
                : calendarItem.isCurrentMonth &&
                  !datesAreEqual(calendarItem.date, date)
                ? "text-[#000000]"
                : "text-[#5C5F62]"
            )}
            disabled={!calendarItem.isCurrentMonth}
            onClick={() => onClickDate(calendarItem.date)}
          >
            {calendarItem.date.toLocaleString("en-US", {
              day: "numeric",
            })}
          </button>
        ))}
      </div>
    </div>
  );
};
