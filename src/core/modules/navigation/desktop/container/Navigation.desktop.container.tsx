"use client";
import * as React from "react";
import clsx from "clsx";
import { HeaderMobileNavigation } from "../fragments/header";
import { useFormContext } from "react-hook-form";
import { NavigationDesktopForm } from "../react_hook_form/type";

export interface NavigationDesktopContainerProps {
  children?: React.ReactNode;
}

export const NavigationDesktopContainer = ({
  children,
}: NavigationDesktopContainerProps) => {
  const { watch } = useFormContext<NavigationDesktopForm>();

  return (
    <>
      <nav>
        <HeaderMobileNavigation />
      </nav>

      <main className={clsx("min-h-screen", "pt-[4rem]", "bg-white")}>
        {children}
      </main>
    </>
  );
};
