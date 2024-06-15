import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { EmptyMonthActivityActivityMobile } from "../../components/empty_month_activity";
import { MonthActivityItemActivityMobile } from "../../components/month_activity_item";

export const MonthActivitiesActivityMobile = () => {
  const dictionaries = getDictionaries("en");
  const isEmpty = false;
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.75rem]",
        "w-full",
        "px-[1rem] py-[1rem]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[0.75rem]",
          "w-full",
          "rounded-[0.625rem]",
          "border border-[rgba(0,0,0,0.18)]",
          "px-[0.5rem] py-[0.5rem]"
        )}
      >
        {/* header */}
        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.5rem]",
            "w-full"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
              "w-full"
            )}
          >
            <p className={clsx("text-[#000000] text-[1rem] font-medium")}>
              {dictionaries.month_activity.title}
            </p>
            <p className={clsx("text-[#5C5F62] text-[0.875rem] font-normal")}>
              {dictionaries.month_activity.description}
            </p>
          </div>

          <button
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[0.125rem]",
              "w-full",
              "rounded-[0.625rem]",
              "bg-[#000000]",
              "px-[0.75rem] py-[0.5rem]",
              "text-[#FFFFFF] text-[0.875rem] font-medium"
            )}
          >
            {dictionaries.month_activity.cta.add_activity.children}
          </button>
        </div>

        {/* body */}
        {isEmpty && (
          <EmptyMonthActivityActivityMobile
            src={dictionaries.month_activity.empty.src}
            message={dictionaries.month_activity.empty.message}
            description={dictionaries.month_activity.empty.description}
          />
        )}

        {!isEmpty && (
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
              "w-full"
            )}
          >
            <MonthActivityItemActivityMobile
              name={"Meeting with andria about New UX concept"}
              status={"Completed"}
              project={"OSS"}
              time={{
                icon: dictionaries.month_activity.items.icon,
                range: "08.00 - 09.00",
                duration: "(1h)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
