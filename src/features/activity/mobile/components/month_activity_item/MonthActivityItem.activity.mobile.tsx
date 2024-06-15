import * as React from "react";
import clsx from "clsx";

const setStatusColor = (data: { status: string }) => {
  switch (data.status.toLowerCase()) {
    case "created":
      return "text-[#5C5F62]";
    case "in progress":
      return "text-[#4473DA]";
    case "completed":
      return "text-[#0BAD73]";
    default:
      return "text-[#5C5F62]";
  }
};

const setStatusBackgroundColor = (data: { status: string }) => {
  switch (data.status.toLowerCase()) {
    case "created":
      return "bg-[#EDEDED]";
    case "in progress":
      return "bg-[#DBE6FE]";
    case "completed":
      return "bg-[#E1F5E8]";
    default:
      return "bg-[#EDEDED]";
  }
};

export interface MonthActivityItemActivityMobileProps {
  name?: string;
  status?: string;
  project?: string;
  time?: {
    range: string;
    icon: string;
  };
  onClick?: () => void;
}

export const MonthActivityItemActivityMobile = ({
  name = "",
  status = "",
  project = "",
  time = {
    range: "",
    icon: "",
  },
  onClick = () => {},
}: MonthActivityItemActivityMobileProps) => {
  return (
    <button
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.25rem]",
        "w-full"
      )}
      onClick={onClick}
    >
      {/* header */}
      <div
        className={clsx(
          "grid grid-flow-col items-start content-start justify-items-start justify-between gap-[0.625rem]",
          "w-full"
        )}
      >
        <p className={clsx("text-[#000000] text-[0.875rem] font-medium text-left")}>
          {name}
        </p>
        <div
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center",
            "px-[0.375rem] py-[0.125rem]",
            "text-[13px] font-medium",
            setStatusColor({ status: status }),
            setStatusBackgroundColor({ status: status }),
            "rounded-[0.375rem]"
          )}
        >
          {status}
        </div>
      </div>
      {/* body */}
      <div
        className={clsx(
          "grid grid-flow-col items-start content-start justify-items-start justify-between gap-[0.625rem]",
          "w-full"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center",
            "px-[0.375rem] py-[0.125rem]",
            "text-[13px] font-medium",
            "text-[#5C5F62]",
            "bg-[#EDEDED]",
            "rounded-[0.375rem]"
          )}
        >
          {project}
        </div>

        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-end justify-items-end gap-[0.25rem]"
          )}
        >
          <img src={time.icon} />
          <p className={clsx("text-[#5C5F62] text-[0.875rem] font-medium")}>
            {time.range}
          </p>
        </div>
      </div>
    </button>
  );
};
