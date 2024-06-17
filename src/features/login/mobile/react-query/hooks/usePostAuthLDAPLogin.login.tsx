import { useMutation } from "@tanstack/react-query";
import { fetchAuthPostLDAPLogin } from "@/core/services/auth";
import { LoginReactQueryKey } from "../keys";
import {
  PostAuthLoginErrorResponseInterface,
  PostAuthLoginPayloadRequestInterface,
  PostAuthLoginSuccessResponseInterface,
} from "@/core/models/api/auth";
import { useLoginStore } from "../../zustand/store";
import { useFormContext } from "react-hook-form";
import { LDAPFormLoginReactHookForm } from "../../react-hook-form/types";
import {
  LDAP_FORM_PASSWORD_LOGIN,
  LDAP_FORM_NIK_LOGIN,
  LDAP_FORM_CAPTCHA_LOGIN,
} from "../../react-hook-form/keys";
import { getDictionaries } from "../../i18n";
import { useGetAuthWhoAmILogin } from "./useGetWhoAmI.login";
export const usePostAuthLoginLDAPFormLogin = () => {
  const store = useLoginStore();
  const { watch, setValue } = useFormContext<LDAPFormLoginReactHookForm>();
  const dict = getDictionaries("en");
  const { mutate: getWhoAmI } = useGetAuthWhoAmILogin();
  return useMutation<
    PostAuthLoginSuccessResponseInterface,
    PostAuthLoginErrorResponseInterface
  >({
    mutationKey: LoginReactQueryKey.PostAuthLogin(),
    mutationFn: () => {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("username", watch(LDAP_FORM_NIK_LOGIN));
      urlSearchParams.append("password", watch(LDAP_FORM_PASSWORD_LOGIN));
      urlSearchParams.append("captcha_token", watch(LDAP_FORM_CAPTCHA_LOGIN));

      const payload: PostAuthLoginPayloadRequestInterface = {
        body: urlSearchParams,
      };

      return fetchAuthPostLDAPLogin(payload);
    },
    retry: 0,
    onError(err) {
      setValue(LDAP_FORM_CAPTCHA_LOGIN, "");
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
      setValue(LDAP_FORM_CAPTCHA_LOGIN, "");
      if (data !== null) {
        getWhoAmI();
      }
    },
  });
};
