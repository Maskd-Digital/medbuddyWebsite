'use client'

import React, { useState } from 'react'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

export default function FooterContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // honeypot
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validate = () => {
    const next: Record<string, string> = {}
    if (!formData.name.trim()) next.name = 'Name is required'
    if (!formData.email.trim()) {
      next.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Enter a valid email'
    }
    if (!formData.message.trim()) {
      next.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    if (!validate()) return

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          website: formData.website,
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', message: '', website: '' })
      } else {
        setErrors({
          submit:
            data.error ||
            'Something went wrong. Please try again in a moment.',
        })
      }
    } catch {
      setErrors({
        submit:
          'Unable to reach the server. Check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>

      {submitSuccess ? (
        <div className="rounded-xl bg-primary/20 border border-primary-300/40 px-4 py-4 text-sm text-white space-y-3">
          <p className="font-semibold">Thank you — your message was sent.</p>
          <p className="text-white/80">
            We&apos;ve received your note and will reply by email as soon as we can.
          </p>
          <button
            type="button"
            className="text-primary-300 hover:text-white underline-offset-2 hover:underline transition-colors"
            onClick={() => setSubmitSuccess(false)}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 [&_label]:text-white" noValidate>
          {/* Honeypot — hidden from real users */}
          <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) =>
                setFormData((f) => ({ ...f, website: e.target.value }))
              }
            />
          </div>

          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
            error={errors.name}
            fullWidth
            disabled={isSubmitting}
            className="bg-white/95 border-white/20 text-dark-900"
            placeholder="Your name"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
            error={errors.email}
            fullWidth
            disabled={isSubmitting}
            className="bg-white/95 border-white/20 text-dark-900"
            placeholder="you@example.com"
          />
          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
            error={errors.message}
            fullWidth
            disabled={isSubmitting}
            className="bg-white/95 border-white/20 text-dark-900 min-h-[100px]"
            placeholder="How can we help?"
          />
          {errors.submit && (
            <p className="rounded-xl bg-alert-tint border border-alert/30 px-4 py-3 text-sm text-alert">
              {errors.submit}
            </p>
          )}
          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  )
}
