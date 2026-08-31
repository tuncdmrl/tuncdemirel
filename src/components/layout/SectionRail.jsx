import { useLocation } from 'react-router-dom'
import { routes, sections } from '../../content/navigation.js'
import { useLocale } from '../../hooks/useLocale.js'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'
import styles from './SectionRail.module.css'

const SECTION_IDS = sections.map((section) => section.id)

/**
 * Sol kenardaki seyir rayı: sayfanın neresinde olduğunuzu gösterir.
 * Geniş ekranlarda görünür, dar ekranlarda üst menüye bırakır.
 */
export function SectionRail() {
  const activeId = useScrollSpy(SECTION_IDS)
  const location = useLocation()
  const { ui } = useLocale()

  if (location.pathname !== routes.home) return null

  return (
    <nav className={styles.rail} aria-label={ui.nav.positionAria}>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              data-active={activeId === section.id ? 'true' : undefined}
            >
              <span className={styles.tick} aria-hidden="true" />
              <span className={styles.label}>{ui.nav.sections[section.id]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
