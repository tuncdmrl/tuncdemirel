import { Section } from '../layout/Section.jsx'
import { ActionLink } from '../ui/ActionLink.jsx'
import { Panel } from '../ui/Panel.jsx'
import { SectionHeader } from '../ui/SectionHeader.jsx'
import { StatusLed } from '../ui/StatusLed.jsx'
import { TagList } from '../ui/Tag.jsx'
import { useContent } from '../../hooks/useContent.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './PayloadBay.module.css'

const LED_BY_STATUS = {
  live: 'active',
  internal: 'caution',
  building: 'caution',
  archived: 'complete',
}

export function PayloadBay() {
  const { projects } = useContent()
  const ui = useUi()
  const items = projects.getFeatured()

  return (
    <Section id="projeler">
      <SectionHeader
        eyebrow={ui.projects.eyebrow}
        title={ui.projects.title}
        lead={ui.projects.lead}
      />

      <div className={styles.bay}>
        {items.map((project) => (
          <Panel key={project.id} interactive corners={project.status === 'live'}>
            <article className={styles.project}>
              <aside className={styles.meta}>
                <span className={styles.year}>{project.year}</span>
                <StatusLed
                  status={LED_BY_STATUS[project.status] ?? 'complete'}
                  label={project.statusLabel}
                />
                <span className={styles.role}>{project.role}</span>
                <div className={styles.stack}>
                  <TagList items={project.stack} />
                </div>
              </aside>

              <div className={styles.body}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.tagline}>{project.tagline}</p>
                <p className={styles.description}>{project.description}</p>

                <ul className={styles.highlights}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                {project.hasLink ? (
                  <div className={styles.action}>
                    <ActionLink href={project.url} external>
                      {ui.projects.open}
                    </ActionLink>
                  </div>
                ) : null}
              </div>
            </article>
          </Panel>
        ))}
      </div>
    </Section>
  )
}
