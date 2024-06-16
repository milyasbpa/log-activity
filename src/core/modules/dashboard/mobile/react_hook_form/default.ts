import { forms } from "./data";
import { DashboardMobileForm } from "./type";

export const defaultValues: DashboardMobileForm = {
  // navbar
  [forms.navbar.dropdown.is_open]: false,

  //  user
  [forms.user.name]: "Alwan Thio",
  [forms.user.role]: "Designer",
  [forms.user.initial]: "A",
};
