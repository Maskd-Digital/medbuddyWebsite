'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.05,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
  } = options

  const ref = useRef<HTMLDivElement>(null)
  // Visible by default so content never stays blank if JS/observer is slow
  const [isVisible, setIsVisible] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      setReady(true)
      return
    }

    // Only hide below-the-fold elements for enter animation
    const rect = element.getBoundingClientRect()
    const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0

    if (inView) {
      setIsVisible(true)
      setReady(true)
      return
    }

    setIsVisible(false)
    setReady(true)

    const show = () => setIsVisible(true)
    const fallback = window.setTimeout(show, 800)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          if (triggerOnce) observer.disconnect()
          window.clearTimeout(fallback)
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible, ready }
}
