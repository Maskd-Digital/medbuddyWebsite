'use client'

import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?:
    | 'fade-in-up'
    | 'fade-in-down'
    | 'slide-in-left'
    | 'slide-in-right'
    | 'scale-in'
    | 'fade-in'
  threshold?: number
}

/** Full class names so Tailwind JIT includes them (no dynamic `animate-${x}`). */
const ANIMATION_CLASS = {
  'fade-in-up': 'animate-fade-in-up',
  'fade-in-down': 'animate-fade-in-down',
  'slide-in-left': 'animate-slide-in-left',
  'slide-in-right': 'animate-slide-in-right',
  'scale-in': 'animate-scale-in',
  'fade-in': 'animate-fade-in',
} as const

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-in-up',
  threshold = 0.05,
}: ScrollRevealProps) {
  const { ref, isVisible, ready } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={[
        'transition-opacity duration-500',
        ready && !isVisible ? 'opacity-0' : 'opacity-100',
        isVisible ? ANIMATION_CLASS[animation] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        isVisible && delay
          ? { animationDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  )
}
