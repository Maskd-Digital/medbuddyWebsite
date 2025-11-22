'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <div className={`sticky top-0 z-50 transition-all duration-500 ease-out animate-fade-in-down ${
      isScrolled ? 'px-4 md:px-6 pt-4 pb-0' : 'px-0 pt-0 pb-0'
    }`}>
      <nav className={`bg-white/95 backdrop-blur-md transition-all duration-500 ease-out ${
        isScrolled
          ? 'rounded-full shadow-2xl shadow-primary-200/50 border border-neutral-300'
          : 'shadow-soft border-b border-neutral-200'
      }`}>
        <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-dark-900">
              Med<span className="text-primary">Buddy</span>
            </span>
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
              Sign In
            </Button>
            <Button variant="primary" size="sm" className="hover:scale-105 transition-transform">
              Download App
            </Button>
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
                <Button variant="outline" size="md" fullWidth className="hover:scale-105 transition-transform">
                  Sign In
                </Button>
                <Button variant="primary" size="md" fullWidth className="hover:scale-105 transition-transform">
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      </nav>
    </div>
  )
}
