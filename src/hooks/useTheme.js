import { useContext } from 'react'
import { ThemeContext } from '../app/ThemeContext.js'

/** Aktif temaya ve değiştiricilere erişim. */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme, ThemeProvider içinde kullanılmalı.')
  }
  return context
}
