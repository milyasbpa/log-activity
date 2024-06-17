import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { useFormContext } from "react-hook-form";
import { ActivityDesktopForm } from "../../react_hook_form/type";

import { forms } from "../../react_hook_form/data";
import { Plus } from "emotion-icons/heroicons-solid";

export interface IHeaderActivityDesktopProps {}

export const HeaderActivityDesktop = (props: IHeaderActivityDesktopProps) => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<ActivityDesktopForm>();

  const activeTab = watch(forms.header.tab.active) as null | {
    id: string;
    name: string;
  };

  const handleClickTab = (data: { id: string; name: string }) => {
    setValue(forms.header.tab.active, data);
  };

  const handleClickAddActivity = () => {
    setValue(forms.create.is_open, true);
  };
  return (
    <div
      className={clsx(
        "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.5rem]",
        "w-full",
        "px-[2rem]",
        "h-[50px]",
        "bg-white",
        "border-b-[0.8px] border-b-[#EDEDED]"
      )}
    >
      {/* date picker */}
      <div></div>
      {/* tab */}
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-center justify-items-center",
          "w-full"
        )}
      >
        {dictionaries.header.tab.items.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "grid grid-cols-1 place-content-center place-items-center",
              "rounded-[0.25rem]",

              "text-[0.625rem] font-normal",
              "px-[0.5rem] py-[0.25rem]",
              activeTab?.id === item.id ? "text-[#6F47EB]" : "text-[#5C5F62]",
              activeTab?.id === item.id ? "bg-[#EEE9FD]" : "bg-[white]"
            )}
            onClick={() => handleClickTab(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* addons */}
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-end justify-items-end gap-[0.625rem]"
        )}
      >
        <button
          className={clsx(
            "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.375rem]",
            "px-[0.5rem] py-[0.5rem]",
            "rounded-[0.25rem]",
            "bg-[#000000]",
            "text-[0.625rem] text-[white] font-medium"
          )}
          onClick={handleClickAddActivity}
        >
          <Plus className={clsx("w-[0.75rem] h-[0.75rem]", "text-[white]")} />
          {dictionaries.header.addons.add_activity.cta.children}
        </button>
      </div>
    </div>
  );
};
