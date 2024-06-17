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

const setStatusColor = (data: { status: string }) => {
  switch (data.status.toLowerCase()) {
    case "created":
      return "text-[#5C5F62]";
    case "in progress":
      return "text-[#4473DA]";
    case "completed":
      return "text-[#0BAD73]";
    default:
      return "text-[#5C5F62]";
  }
};

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
  const [date, setDate] = React.useState<Date>(new Date());
  const datesInWeek = getDatesInWeek(date).filter(
    (item) => item.getDay() !== 0 && item.getDay() !== 6
  );

  const workingHours = Array.from({ length: 10 }, (_, i) => i + 8).map(
    (item) => {
      return {
        id: String(item),
        name: `${item < 10 ? `0${item}` : item}:00`,
      };
    }
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
        {workingHours.map((workingHour, workingHourIndex) => (
          <div
            key={workingHourIndex}
            className={clsx(
              "grid grid-cols-[auto_1fr] place-content-start place-items-start gap-[1.5rem]",
              "w-full"
            )}
          >
            <p className={clsx("text-[#5C5F62] text-[0.875rem] font-medium")}>
              {workingHour.name}
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

              <div
                className={clsx(
                  "grid grid-cols-5 place-content-start place-items-start gap-[0.5rem]",
                  "w-full"
                )}
              >
                {datesInWeek.map((dateInWeek, dateInWeekIndex) => {
                  return data.map((item, itemIndex) => {
                    if (
                      item.date.getDate() === dateInWeek.getDate() &&
                      item.date.getMonth() === dateInWeek.getMonth() &&
                      item.date.getFullYear() === dateInWeek.getFullYear() &&
                      item.start === workingHour.name
                    ) {
                      const durationNumber =
                        parseInt(item.end.split(":")[0] ?? "0") -
                        parseInt(item.start.split(":")[0] ?? "0");
                      const durationText =
                        durationNumber > 1
                          ? `${durationNumber} hours`
                          : `${durationNumber} hour`;
                      return (
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
                          <div
                            className={clsx(
                              "grid grid-cols-1 place-content-start place-items-start",
                              "w-full"
                            )}
                          >
                            <p
                              className={clsx(
                                "text-[#000000] text-[0.875rem] font-medium"
                              )}
                            >
                              {item.activity}
                            </p>
                            <p
                              className={clsx(
                                setStatusColor({ status: item.status }),
                                "text-[13px] font-medium"
                              )}
                            >
                              {item.project}
                            </p>
                          </div>

                          <div
                            className={clsx(
                              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
                              "w-full"
                            )}
                          >
                            <p
                              className={clsx(
                                "text-[#5C5F62]",
                                "text-[13px] font-medium"
                              )}
                            >
                              {durationText}
                            </p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  });
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
