import { forms } from "./data";
import { NavigationMobileForm } from "./type";

export const defaultValues: NavigationMobileForm = {
  // navbar
  [forms.navbar.dropdown.is_open]: false,

  //  user
  [forms.user.name]: "Alwan Thio",
  [forms.user.role]: "Designer",
  [forms.user.initial]: "A",
};
