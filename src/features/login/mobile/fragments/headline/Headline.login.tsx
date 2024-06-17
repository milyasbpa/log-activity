import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
// import { LogoComponent } from "src/core/ui/components/logo";

export const HeadlineLogin: React.FC = () => {
  const dict = getDictionaries("en").headline;
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[2rem]",
        "w-full"
      )}
    >
      {/* <LogoComponent /> */}
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-y-[0.75rem]",
          "w-full"
        )}
      >
        <h3 className={clsx("text-[#424242]")}>{dict.headline}</h3>
        <p className={clsx("text-lg", "text-[#ADB4BD]")}>{dict.subline}</p>
      </div>
    </div>
  );
};
