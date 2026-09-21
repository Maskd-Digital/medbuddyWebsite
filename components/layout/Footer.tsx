import React from 'react'
import Link from 'next/link'
import FooterContactForm from '@/components/layout/FooterContactForm'
import BrandLogo from '@/components/brand/BrandLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-tertiary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Left: logo + short description */}
          <div>
            <Link href="/" className="inline-block mb-4 group" aria-label="MedBuddy home">
              <BrandLogo
                variant="dark"
                className="h-9 md:h-10 transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Your personal medication manager — track doses, get reminders, and stay on schedule.
            </p>
          </div>

          {/* Right: contact form */}
          <div className="lg:justify-self-end w-full flex lg:justify-end">
            <FooterContactForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} MedBuddy. All rights reserved. Designed and developed by{' '}
            <a
              href="https://maskd.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Mask&apos;d
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
