import { useContent } from '../../hooks/useContent.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './Footer.module.css'

export function Footer() {
  const { profile } = useContent()
  const ui = useUi()
  const year = new Date().getFullYear()
  const social = profile.links.filter((link) => link.href.startsWith('http'))

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} shell`}>
        <p className={styles.signature}>
          <span className={styles.mark}>{profile.callSign}</span>
          <span>
            © {year} {profile.name}
          </span>
        </p>

        <p className={styles.links}>
          {social.map((link) => (
            <a key={link.id} href={link.href} target="_blank" rel="noreferrer noopener">
              {link.label}
            </a>
          ))}
          <a href="#top">{ui.footer.top}</a>
        </p>
      </div>
    </footer>
  )
}
