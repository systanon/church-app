import { nextTick, type WritableComputedRef } from "vue";
import { createI18n, type I18n } from "vue-i18n";
import en from "./locales/en.json";
import ua from "./locales/ua.json";

type MessageSchema = typeof en;

export const SUPPORT_LOCALES = ["en", "ua"];

const DEFAULT_LOCAL = "en";

const i18nConfig = {
  legacy: false,
  locale: DEFAULT_LOCAL,
  fallbackLocale: DEFAULT_LOCAL,
  messages: { en, ua },
};

export const i18n = createI18n<[MessageSchema], "en" | "ua">(i18nConfig);

export function setI18nLanguage(i18n: I18n, locale: string) {
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as WritableComputedRef<string>).value = locale;
  }

  document.documentElement.setAttribute("lang", locale);
}


export async function loadLocaleMessages(i18n: I18n, locale = DEFAULT_LOCAL) {
  if (!SUPPORT_LOCALES.includes(locale)) return;

  try {
    const messages = await import(
      /* @vite-ignore */
      `./locales/${locale}.json`
    );

    i18n.global.setLocaleMessage(locale, messages.default);
    await nextTick();
  } catch (error) {
    console.error(`Error loading locale ${locale}:`, error);
  }
}

export async function setLocal(locale = DEFAULT_LOCAL) {
  if (!SUPPORT_LOCALES.includes(locale)) {
    locale = DEFAULT_LOCAL;
  }

  localStorage.setItem("locale", locale);
  await loadLocaleMessages(i18n, locale);
  setI18nLanguage(i18n, locale);
}

const savedLocal = localStorage.getItem("locale");
const currentLocal = SUPPORT_LOCALES.includes(savedLocal!) ? savedLocal! : DEFAULT_LOCAL;
setLocal(currentLocal);

