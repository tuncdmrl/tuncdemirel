import { useMemo } from 'react'
import { ContentService } from '../core/services/ContentService.js'
import { useLocale } from '../hooks/useLocale.js'
import { ContentContext } from './ContentContext.js'

/**
 * Aktif dile ait içerik servisini ağaca dağıtır. Dışarıdan bir servis
 * geçilebildiği için önizleme ya da test amaçlı içerik değiştirmek kolay.
 */
export function ContentProvider({ service, children }) {
  const { locale } = useLocale()
  const value = useMemo(
    () => service ?? ContentService.forLocale(locale),
    [service, locale],
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}
