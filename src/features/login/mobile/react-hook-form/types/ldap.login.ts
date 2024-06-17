import {
    LDAP_FORM_NIK_LOGIN,
    LDAP_FORM_PASSWORD_LOGIN,
    LDAP_FORM_CAPTCHA_LOGIN,
} from "../keys";

export type LDAPFormLoginReactHookForm = {
    [LDAP_FORM_NIK_LOGIN]: string;
    [LDAP_FORM_PASSWORD_LOGIN]: string;
    [LDAP_FORM_CAPTCHA_LOGIN]: string;
};
