import { forms } from "./data";

export const filter = [forms.filter.period] as const;

export type ActivityMobileFormDataKeys = (typeof filter)[number];

export type ActivityMobileForm = Record<
  ActivityMobileFormDataKeys,
  | string
  | number
  | boolean
  | { id: string; name: string }[]
  | null
  | { id: string; name: string }
>;
