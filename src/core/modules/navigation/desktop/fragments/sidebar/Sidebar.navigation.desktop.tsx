"use client";
import React, { useMemo } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

import { TeamOutlined, PieChartOutlined } from "@ant-design/icons";
import { getDictionaries } from "../../i18n";
import { useFormContext } from "react-hook-form";
import { NavigationDesktopForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";
import { People } from "emotion-icons/bootstrap";
import { DrawerNavigationDesktop } from "../../components/drawer/Drawer.navigation.desktop";
import { Download } from "emotion-icons/evaicons-solid";

export const SidebarNavigationDesktop: React.FC = () => {
  const { watch } = useFormContext<NavigationDesktopForm>();
  const router = useRouter();
  const pathname = usePathname();
  const currentUrl = pathname;
  const dict = getDictionaries("en");

  const sidebarData = dict.sidebar.menu.items;

  const sidebarItems = useMemo(() => {
    return sidebarData.map((parent) => {
      return {
        title: parent.title,
        url: parent.url,
        active: currentUrl.includes(parent.url),
        childrens: undefined,
        iconTitle: parent.title.includes("Talent Report") ? (
          <TeamOutlined />
        ) : parent.title.includes("User Management") ? (
          <People className={clsx("w-[1rem] h-[1rem]")} />
        ) : parent.title.includes("Data Download") ? (
          <Download className={clsx("w-[1rem] h-[1rem]")} />
        ) : (
          <PieChartOutlined />
        ),
      };
    });
  }, [pathname, sidebarData]);

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        "w-full"
      )}
    >
      {sidebarItems.map((parent, parentIndex) => (
        <DrawerNavigationDesktop
          key={parentIndex}
          iconTitle={parent.iconTitle}
          title={parent.title}
          active={parent.active}
          url={parent.url}
          childrens={parent.childrens}
        />
      ))}
    </div>
  );
};
