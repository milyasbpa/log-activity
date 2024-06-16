"use client";
import * as React from "react";
import clsx from "clsx";
import { HeaderDesktopNavigation } from "../fragments/header";
import { useFormContext } from "react-hook-form";
import { NavigationDesktopForm } from "../react_hook_form/type";
import { SidebarNavigationDesktop } from "../fragments/sidebar";
import { forms } from "../react_hook_form/data";

export interface NavigationDesktopContainerProps {
  children?: React.ReactNode;
}

export const NavigationDesktopContainer = ({
  children,
}: NavigationDesktopContainerProps) => {
  const { watch } = useFormContext<NavigationDesktopForm>();

  return (
    <>
      <nav className={clsx("hidden sm:block")}>
        <HeaderDesktopNavigation />
      </nav>

      <main
        className={clsx(
          "hidden sm:block",
          "min-h-screen",
          "pt-[4rem]",
          "bg-white"
        )}
      >
        <aside
          className={clsx(
            "p-0",
            "fixed",
            "bg-white",
            "w-[16.5rem]",
            "h-[calc(100vh-4rem)]",
            "mt-[4rem]",
            "border-r border-r-[#D0D5DD]",
            "top-0"
          )}
        >
          <SidebarNavigationDesktop />
        </aside>

        <main
          className={clsx(
            "h-screen",
            "bg-[#F9FAFB]",
            !watch(forms.sidebar.is_collapse) ? "ml-[16.5rem]" : "ml-[0rem]"
          )}
        >
          {children}
        </main>
      </main>
    </>
  );
};
