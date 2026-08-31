import { Fragment } from 'react'
import { LOCALES, LOCALE_LABELS, LOCALE_NAMES } from '../../i18n/locales.js'
import { useLocale } from '../../hooks/useLocale.js'
import styles from './LocaleToggle.module.css'

/** Dil seçici: kutu değil, iki sözcüklük ince bir seçim. */
export function LocaleToggle() {
  const { locale, setLocale, ui } = useLocale()

  return (
    <div className={styles.locale} role="group" aria-label={ui.nav.localeAria}>
      {LOCALES.map((code, index) => (
        <Fragment key={code}>
          {index > 0 ? (
            <span className={styles.divider} aria-hidden="true">
              /
            </span>
          ) : null}

          <button
            type="button"
            className={styles.option}
            data-active={locale === code ? 'true' : undefined}
            aria-pressed={locale === code}
            aria-label={LOCALE_NAMES[code]}
            onClick={() => setLocale(code)}
          >
            {LOCALE_LABELS[code]}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
