import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

type BrandLogoProps = {
  /** `light` = for white/light backgrounds; `dark` = for tertiary/dark backgrounds */
  variant?: 'light' | 'dark'
  className?: string
  priority?: boolean
}

export default function BrandLogo({
  variant = 'light',
  className,
  priority = false,
}: BrandLogoProps) {
  const src =
    variant === 'dark'
      ? '/medbuddy-logo-dark.png'
      : '/medbuddy-logo-light.png'

  return (
    <Image
      src={src}
      alt="MedBuddy"
      width={271}
      height={78}
      priority={priority}
      className={twMerge(
        clsx('h-8 w-auto md:h-9 object-contain object-left', className)
      )}
    />
  )
}
