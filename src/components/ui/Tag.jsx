import styles from './Tag.module.css'

export function Tag({ children, tone = 'neutral' }) {
  return (
    <span className={styles.tag} data-tone={tone}>
      {children}
    </span>
  )
}

export function TagList({ items = [], tone = 'neutral' }) {
  if (items.length === 0) return null
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>
          <Tag tone={tone}>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
