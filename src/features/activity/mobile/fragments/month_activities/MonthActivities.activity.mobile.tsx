"use client";
import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { EmptyMonthActivityActivityMobile } from "../../components/empty_month_activity";
import { MonthActivityItemActivityMobile } from "../../components/month_activity_item";
import { MonthActivitySearchInputActivityMobile } from "../../components/month_activity_search_input";
import { useFormContext } from "react-hook-form";
import { ActivityMobileForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";
import { MonthActivities } from "../../react_hook_form/default";

export const MonthActivitiesActivityMobile = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<ActivityMobileForm>();

  const monthActivitiesData = watch(
    forms.month_activities.data
  ) as MonthActivities[];

  const isEmpty = !monthActivitiesData.length;
  const isNotFound =
    !monthActivitiesData.length &&
    (watch(forms.month_activities.search) as string).length > 0;

  const handleAddActivity = () => {
    setValue(forms.create.is_open, true);
  };

  const handleClickMonthActivity = (data: MonthActivities) => {
    setValue(forms.update.is_open, true);
    setValue(forms.update.selected_id, data.id);
  };

  // NOTE: Mocked Purpose
  React.useEffect(() => {
    setValue(
      forms.month_activities.data,
      dictionaries.month_activity.items.mocked_data as MonthActivities[]
    );
  }, []);

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
            onClick={handleAddActivity}
          >
            {dictionaries.month_activity.cta.add_activity.children}
          </button>
        </div>

        {/* search */}
        <MonthActivitySearchInputActivityMobile
          startIcon={<img src={dictionaries.month_activity.search.startIcon} />}
          placeholder={dictionaries.month_activity.search.placeholder}
        />

        {/* body */}
        {isEmpty && (
          <EmptyMonthActivityActivityMobile
            src={
              isNotFound
                ? dictionaries.month_activity.not_found.src
                : dictionaries.month_activity.empty.src
            }
            message={
              isNotFound
                ? dictionaries.month_activity.not_found.message
                : dictionaries.month_activity.empty.message
            }
            description={
              isNotFound
                ? dictionaries.month_activity.not_found.description
                : dictionaries.month_activity.empty.description
            }
          />
        )}

        {!isEmpty && (
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
              "w-full"
            )}
          >
            {monthActivitiesData.map((item, index) => (
              <MonthActivityItemActivityMobile
                key={index}
                name={item.name}
                status={item.status}
                project={item.project}
                time={{
                  icon: dictionaries.month_activity.items.icon,
                  range: item.time,
                }}
                onClick={() => handleClickMonthActivity(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
