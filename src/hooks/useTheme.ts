import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const HTML_THEME_ATTRIBUTE = 'data-theme'

function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyThemeClass(theme: Theme) {
  const root = document.documentElement

  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  root.setAttribute(HTML_THEME_ATTRIBUTE, theme)
  root.style.colorScheme = theme
}

function getStoredTheme(): Theme | null {
  try {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY)
    return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : null
  } catch {
    return null
  }
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const appliedTheme = document.documentElement.getAttribute(HTML_THEME_ATTRIBUTE)
  if (appliedTheme === 'dark' || appliedTheme === 'light') {
    return appliedTheme
  }

  return getStoredTheme() ?? getSystemTheme()
}

export function useTheme() {
  const [theme, setThemeValue] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyThemeClass(theme)
  }, [theme])

  const persistTheme = useCallback((value: Theme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore localStorage write failures
    }
  }, [])

  const setTheme = useCallback(
    (value: Theme) => {
      applyThemeClass(value)
      persistTheme(value)
      setThemeValue(value)
    },
    [persistTheme],
  )

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
  }, [setTheme, theme])

  return { theme, setTheme, toggleTheme }
}
