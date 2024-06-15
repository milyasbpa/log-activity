import * as React from "react";
import clsx from "clsx";
import { SummaryItemActivityMobile } from "../../components/summary_item";
import { getDictionaries } from "../../i18n";

export const SummaryActivityMobile = () => {
  const dictionaries = getDictionaries("en");
  return (
    <div
      className={clsx(
        "grid grid-cols-2 place-content-start place-items-start gap-[0.75rem]",
        "w-full",
        "px-[1rem] py-[1rem]"
      )}
    >
      {dictionaries.summary.items.map((item, itemIndex) => (
        <SummaryItemActivityMobile
          key={itemIndex}
          name={item.label}
          value={"Super Active User"}
        />
      ))}
    </div>
  );
};
