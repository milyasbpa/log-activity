import React, { useState } from "react";
import clsx from "clsx";
import { DownOutlined } from "@ant-design/icons";

import { useRouter } from "next/navigation";
import { getDictionaries } from "../../i18n";
import { useFormContext } from "react-hook-form";
import { NavigationDesktopForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";
import { getInitials } from "@/core/utils/formatters";
import { Avatar } from "@/core/components/avatar";

export const HeaderDesktopNavigation = () => {
  const router = useRouter();
  const { watch, setValue } = useFormContext<NavigationDesktopForm>();

  const dict = getDictionaries("en");

  const initial = getInitials((watch(forms.user.name) as string) || "");
  const name = watch(forms.user.name) as string;
  const role = watch(forms.user.role) as string;

  const isOpen = watch(forms.navbar.dropdown.is_open) as boolean;
  const handleClickDropdown = () => {
    setValue(
      forms.navbar.dropdown.is_open,
      !(watch(forms.navbar.dropdown.is_open) as boolean)
    );
  };

  console.log(name, "ini name");
  return (
    <div className={clsx("fixed top-0", "z-50", "w-screen")}>
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-end justify-items-start",
          "w-full h-[4rem]",
          "py-2 px-6",
          "bg-white",
          "border-b border-b-[#D0D5DD]"
        )}
      >
        {/*  */}

        {/* dropdown logout */}
        <div className={clsx("relative")}>
          <button
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]"
            )}
            onClick={handleClickDropdown}
          >
            <Avatar text={initial} />

            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start"
              )}
            >
              <p
                className={clsx(
                  "text-[#1D2939] text-[0.875rem] font-bold whitespace-nowrap"
                )}
              >
                {name}
              </p>
              <p className={clsx("text-[#667085] text-[0.75rem] font-normal")}>
                {role}
              </p>
            </div>

            <div className={clsx(isOpen ? "rotate-180" : "rotate-0")}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
