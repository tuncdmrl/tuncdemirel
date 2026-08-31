import { useReveal } from '../../hooks/useReveal.js'
import styles from './Section.module.css'

/**
 * Bölüm kabuğu: tüm bölümler aynı üst/alt boşluğu ve genişliği paylaşsın diye.
 * Görünüme girdiğinde içeriği yumuşakça açar.
 */
export function Section({ id, children, className = '' }) {
  const ref = useReveal()

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className="shell" data-reveal ref={ref}>
        {children}
      </div>
    </section>
  )
}
