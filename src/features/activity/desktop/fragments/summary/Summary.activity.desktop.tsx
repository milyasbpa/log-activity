import * as React from "react";
import clsx from "clsx";
import { SummaryItemActivityDesktop } from "../../components/summary_item";
import { getDictionaries } from "../../i18n";
import { useFormContext } from "react-hook-form";
import { ActivityDesktopForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";

export const SummaryActivityDesktop = () => {
  const dictionaries = getDictionaries("en");
  const { watch, setValue } = useFormContext<ActivityDesktopForm>();
  const summaryData = watch(forms.summary.data) as {
    id: string;
    value: string;
  }[];
  const activeTab = watch(forms.header.tab.active) as null | {
    id: string;
    name: string;
  };
  const title =
    activeTab?.id === "day"
      ? dictionaries.summary.header.label.day
      : activeTab?.id === "week"
      ? dictionaries.summary.header.label.week
      : activeTab?.id === "month"
      ? dictionaries.summary.header.label.month
      : "";
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1.125rem]",
        "w-full"
      )}
    >
      <p className={clsx("text-[1.5rem] text-[#101828] font-bold")}>{title}</p>
      <div
        className={clsx(
          "grid grid-cols-3 place-content-start place-items-start gap-[1.25rem]",
          "w-full"
        )}
      >
        {summaryData.map((summaryItem, summaryIndex) => (
          <SummaryItemActivityDesktop
            key={summaryIndex}
            name={
              dictionaries.summary.items.find(
                (item) => item.id === summaryItem.id
              )?.label ?? ""
            }
            value={summaryItem.value}
          />
        ))}
      </div>
    </div>
  );
};
