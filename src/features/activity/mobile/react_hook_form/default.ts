import { forms } from "./data";
import { ActivityMobileForm } from "./type";

export const defaultValues: ActivityMobileForm = {
  // filter
  [forms.filter.period]: [] as {
    id: string;
    name: string;
  }[],
};
