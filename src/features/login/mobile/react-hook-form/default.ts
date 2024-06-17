import { forms } from "./data";
import { LoginMobileForm } from "./type";

export const defaultValues: LoginMobileForm = {
  // tab
  [forms.tab.active]: {
    id: "SSO",
    name: "SSO",
  } as { id: string; name: string },

  // form
  // sso
  [forms.form.sso.nik]: "" as string,
  [forms.form.sso.password]: "" as string,
  [forms.form.sso.captcha]: "" as string,
  // user
  [forms.form.user.username]: "" as string,
  [forms.form.user.password]: "" as string,
  [forms.form.user.captcha]: "" as string,
};
