import React from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-primary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'group inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:scale-105 will-change-transform'

  const variants = {
    primary: 'bg-primary hover:bg-primary-600 text-white shadow-soft hover:shadow-medium hover:-translate-y-0.5',
    secondary: 'bg-dark-900 hover:bg-dark-800 text-white shadow-soft hover:shadow-medium hover:-translate-y-0.5',
    outline: 'bg-white hover:bg-neutral-50 text-dark-900 border-2 border-dark-900 hover:border-primary-600 hover:text-primary-600 shadow-sm hover:shadow-soft',
    ghost: 'bg-transparent hover:bg-neutral-100 text-dark-900',
    glass: 'bg-white/60 backdrop-blur-xl border border-white/40 text-dark-900 shadow-glass hover:shadow-glass-strong hover:bg-white/80 hover:-translate-y-0.5',
    'glass-primary': 'bg-primary/20 backdrop-blur-xl border border-primary/30 text-primary-700 shadow-glass hover:shadow-glass-strong hover:bg-primary/30 hover:-translate-y-0.5'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
