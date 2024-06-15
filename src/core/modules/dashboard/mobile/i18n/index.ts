import en from "./locales/en.json";
import { Locale } from "src/core/models/app/i18";

const dictionaries: { [key: string]: typeof en } = {
    en: en,
};

export const getDashboardDictionaries = (locale: Locale) =>
    dictionaries[locale];
