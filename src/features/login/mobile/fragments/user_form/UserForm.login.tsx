import { useRef } from "react";
import clsx from "clsx";
import { PasswordFieldComponent } from "@/core/components/password_field";
import { getDictionaries } from "../../i18n";
import { UserFormLoginReactHookForm } from "../../react-hook-form/types";
import { useFormContext } from "react-hook-form";
import {
  USER_FORM_CAPTCHA_LOGIN,
  USER_FORM_PASSWORD_LOGIN,
  USER_FORM_USERNAME_LOGIN,
} from "../../react-hook-form/keys";
import { usePostAuthLoginUserFormLogin } from "../../react-query/hooks/usePostAuthLogin.login";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA } from "@/core/constants";

export const UserFormLogin = () => {
  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const { watch, setValue } = useFormContext<UserFormLoginReactHookForm>();

  const { mutate: postAuthLogin, isPending: isLoadingPostAuthLogin } =
    usePostAuthLoginUserFormLogin();

  const dict = getDictionaries("en").form.user;

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(USER_FORM_USERNAME_LOGIN, e.currentTarget.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(USER_FORM_PASSWORD_LOGIN, e.currentTarget.value);
  };
  const handleClickLogin = () => {
    captchaRef.current?.reset();
    postAuthLogin();
  };

  const handleChangeCaptcha = (token: string | null) => {
    if (!token) {
      return;
    }

    setValue(USER_FORM_CAPTCHA_LOGIN, token);
  };

  const handleChangeExpired = () => {
    setValue(USER_FORM_CAPTCHA_LOGIN, "");
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-y-[2rem]",
        "w-full",
        "py-[1.5rem]"
      )}
    >
      {/* <Textfield
        label={dict.username.label}
        placeholder={dict.username.placeholder}
        block
        disabled={false}
        defaultValue={watch(USER_FORM_USERNAME_LOGIN)}
        onChange={handleChangeUserName}
      /> */}

      <PasswordFieldComponent
        label={dict.password.label}
        placeholder={dict.password.placeholder}
        disabled={false}
        defaultValue={watch(USER_FORM_PASSWORD_LOGIN)}
        onChange={handleChangePassword}
      />

      <ReCAPTCHA
        sitekey={RECAPTCHA.SITE_KEY ?? ""}
        ref={captchaRef}
        onChange={handleChangeCaptcha}
        onExpired={handleChangeExpired}
      />

      <button
        data-testid={"login-button"}
        className={clsx("")}
        disabled={
          isLoadingPostAuthLogin || !watch(USER_FORM_CAPTCHA_LOGIN)?.length
        }
        onClick={handleClickLogin}
      >
        {dict.cta.primary.label}
      </button>
    </div>
  );
};
