import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";

export const HeadlineLogin: React.FC = () => {
  const dict = getDictionaries("en").headline;
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[2rem]",
        "w-full"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center gap-y-[0.75rem]",
          "w-full"
        )}
      >
        <h3 className={clsx("text-[#000000] text-[1.5rem] font-bold")}>
          {dict.headline}
        </h3>
      </div>
    </div>
  );
};
