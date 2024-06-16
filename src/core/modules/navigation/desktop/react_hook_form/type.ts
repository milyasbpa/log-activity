import { forms } from "./data";

export const navbar = [forms.navbar.dropdown.is_open] as const;

export const user = [
  forms.user.name,
  forms.user.initial,
  forms.user.role,
] as const;

export const sidebar = [forms.sidebar.is_collapse] as const;

export type NavigationDesktopFormDataKeys =
  | (typeof navbar)[number]
  | (typeof user)[number]
  | (typeof sidebar)[number];

export type NavigationDesktopForm = Record<
  NavigationDesktopFormDataKeys,
  boolean | string | undefined
>;
