import React from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'glass' | 'glass-primary'
}

export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  variant = 'solid'
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const variants = {
    solid: 'bg-white shadow-soft',
    glass: 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-glass',
    'glass-primary': 'bg-primary/5 backdrop-blur-xl border border-primary/20 shadow-glass'
  }

  return (
    <div
      className={clsx(
        'rounded-2xl transition-all duration-200',
        variants[variant],
        hover && 'card-hover hover:shadow-glass-strong hover:-translate-y-1 will-change-transform',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
