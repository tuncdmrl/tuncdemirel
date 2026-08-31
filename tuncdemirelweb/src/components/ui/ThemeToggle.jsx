import { useTheme } from '../../hooks/useTheme.js'
import { useUi } from '../../hooks/useLocale.js'
import styles from './ThemeToggle.module.css'

const CENTER = 12
const RAY_INNER = 7.4
const RAY_OUTER = 9.6

/** Güneşin ışınları: sekiz yöne eşit aralıklı. */
const RAYS = Array.from({ length: 8 }, (_, index) => {
  const angle = (index / 8) * Math.PI * 2
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return {
    x1: CENTER + cos * RAY_INNER,
    y1: CENTER + sin * RAY_INNER,
    x2: CENTER + cos * RAY_OUTER,
    y2: CENTER + sin * RAY_OUTER,
  }
})

/**
 * Tema anahtarı: küçük bir gözlem penceresi.
 * Karanlık temada ay, aydınlık temada güneş görünür; geçişte hilal kapanıp
 * ışınlar açılır.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const ui = useUi()
  const label = theme === 'dark' ? ui.theme.toLight : ui.theme.toDark

  return (
    <button
      type="button"
      className={styles.switch}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className={styles.bezel} aria-hidden="true" />

      <svg className={styles.sky} viewBox="0 0 24 24" aria-hidden="true">
        <mask id="tema-hilal">
          <rect x="0" y="0" width="24" height="24" fill="#fff" />
          <circle className={styles.shadow} cx="17.6" cy="6.6" r="7.6" fill="#000" />
        </mask>

        <circle className={styles.body} cx="12" cy="12" r="8" mask="url(#tema-hilal)" />

        <g className={styles.rays}>
          {RAYS.map((ray, index) => (
            <line key={index} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} />
          ))}
        </g>
      </svg>
    </button>
  )
}
