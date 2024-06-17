import { useMutation } from "@tanstack/react-query";
import { fetchAuthPostLogin } from "@/core/services/auth";
import { LoginReactQueryKey } from "../keys";
import {
  PostAuthLoginErrorResponseInterface,
  PostAuthLoginPayloadRequestInterface,
  PostAuthLoginSuccessResponseInterface,
} from "@/core/models/api/auth";
import { useLoginStore } from "../../zustand/store";
import { useFormContext } from "react-hook-form";
import { UserFormLoginReactHookForm } from "../../react-hook-form/types";
import {
  USER_FORM_PASSWORD_LOGIN,
  USER_FORM_USERNAME_LOGIN,
  USER_FORM_CAPTCHA_LOGIN,
} from "../../react-hook-form/keys";
import { getDictionaries } from "../../i18n";
import { useGetAuthWhoAmILogin } from "./useGetWhoAmI.login";

export const usePostAuthLoginUserFormLogin = () => {
  const store = useLoginStore();
  const dict = getDictionaries("en");
  const { mutate: getWhoAmI } = useGetAuthWhoAmILogin();
  const { watch, setValue } = useFormContext<UserFormLoginReactHookForm>();
  return useMutation<
    PostAuthLoginSuccessResponseInterface,
    PostAuthLoginErrorResponseInterface
  >({
    mutationKey: LoginReactQueryKey.PostAuthLogin(),
    mutationFn: () => {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("username", watch(USER_FORM_USERNAME_LOGIN));
      urlSearchParams.append("password", watch(USER_FORM_PASSWORD_LOGIN));
      urlSearchParams.append("captcha_token", watch(USER_FORM_CAPTCHA_LOGIN));

      const payload: PostAuthLoginPayloadRequestInterface = {
        body: urlSearchParams,
      };

      return fetchAuthPostLogin(payload);
    },
    retry: 0,
    onError(err) {
      setValue(USER_FORM_CAPTCHA_LOGIN, "");
      if (err.status === 404) {
        if (err.name === "captcha_error") {
          store.setNotification({
            is_open: true,
            title: dict.errors.captcha.message,
            description: dict.errors.captcha.description,
          });
        } else {
          store.setNotification({
            is_open: true,
            title: dict.errors.invalid_account.message,
            description: dict.errors.invalid_account.description,
          });
        }
      } else {
        store.setNotification({
          is_open: true,
          title: dict.errors.rate_limiter.message,
          description: dict.errors.rate_limiter.description,
        });
      }
    },
    onSuccess(data) {
      setValue(USER_FORM_CAPTCHA_LOGIN, "");
      if (data !== null) {
        getWhoAmI();
      }
    },
  });
};
