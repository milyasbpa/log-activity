import { forms } from "./data";

export const navbar = [
    forms.navbar.dropdown,
    forms.navbar.email,
    forms.navbar.role,
] as const;

export const sidebar = [forms.sidebar.is_collapse] as const;

export const user = [
    forms.user.id_tms,
    forms.user.full_name,
    forms.user.first_name,
    forms.user.display_name,
    forms.user.access_name,
    forms.user.email,
] as const;

export const data = [
    forms.data.tms_last_updated_time,
    forms.data.jira_last_updated_time,
] as const;

export const jira_verification = [
    forms.jira_verification.is_open,
    forms.jira_verification.state,
    forms.jira_verification.id,
    forms.jira_verification.jira_link,
    forms.jira_verification.resubmit_new_id,
] as const;

export type DashboardFormDataKeys =
    | (typeof navbar)[number]
    | (typeof sidebar)[number]
    | (typeof user)[number]
    | (typeof data)[number]
    | (typeof jira_verification)[number];

export type DashboardForm = Record<
    DashboardFormDataKeys,
    boolean | string | undefined
>;
