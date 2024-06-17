import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { Plus } from "emotion-icons/heroicons-solid";
import { useFormContext } from "react-hook-form";
import { ActivityDesktopForm } from "../../react_hook_form/type";
import { ChevronLeft, ChevronRight } from "emotion-icons/heroicons-outline";

const setStatusBackgroundColor = (data: { status: string }) => {
  switch (data.status.toLowerCase()) {
    case "todo":
      return "bg-[#EDEDED]";
    case "in progress":
      return "bg-[#DBE6FE]";
    case "completed":
      return "bg-[#E1F5E8]";
    default:
      return "bg-[#EDEDED]";
  }
};

const getDatesInWeek = (inputDate: Date): Date[] => {
  const datesInWeek: Date[] = [];

  // Clone the input date to avoid mutating the original date
  const date = new Date(inputDate);

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = date.getDay();

  // Calculate the start of the week (Sunday)
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - dayOfWeek);

  // Generate all dates in the week
  for (let i = 0; i < 7; i++) {
    const weekDate = new Date(startOfWeek);
    weekDate.setDate(startOfWeek.getDate() + i);

    datesInWeek.push(weekDate);
  }

  return datesInWeek;
};

export const WeekScheduleActivityDesktop = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<ActivityDesktopForm>();
  const datesInWeek = getDatesInWeek(new Date()).filter(
    (item) => item.getDay() !== 0 && item.getDay() !== 6
  );

  const data = [
    {
      time: "08:00",
      items: [
        {
          activity: "UX testing with Senior developers",
          range: "08.00-09.00",
          duration: "(1 hour)",
          avatar: "",
          status: "todo",
        },
      ],
    },
    {
      time: "09:00",
      items: [],
    },
    {
      time: "10:00",
      items: [
        {
          activity: "UX testing with Senior developers",
          range: "09.00-10.00",
          duration: "(1 hour)",
          avatar: "",
          status: "in progress",
        },
      ],
    },
  ];

  const handleClickPreviousWeek = () => {
    //
  };

  const handleClickNextWeek = () => {
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
          "grid grid-cols-[auto_1fr_auto] justify-between justify-items-start items-center content-center gap-[3.5rem]",
          "w-full",
          "bg-[#EDEDED]",
          "rounded-[0.375rem]",
          "py-[0.5rem] px-[0.625rem]"
        )}
      >
        <button onClick={handleClickPreviousWeek}>
          <ChevronLeft
            className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#5C5F62]")}
          />
        </button>

        <div
          className={clsx(
            "grid grid-cols-5 place-content-start place-items-start gap-[0.5rem]",
            "w-full"
          )}
        >
          {datesInWeek.map((dateInWeek, dateInWeekIndex) => (
            <div
              key={dateInWeekIndex}
              className={clsx(
                "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]",
                "w-full"
              )}
            >
              <p className={clsx("text-[#000000] text-[1rem] font-medium")}>
                {dateInWeek.toLocaleString("en-US", {
                  day: "numeric",
                })}
              </p>
              <p className={clsx("text-[#5C5F62] text-[0.875rem] font-medium")}>
                {dateInWeek.toLocaleString("en-US", {
                  month: "short",
                })}
              </p>
            </div>
          ))}
        </div>

        <button onClick={handleClickNextWeek}>
          <ChevronRight
            className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#5C5F62]")}
          />
        </button>
      </div>

      {/* header */}
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-between justify-items-start",
          "w-full"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
            "w-full"
          )}
        >
          <p className={clsx("text-[#000000] text-[1rem] font-medium")}>
            {dictionaries.schedule.day.title.replace(
              "{{date}}",
              new Date().toLocaleString("en-US", {
                dateStyle: "long",
              })
            )}
          </p>
          <p className={clsx("text-[#5C5F62] text-[0.875rem] font-normal")}>
            {dictionaries.schedule.day.description}
          </p>
        </div>
      </div>

      {/* divider */}
      <div className={clsx("w-full h-[1px]", "bg-[#00000024]")} />

      {/* body */}
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1.25rem]",
          "w-full"
        )}
      >
        {data.map((dataItem, dataIndex) => (
          <div
            key={dataIndex}
            className={clsx(
              "grid grid-cols-[auto_1fr] place-content-start place-items-start gap-[1.5rem]",
              "w-full"
            )}
          >
            <p className={clsx("text-[#5C5F62] text-[0.875rem] font-medium")}>
              {dataItem.time}
            </p>

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-[0.625rem]",
                "w-full",
                "pt-[0.625rem]"
              )}
            >
              <div className={clsx("relative", "w-full")}>
                <div className={clsx("w-full h-[1px]", "bg-[#00000024]")} />
              </div>

              {dataItem.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={clsx(
                    "grid grid-cols-1 place-content-start place-items-start gap-[0.75rem]",
                    "w-full",
                    "rounded-[0.5rem]",
                    setStatusBackgroundColor({ status: item.status }),
                    "px-[0.75rem] py-[0.75rem]"
                  )}
                >
                  <p
                    className={clsx(
                      "text-[#000000] text-[0.875rem] font-medium"
                    )}
                  >
                    {item.activity}
                  </p>

                  <div
                    className={clsx(
                      "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
                      "w-full"
                    )}
                  >
                    <p
                      className={clsx("text-[#5C5F62] text-[13px] font-medium")}
                    >
                      {item.range}
                    </p>
                    <p
                      className={clsx("text-[#000000] text-[13px] font-medium")}
                    >
                      {item.duration}
                    </p>
                    {/* avatar */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
