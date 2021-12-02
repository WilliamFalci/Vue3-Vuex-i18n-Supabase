import { createI18n } from 'vue-i18n'
import { dictionary } from './locales/supported-locales';

function getBrowserLocale(options = {}) {
  const defaultOptions = { countryCodeOnly: false }

  const opt = { ...defaultOptions, ...options }

  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language

  if (!navigatorLocale) {
    return undefined
  }

  const trimmedLocale = opt.countryCodeOnly
    ? navigatorLocale.trim().split(/-|_/)[0]
    : navigatorLocale.trim()

  return trimmedLocale
}

function supportedLocalesInclude(locale) {
  return Object.keys(dictionary).includes(locale)
}

function getStartingLocale() {
  // CHECK local storage first then browser
  let language_choosed = localStorage.getItem('userLanguage');
  if (language_choosed && supportedLocalesInclude(language_choosed) ) {
    return language_choosed;
  }
  const browserLocale = getBrowserLocale({ countryCodeOnly: true })

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "en"
  }
}

export default createI18n({
  legacy: false,
  locale: getStartingLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: dictionary,
  globalInjection: true
})
