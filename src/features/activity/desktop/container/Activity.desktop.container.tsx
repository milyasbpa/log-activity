import * as React from "react";
import clsx from "clsx";
import { SummaryActivityDesktop } from "../fragments/summary";
import { CreateActivityDesktop } from "../fragments/create";
import { UpdateActivityDesktop } from "../fragments/update";

export interface ActivityDesktopContainerProps {}

export const ActivityDesktopContainer = (
  props: ActivityDesktopContainerProps
) => {
  return (
    <div
      className={clsx("hidden sm:block", "w-full", "bg-white", "min-h-[100vh]")}
    >
      <SummaryActivityDesktop />
      <CreateActivityDesktop />
      <UpdateActivityDesktop />
    </div>
  );
};
