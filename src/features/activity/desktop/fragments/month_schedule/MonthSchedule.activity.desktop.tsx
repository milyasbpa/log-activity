import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { ChevronRight } from "emotion-icons/heroicons-solid";

export type DataSet = {
  id: string;
  project: string;
  activity: string;
  priority: string;
  date: Date;
  start: string;
  end: string;
  status: string;
};

const setStatusBackgroundColor = (data: { status: string }) => {
  switch (data.status.toLowerCase()) {
    case "todo":
      return "bg-[#5C5F62]";
    case "in progress":
      return "bg-[#4473DA]";
    case "completed":
      return "bg-[#0BAD73]";
    default:
      return "bg-[#5C5F62]";
  }
};

const datesAreEqual = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const getDayNames = (locale: string = "en-US"): string[] => {
  const dayNames: string[] = [];
  const baseDate = new Date(Date.UTC(2024, 0, 1)); // Using a fixed base date (January 1, 2024)

  for (let i = 0; i < 7; i++) {
    const date = new Date(baseDate);
    date.setUTCDate(baseDate.getUTCDate() + i); // Set the date to the next day
    dayNames.push(date.toLocaleString(locale, { weekday: "short" }));
  }

  return dayNames;
};

type CalendarDate = {
  date: Date;
  isCurrentMonth: boolean;
};

const generateCalendarDates = (year: number, month: number): CalendarDate[] => {
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
};

export const MonthScheduleActivityDesktop = () => {
  const dictionaries = getDictionaries("en");
  const dayNamesEnglish = getDayNames("en-US");
  const [newDate, setNewDate] = React.useState<Date>(new Date());
  const calendarDates = generateCalendarDates(
    newDate.getFullYear(),
    newDate.getMonth() + 1
  );

  const data: DataSet[] = [
    {
      id: "koksoakda",
      project: "OSS",
      activity: "UX testing with Senior developers",
      priority: "high",
      date: new Date(),
      start: "08:00",
      end: "10:00",
      status: "todo",
    },
    {
      id: "koksoakda",
      project: "OSS",
      activity: "UX Testing",
      priority: "high",
      date: new Date("2024-06-20"),
      start: "08:00",
      end: "10:00",
      status: "in progress",
    },
  ];

  const handleClickItem = (data: DataSet) => {
    //
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1.25rem]",
        "w-full"
      )}
    >
      {/* date header */}

      <div
        className={clsx(
          "grid grid-cols-7 place-content-start place-items-start gap-[0.5rem]",
          "w-full",
          "bg-[#EDEDED]",
          "rounded-[0.375rem]",
          "py-[0.5rem] px-[0.625rem]"
        )}
      >
        {dayNamesEnglish.map((dayNameEnglish, dayNameEnglishIndex) => (
          <div
            key={dayNameEnglishIndex}
            className={clsx(
              "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[0.5rem]",
              "w-full"
            )}
          >
            <p className={clsx("text-[#5C5F62] text-[0.875rem] font-medium")}>
              {dayNameEnglish}
            </p>
          </div>
        ))}
      </div>

      {/* body */}
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1.25rem]",
          "w-full"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-7 place-content-start place-items-start",
            "w-full"
          )}
        >
          {calendarDates.map((calendarItem, calendarIndex) => (
            <div
              key={calendarIndex}
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-[1.125rem]",
                "w-full h-[160px]",
                "text-[14px] font-semibold",

                "text-[#000000]",
                "border",
                datesAreEqual(calendarItem.date, newDate)
                  ? "border-[#6F47EB]"
                  : "border-[#00000024]",
                "px-[0.5rem] py-[0.5rem]",
                calendarItem.isCurrentMonth ? "bg-[white]" : "bg-[#F9F9F9]"
              )}
            >
              {/* header */}
              <div
                className={clsx(
                  "grid grid-flow-col items-center content-center justify-between justify-items-start",
                  "w-full"
                )}
              >
                <p
                  className={clsx(
                    "text-[1.125rem] font-medium",
                    "text-[black]"
                  )}
                >
                  {calendarItem.date.toLocaleString("en-US", {
                    day: "numeric",
                  })}
                </p>

                {/* NOTES: if item > 3 */}
                {data.filter((item) =>
                  datesAreEqual(item.date, calendarItem.date)
                ).length > 3 && (
                  <div
                    className={clsx(
                      "grid grid-cols-1 place-content-center place-items-center",
                      "px-[0.375rem] py-[0.125rem]",
                      "rounded-[2.25rem]",
                      "bg-[#EDEDED]",
                      "text-[13px] font-medium",
                      "text-[#5C5F62]"
                    )}
                  >
                    {
                      data.filter((item) =>
                        datesAreEqual(item.date, calendarItem.date)
                      ).length
                    }
                  </div>
                )}
              </div>

              {/* content */}
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-start place-items-start gap-[0.874rem]",
                  "w-full"
                )}
              >
                {data
                  .filter((item) => datesAreEqual(item.date, calendarItem.date))
                  .filter((_, i) => i < 3)
                  .map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className={clsx(
                        "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.625rem]",
                        "w-full"
                      )}
                      disabled={!calendarItem.isCurrentMonth}
                      onClick={() => handleClickItem(item)}
                    >
                      <div
                        className={clsx(
                          "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.5rem]",
                          "w-full"
                        )}
                      >
                        <div
                          className={clsx(
                            "w-[4px] h-[22px]",
                            !calendarItem.isCurrentMonth
                              ? "bg-[#C5C5C5]"
                              : setStatusBackgroundColor({
                                  status: item.status,
                                })
                          )}
                        />
                        <p
                          className={clsx(
                            "text-[13px] font-medium",
                            "text-[#5C5F62]"
                          )}
                        >
                          {item.activity.length > 15
                            ? `${item.activity.slice(0, 15)}...`
                            : item.activity}
                        </p>
                      </div>

                      <ChevronRight
                        className={clsx("w-[1rem] h-[1rem]", "text-[#5C5F62]")}
                      />
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end body */}
    </div>
  );
};
