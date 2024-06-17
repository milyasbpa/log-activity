import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";

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

export interface IDayScheduleActivityDesktopProps {}

export const DayScheduleActivityDesktop = (
  props: IDayScheduleActivityDesktopProps
) => {
  const dictionaries = getDictionaries("en");
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
              <div className={clsx("w-full h-[1px]", "bg-[#00000024]")} />
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
