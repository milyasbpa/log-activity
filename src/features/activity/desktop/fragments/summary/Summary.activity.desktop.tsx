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
  return (
    <div
      className={clsx(
        "grid grid-cols-3 place-content-start place-items-start gap-[1.25rem]",
        "w-full",
        "px-[1rem] py-[1rem]"
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
  );
};
