import {
    USER_FORM_USERNAME_LOGIN,
    USER_FORM_PASSWORD_LOGIN,
    USER_FORM_CAPTCHA_LOGIN,
} from "../keys";

export type UserFormLoginReactHookForm = {
    [USER_FORM_USERNAME_LOGIN]: string;
    [USER_FORM_PASSWORD_LOGIN]: string;
    [USER_FORM_CAPTCHA_LOGIN]: string;
};
