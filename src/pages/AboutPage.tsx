import { useTranslation } from 'react-i18next'
import { Button } from '../components/ui/button'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{t('about.title')}</h2>
      <p className="text-muted-foreground">{t('about.text')}</p>
      <Button disabled>{t('nav.home')} / {t('nav.about')}</Button>
    </section>
  )
}
