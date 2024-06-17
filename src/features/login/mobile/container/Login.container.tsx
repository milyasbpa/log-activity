import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { HeadlineLogin } from "@/features/login/mobile/fragments/headline";
import { UserFormLogin } from "@/features/login/mobile/fragments/user_form";
import { useForm, FormProvider } from "react-hook-form";
import { NotificationLogin } from "../fragments/notification";
import { useLoginStore } from "../zustand/store";

export const LoginContainer: React.FC = () => {
  const methods = useForm();
  const store = useLoginStore();
  return (
    <FormProvider {...methods}>
      <div
        className={clsx(
          "grid grid-cols-1 lg:grid-cols-2 place-content-start place-items-start",
          "w-full",
          "h-screen"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-center place-items-center",
            "w-full",
            "pt-[5rem]"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-y-[1.5rem]",
              "w-full max-w-[464px]"
            )}
          >
            <HeadlineLogin />
            <NotificationLogin />
            <UserFormLogin />
          </div>
        </div>

        <div
          className={clsx(
            "hidden lg:grid grid-cols-1 place-content-center place-items-center",
            "h-screen w-full",
            "px-[5rem]"
          )}
        >
          <div className={clsx("w-full h-[356px]", "relative")}>
            <Image
              alt="wl-hero-image"
              src={"/images/login/hero.login.png"}
              quality={100}
              fill={true}
              sizes={"(max-width:1024px) 100vw, 50vw"}
              className="opacity-90"
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
