export const forms = {
    navbar: {
        dropdown: "dropdown-navbar-dashboard",
        email: "email-navbar-dashboard",
        role: "role-navbar-dashboard",
    },
    sidebar: {
        is_collapse: "is_collapse-sidebar-dashboard",
    },
    user: {
        id_tms: "id_tms-user-dashboard",
        first_name: "first_name-user-dashboard",
        full_name: "full_name-user-dashboard",
        display_name: "display_name-user-dashboard",
        access_name: "access_name-user-dashboard",
        email: "email-user-dashboard",
    },
    jira_verification: {
        is_open: "is_open-jira_verification_dashboard",
        state: "state-jira_verification_dashboard",
        id: "id-jira_verification_dashboard",
        jira_link: "jira_link-jira_verification_dashboard",
        resubmit_new_id: "resubmit_new_id-jira_verification_dashboard",
    },
    data: {
        tms_last_updated_time: "tms_last_updated_time-data_dashboard",
        jira_last_updated_time: "jira_last_updated_time-data_dashboard",
    },
} as const;
