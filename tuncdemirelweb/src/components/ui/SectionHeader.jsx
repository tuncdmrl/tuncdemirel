import styles from './SectionHeader.module.css'

/**
 * Bölüm başlığı: kısa bir çizgi + bölüm adı, altında bölümün ne anlattığını
 * söyleyen bir cümle.
 */
export function SectionHeader({ eyebrow, title, lead, headingLevel: Heading = 'h2' }) {
  return (
    <header className={styles.header}>
      <div className={styles.strip}>
        <span className={styles.rule} aria-hidden="true" />
        <span className={styles.eyebrow}>{eyebrow}</span>
        <span className={styles.line} aria-hidden="true" />
      </div>

      <Heading className={styles.title}>{title}</Heading>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </header>
  )
}
