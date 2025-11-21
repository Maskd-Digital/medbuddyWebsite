'use client'

import React, { useState } from 'react'
import type { Metadata } from 'next'
import { ChevronDown, Search, HelpCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqCategories = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I create a MedBuddy account?',
          a: 'Download the MedBuddy app from the App Store or Google Play Store. Open the app and tap "Sign Up." You can register with your email address or use Google/Apple sign-in for quick access. The entire process takes less than 30 seconds!'
        },
        {
          q: 'Is MedBuddy really free to use?',
          a: 'Yes! MedBuddy is completely free to download and use. All core features including medication tracking, reminders, and appointment management are available at no cost. We believe healthcare tools should be accessible to everyone.'
        },
        {
          q: 'What devices is MedBuddy available on?',
          a: 'MedBuddy is available on iOS (iPhone and iPad), Android phones and tablets, and via our web app. Your data syncs seamlessly across all devices, so you can access your medication schedule anywhere.'
        }
      ]
    },
    {
      category: 'Medication Management',
      questions: [
        {
          q: 'How do I add a new medication?',
          a: 'Tap the "+" button in the Medications tab. You can either scan the barcode on your medication bottle for quick entry, or manually enter the medication name, dosage, and schedule. You can also add notes, such as "take with food" or special instructions from your doctor.'
        },
        {
          q: 'Can I track vitamins and supplements?',
          a: 'Absolutely! MedBuddy allows you to track prescription medications, over-the-counter drugs, vitamins, and supplements all in one place. Simply add them the same way you would add any medication.'
        },
        {
          q: 'What if I need to take a medication multiple times a day?',
          a: 'MedBuddy supports flexible scheduling. When adding a medication, you can set multiple doses per day (e.g., morning, afternoon, evening) or create a custom schedule. The app will remind you for each dose.'
        },
        {
          q: 'Can I edit or delete medications?',
          a: 'Yes! Tap on any medication to view its details, then select "Edit" to update information or "Delete" to remove it from your list. Your medication history will still be preserved for record-keeping.'
        }
      ]
    },
    {
      category: 'Reminders & Notifications',
      questions: [
        {
          q: 'How do medication reminders work?',
          a: 'MedBuddy sends push notifications to your device when it\'s time to take your medication. You\'ll receive a notification with the medication name and dosage. Simply tap "Taken" to mark it as completed, or "Snooze" to be reminded again in 15 minutes.'
        },
        {
          q: 'Can I customize reminder times?',
          a: 'Yes! You have full control over when you receive reminders. You can set specific times for each medication, enable quiet hours (so you\'re not disturbed while sleeping), and choose how far in advance you want to be reminded.'
        },
        {
          q: 'What happens if I miss a dose?',
          a: 'If you miss a dose, MedBuddy will mark it as "missed" in your history. You\'ll receive a follow-up notification, and the app will track this in your adherence analytics so you can identify patterns and improve your routine.'
        },
        {
          q: 'Can I turn off reminders temporarily?',
          a: 'Yes! You can pause reminders for individual medications or all medications at once. This is useful if you\'re traveling or need a break. Just remember to turn them back on when you\'re ready!'
        }
      ]
    },
    {
      category: 'Privacy & Security',
      questions: [
        {
          q: 'Is my health data secure?',
          a: 'Absolutely. We use bank-level 256-bit encryption to protect your data. All information is encrypted both in transit and at rest. We are HIPAA compliant and undergo regular security audits to ensure the highest level of protection.'
        },
        {
          q: 'Do you share my data with third parties?',
          a: 'Never. Your health information is yours alone. We do not sell, rent, or share your personal health data with any third parties, including pharmaceutical companies, insurance companies, or advertisers. Your privacy is our top priority.'
        },
        {
          q: 'Can I delete my account and data?',
          a: 'Yes. You have full control over your data. You can delete your account at any time from the Settings menu. This will permanently remove all your data from our servers. We also provide an option to export your data before deletion.'
        },
        {
          q: 'Do you offer two-factor authentication?',
          a: 'Yes! We support two-factor authentication (2FA) and biometric login (Face ID/Touch ID) for added security. We highly recommend enabling these features to protect your account.'
        }
      ]
    },
    {
      category: 'Family & Caregivers',
      questions: [
        {
          q: 'Can I manage medications for my family members?',
          a: 'Yes! MedBuddy supports multiple user profiles within one account. You can create profiles for children, elderly parents, or anyone you care for. Each profile has its own medication schedule and reminders.'
        },
        {
          q: 'Can multiple people access the same profile?',
          a: 'Yes, through our caregiver feature. You can grant access to trusted family members or caregivers, allowing them to view medication schedules and mark doses as taken. This is perfect for coordinating care for elderly parents or children.'
        },
        {
          q: 'How do I switch between profiles?',
          a: 'Simply tap the profile icon in the top corner of the app and select the profile you want to view. You can quickly switch between profiles to manage medications for different family members.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'The app isn\'t sending me notifications. What should I do?',
          a: 'First, check that notifications are enabled for MedBuddy in your device settings. On iOS, go to Settings > Notifications > MedBuddy. On Android, go to Settings > Apps > MedBuddy > Notifications. Also ensure you haven\'t accidentally paused reminders within the app.'
        },
        {
          q: 'My data isn\'t syncing across devices. How do I fix this?',
          a: 'Make sure you\'re logged in with the same account on all devices and have an active internet connection. Try logging out and back in. If the problem persists, contact our support team at hello@medbuddy.com.'
        },
        {
          q: 'How do I report a bug or suggest a feature?',
          a: 'We love hearing from our users! You can report bugs or suggest features through the "Feedback" option in the app settings, or email us at hello@medbuddy.com. We review all feedback and regularly implement user suggestions.'
        },
        {
          q: 'Is there a way to export my medication history?',
          a: 'Yes! Go to Settings > Export Data. You can generate a PDF or CSV file of your medication history, which is useful for doctor appointments or insurance purposes. The export includes all medications, doses taken, and adherence statistics.'
        }
      ]
    }
  ]

  const allQuestions = faqCategories.flatMap((cat, catIndex) =>
    cat.questions.map((q, qIndex) => ({
      ...q,
      category: cat.category,
      globalIndex: faqCategories.slice(0, catIndex).reduce((acc, c) => acc + c.questions.length, 0) + qIndex
    }))
  )

  const filteredQuestions = searchQuery
    ? allQuestions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allQuestions

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 mx-auto">
            <HelpCircle className="text-primary-600" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions about MedBuddy. Can't find what you're looking for? Contact our support team.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" size={20} />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-neutral-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {searchQuery ? (
            <div className="space-y-4">
              <p className="text-dark-600 mb-6">
                Found {filteredQuestions.length} result{filteredQuestions.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
              {filteredQuestions.map((item) => (
                <Card key={item.globalIndex} padding="lg">
                  <button
                    onClick={() => setOpenIndex(openIndex === item.globalIndex ? null : item.globalIndex)}
                    className="w-full text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-primary-600 mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-dark-950 text-lg mb-2">{item.q}</h3>
                      {openIndex === item.globalIndex && (
                        <p className="text-dark-600 mt-4">{item.a}</p>
                      )}
                    </div>
                    <ChevronDown
                      className={`text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                        openIndex === item.globalIndex ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>
                </Card>
              ))}
              {filteredQuestions.length === 0 && (
                <Card padding="lg" className="text-center">
                  <p className="text-dark-600">
                    No results found. Try a different search term or{' '}
                    <Link href="/contact" className="text-primary-600 hover:underline">
                      contact us
                    </Link>{' '}
                    for help.
                  </p>
                </Card>
              )}
            </div>
          ) : (
            <div className="space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-6">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item, qIndex) => {
                      const globalIndex = faqCategories
                        .slice(0, catIndex)
                        .reduce((acc, c) => acc + c.questions.length, 0) + qIndex
                      return (
                        <Card key={qIndex} padding="lg" hover>
                          <button
                            onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                            className="w-full text-left flex items-start justify-between gap-4"
                          >
                            <div className="flex-1">
                              <h3 className="font-bold text-dark-950 text-lg mb-2">{item.q}</h3>
                              {openIndex === globalIndex && (
                                <p className="text-dark-600 mt-4">{item.a}</p>
                              )}
                            </div>
                            <ChevronDown
                              className={`text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                                openIndex === globalIndex ? 'rotate-180' : ''
                              }`}
                              size={24}
                            />
                          </button>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <Card className="gradient-primary text-white max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg opacity-90 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
                  Contact Support
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Live Chat
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
