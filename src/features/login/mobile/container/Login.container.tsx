import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { HeadlineLogin } from "@/features/login/mobile/fragments/headline";
import { UserFormLogin } from "@/features/login/mobile/fragments/user_form";
import { NotificationLogin } from "../fragments/notification";

export const LoginMobileContainer: React.FC = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        "w-full",
        "h-screen",
        "bg-[white]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center",
          "w-full",
          "pt-[55px]"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start gap-y-[1.5rem]",
            "w-full max-w-[464px]",
            "px-[1rem]"
          )}
        >
          <HeadlineLogin />
          <NotificationLogin />
          <UserFormLogin />
        </div>
      </div>
    </div>
  );
};
