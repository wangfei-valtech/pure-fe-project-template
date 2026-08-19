import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { Button } from './components/ui/button'
import { getEnvConfig } from './lib/env'
import { useTheme } from './hooks/useTheme'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

export default function App() {
  const { t } = useTranslation()
  const env = useMemo(() => getEnvConfig(), [])
  const { theme, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border bg-card/80">
          <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <h1 className="text-lg font-bold">{env.appTitle}</h1>
            <ul className="flex gap-4">
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
            <Button
              variant="default"
              size="icon"
              onClick={toggleTheme}
              className="group h-9 w-9 rounded-full shadow-sm transition-[transform,box-shadow,background-color] duration-200 hover:scale-105 hover:shadow-md active:scale-95"
              type="button"
              aria-label={theme === 'dark' ? '切换浅色模式' : '切换深色模式'}
              aria-pressed={theme === 'dark'}
              title={theme === 'dark' ? '切换浅色模式' : '切换深色模式'}
            >
              {theme === 'dark' ? (
                <Sun className="size-4 transition-all duration-300 group-hover:rotate-90" />
              ) : (
                <Moon className="size-4 transition-all duration-300 group-hover:-rotate-90" />
              )}
            </Button>
          </nav>
        </header>
        <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
