import React, { useState } from "react";
import clsx from "clsx";
import { DownOutlined } from "@ant-design/icons";

import { useRouter } from "next/navigation";
import { getDashboardDictionaries } from "../../i18n";
import { useFormContext } from "react-hook-form";
import { DashboardForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";
import { getInitials } from "@/core/utils/formatters";
import { AuthCollectionWebURL } from "@/core/router/web";
import { Dropdown } from "@/core/components/dropdown";

export const NavigationDashboard = () => {
  const router = useRouter();
  const { watch, setValue } = useFormContext<DashboardForm>();

  const dict = getDashboardDictionaries("en");

  const handleClickLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      router.push(AuthCollectionWebURL.routeToLogin());
    }
  };
  const handleClickExpandCollapse = () => {
    setValue(forms.sidebar.is_collapse, !watch(forms.sidebar.is_collapse));
  };

  const handleClick = () => {
    setValue(forms.navbar.dropdown, !watch(forms.navbar.dropdown));
  };

  const handleCloseDropdown = () => {
    setValue(forms.navbar.dropdown, false);
  };

  const initial = getInitials((watch(forms.user.first_name) as string) || "");
  const username = watch(forms.user.full_name) as string;
  const role = watch(forms.navbar.role) as string;
  return (
    <div className={clsx("fixed top-0", "z-50", "w-screen")}>
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-between justify-items-start",
          "w-full h-[4rem]",
          "py-2 px-6",
          "bg-white",
          "border-b border-b-[#D0D5DD]"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-between",
            "w-[15rem]",
            "border-r border-r-[#D0D5DD]",
            "px-[0.75rem]"
          )}
        >
          {/* <LogoComponent className={clsx("h-10")} /> */}

          {/* <button color="tertiary" onClick={handleClickExpandCollapse}>
            <MenuOutlined className={clsx("text-[#98A2B3]")} />
          </button> */}
        </div>

        <div>
         
        </div>
      </div>
    </div>
  );
};
