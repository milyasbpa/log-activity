import { useMutation } from "@tanstack/react-query";
import { fetchAuthPostLDAPLogin } from "@/core/services/auth";
import { LoginReactQueryKey } from "../keys";
import {
  PostAuthLoginErrorResponseInterface,
  PostAuthLoginPayloadRequestInterface,
  PostAuthLoginSuccessResponseInterface,
} from "@/core/models/api/auth";
import { useFormContext } from "react-hook-form";

import { getDictionaries } from "../../i18n";

import { useGetAuthWhoAmILogin } from "./useGetWhoAmI.login";
import { forms } from "../../react-hook-form/data";
import { LoginMobileForm } from "../../react-hook-form/type";
export const usePostAuthLoginLDAPFormLogin = () => {
  const { watch, setValue } = useFormContext<LoginMobileForm>();
  const dict = getDictionaries("en");
  const { mutate: getWhoAmI } = useGetAuthWhoAmILogin();
  return useMutation<
    PostAuthLoginSuccessResponseInterface,
    PostAuthLoginErrorResponseInterface
  >({
    mutationKey: LoginReactQueryKey.PostAuthLogin(),
    mutationFn: () => {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("username", watch(forms.form.sso.nik) as string);
      urlSearchParams.append(
        "password",
        watch(forms.form.sso.password) as string
      );
      urlSearchParams.append(
        "captcha_token",
        watch(forms.form.sso.captcha) as string
      );

      const payload: PostAuthLoginPayloadRequestInterface = {
        body: urlSearchParams,
      };

      return fetchAuthPostLDAPLogin(payload);
    },
    retry: 0,
    onError(err) {
      setValue(forms.form.sso.captcha, "");
      if (err.status === 404) {
        if (err.name === "captcha_error") {
          //   store.setNotification({
          //     is_open: true,
          //     title: dict.errors.captcha.message,
          //     description: dict.errors.captcha.description,
          //   });
        } else {
          //   store.setNotification({
          //     is_open: true,
          //     title: dict.errors.invalid_account.message,
          //     description: dict.errors.invalid_account.description,
          //   });
        }
      } else {
        // store.setNotification({
        //   is_open: true,
        //   title: dict.errors.rate_limiter.message,
        //   description: dict.errors.rate_limiter.description,
        // });
      }
    },
    onSuccess(data) {
      setValue(forms.form.sso.captcha, "");
      if (data !== null) {
        getWhoAmI();
      }
    },
  });
};
