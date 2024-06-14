import { forms } from "./data";

export const filter = [forms.filter.period] as const;

export type ActivityDesktopFormDataKeys = (typeof filter)[number];

export type ActivityDesktopForm = Record<
  ActivityDesktopFormDataKeys,
  | string
  | number
  | boolean
  | { id: string; name: string }[]
  | null
  | { id: string; name: string }
>;
