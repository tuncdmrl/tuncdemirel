import { useEffect } from 'react'
import { useUi } from './useLocale.js'

/** Sayfa başlığını yönetir; dil değiştiğinde de kendini günceller. */
export function useDocumentTitle(title) {
  const { meta } = useUi()

  useEffect(() => {
    document.title = title ? `${title} · ${meta.baseTitle}` : meta.baseTitle
  }, [title, meta.baseTitle])
}
