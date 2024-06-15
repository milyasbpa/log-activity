import * as React from "react";
import clsx from "clsx";

export interface EmptyTodayActivityActivityMobileProps {
  src?: string;
  message?: string;
  description?: string;
}

export const EmptyTodayActivityActivityMobile = ({
  src = "",
  message = "",
  description = "",
}: EmptyTodayActivityActivityMobileProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-center place-items-center gap-[0.75rem]",
        "w-full",
        "pt-[2rem] pl-[0.5rem] pr-[0.5rem] pb-[0.75rem]"
      )}
    >
      <img src={src} />

      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center gap-[0.25rem]",
          "w-full"
        )}
      >
        <p className={clsx("text-[#000000] text-[0.875rem] font-medium text-center")}>
          {message}
        </p>
        <p className={clsx("text-[#5C5F62] text-[0.875rem] font-normal text-center")}>
          {description}
        </p>
      </div>
    </div>
  );
};
