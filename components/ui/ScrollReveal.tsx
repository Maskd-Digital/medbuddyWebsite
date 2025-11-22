'use client'

import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'fade-in'
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-in-up',
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? `animate-${animation}` : 'opacity-0'
      } ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  )
}
