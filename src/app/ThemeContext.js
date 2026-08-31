import { createContext } from 'react'

/** Tema durumunu taşıyan bağlam. Sağlayıcısı: `ThemeProvider`. */
export const ThemeContext = createContext(null)

export const THEME_STORAGE_KEY = 'tunc-tema'
export const THEMES = ['dark', 'light']
