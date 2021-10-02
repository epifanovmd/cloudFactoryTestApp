import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";

import { enLocale } from "./locales/en";
import { ruLocale } from "./locales/ru";
import { esLocale } from "./locales/es";
import { zhLocale } from "./locales/zh";

export type ILanguageType = "ru" | "en" | "zh" | "es";

export const langResources = {
  en: { translation: { ...enLocale } },
  ru: { translation: { ...ruLocale } },
  es: { translation: { ...esLocale } },
  zh: { translation: { ...zhLocale } },
};

export interface IInitLocalizationParams {
  initLang?: ILanguageType;
  isServer?: boolean;
}

export const initLocalization = ({
  initLang = "en",
}: IInitLocalizationParams) => {
  i18next
    .use(initReactI18next)
    .init({
      fallbackLng: initLang,
      lng: getLocales()[0].languageCode,
      debug: false,
      load: "languageOnly",
      interpolation: {
        escapeValue: false,
        prefix: "",
      },
      resources: langResources,
    })
    .then();
};

export const i18n = i18next;
