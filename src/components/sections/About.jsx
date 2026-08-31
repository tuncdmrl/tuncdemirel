import { Section } from '../layout/Section.jsx'
import { Panel } from '../ui/Panel.jsx'
import { SectionHeader } from '../ui/SectionHeader.jsx'
import { useContent } from '../../hooks/useContent.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './About.module.css'

export function About() {
  const content = useContent()
  const ui = useUi()
  const { profile } = content
  const current = content.experiences.getPrimary()

  const specs = [
    { label: ui.about.specs.role, value: current ? current.role : profile.title },
    { label: ui.about.specs.company, value: current ? current.company : '—' },
    { label: ui.about.specs.location, value: profile.location },
    { label: ui.about.specs.languages, value: profile.languages },
    { label: ui.about.specs.email, value: profile.email, href: profile.mailto },
  ]

  return (
    <Section id="hakkimda">
      <SectionHeader eyebrow={ui.about.eyebrow} title={ui.about.title} />

      <div className={styles.grid}>
        <div className={styles.story}>
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <aside className={styles.side}>
          <p className={styles.sideLabel}>{ui.about.focusLabel}</p>
          <ul className={styles.focusList}>
            {profile.focus.map((item) => (
              <li key={item}>
                <span className={styles.bullet} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <Panel label={ui.about.recordLabel} className={styles.specPanel}>
            <dl className={styles.specs}>
              {specs.map((spec) => (
                <div key={spec.label} className={styles.specRow}>
                  <dt>{spec.label}</dt>
                  <dd>
                    {spec.href ? (
                      <a href={spec.href} className={styles.specLink}>
                        {spec.value}
                      </a>
                    ) : (
                      spec.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Panel>
        </aside>
      </div>
    </Section>
  )
}
