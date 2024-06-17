import * as React from "react";
import clsx from "clsx";
import { SummaryActivityDesktop } from "../fragments/summary";
import { CreateActivityDesktop } from "../fragments/create";
import { UpdateActivityDesktop } from "../fragments/update";
import { HeaderActivityDesktop } from "../fragments/header";

export interface ActivityDesktopContainerProps {}

export const ActivityDesktopContainer = (
  props: ActivityDesktopContainerProps
) => {
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
          "w-full"
        )}
      >
        <SummaryActivityDesktop />
      </div>

      <CreateActivityDesktop />
      <UpdateActivityDesktop />
    </div>
  );
};
