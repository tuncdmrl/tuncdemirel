import { useEffect, useState } from 'react'

/**
 * Görünümdeki bölümü izler; üst menü ve yan raydaki etkin işaret buna bakar.
 */
export function useScrollSpy(sectionIds, options = {}) {
  const { rootMargin = '-45% 0px -50% 0px' } = options
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin, threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionIds, rootMargin])

  return activeId
}
