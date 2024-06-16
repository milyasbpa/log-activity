"use client";
import * as React from "react";
import clsx from "clsx";
import { NavigationMobileDashboard } from "../fragments/navigation";
import { useFormContext } from "react-hook-form";
import { DashboardMobileForm } from "../react_hook_form/type";

export interface DashboardMobileContainerProps {
  children?: React.ReactNode;
}

export const DashboardMobileContainer = ({
  children,
}: DashboardMobileContainerProps) => {
  const { watch } = useFormContext<DashboardMobileForm>();

  return (
    <>
      <nav>
        <NavigationMobileDashboard />
      </nav>

      <main className={clsx("min-h-screen", "pt-[4rem]", "bg-white")}>
        {children}
      </main>
    </>
  );
};
