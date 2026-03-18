import { useCallback } from 'react'

export function useLenisScroll() {
  const scrollTo = useCallback((target, options = {}) => {
    // Ambil instance Lenis yang sudah dibuat di useSmoothScroll
    const lenis = window.__lenis
    if (!lenis) return

    lenis.scrollTo(target, {
      offset: -80,        // offset untuk navbar fixed (tinggi navbar ~64px + margin)
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options
    })
  }, [])

  return { scrollTo }
}
