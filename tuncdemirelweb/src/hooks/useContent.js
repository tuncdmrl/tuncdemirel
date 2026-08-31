import { useContext } from 'react'
import { ContentContext } from '../app/ContentContext.js'

/** İçerik servisine erişim. */
export function useContent() {
  const service = useContext(ContentContext)
  if (!service) {
    throw new Error('useContent, ContentProvider içinde kullanılmalı.')
  }
  return service
}
