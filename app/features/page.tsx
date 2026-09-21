import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Pill,
  Bell,
  Calendar,
  Shield,
  BarChart3,
  Users,
  MessageCircle,
  CheckCircle2,
  Download,
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Features - Comprehensive Medication Management',
  description:
    'Explore MedBuddy features: medication tracking, smart reminders, AI chat, appointment scheduling, and more.',
}

const featuredFeatures = [
  {
    icon: Pill,
    title: 'Medication Tracking',
    description:
      'Keep prescriptions organized in one place. See dosage, frequency, next dose, and mark doses as taken when they are due.',
    benefits: [
      'Ongoing and past medication lists',
      'Dosage, frequency, and days remaining',
      'Taken actions and missed-dose alerts',
      'Add prescriptions in a few taps',
    ],
    image: '/screenshots/medications.png',
    imageAlt: 'MedBuddy medications screen showing ongoing prescriptions',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description:
      'Stay on schedule with medication and appointment reminders you can control from your profile.',
    benefits: [
      'Medication reminder toggles',
      'Appointment reminder alerts',
      'View scheduled notifications',
      'Tips to keep your routine on track',
    ],
    image: '/screenshots/notifications.png',
    imageAlt: 'MedBuddy notification settings on the profile screen',
  },
  {
    icon: MessageCircle,
    title: 'AI Chat Assistant',
    description:
      'Ask MedBuddy about your health routine in plain language — including questions about your current medications.',
    benefits: [
      'In-app chat support',
      'Ask about your medication list',
      'Quick answers when you need them',
      'Always available from the Chat tab',
    ],
    image: '/screenshots/chat.png',
    imageAlt: 'MedBuddy AI chat answering a question about medications',
  },
]

const moreFeatures = [
  {
    icon: Calendar,
    title: 'Appointment Management',
    description:
      'Track check-ups, visits, and refill dates alongside your medication routine.',
  },
  {
    icon: BarChart3,
    title: 'Health Insights',
    description:
      'See doses taken, upcoming doses, and misses at a glance on your home dashboard.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'Your health data stays with your account. We do not sell your personal information.',
  },
  {
    icon: Users,
    title: 'Family & Caregiver Support',
    description:
      'Help manage care for loved ones with shared access and clear routines.',
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" />

        <div className="container-custom text-center relative z-10">
          <ScrollReveal animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 mb-6">
              Powerful Features for{' '}
              <span className="text-primary">Better Health</span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-10 opacity-80 leading-relaxed">
              MedBuddy combines practical tools with an intuitive design to help
              you manage medications every day.
            </p>
            <Button variant="primary" size="lg" className="gap-2">
              <Download size={20} />
              Download Free
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Features with real screenshots */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="space-y-24 md:space-y-32">
            {featuredFeatures.map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={80}
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-3xl mb-6">
                      <feature.icon className="text-primary" size={36} />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-5">
                      {feature.title}
                    </h2>
                    <p className="text-lg md:text-xl text-dark-700 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-primary flex-shrink-0 mt-1"
                            size={22}
                          />
                          <span className="text-dark-700 text-base md:text-lg">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`flex justify-center ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="w-full max-w-[260px] sm:max-w-[280px] rounded-[1.75rem] overflow-hidden border border-neutral-300 shadow-strong bg-white ring-1 ring-black/5">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={473}
                        height={1024}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* More features — text only, no screenshot placeholders */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary mb-3">
                And more
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
                Built for everyday care
              </h2>
              <p className="text-lg text-dark-600">
                Additional tools that round out your medication and health routine.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {moreFeatures.map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                animation="fade-in-up"
                delay={index * 60}
              >
                <Card
                  variant="glass-primary"
                  hover
                  padding="lg"
                  className="h-full"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-dark-700 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

        <div className="container-custom text-center relative z-10">
          <ScrollReveal animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Experience All Features Today
            </h2>
            <p className="text-xl text-dark-700 mb-10 opacity-90 max-w-2xl mx-auto">
              Download MedBuddy now and discover how easy medication management
              can be.
            </p>
            <Button variant="primary" size="lg" className="shadow-strong gap-2">
              <Download size={20} />
              Download Now
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
