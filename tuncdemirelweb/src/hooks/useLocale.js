import { useContext } from 'react'
import { LocaleContext } from '../i18n/LocaleContext.js'

/** Aktif dil, dil değiştirici ve o dile ait arayüz metinleri. */
export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale, LocaleProvider içinde kullanılmalı.')
  }
  return context
}

/** Yalnızca arayüz metinlerine kısa yol. */
export function useUi() {
  return useLocale().ui
}
