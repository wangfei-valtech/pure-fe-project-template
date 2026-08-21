import { chunk } from 'es-toolkit'
import { useBoolean } from 'ahooks'
import { useMemo } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { useTranslation } from 'react-i18next'
import { getEnvConfig } from '../lib/env'
import { countAtom, doubleCountAtom } from '../store/counterAtom'
import { Button } from '../components/ui/button'

const groupedNumbers = chunk([1, 2, 3, 4, 5, 6, 7, 8], 4)

export function HomePage() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useAtom(countAtom)
  const doubleCount = useAtomValue(doubleCountAtom)
  const env = useMemo(() => getEnvConfig(), [])
  const [detailsOpen, { toggle }] = useBoolean(true)

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{t('home.title')}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t('home.subtitle')}</p>
        <p className="mt-2">{t('home.description')}</p>
      </div>

      <div className="space-x-2">
        <Button onClick={() => setCount((prev) => prev + 1)}>{t('home.increment')}</Button>
        <Button variant="secondary" onClick={() => setCount((prev) => prev - 1)}>
          {t('home.decrement')}
        </Button>
        <Button
          variant="outline"
          onClick={() => i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'zh' : 'en')}
        >
          {i18n.resolvedLanguage === 'en' ? '切换中文' : 'Switch to English'}
        </Button>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <p>
          {t('home.countLabel')}：{count}
        </p>
        <p>
          {t('home.doubleCountLabel')}：{doubleCount}
        </p>
        <p className="text-sm text-muted-foreground">
          {t('home.env')}：{env.appEnv}
        </p>
        <p className="text-sm text-muted-foreground">
          {t('home.api')}：{env.apiBaseUrl}
        </p>
      </div>

      <div className="space-y-2">
        <Button variant="ghost" onClick={toggle}>
          {t('home.toggleText')}（{detailsOpen ? t('home.shown') : t('home.hidden')}）
        </Button>
        {detailsOpen && (
          <ul className="list-disc pl-6 text-sm text-muted-foreground">
            {groupedNumbers.map((group, idx) => (
              <li key={`${idx}`}>
                [{t('home.subtitle')}] {group.join(', ')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
