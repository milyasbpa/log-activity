import { Locale } from "@/core/models/i18n";
import en from "./locales/en.json";

const dictionaries: { [key: string]: typeof en } = {
  en: en,
};

export const getDictionaries = (locale: Locale) => dictionaries[locale];
