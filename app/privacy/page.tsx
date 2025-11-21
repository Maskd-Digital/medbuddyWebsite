import React from 'react'
import type { Metadata } from 'next'
import { Shield, Lock, Eye, UserCheck, FileText, Globe } from 'lucide-react'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Privacy Policy - Your Data Protection',
  description: 'MedBuddy Privacy Policy. Learn how we collect, use, and protect your health information with the highest security standards.',
}

export default function PrivacyPage() {
  const lastUpdated = 'January 15, 2024'

  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:

      • Account Information: Name, email address, phone number, and password
      • Health Information: Medication names, dosages, schedules, and adherence data
      • Profile Information: Age, gender, medical conditions, and allergies (optional)
      • Usage Data: How you interact with our app, features used, and device information
      • Communication Data: Messages you send us through support channels

      We only collect information necessary to provide our services and never collect more than required.`
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: `Your information is used exclusively to:

      • Provide medication tracking and reminder services
      • Personalize your experience and improve our app
      • Send you medication reminders and important notifications
      • Respond to your customer service requests
      • Ensure the security and integrity of our platform
      • Comply with legal obligations

      We NEVER sell your health data to third parties. Your privacy is our top priority.`
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: `We implement industry-leading security measures to protect your data:

      • 256-bit AES encryption for data at rest and in transit
      • HIPAA compliance and regular security audits
      • Two-factor authentication and biometric login options
      • Secure cloud infrastructure with redundant backups
      • Regular penetration testing and vulnerability assessments
      • Limited employee access with strict confidentiality agreements

      While no system is 100% secure, we employ best-in-class security practices to safeguard your information.`
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: `We do NOT sell, rent, or trade your personal health information. We may share your information only in these limited circumstances:

      • With your explicit consent
      • With service providers who assist in app operations (under strict confidentiality agreements)
      • To comply with legal obligations or valid legal processes
      • To protect the rights, property, or safety of MedBuddy, our users, or the public
      • In connection with a merger or acquisition (you would be notified)

      Any third-party service providers are contractually obligated to protect your data and use it only for specified purposes.`
    },
    {
      icon: UserCheck,
      title: 'Your Rights and Choices',
      content: `You have complete control over your data:

      • Access: Request a copy of all data we have about you
      • Correction: Update or correct your personal information anytime
      • Deletion: Request permanent deletion of your account and all associated data
      • Export: Download your medication history and data in portable formats
      • Opt-out: Unsubscribe from marketing communications (medication reminders remain active)
      • Restrict Processing: Limit how we use your information

      To exercise these rights, contact us at privacy@medbuddy.com or use the settings in your app.`
    },
    {
      icon: Globe,
      title: 'International Users',
      content: `MedBuddy is available globally. If you use our services outside the United States:

      • Your data may be transferred to and processed in the United States
      • We comply with applicable data protection laws including GDPR for EU users
      • We use standard contractual clauses approved by the European Commission
      • You have the same rights regardless of your location

      For EU users: You have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority.`
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 mx-auto">
            <Shield className="text-primary-600" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
            Your privacy and data security are our highest priorities. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-dark-500 mt-6">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 bg-dark-950 text-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-8">Our Privacy Commitments</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-dark-900 border-2 border-dark-800 text-center">
              <Lock className="text-primary-400 mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">We Never Sell Your Data</h3>
              <p className="text-sm text-dark-100">
                Your health information is never sold to advertisers, pharmaceutical companies, or anyone else.
              </p>
            </Card>
            <Card className="bg-dark-900 border-2 border-dark-800 text-center">
              <Shield className="text-primary-400 mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Bank-Level Security</h3>
              <p className="text-sm text-dark-100">
                256-bit encryption and HIPAA compliance protect your data at all times.
              </p>
            </Card>
            <Card className="bg-dark-900 border-2 border-dark-800 text-center">
              <UserCheck className="text-primary-400 mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">You're In Control</h3>
              <p className="text-sm text-dark-100">
                Access, export, or delete your data anytime. Your data, your choice.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="prose prose-lg max-w-none">
                    {section.content.split('\n').map((paragraph, idx) => (
                      <p key={idx} className="text-dark-600 mb-4 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="bg-neutral-100 mt-12">
            <h3 className="text-xl font-bold text-dark-950 mb-4">Children's Privacy</h3>
            <p className="text-dark-600 mb-4">
              MedBuddy is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately at privacy@medbuddy.com, and we will delete it.
            </p>
            <p className="text-dark-600">
              Parents and guardians can create profiles for children under their own account to manage their children's medications.
            </p>
          </Card>

          <Card className="bg-neutral-100 mt-6">
            <h3 className="text-xl font-bold text-dark-950 mb-4">Changes to This Policy</h3>
            <p className="text-dark-600 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside text-dark-600 space-y-2 mb-4">
              <li>Posting the updated policy on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending you an email notification (for significant changes)</li>
              <li>Displaying an in-app notification</li>
            </ul>
            <p className="text-dark-600">
              Your continued use of MedBuddy after changes are posted constitutes acceptance of the updated policy.
            </p>
          </Card>

          <Card className="bg-neutral-100 mt-6">
            <h3 className="text-xl font-bold text-dark-950 mb-4">Contact Us</h3>
            <p className="text-dark-600 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-dark-600">
              <p><strong>Email:</strong> privacy@medbuddy.com</p>
              <p><strong>Phone:</strong> +1 (234) 567-890</p>
              <p><strong>Mail:</strong> MedBuddy Privacy Team<br />123 Health Street<br />Wellness City, CA 90210</p>
            </div>
          </Card>
        </div>
      </section>

      {/* HIPAA Notice */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-4xl">
          <Card className="border-2 border-primary-400">
            <div className="flex items-start gap-4">
              <Shield className="text-primary-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-dark-950 mb-3">HIPAA Compliance Notice</h3>
                <p className="text-dark-600 mb-3">
                  MedBuddy is committed to protecting your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA). We implement administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of your protected health information (PHI).
                </p>
                <p className="text-dark-600">
                  For more information about HIPAA and your rights, visit{' '}
                  <a href="https://www.hhs.gov/hipaa" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    www.hhs.gov/hipaa
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
