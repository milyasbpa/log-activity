import * as React from "react";
import clsx from "clsx";
import { SummaryActivityDesktop } from "../fragments/summary";
import { CreateActivityDesktop } from "../fragments/create";
import { UpdateActivityDesktop } from "../fragments/update";
import { HeaderActivityDesktop } from "../fragments/header";
import { useFormContext } from "react-hook-form";
import { ActivityDesktopForm } from "../react_hook_form/type";
import { forms } from "../react_hook_form/data";
import { MonthActivitiesActivityDesktop } from "../fragments/month_activities";
import { DayScheduleActivityDesktop } from "../fragments/day_schedule";
import { WeekScheduleActivityDesktop } from "../fragments/week_schedule";
import { MonthScheduleActivityDesktop } from "../fragments/month_schedule";
import { useGetFilterStatusActivityDesktop } from "../react_query/hooks";

export interface ActivityDesktopContainerProps {}

export const ActivityDesktopContainer = (
  props: ActivityDesktopContainerProps
) => {
  useGetFilterStatusActivityDesktop();
  const { watch, setValue } = useFormContext<ActivityDesktopForm>();
  const activeTab = watch(forms.header.tab.active) as null | {
    id: string;
    name: string;
  };
  return (
    <div
      className={clsx(
        "hidden sm:block",
        "w-full",
        "bg-[#F9FAFB]",
        "min-h-[100vh]"
      )}
    >
      <HeaderActivityDesktop />
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1.125rem]",
          "w-full",
          "px-[1rem] py-[1rem]"
        )}
      >
        <SummaryActivityDesktop />
        <div
          className={clsx(
            "grid place-content-start place-items-start gap-[1.25rem]",
            "w-full",
            activeTab?.id === "month" ? "grid-cols-1" : "grid-cols-[1fr_362px]"
          )}
        >
          {/* calendar */}
          {activeTab?.id === "day" && <DayScheduleActivityDesktop />}
          {activeTab?.id === "week" && <WeekScheduleActivityDesktop />}
          {activeTab?.id === "month" && <MonthScheduleActivityDesktop />}
          {/* month activities */}
          <MonthActivitiesActivityDesktop />
        </div>
      </div>

      <CreateActivityDesktop />
      <UpdateActivityDesktop />
    </div>
  );
};
