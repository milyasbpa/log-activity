import { forms } from "./data";
import { ActivityMobileForm } from "./type";

export interface TodayActivities {
  id: string;
  name: string;
  status: string;
  project: string;
  range: string;
  duration: string;
}

export interface MonthActivities {
  id: string;
  name: string;
  status: string;
  project: string;
  time: string;
}

export const defaultValues: ActivityMobileForm = {
  // summary
  [forms.summary.status]: [] as {
    id: string;
    name: string;
  }[],

  // today_activities
  [forms.today_activities.data]: [] as TodayActivities[],

  // month_activities
  [forms.month_activities.search]: "" as string,
  [forms.month_activities.data]: [] as MonthActivities[],

  // create
  [forms.create.is_open]: false as boolean,
  [forms.create.form.project.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.project.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.create.form.activity.value]: "" as string,
  [forms.create.form.priority.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.priority.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.create.form.start.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.start.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.create.form.end.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.end.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.create.form.status.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.status.options]: [] as {
    id: string;
    name: string;
  }[],
};
