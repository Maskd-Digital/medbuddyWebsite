'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        const data = await response.json()
        setErrors({ submit: data.error || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@medbuddy.com',
      link: 'mailto:hello@medbuddy.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Health Street, Wellness City, CA 90210',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 animate-fade-in-up">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-6">
                Send us a Message
              </h2>

              {submitSuccess && (
                <Card className="bg-primary-50 border-2 border-primary-400 mb-6">
                  <div className="flex items-center gap-3 text-primary-700">
                    <CheckCircle size={24} />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </Card>
              )}

              {errors.submit && (
                <Card className="bg-red-50 border-2 border-red-400 mb-6">
                  <p className="text-red-700">{errors.submit}</p>
                </Card>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  fullWidth
                  required
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  fullWidth
                  required
                />

                <Input
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  fullWidth
                  required
                />

                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Tell us more about your question or feedback..."
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  fullWidth
                  required
                  rows={6}
                />

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} hover padding="lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-primary-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-950 mb-1">{info.title}</h3>
                        {info.link !== '#' ? (
                          <a
                            href={info.link}
                            className="text-dark-600 hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-dark-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="gradient-primary text-white">
                <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3>
                <p className="mb-6 opacity-90">
                  Check out our FAQ page for quick answers to common questions, or visit our Help Center for detailed guides.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="secondary"
                    className="bg-white text-primary-600 hover:bg-neutral-100"
                    onClick={() => window.location.href = '/faq'}
                  >
                    Visit FAQ
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Help Center
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-6">
              Our Support Hours
            </h2>
            <Card padding="lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-dark-950 mb-2">Monday - Friday</h3>
                  <p className="text-dark-600">9:00 AM - 6:00 PM PST</p>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-950 mb-2">Saturday - Sunday</h3>
                  <p className="text-dark-600">10:00 AM - 4:00 PM PST</p>
                </div>
              </div>
              <p className="text-sm text-dark-500 mt-6">
                We typically respond within 24 hours during business days
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
