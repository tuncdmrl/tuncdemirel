import { Section } from '../layout/Section.jsx'
import { Panel } from '../ui/Panel.jsx'
import { SectionHeader } from '../ui/SectionHeader.jsx'
import { useContent } from '../../hooks/useContent.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './CapabilityMatrix.module.css'

export function CapabilityMatrix() {
  const { skills } = useContent()
  const ui = useUi()
  const groups = skills.getGroups()

  return (
    <Section id="teknolojiler">
      <SectionHeader eyebrow={ui.skills.eyebrow} title={ui.skills.title} />

      <div className={styles.matrix}>
        {groups.map((group) => (
          <Panel key={group.id} label={group.title} className={styles.card} interactive>
            <ul className={styles.items}>
              {group.items.map((item, index) => (
                <li key={item} style={{ '--index': index }}>
                  <span className={styles.bullet} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </Section>
  )
}
