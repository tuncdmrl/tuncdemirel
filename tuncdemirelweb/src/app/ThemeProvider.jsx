import { useCallback, useEffect, useMemo, useState } from 'react'
import { THEMES, THEME_STORAGE_KEY, ThemeContext } from './ThemeContext.js'

const THEME_COLORS = { dark: '#05080d', light: '#e7eaee' }

/** Kayıtlı tercih varsa onu, yoksa işletim sisteminin tercihini kullanır. */
function readInitialTheme() {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (THEMES.includes(saved)) return saved
  } catch {
    /* depolama kapalı olabilir; sistem tercihine düşeriz */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', THEME_COLORS[theme])

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      /* tercih kaydedilemedi; oturum içinde çalışmaya devam eder */
    }
  }, [theme])

  const setTheme = useCallback((next) => {
    if (THEMES.includes(next)) setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
