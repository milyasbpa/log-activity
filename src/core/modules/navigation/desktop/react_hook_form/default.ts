import { forms } from "./data";
import { NavigationDesktopForm } from "./type";

export const defaultValues: NavigationDesktopForm = {
  // navbar
  [forms.navbar.dropdown.is_open]: false,

  //  user
  [forms.user.name]: "Alwan Thio",
  [forms.user.role]: "Designer",
  [forms.user.initial]: "A",
};
