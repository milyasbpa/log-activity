import { forms } from "./data";
import { DashboardForm } from "./type";

export const defaultValues: DashboardForm = {
    // navbar
    [forms.navbar.dropdown]: false,
    [forms.navbar.email]: "",

    [forms.navbar.role]: "",

    // sidebar
    [forms.sidebar.is_collapse]: false,

    // user
    [forms.user.id_tms]: "" as string,
    [forms.user.first_name]: "" as string,
    [forms.user.full_name]: "" as string,
    [forms.user.display_name]: "" as string,
    [forms.user.access_name]: "" as string,
    [forms.user.email]: "" as string,

    // data
    [forms.data.jira_last_updated_time]: "" as string,
    [forms.data.tms_last_updated_time]: "" as string,

    // jira_verification
    [forms.jira_verification.is_open]: false as boolean,
    [forms.jira_verification.state]: "jira_check" as string,
    [forms.jira_verification.id]: "" as string,
    [forms.jira_verification.jira_link]: "" as string,
    [forms.jira_verification.resubmit_new_id]: "" as string,
};
