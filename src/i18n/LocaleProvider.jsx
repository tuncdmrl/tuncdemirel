import { useCallback, useEffect, useMemo, useState } from 'react'
import { LocaleContext } from './LocaleContext.js'
import { DEFAULT_LOCALE, LOCALES, LOCALE_STORAGE_KEY } from './locales.js'
import { uiStrings } from './ui/index.js'

/** Kayıtlı tercih varsa onu, yoksa tarayıcı dilini kullanır. */
function readInitialLocale() {
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (LOCALES.includes(saved)) return saved
  } catch {
    /* depolama kapalı olabilir; tarayıcı diline düşeriz */
  }
  const browser = window.navigator.language?.slice(0, 2)
  return LOCALES.includes(browser) ? browser : DEFAULT_LOCALE
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(readInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', uiStrings[locale].meta.description)

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      /* tercih kaydedilemedi; oturum içinde çalışmaya devam eder */
    }
  }, [locale])

  const setLocale = useCallback((next) => {
    if (LOCALES.includes(next)) setLocaleState(next)
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, ui: uiStrings[locale] }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
