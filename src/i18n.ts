import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ua from './locales/ua.json';

const DEFAULT_LOCALE = 'en';
const SUPPORT_LOCALES = ['en', 'ua'] as const;
const savedLocale = localStorage.getItem('locale') ?? DEFAULT_LOCALE;
const currentLocale = SUPPORT_LOCALES.includes(savedLocale as 'ua' | 'en')
  ? savedLocale
  : DEFAULT_LOCALE;

export const i18n = createI18n({
  legacy: false,
  locale: currentLocale,
  fallbackLocale: DEFAULT_LOCALE,
  globalInjection: true,
  messages: { en, ua },
});

export async function setLocale(locale: string) {
  if (!SUPPORT_LOCALES.includes(locale as 'ua' | 'en')) return;

  i18n.global.locale.value = locale as 'ua' | 'en';
  localStorage.setItem('locale', locale);
  document.documentElement.setAttribute('lang', locale);
}

setLocale(currentLocale);
