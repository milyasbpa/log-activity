"use client";
import * as React from "react";
import clsx from "clsx";
import { HeaderMobileNavigation } from "../fragments/header";
import { useFormContext } from "react-hook-form";
import { DashboardMobileForm } from "../react_hook_form/type";

export interface NavigationMobileContainerProps {
  children?: React.ReactNode;
}

export const NavigationMobileContainer = ({
  children,
}: NavigationMobileContainerProps) => {
  const { watch } = useFormContext<DashboardMobileForm>();

  return (
    <>
      <nav className={clsx("sm:hidden")}>
        <HeaderMobileNavigation />
      </nav>

      <main
        className={clsx("sm:hidden", "min-h-screen", "pt-[4rem]", "bg-white")}
      >
        {children}
      </main>
    </>
  );
};
