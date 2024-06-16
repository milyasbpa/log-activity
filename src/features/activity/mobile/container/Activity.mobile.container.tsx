"use client";
import * as React from "react";
import clsx from "clsx";
import { SummaryActivityMobile } from "../fragments/summary";
import { TodayActivitiesActivityMobile } from "../fragments/today_activities";
import { MonthActivitiesActivityMobile } from "../fragments/month_activities";
import { CreateActivityMobile } from "../fragments/create";
import { UpdateActivityMobile } from "../fragments/update";

export interface ActivityMobileContainerProps {}

export const ActivityMobileContainer = (
  props: ActivityMobileContainerProps
) => {
  return (
    <div className={clsx("sm:hidden", "w-full", "bg-white", "min-h-[100vh]")}>
      <SummaryActivityMobile />
      <TodayActivitiesActivityMobile />
      <MonthActivitiesActivityMobile />
      <CreateActivityMobile />
      <UpdateActivityMobile />
    </div>
  );
};
