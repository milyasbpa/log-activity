import { forms } from "./data";

export const summary = [forms.summary.data] as const;

export const create = [
  forms.create.is_open,
  forms.create.form.project.value,
  forms.create.form.project.options,
  forms.create.form.activity.value,
  forms.create.form.priority.value,
  forms.create.form.priority.options,
  forms.create.form.date.value,
  forms.create.form.start.value,
  forms.create.form.start.options,
  forms.create.form.end.value,
  forms.create.form.end.options,
  forms.create.form.status.value,
  forms.create.form.status.options,
] as const;

export const update = [
  forms.update.selected_id,
  forms.update.is_open,
  forms.update.form.project.value,
  forms.update.form.project.options,
  forms.update.form.activity.value,
  forms.update.form.priority.value,
  forms.update.form.priority.options,
  forms.update.form.date.value,
  forms.update.form.start.value,
  forms.update.form.start.options,
  forms.update.form.end.value,
  forms.update.form.end.options,
  forms.update.form.status.value,
  forms.update.form.status.options,
] as const;

export type ActivityDesktopFormDataKeys =
  | (typeof summary)[number]
  | (typeof create)[number]
  | (typeof update)[number];

export type ActivityDesktopForm = Record<
  ActivityDesktopFormDataKeys,
  | string
  | number
  | boolean
  | { id: string; name: string }[]
  | { id: string; value: string }[]
  | null
  | { id: string; name: string }
  | Date
>;
