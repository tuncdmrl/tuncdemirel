import { useEffect, useRef } from 'react'

/**
 * Öğe görünüme girdiğinde `data-revealed` işaretini açar.
 * Animasyonun kendisi CSS tarafında; hareket azaltma tercihi orada da geçerli.
 */
export function useReveal(options = {}) {
  const { threshold = 0.15, once = true } = options
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.revealed = 'true'
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.dataset.revealed = 'false'
          }
        })
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return ref
}
