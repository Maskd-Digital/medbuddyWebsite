import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { href: '/features', label: 'Features' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/faq', label: 'FAQ' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
    support: [
      { href: '/contact', label: 'Help Center' },
      { href: '/contact', label: 'Support' },
    ],
  }

  const socialLinks = [
    { href: 'https://facebook.com/medbuddy', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com/medbuddy', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com/medbuddy', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com/company/medbuddy', icon: Linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-dark-950 text-white">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold">
                Med<span className="text-primary">Buddy</span>
              </span>
            </Link>
            <p className="text-dark-100 mb-6 max-w-sm">
              Your trusted companion for medication management. Never miss a dose, stay healthy, and take control of your wellness journey.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-900 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-100 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-100 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-100 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-dark-100">
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@medbuddy.com" className="hover:text-primary-400 transition-colors">
                  hello@medbuddy.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-dark-100">
                <Phone size={20} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2 text-dark-100">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>123 Health Street, Wellness City, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-100 text-sm text-center md:text-left">
              © {currentYear} MedBuddy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-dark-100 hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-dark-100 hover:text-primary-400 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-dark-100 hover:text-primary-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
