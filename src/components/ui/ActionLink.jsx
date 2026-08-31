import styles from './ActionLink.module.css'

/**
 * Bağlantı düğmesi. `primary` amber dolgulu, `ghost` yalnızca çerçeveli.
 */
export function ActionLink({
  href,
  variant = 'ghost',
  external = false,
  children,
  ...rest
}) {
  const externalProps = external
    ? { target: '_blank', rel: 'noreferrer noopener' }
    : {}

  return (
    <a className={styles.action} data-variant={variant} href={href} {...externalProps} {...rest}>
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        {external ? '↗' : '→'}
      </span>
    </a>
  )
}
