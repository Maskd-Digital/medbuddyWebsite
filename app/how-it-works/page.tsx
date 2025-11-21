import React from 'react'
import type { Metadata } from 'next'
import { Download, UserPlus, Pill, Bell, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works - Simple Medication Management',
  description: 'Learn how to get started with MedBuddy in 3 simple steps. Download, add medications, and never miss a dose again.',
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'Download & Create Account',
      description: 'Get MedBuddy from the App Store or Google Play Store. Sign up with your email or continue with Google/Apple in seconds.',
      details: [
        'Available on iOS and Android',
        'Free to download and use',
        'Quick 30-second signup process',
        'No credit card required'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      number: '02',
      icon: Pill,
      title: 'Add Your Medications',
      description: 'Input your prescriptions, dosages, and schedules. You can scan the barcode on your medication bottle or enter details manually.',
      details: [
        'Scan barcodes for quick entry',
        'Manual entry for all medication types',
        'Set custom dosage schedules',
        'Add notes and instructions'
      ],
      color: 'from-primary-400 to-primary-600'
    },
    {
      number: '03',
      icon: Bell,
      title: 'Get Reminders & Stay Healthy',
      description: 'Receive timely notifications when it\'s time to take your medications. Track your progress and maintain perfect adherence.',
      details: [
        'Smart push notifications',
        'Customizable reminder times',
        'Track medication history',
        'View adherence analytics'
      ],
      color: 'from-purple-400 to-purple-600'
    }
  ]

  const additionalSteps = [
    {
      title: 'Customize Your Profile',
      description: 'Add your personal information, medical conditions, and allergies to get personalized insights.'
    },
    {
      title: 'Set Up Family Members',
      description: 'Add profiles for family members or those you care for to manage multiple medication schedules.'
    },
    {
      title: 'Schedule Appointments',
      description: 'Use the integrated calendar to keep track of doctor visits, lab tests, and medication refills.'
    },
    {
      title: 'Review Your Progress',
      description: 'Check your medication adherence dashboard to see how well you\'re following your routine.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
            Get Started in{' '}
            <span className="text-gradient">3 Simple Steps</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto mb-8">
            MedBuddy makes medication management effortless. Here's how to get started and take control of your health in minutes.
          </p>
        </div>
      </section>

      {/* Main Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full h-24 w-0.5 bg-gradient-to-b from-primary-300 to-transparent -translate-x-1/2" />
                )}

                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative mb-6">
                      <div className={`text-8xl md:text-9xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20`}>
                        {step.number}
                      </div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl shadow-medium`}>
                          <step.icon className="text-white" size={32} />
                        </div>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-dark-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                          <span className="text-dark-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className={`bg-gradient-to-br ${step.color} p-1`}>
                      <div className="bg-white rounded-xl p-8">
                        <div className="aspect-square flex items-center justify-center bg-neutral-50 rounded-lg">
                          <div className="text-center">
                            <step.icon className="text-primary-600 mx-auto mb-4" size={64} />
                            <p className="text-dark-600 font-medium">Step {step.number} Screenshot</p>
                            <p className="text-sm text-dark-500 mt-2">Replace with actual app screenshot</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Steps */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-4">
              Take It Further
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Once you've mastered the basics, explore these additional features to get even more from MedBuddy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalSteps.map((step, index) => (
              <Card key={index} hover padding="lg">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">{index + 4}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-950 mb-2">{step.title}</h3>
                    <p className="text-dark-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section (Placeholder) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-4">
                See MedBuddy in Action
              </h2>
              <p className="text-lg text-dark-600">
                Watch this quick video to see how easy it is to manage your medications.
              </p>
            </div>

            <Card className="bg-neutral-900">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <Smartphone size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="font-medium">Video Tutorial Placeholder</p>
                  <p className="text-sm opacity-75 mt-2">Add your product demo video here</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-dark-600">
                Got questions? We've got answers.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Is MedBuddy really free?',
                  a: 'Yes! MedBuddy is completely free to download and use. All core features are available at no cost.'
                },
                {
                  q: 'Is my health data secure?',
                  a: 'Absolutely. We use bank-level encryption and are HIPAA compliant. Your data is always private and secure.'
                },
                {
                  q: 'Can I manage medications for my family?',
                  a: 'Yes! You can create multiple profiles and manage medications for your entire family from one account.'
                }
              ].map((faq, index) => (
                <Card key={index} padding="lg">
                  <h3 className="font-bold text-dark-950 mb-2">{faq.q}</h3>
                  <p className="text-dark-600">{faq.a}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/faq">
                <Button variant="outline" className="gap-2">
                  View All FAQs
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Download MedBuddy today and take the first step toward better medication management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="gap-2 bg-white text-primary-600 hover:bg-neutral-100">
              <Download size={20} />
              Download Now
            </Button>
            <Link href="/features">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
