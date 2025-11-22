import React from 'react'
import type { Metadata } from 'next'
import {
  Pill,
  Bell,
  Calendar,
  Heart,
  Shield,
  Smartphone,
  Clock,
  Camera,
  BarChart3,
  Users,
  Globe,
  Lock,
  Zap,
  CheckCircle2,
  History,
  FileText
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Features - Comprehensive Medication Management',
  description: 'Explore all the powerful features MedBuddy offers: medication tracking, smart reminders, appointment scheduling, health insights, and more.',
}

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Pill,
      title: 'Comprehensive Medication Tracking',
      description: 'Keep all your medications organized in one secure place. Track prescriptions, over-the-counter meds, supplements, and vitamins effortlessly.',
      benefits: [
        'Add unlimited medications',
        'Track dosage and frequency',
        'Monitor medication interactions',
        'Set refill reminders'
      ]
    },
    {
      icon: Bell,
      title: 'Smart Reminder System',
      description: 'Never miss a dose with our intelligent notification system. Get reminded at the right time with customizable alerts.',
      benefits: [
        'Customizable notification times',
        'Multiple reminder methods (push, email, SMS)',
        'Snooze and reschedule options',
        'Quiet hours for uninterrupted sleep'
      ]
    },
    {
      icon: Calendar,
      title: 'Appointment Management',
      description: 'Keep track of all your healthcare appointments in one calendar. Schedule doctor visits, lab tests, and medication refills.',
      benefits: [
        'Integrated healthcare calendar',
        'Appointment reminders',
        'Add notes and attach documents',
        'Sync with your device calendar'
      ]
    },
    {
      icon: BarChart3,
      title: 'Health Insights & Analytics',
      description: 'Visualize your medication adherence with detailed analytics. Track your progress and identify patterns in your health routine.',
      benefits: [
        'Medication adherence tracking',
        'Visual progress reports',
        'Identify missed doses',
        'Export reports for your doctor'
      ]
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your health data is protected with bank-level encryption. We never share your information with third parties.',
      benefits: [
        'End-to-end encryption',
        'HIPAA compliant',
        'Biometric authentication',
        'Regular security audits'
      ]
    },
    {
      icon: Users,
      title: 'Family & Caregiver Support',
      description: 'Manage medications for your entire family. Perfect for caregivers managing elderly parents or children\'s medications.',
      benefits: [
        'Multiple user profiles',
        'Caregiver access controls',
        'Share medication schedules',
        'Family health dashboard'
      ]
    }
  ]

  const additionalFeatures = [
    { icon: Camera, title: 'Barcode Scanning', description: 'Quickly add medications by scanning prescription bottles' },
    { icon: History, title: 'Medication History', description: 'Complete history of all medications taken' },
    { icon: FileText, title: 'Prescription Management', description: 'Store and organize all your prescriptions' },
    { icon: Clock, title: 'Flexible Scheduling', description: 'Custom schedules for complex medication routines' },
    { icon: Zap, title: 'Quick Actions', description: 'Mark doses as taken with a single tap' },
    { icon: Globe, title: 'Multiple Languages', description: 'Available in 15+ languages worldwide' },
    { icon: Lock, title: 'Secure Backup', description: 'Cloud backup keeps your data safe' },
    { icon: Smartphone, title: 'Cross-Platform Sync', description: 'Access from iOS, Android, and web' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>

        <div className="container-custom text-center relative z-10">
          <ScrollReveal animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 mb-6">
              Powerful Features for{' '}
              <span className="text-primary-600">Better Health</span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-10 opacity-80 leading-relaxed">
              MedBuddy combines cutting-edge technology with intuitive design to provide you with the most comprehensive medication management solution.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">Get Started Free</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="space-y-32">
            {mainFeatures.map((feature, index) => (
              <ScrollReveal key={index} animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"} delay={100}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-3xl mb-6 group hover:scale-110 hover:rotate-3 transition-all duration-300">
                      <feature.icon className="text-primary-600" size={40} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
                      {feature.title}
                    </h2>
                    <p className="text-xl text-dark-700 mb-8 leading-relaxed opacity-90">
                      {feature.description}
                    </p>
                    <ul className="space-y-4">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-1" size={22} />
                          <span className="text-dark-700 text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card variant="glass-primary" padding="lg" className="group hover:shadow-glass-strong">
                      <div className="aspect-square flex items-center justify-center">
                        <div className="text-center p-8">
                          <feature.icon className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" size={100} />
                          <p className="text-dark-600 font-medium">Feature Screenshot</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                And So Much More
              </h2>
              <p className="text-xl text-dark-600 max-w-3xl mx-auto opacity-80">
                Explore additional features designed to make your medication management experience seamless.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
                <Card variant="glass-primary" hover padding="lg" className="text-center h-full group">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="text-primary-600" size={28} />
                  </div>
                  <h3 className="font-bold text-dark-900 mb-2 text-lg">{feature.title}</h3>
                  <p className="text-dark-700 leading-relaxed">{feature.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="container-custom text-center relative z-10">
          <ScrollReveal animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Experience All Features Today
            </h2>
            <p className="text-xl text-dark-700 mb-10 opacity-90 max-w-2xl mx-auto">
              Download MedBuddy now and discover how easy medication management can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="shadow-strong">
                Download Now
              </Button>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
