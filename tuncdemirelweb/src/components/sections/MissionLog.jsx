import { Section } from '../layout/Section.jsx'
import { Panel } from '../ui/Panel.jsx'
import { SectionHeader } from '../ui/SectionHeader.jsx'
import { TagList } from '../ui/Tag.jsx'
import { useContent } from '../../hooks/useContent.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './MissionLog.module.css'

export function MissionLog() {
  const { experiences } = useContent()
  const ui = useUi()
  const timeline = experiences.getTimeline()

  return (
    <Section id="deneyim">
      <SectionHeader
        eyebrow={ui.experience.eyebrow}
        title={ui.experience.title}
        lead={ui.experience.lead}
      />

      <ol className={styles.log}>
        {timeline.map((entry) => (
          <li key={entry.id} className={styles.entry} data-status={entry.status}>
            <span className={styles.node} aria-hidden="true" />

            <p className={styles.period}>
              <span className={styles.periodRange}>{entry.period.label}</span>
              <span className={styles.periodDot} aria-hidden="true">
                ·
              </span>
              <span>{entry.period.lengthLabel}</span>
            </p>

            <Panel
              status={entry.status}
              statusLabel={entry.statusLabel}
              corners={entry.isCurrent}
              interactive
            >
              <h3 className={styles.role}>{entry.role}</h3>

              <p className={styles.org}>
                <strong>{entry.company}</strong>
                <span aria-hidden="true">·</span>
                <span>{entry.location}</span>
                {entry.employment ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{entry.employment}</span>
                  </>
                ) : null}
              </p>

              <p className={styles.summary}>{entry.summary}</p>

              <ul className={styles.highlights}>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className={styles.stack}>
                <TagList items={entry.stack} />
              </div>
            </Panel>
          </li>
        ))}
      </ol>
    </Section>
  )
}
