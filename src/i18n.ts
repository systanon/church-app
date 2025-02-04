import { nextTick, type WritableComputedRef } from "vue";
import { createI18n, type I18n } from "vue-i18n";
import en from "./locales/en.json";
import ua from "./locales/ua.json";

type MessageSchema = typeof en;

export const SUPPORT_LOCALES = ["en", "ua"];

const DEFAULT_LOCAL = "en";

export function setupI18n(options = { locale: DEFAULT_LOCAL }) {
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale);

  return i18n;
}

export function setI18nLanguage(i18n: I18n, locale: string) {
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as WritableComputedRef<string>).value = locale;
  }
  const _document = document.querySelector("html") as HTMLButtonElement | null;
  _document && _document.setAttribute("lang", locale);
}

export async function loadLocaleMessages(i18n: I18n, locale = DEFAULT_LOCAL) {
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
  );

  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

const i18nConfig = {
  locale: DEFAULT_LOCAL,
  fallbackLocale: DEFAULT_LOCAL,
  messages: {
    en,
    ua
  },
};
console.log(i18nConfig)
export const i18n = createI18n<[MessageSchema], "en" | "ua">(i18nConfig);
export const setLocal = (local = DEFAULT_LOCAL) => {
  localStorage.setItem("locale", local);
  setI18nLanguage(i18n, local);
};
const savedLocal = localStorage.getItem("locale") as string;
const currentLocal = SUPPORT_LOCALES.includes(savedLocal)
  ? savedLocal
  : DEFAULT_LOCAL;
setLocal(currentLocal);
