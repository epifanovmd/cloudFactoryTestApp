import { useTranslation as useT } from "react-i18next";
import { i18n } from "i18next";
import { ruLocale } from "../locales/ru";

type Join<K, P> = K extends string | number ?
  P extends string | number ? `${K}${"" extends P ? "" : "."}${P}`
    : never : never;

type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
  {
    [K in keyof T]-?: K extends string | number ?
    `${K}` | Join<K, Paths<T[K]>>
    : never
  }[keyof T] : ""

export type II18nPaths = Paths<typeof ruLocale>;

export const useTranslation: () => {
  t: (path: II18nPaths, options?: object) => string;
  i18n: i18n;
} = useT;
