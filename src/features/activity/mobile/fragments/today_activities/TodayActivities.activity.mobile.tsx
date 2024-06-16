"use client";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { EmptyTodayActivityActivityMobile } from "../../components/empty_today_activity";
import { TodayActivityItemActivityMobile } from "../../components/today_activity_item";
import { useFormContext } from "react-hook-form";
import { ActivityMobileForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";
import { TodayActivities } from "../../react_hook_form/default";

export const TodayActivitiesActivityMobile = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<ActivityMobileForm>();

  const todayActivitiesData = watch(
    forms.today_activities.data
  ) as TodayActivities[];
  const isEmpty = !todayActivitiesData.length;

  const handleAddActivity = () => {
    setValue(forms.create.is_open, true);
  };
  const handleClickTodayActivity = (data: TodayActivities) => {
    setValue(forms.update.is_open, true);
    setValue(forms.update.selected_id, data.id);
  };
  // test

  // NOTE: Mocked Purpose
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setValue(
        forms.today_activities.data,
        dictionaries.today_activity.items.mocked_data as TodayActivities[]
      );
    }
  }, [typeof window]);
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
              {dictionaries.today_activity.title}
            </p>
            <p className={clsx("text-[#5C5F62] text-[0.875rem] font-normal")}>
              {dictionaries.today_activity.description}
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
            onClick={handleAddActivity}
          >
            {dictionaries.today_activity.cta.add_activity.children}
          </button>
        </div>

        {/* body */}
        {isEmpty && (
          <EmptyTodayActivityActivityMobile
            src={dictionaries.today_activity.empty.src}
            message={dictionaries.today_activity.empty.message}
            description={dictionaries.today_activity.empty.description}
          />
        )}

        {!isEmpty && (
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
              "w-full"
            )}
          >
            {todayActivitiesData.map((item, index) => (
              <TodayActivityItemActivityMobile
                key={index}
                name={item.name}
                status={item.status}
                project={item.project}
                time={{
                  icon: dictionaries.today_activity.items.icon,
                  range: item.range,
                  duration: item.duration,
                }}
                onClick={() => handleClickTodayActivity(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
