import styles from './StationBackdrop.module.css'

/**
 * Sabit arka plan: gövde gradyanı, seyrek yıldızlar ve soluk yörünge halkaları.
 * İçerik akarken yerinde kalır, bu yüzden derinlik hissi verir ama dikkat çalmaz.
 */
export function StationBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.stars} />
      <svg className={styles.orbits} viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <g className={styles.orbitGroup}>
          <ellipse cx="500" cy="500" rx="470" ry="180" />
          <ellipse cx="500" cy="500" rx="360" ry="360" />
          <ellipse cx="500" cy="500" rx="240" ry="440" />
        </g>
      </svg>
      <div className={styles.grid} />
      <div className={styles.vignette} />
    </div>
  )
}
