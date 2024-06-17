import { forms } from "./data";

export const form = [
  forms.form.sso.nik,
  forms.form.sso.password,
  forms.form.sso.captcha,
  // user
  forms.form.user.username,
  forms.form.user.password,
  forms.form.user.captcha,
] as const;

export type LoginMobileFormDataKeys = (typeof form)[number];

export type LoginMobileForm = Record<
  LoginMobileFormDataKeys,
  | string
  | number
  | boolean
  | { id: string; name: string }[]
  | { id: string; value: string }[]
  | null
  | { id: string; name: string }
>;
