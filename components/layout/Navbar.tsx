'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import BrandLogo from '@/components/brand/BrandLogo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const ticking = useRef(false)

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20)
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/legal', label: 'Legal' },
  ]

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ease-out animate-fade-in-down will-change-transform ${
      isScrolled ? 'px-4 md:px-6 pt-4 pb-0' : 'px-0 pt-0 pb-0'
    }`}>
      <nav className={`bg-white/95 backdrop-blur-md transition-all duration-300 ease-out will-change-transform ${
        isScrolled
          ? 'rounded-full shadow-2xl shadow-primary-200/50 border border-neutral-300'
          : 'shadow-soft border-b border-neutral-200'
      }`}>
        <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="MedBuddy home">
            <BrandLogo variant="light" priority className="transition-opacity duration-200 group-hover:opacity-90" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-all duration-300 group ${
                  isActive(link.href)
                    ? 'text-primary-600'
                    : 'text-dark-700 hover:text-primary-600'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full animate-scale-in" />
                )}
                {!isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/#download">
              <Button variant="primary" size="sm" className="hover:scale-105 transition-transform">
                Download App
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-dark-900 hover:text-primary-600 transition-all duration-200 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-300 animate-fade-in-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium py-2 transition-all duration-200 hover:translate-x-2 ${
                    isActive(link.href)
                      ? 'text-primary-600 pl-3 border-l-2 border-primary-600'
                      : 'text-dark-700 hover:text-primary-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-300">
                <Link href="/#download" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="md" fullWidth className="hover:scale-105 transition-transform">
                    Download App
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      </nav>
    </div>
  )
}
