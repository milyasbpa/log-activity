import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { Plus } from "emotion-icons/heroicons-solid";
import { useFormContext } from "react-hook-form";
import { ActivityDesktopForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";

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

export const setDataSet = (data: DataSet[]) => {
  let result: DataSet[] = [];
  for (let i = 0; i < data.length; i++) {
    const startHourNumber = parseInt(data[i].start.split(":")[0] ?? "0");
    const endHourNumber = parseInt(data[i].end.split(":")[0] ?? "0");
    const durationNumber = endHourNumber - startHourNumber;
    console.log(durationNumber, "ini duration number");
    for (let j = 0; j < durationNumber; j++) {
      result = [
        ...result,
        {
          ...data[i],
          start: `${
            startHourNumber + j < 10
              ? `0${startHourNumber + j}:00`
              : `${startHourNumber + j}:00`
          }`,
          end: `${
            startHourNumber + j + 1 < 10
              ? `0${startHourNumber + j + 1}:00`
              : `${startHourNumber + j + 1}:00`
          }`,
        },
      ];
    }
  }
  return result;
};

export const DayScheduleActivityDesktop = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<ActivityDesktopForm>();

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
  ];

  const dataSet = setDataSet(data);

  const handleClickAddActivity = () => {
    setValue(forms.create.is_open, true);
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1.25rem]",
        "w-full"
      )}
    >
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
                {!dataSet.filter((item) => item.start === workingHour.name)
                  .length && (
                  <button
                    className={clsx(
                      "absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]",
                      "z-10",
                      "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.375rem]",
                      "bg-white",
                      "rounded-[0.375rem]",
                      "border border-[#00000024]",
                      "text-[#5C5F62] text-[0.875rem] font-medium",
                      "px-[0.625rem] py-[0.25rem]"
                    )}
                    style={{
                      boxShadow: "0px 2px 4px 0px #0000001A",
                    }}
                    onClick={handleClickAddActivity}
                  >
                    <Plus
                      className={clsx(
                        "w-[0.75rem] h-[0.75rem]",
                        "text-[#5C5F62]"
                      )}
                    />
                    {dictionaries.schedule.day.cta.add_activity.children}
                  </button>
                )}
              </div>

              {data
                .filter((item) => item.start === workingHour.name)
                .map((item, itemIndex) => {
                  const rangeText = `${item.start}-${item.end}`;
                  const durationNumber =
                    parseInt(item.end.split(":")[0] ?? "0") -
                    parseInt(item.start.split(":")[0] ?? "0");
                  const durationText =
                    durationNumber > 1
                      ? `(${durationNumber} hours)`
                      : `(${durationNumber} hour)`;
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
                          className={clsx(
                            "text-[#5C5F62] text-[13px] font-medium"
                          )}
                        >
                          {rangeText}
                        </p>
                        <p
                          className={clsx(
                            "text-[#000000] text-[13px] font-medium"
                          )}
                        >
                          {/* {'1 hour'} */}
                          {durationText}
                        </p>
                        {/* avatar */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
