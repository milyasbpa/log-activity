import { forms } from "./data";
import { ActivityDesktopForm } from "./type";

export const defaultValues: ActivityDesktopForm = {
  // filter
  [forms.filter.period]: [] as {
    id: string;
    name: string;
  }[],
};
