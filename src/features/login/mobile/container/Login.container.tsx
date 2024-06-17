import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { HeadlineLogin } from "@/features/login/mobile/fragments/headline";
import { UserFormLogin } from "@/features/login/mobile/fragments/user_form";
import { NotificationLogin } from "../fragments/notification";
import { TabLoginMobile } from "../fragments/tab";
import { useFormContext } from "react-hook-form";
import { LoginMobileForm } from "../react-hook-form/type";
import { forms } from "../react-hook-form/data";
import { LDAPFormLogin } from "../fragments/ldap_form/LDAPForm.login";

export const LoginMobileContainer: React.FC = () => {
  const { watch, setValue } = useFormContext<LoginMobileForm>();
  const activeTab = watch(forms.tab.active) as null | {
    id: string;
    name: string;
  };
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
          <TabLoginMobile />
          {activeTab?.id === "SSO" ? <LDAPFormLogin /> : <UserFormLogin />}
        </div>
      </div>
    </div>
  );
};
