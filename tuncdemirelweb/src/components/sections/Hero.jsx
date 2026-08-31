import { ActionLink } from '../ui/ActionLink.jsx'
import { Porthole } from '../ui/Porthole.jsx'
import { useContent } from '../../hooks/useContent.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './Hero.module.css'

export function Hero() {
  const content = useContent()
  const ui = useUi()
  const { profile } = content
  const telemetry = content.getTelemetry()

  const nameParts = profile.name.split(' ')
  const lastName = nameParts.pop()
  const givenNames = nameParts.join(' ')

  const readouts = [
    { label: ui.hero.readouts.mission, value: telemetry.mission },
    { label: ui.hero.readouts.location, value: profile.location },
    { label: ui.hero.readouts.focus, value: profile.focus[0] },
  ]

  return (
    <section className={styles.hero} id="top">
      <div className={styles.limb} aria-hidden="true" />
      <div className={styles.atmosphere} aria-hidden="true" />

      <div className={`${styles.inner} shell`}>
        <div className={styles.copy}>
          <h1 className={styles.name} style={{ '--delay': '120ms' }}>
            <span>{givenNames}</span>
            <span>{lastName}</span>
          </h1>

          <p className={styles.role} style={{ '--delay': '200ms' }}>
            {profile.title}
            <span className={styles.roleDivider} aria-hidden="true">
              /
            </span>
            {profile.headline}
          </p>

          <p className={styles.summary} style={{ '--delay': '280ms' }}>
            {profile.intro}
          </p>

          <div className={styles.actions} style={{ '--delay': '360ms' }}>
            <ActionLink href="#iletisim" variant="primary">
              {ui.hero.primary}
            </ActionLink>
            <ActionLink href="#deneyim">{ui.hero.secondary}</ActionLink>
          </div>
        </div>

        <div className={styles.viewport} style={{ '--delay': '260ms' }}>
          <Porthole
            src={profile.portrait}
            alt={profile.portraitAlt}
            ringText={`${profile.name} · ${profile.title}`}
          />

          <ul className={styles.readouts}>
            {readouts.map((readout) => (
              <li key={readout.label}>
                <span className={styles.readoutLabel}>{readout.label}</span>
                <span className={styles.readoutValue}>{readout.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a className={styles.scrollHint} href="#hakkimda" aria-label={ui.hero.scroll}>
        <span className={styles.scrollLine} aria-hidden="true" />
        <svg className={styles.scrollArrow} viewBox="0 0 14 9" aria-hidden="true">
          <path d="M1 1.4 7 7.4 13 1.4" />
        </svg>
      </a>
    </section>
  )
}
