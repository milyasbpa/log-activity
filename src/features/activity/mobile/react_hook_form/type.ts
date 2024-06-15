import { forms } from "./data";
import { MonthActivities, TodayActivities } from "./default";

export const summary = [forms.summary.status] as const;

export const today_activities = [forms.today_activities.data] as const;

export const month_activities = [forms.month_activities.data] as const;

export const create = [
  forms.create.is_open,
  forms.create.form.project.value,
  forms.create.form.project.options,
  forms.create.form.activity.value,
  forms.create.form.priority.value,
  forms.create.form.priority.options,
  forms.create.form.start.value,
  forms.create.form.start.options,
  forms.create.form.end.value,
  forms.create.form.end.options,
  forms.create.form.status.value,
  forms.create.form.status.options,
] as const;

export type ActivityMobileFormDataKeys =
  | (typeof summary)[number]
  | (typeof today_activities)[number]
  | (typeof month_activities)[number]
  | (typeof create)[number];

export type ActivityMobileForm = Record<
  ActivityMobileFormDataKeys,
  | string
  | number
  | boolean
  | { id: string; name: string }[]
  | null
  | { id: string; name: string }
  | TodayActivities[]
  | MonthActivities[]
>;
