import * as React from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { LoginMobileForm } from "../../react-hook-form/type";
import { forms } from "../../react-hook-form/data";
import { getDictionaries } from "../../i18n";

export interface ITabLoginMobileProps {}

export const TabLoginMobile = (props: ITabLoginMobileProps) => {
  const { watch, setValue } = useFormContext<LoginMobileForm>();
  const dictionaries = getDictionaries("en");

  const activeTab = watch(forms.tab.active) as {
    id: string;
    name: string;
  } | null;

  const handleClickTab = (data: { id: string; name: string }) => {
    setValue(forms.tab.active, data);
  };
  return (
    <div
      className={clsx(
        "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[1rem]"
      )}
    >
      {dictionaries.tab.list.map((listItem, listIndex) => (
        <button
          key={listItem.id}
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center gap-[0.125rem]",
            "w-full",
            "rounded-[1rem]",
            activeTab?.id === listItem.id && "bg-[#643FDB]",
            "disabled:bg-[#5C5F62]",
            "px-[1rem] py-[0.5em]",
            activeTab?.id === listItem.id ? "text-[white]" : "text-[#A29EB6]",
            "text-[15px] font-medium",
            "disabled:text-[#FFFFFF]"
          )}
          onClick={() => handleClickTab(listItem)}
        >
          {listItem.name}
        </button>
      ))}
    </div>
  );
};
