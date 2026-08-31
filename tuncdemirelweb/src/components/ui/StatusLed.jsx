import styles from './StatusLed.module.css'

/**
 * Durum lambası. `active` yeşil ve nabız atar, diğerleri sabit ve sönük.
 */
export function StatusLed({ status = 'complete', label }) {
  return (
    <span className={styles.wrap} data-status={status}>
      <span className={styles.led} aria-hidden="true" />
      {label ? <span className={styles.label}>{label}</span> : null}
    </span>
  )
}
