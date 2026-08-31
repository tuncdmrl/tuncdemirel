import { Section } from '../layout/Section.jsx'
import { ActionLink } from '../ui/ActionLink.jsx'
import { Panel } from '../ui/Panel.jsx'
import { SectionHeader } from '../ui/SectionHeader.jsx'
import { StatusLed } from '../ui/StatusLed.jsx'
import { useContent } from '../../hooks/useContent.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './CommsPanel.module.css'

export function CommsPanel() {
  const { profile } = useContent()
  const ui = useUi()

  return (
    <Section id="iletisim">
      <SectionHeader
        eyebrow={ui.contact.eyebrow}
        title={ui.contact.title}
        lead={ui.contact.lead}
      />

      <Panel corners>
        <div className={styles.grid}>
          <div className={styles.pitch}>
            <StatusLed status="active" label={ui.contact.status} />
            <p className={styles.headline}>{ui.contact.headline}</p>
            <div className={styles.cta}>
              <ActionLink href={profile.mailto} variant="primary">
                {profile.email}
              </ActionLink>
            </div>
          </div>

          <ul className={styles.channels}>
            {profile.links.map((link) => (
              <li key={link.id}>
                <a
                  className={styles.channel}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                >
                  <span className={styles.channelLabel}>{link.label}</span>
                  <span className={styles.channelValue}>{link.value}</span>
                  <span className={styles.channelArrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </Section>
  )
}
