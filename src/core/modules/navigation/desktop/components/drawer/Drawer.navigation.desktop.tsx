import * as React from "react";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "emotion-icons/bootstrap";
import Link from "next/link";

export interface DrawerNavigationDesktopProps {
  iconTitle?: React.ReactNode;
  title?: string;
  url?: string;
  active?: boolean;
  childrens?:
    | undefined
    | { active: boolean; title: React.ReactNode; url: string }[];
}

export const DrawerNavigationDesktop = ({
  iconTitle = "",
  title = "",
  url = "",
  active = false,
  childrens = undefined,
}: DrawerNavigationDesktopProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(active);

  const handleClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        "w-full"
      )}
    >
      {childrens !== undefined && (
        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.5rem]",
            "w-full",
            "pr-[1.5rem] py-[1rem]",
            active ? "pl-[1.25rem]" : "hover:pl-[1.25rem] pl-[1.5rem]",
            // active
            //   ? "border-l-[4px] border-l-[#875BF7]"
            //   : "hover:border-l-[4px] hover:border-l-[#875BF7]",
            active
              ? "border-l-[4px] border-l-[#5C5F62]"
              : "hover:border-l-[4px] hover:border-l-[#5C5F62]",
            // active
            //   ? "text-[#875BF7] bg-[#F5F3FF]"
            //   : "hover:text-[#875BF7] hover:bg-[#F5F3FF] text-[#344054]",
            active
              ? "text-[#5C5F62] bg-[#F9F9F9]"
              : "hover:text-[#5C5F62] hover:bg-[#F9F9F9] text-[#344054]",
            "cursor-pointer",
            "text-[1rem] font-semibold"
          )}
          onClick={handleClickMenu}
        >
          <div
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
              "w-full"
            )}
          >
            {iconTitle}
            {title}
          </div>

          {isOpen ? (
            <ChevronUp className={clsx("w-[1rem] h-[1rem]")} />
          ) : (
            <ChevronDown className={clsx("w-[1rem] h-[1rem]")} />
          )}
        </div>
      )}

      {childrens === undefined && (
        <Link
          href={url}
          className={clsx(
            "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
            "w-full",
            "pr-[1.5rem] py-[1rem]",
            active ? "pl-[1.25rem]" : "hover:pl-[1.25rem] pl-[1.5rem]",
            // active
            //   ? "border-l-[4px] border-l-[#875BF7]"
            //   : "hover:border-l-[4px] hover:border-l-[#875BF7]",
            active
              ? "border-l-[4px] border-l-[#5C5F62]"
              : "hover:border-l-[4px] hover:border-l-[#5C5F62]",
            // active
            //   ? "text-[#875BF7] bg-[#F5F3FF]"
            //   : "hover:text-[#875BF7] hover:bg-[#F5F3FF] text-[#344054]",
            active
              ? "text-[#5C5F62] bg-[#F9F9F9]"
              : "hover:text-[#5C5F62] hover:bg-[#F9F9F9] text-[#344054]",
            "cursor-pointer",
            "text-[0.875rem] font-bold"
          )}
        >
          {iconTitle}
          {title}
        </Link>
      )}

      {isOpen &&
        childrens !== undefined &&
        childrens.length > 0 &&
        childrens?.map((children, childrenIndex) => (
          <Link
            key={childrenIndex}
            href={children.url}
            className={clsx(
              "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.5rem]",
              "w-full",
              "px-[1.5rem] py-[1rem]",
              // children.active
              //   ? "text-[#875BF7] bg-[#F5F3FF]"
              //   : "hover:text-[#875BF7] hover:bg-[#F5F3FF] text-[#344054]",
              children.active
                ? "text-[#5C5F62] bg-[#F9F9F9]"
                : "hover:text-[#5C5F62] hover:bg-[#F9F9F9] text-[#344054]",
              "cursor-pointer",
              "text-[1rem] font-semibold",
              "border-box"
            )}
          >
            {children.title}
          </Link>
        ))}
    </div>
  );
};
