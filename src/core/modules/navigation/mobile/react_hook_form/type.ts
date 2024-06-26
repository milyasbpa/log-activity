import { forms } from "./data";

export const navbar = [forms.navbar.dropdown.is_open] as const;

export const user = [
  forms.user.name,
  forms.user.initial,
  forms.user.role,
] as const;

export type NavigationMobileFormDataKeys =
  | (typeof navbar)[number]
  | (typeof user)[number];

export type NavigationMobileForm = Record<
  NavigationMobileFormDataKeys,
  boolean | string | undefined
>;
