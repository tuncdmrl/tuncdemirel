import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes, sections } from '../../content/navigation.js'
import { useContent } from '../../hooks/useContent.js'
import { useLocale } from '../../hooks/useLocale.js'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'
import { LocaleToggle } from '../ui/LocaleToggle.jsx'
import { ThemeToggle } from '../ui/ThemeToggle.jsx'
import styles from './Navbar.module.css'

const SECTION_IDS = sections.map((section) => section.id)

export function Navbar() {
  const { profile } = useContent()
  const { ui } = useLocale()
  const location = useLocation()
  const isHome = location.pathname === routes.home
  const activeId = useScrollSpy(SECTION_IDS)

  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(offset > 24)
      setProgress(max > 0 ? Math.min(1, offset / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const sectionHref = (id) => (isHome ? `#${id}` : `${routes.home}#${id}`)

  return (
    <header className={styles.bar} data-scrolled={scrolled || undefined}>
      <span
        className={styles.progress}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className={`${styles.inner} shell`}>
        <Link className={styles.brand} to={routes.home}>
          <span className={styles.mark}>{profile.callSign}</span>
          <span className={styles.brandText}>
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label={ui.nav.sectionsAria}>
          <ul className={styles.links}>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={sectionHref(section.id)}
                  data-active={isHome && activeId === section.id ? 'true' : undefined}
                >
                  {ui.nav.sections[section.id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LocaleToggle />
          <span className={styles.actionDivider} aria-hidden="true" />
          <ThemeToggle />

          <button
            type="button"
            className={styles.toggle}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobil-menu"
          >
            {menuOpen ? ui.nav.close : ui.nav.menu}
          </button>
        </div>
      </div>

      <div className={styles.sheet} id="mobil-menu" data-open={menuOpen || undefined}>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={sectionHref(section.id)} onClick={closeMenu}>
                {ui.nav.sections[section.id]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
