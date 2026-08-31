import { Section } from '../layout/Section.jsx'
import { Panel } from '../ui/Panel.jsx'
import { SectionHeader } from '../ui/SectionHeader.jsx'
import { useContent } from '../../hooks/useContent.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './EducationTrack.module.css'

export function EducationTrack() {
  const { education } = useContent()
  const ui = useUi()
  const records = education.getTimeline()

  return (
    <Section id="egitim">
      <SectionHeader
        eyebrow={ui.education.eyebrow}
        title={ui.education.title}
      />

      <Panel label={ui.education.panelLabel}>
        <ul className={styles.list}>
          {records.map((record) => (
            <li key={record.id} className={styles.row}>
              <span className={styles.period}>{record.period.label}</span>

              <div className={styles.detail}>
                <h3 className={styles.program}>{record.program}</h3>
                <p className={styles.school}>
                  {record.school}
                  {record.faculty ? ` · ${record.faculty}` : ''}
                  {record.location ? ` · ${record.location}` : ''}
                </p>
              </div>

              <span className={styles.note}>{record.note}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </Section>
  )
}
