import { useRef } from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { useFormContext } from "react-hook-form";

import { usePostAuthLoginUserFormLogin } from "../../react-query/hooks/usePostAuthLogin.login";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA } from "@/core/constants";
import { InputLoginMobile } from "../../components/input";
import { PasswordInputLoginMobile } from "../../components/password_input";
import { LoginMobileForm } from "../../react-hook-form/type";
import { forms } from "../../react-hook-form/data";

export const UserFormLogin = () => {
  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const { watch, setValue } = useFormContext<LoginMobileForm>();

  const { mutate: postAuthLogin, isPending: isLoadingPostAuthLogin } =
    usePostAuthLoginUserFormLogin();

  const dict = getDictionaries("en").form.user;

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(forms.form.user.username, e.currentTarget.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(forms.form.user.password, e.currentTarget.value);
  };
  const handleClickLogin = () => {
    captchaRef.current?.reset();
    postAuthLogin();
  };

  const handleChangeCaptcha = (token: string | null) => {
    if (!token) {
      return;
    }

    setValue(forms.form.user.captcha, token);
  };

  const handleChangeExpired = () => {
    setValue(forms.form.user.captcha, "");
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem]",
        "w-full"
      )}
    >
      <InputLoginMobile
        placeholder={dict.username.placeholder}
        startIcon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 19.1115C5 16.6984 6.69732 14.643 9.00404 14.2627L9.21182 14.2284C11.0589 13.9239 12.9411 13.9239 14.7882 14.2284L14.996 14.2627C17.3027 14.643 19 16.6984 19 19.1115C19 20.1545 18.1815 21 17.1719 21H6.82813C5.81848 21 5 20.1545 5 19.1115Z"
              stroke="#1C1243"
              stroke-width="1.5"
            />
            <path
              d="M16.0834 6.9375C16.0834 9.11212 14.2552 10.875 12 10.875C9.74486 10.875 7.91669 9.11212 7.91669 6.9375C7.91669 4.76288 9.74486 3 12 3C14.2552 3 16.0834 4.76288 16.0834 6.9375Z"
              stroke="#1C1243"
              stroke-width="1.5"
            />
          </svg>
        }
        onChange={handleChangeUserName}
      />

      <PasswordInputLoginMobile
        placeholder={dict.password.placeholder}
        startIcon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6531 17.0462L3.95889 17.3301H3.95889L4.6531 17.0462ZM4.30609 11.4453L3.58237 11.2485L3.58237 11.2485L4.30609 11.4453ZM19.6939 11.4452L20.4176 11.2485L19.6939 11.4452ZM19.3469 17.0462L18.6527 16.7624L18.6527 16.7624L19.3469 17.0462ZM14.0365 20.8426L13.9211 20.1015L14.0365 20.8426ZM9.96352 20.8426L9.84819 21.5837L9.96352 20.8426ZM8.08242 7.7854L7.93367 7.0503L8.08242 7.7854ZM15.9176 7.7854L15.7688 8.5205L15.9176 7.7854ZM9.21479 20.7261L9.33011 19.985L9.21479 20.7261ZM4.74599 17.2734L5.4402 16.9895H5.4402L4.74599 17.2734ZM14.7852 20.7261L14.9005 21.4671V21.4671L14.7852 20.7261ZM19.254 17.2734L19.9482 17.5573V17.5573L19.254 17.2734ZM19.6174 11.1638L18.8937 11.3606V11.3606L19.6174 11.1638ZM4.38262 11.1638L5.10635 11.3606H5.10635L4.38262 11.1638ZM15.1775 8.02577L14.4909 7.72404L15.1775 8.02577ZM14.2779 8.2088C14.1112 8.58802 14.2836 9.03052 14.6628 9.19716C15.042 9.3638 15.4845 9.19148 15.6511 8.81226L14.2779 8.2088ZM8.82248 8.02577L9.50911 7.72404V7.72404L8.82248 8.02577ZM8.34887 8.81226C8.51551 9.19148 8.95802 9.3638 9.33723 9.19716C9.71645 9.03052 9.88877 8.58802 9.72213 8.2088L8.34887 8.81226ZM11.2429 3.0742L11.3691 3.81351L11.3691 3.81351L11.2429 3.0742ZM11.3604 3.05415L11.2342 2.31484L11.2342 2.31484L11.3604 3.05415ZM12.6396 3.05415L12.5134 3.79346L12.5134 3.79346L12.6396 3.05415ZM12.7571 3.0742L12.8832 2.33489L12.8832 2.33489L12.7571 3.0742ZM15.4253 5.54836L16.1579 5.38741L15.4253 5.54836ZM8.57466 5.54836L9.30719 5.70931L8.57466 5.54836ZM14.6699 19.985L13.9211 20.1015L14.1518 21.5837L14.9005 21.4671L14.6699 19.985ZM10.0788 20.1015L9.33011 19.985L9.09946 21.4671L9.84819 21.5837L10.0788 20.1015ZM18.8937 11.3606L18.9702 11.642L20.4176 11.2485L20.3411 10.967L18.8937 11.3606ZM18.6527 16.7624L18.5598 16.9896L19.9482 17.5573L20.0411 17.3301L18.6527 16.7624ZM5.4402 16.9895L5.34731 16.7624L3.95889 17.3301L4.05177 17.5572L5.4402 16.9895ZM5.02981 11.642L5.10635 11.3606L3.6589 10.967L3.58237 11.2485L5.02981 11.642ZM5.34731 16.7624C4.67945 15.129 4.56875 13.3377 5.02981 11.642L3.58237 11.2485C3.03448 13.2634 3.16667 15.3925 3.95889 17.3301L5.34731 16.7624ZM18.9702 11.642C19.4313 13.3377 19.3205 15.129 18.6527 16.7624L20.0411 17.3301C20.8333 15.3926 20.9655 13.2634 20.4176 11.2485L18.9702 11.642ZM13.9211 20.1015C12.6488 20.2995 11.3512 20.2995 10.0788 20.1015L9.84819 21.5837C11.2734 21.8054 12.7266 21.8054 14.1518 21.5837L13.9211 20.1015ZM8.23117 8.5205C10.7161 8.01766 13.2839 8.01766 15.7688 8.5205L16.0663 7.0503C13.3851 6.50773 10.6149 6.50773 7.93367 7.0503L8.23117 8.5205ZM9.33011 19.985C7.55413 19.7086 6.08232 18.56 5.4402 16.9895L4.05177 17.5572C4.9021 19.6369 6.82848 21.1137 9.09946 21.4671L9.33011 19.985ZM14.9005 21.4671C17.1715 21.1137 19.0979 19.6369 19.9482 17.5573L18.5598 16.9896C17.9177 18.56 16.4458 19.7086 14.6699 19.985L14.9005 21.4671ZM15.7688 8.5205C17.3088 8.83212 18.5082 9.94301 18.8937 11.3606L20.3411 10.967C19.7992 8.974 18.1334 7.46858 16.0663 7.0503L15.7688 8.5205ZM7.93367 7.0503C5.86662 7.46858 4.20082 8.974 3.6589 10.967L5.10635 11.3606C5.4918 9.94301 6.69121 8.83212 8.23117 8.5205L7.93367 7.0503ZM14.4909 7.72404L14.2779 8.2088L15.6511 8.81226L15.8642 8.3275L14.4909 7.72404ZM8.13585 8.3275L8.34887 8.81226L9.72213 8.2088L9.50911 7.72404L8.13585 8.3275ZM11.3691 3.81351L11.4866 3.79346L11.2342 2.31484L11.1168 2.33489L11.3691 3.81351ZM12.5134 3.79346L12.6309 3.81351L12.8832 2.33489L12.7658 2.31484L12.5134 3.79346ZM14.6928 5.70931C14.8411 6.38397 14.7712 7.08613 14.4909 7.72404L15.8642 8.3275C16.2716 7.40023 16.3747 6.37415 16.1579 5.38741L14.6928 5.70931ZM7.84213 5.38741C7.62533 6.37415 7.72837 7.40023 8.13585 8.3275L9.50911 7.72404C9.22878 7.08613 9.15895 6.38397 9.30719 5.70931L7.84213 5.38741ZM11.4866 3.79346C11.8261 3.73551 12.1739 3.73551 12.5134 3.79346L12.7658 2.31484C12.2592 2.22839 11.7408 2.22839 11.2342 2.31484L11.4866 3.79346ZM16.1579 5.38741C15.8102 3.80521 14.5013 2.61105 12.8832 2.33489L12.6309 3.81351C13.6808 3.99271 14.4835 4.75649 14.6928 5.70931L16.1579 5.38741ZM9.30719 5.70931C9.51654 4.75649 10.3192 3.99271 11.3691 3.81351L11.1168 2.33489C9.49869 2.61105 8.18977 3.80521 7.84213 5.38741L9.30719 5.70931Z"
              fill="#1C1243"
            />
          </svg>
        }
        onChange={handleChangePassword}
      />

      <ReCAPTCHA
        sitekey={RECAPTCHA.SITE_KEY ?? ""}
        ref={captchaRef}
        onChange={handleChangeCaptcha}
        onExpired={handleChangeExpired}
      />

      <button
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center gap-[0.125rem]",
          "w-full",
          "rounded-[1rem]",
          "bg-[#643FDB]",
          "disabled:bg-[#5C5F62]",
          "px-[0.75rem] py-[0.75rem]",
          "text-[#FFFFFF] text-[15px] font-medium",
          "disabled:text-[#FFFFFF]"
        )}
        disabled={
          isLoadingPostAuthLogin ||
          !(watch(forms.form.user.captcha) as string).length
        }
        onClick={handleClickLogin}
      >
        {dict.cta.primary.label}
      </button>
    </div>
  );
};
