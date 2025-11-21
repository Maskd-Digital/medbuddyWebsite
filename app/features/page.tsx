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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 animate-fade-in-up">
            Powerful Features for{' '}
            <span className="text-gradient">Better Health</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            MedBuddy combines cutting-edge technology with intuitive design to provide you with the most comprehensive medication management solution.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link href="/contact">
              <Button size="lg">Get Started Free</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group hover:scale-110 hover:rotate-3 transition-all duration-300">
                    <feature.icon className="text-primary-600" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-dark-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-dark-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="bg-neutral-100">
                    <div className="aspect-square flex items-center justify-center">
                      <div className="text-center p-8">
                        <feature.icon className="text-primary-600 mx-auto mb-4" size={80} />
                        <p className="text-dark-600 font-medium">Feature Screenshot Placeholder</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              And So Much More
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Explore additional features designed to make your medication management experience seamless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <Card hover padding="lg" className="text-center h-full group">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="font-bold text-dark-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-dark-600">{feature.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience All Features Today
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Download MedBuddy now and discover how easy medication management can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
              Download Now
            </Button>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
