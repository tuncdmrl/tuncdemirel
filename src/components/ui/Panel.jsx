import { StatusLed } from './StatusLed.jsx'
import styles from './Panel.module.css'

/**
 * Konsol paneli: başlık şeridi, isteğe bağlı durum lambası ve köşe ayraçları.
 * Sitedeki kart benzeri her yüzey bunun üzerine kurulur.
 */
export function Panel({
  label,
  meta,
  status,
  statusLabel,
  corners = false,
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  const hasHeader = Boolean(label || meta || statusLabel)

  return (
    <div
      className={`${styles.panel} ${className}`}
      data-corners={corners || undefined}
      data-interactive={interactive || undefined}
      {...rest}
    >
      {hasHeader ? (
        <div className={styles.header}>
          {label ? <span className={styles.label}>{label}</span> : <span />}
          <span className={styles.headerRight}>
            {meta ? <span className={styles.meta}>{meta}</span> : null}
            {statusLabel ? <StatusLed status={status} label={statusLabel} /> : null}
          </span>
        </div>
      ) : null}
      <div className={styles.body}>{children}</div>
    </div>
  )
}
