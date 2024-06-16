import * as React from "react";
import clsx from "clsx";

export interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
  text?: string;
}

export const Avatar = ({ text = "", ...otherProps }: AvatarProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "w-[2.5rem] h-[2.5rem]",
        "bg-[#848484]",
        "text-[white] text-[1rem] font-medium",
        "rounded-[50%]"
      )}
      {...otherProps}
    >
      {text}
    </div>
  );
};
