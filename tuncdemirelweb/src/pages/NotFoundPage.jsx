import { Link } from 'react-router-dom'
import { routes } from '../content/navigation.js'
import { Section } from '../components/layout/Section.jsx'
import { Panel } from '../components/ui/Panel.jsx'
import { StatusLed } from '../components/ui/StatusLed.jsx'
import { useUi } from '../hooks/useLocale.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  const ui = useUi()
  useDocumentTitle(ui.notFound.documentTitle)

  return (
    <div className={styles.page}>
      <Section id="sinyal-yok">
        <Panel label={ui.notFound.panelLabel} corners>
          <div className={styles.body}>
            <StatusLed status="caution" label={ui.notFound.status} />
            <h1 className={styles.title}>{ui.notFound.title}</h1>
            <p className={styles.text}>{ui.notFound.text}</p>
            <Link className={styles.link} to={routes.home}>
              {ui.notFound.link}
            </Link>
          </div>
        </Panel>
      </Section>
    </div>
  )
}
