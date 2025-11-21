import React from 'react'
import type { Metadata } from 'next'
import { FileText, AlertCircle, CheckCircle, XCircle, Scale, Shield } from 'lucide-react'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Terms of Service - MedBuddy User Agreement',
  description: 'Read MedBuddy\'s Terms of Service. Understand your rights and responsibilities when using our medication management platform.',
}

export default function TermsPage() {
  const lastUpdated = 'January 15, 2024'

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 mx-auto">
            <FileText className="text-primary-600" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
            Please read these terms carefully before using MedBuddy. By using our service, you agree to these terms.
          </p>
          <p className="text-sm text-dark-500 mt-6">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <Card className="bg-amber-50 border-2 border-amber-400">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-amber-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-dark-950 mb-3">Medical Disclaimer</h3>
                <p className="text-dark-700 mb-2">
                  <strong>MedBuddy is a medication tracking and reminder tool, NOT a substitute for professional medical advice, diagnosis, or treatment.</strong>
                </p>
                <p className="text-dark-700">
                  Always consult with your healthcare provider regarding your medications. Never ignore professional medical advice or delay seeking it because of something you read or experienced through MedBuddy. If you have a medical emergency, call 911 or your local emergency number immediately.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">1.</span> Acceptance of Terms
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  By accessing or using the MedBuddy mobile application and website (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and MedBuddy ("we," "us," or "our"). We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">2.</span> Description of Service
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  MedBuddy provides a digital platform for tracking medications, setting reminders, managing appointments, and monitoring medication adherence. Our Service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Medication tracking and scheduling</li>
                  <li>Smart reminder notifications</li>
                  <li>Appointment management</li>
                  <li>Health analytics and adherence reports</li>
                  <li>Family and caregiver features</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">3.</span> User Accounts and Eligibility
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  To use MedBuddy, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be at least 13 years old (or the age of majority in your jurisdiction)</li>
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
                <p>
                  You are responsible for all activity that occurs under your account. We reserve the right to suspend or terminate accounts that violate these Terms.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">4.</span> User Responsibilities
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  When using MedBuddy, you agree to:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                    <p>Enter accurate medication information and schedules</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                    <p>Consult healthcare professionals before making medication decisions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                    <p>Use the Service only for lawful purposes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                    <p>Respect the privacy and rights of other users</p>
                  </div>
                </div>

                <p className="mt-6">
                  You agree NOT to:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <p>Use the Service to provide medical advice or diagnoses</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <p>Attempt to hack, disrupt, or compromise the Service's security</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <p>Reverse engineer or attempt to extract source code</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <p>Use the Service to transmit malware or harmful code</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    <p>Violate any applicable laws or regulations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">5.</span> Intellectual Property
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  The Service, including all content, features, functionality, software, and design, is owned by MedBuddy and protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or lease any part of the Service without our express written permission.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">6.</span> Privacy and Data Protection
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  By using the Service, you consent to our collection, use, and disclosure of your information as described in the Privacy Policy. We are committed to protecting your health information in compliance with HIPAA and applicable data protection laws.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">7.</span> Disclaimer of Warranties
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <Card className="bg-amber-50 border-2 border-amber-400">
                  <p className="font-semibold mb-2">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  </p>
                  <p>
                    We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees about the accuracy, reliability, or completeness of any content or information provided through the Service.
                  </p>
                </Card>
                <p>
                  <strong>MedBuddy is a tool to assist with medication management, not a medical device or healthcare provider.</strong> It is your responsibility to verify all medication information with your healthcare provider.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">8.</span> Limitation of Liability
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDBUDDY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p>
                  Our total liability for any claims related to the Service shall not exceed the amount you paid us in the twelve (12) months prior to the claim, or $100, whichever is greater.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">9.</span> Indemnification
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  You agree to indemnify, defend, and hold harmless MedBuddy, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your negligence or willful misconduct</li>
                </ul>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">10.</span> Termination
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, with or without notice. You may also terminate your account at any time through the app settings.
                </p>
                <p>
                  Upon termination, your right to use the Service will immediately cease. Sections of these Terms that by their nature should survive termination will survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">11.</span> Governing Law and Disputes
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising out of or related to these Terms or the Service shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules, except that either party may seek injunctive relief in court.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">12.</span> Changes to Terms
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  We may revise these Terms from time to time. The most current version will always be posted on our website. If we make material changes, we will notify you by email or through the Service.
                </p>
                <p>
                  Your continued use of the Service after changes become effective constitutes your acceptance of the revised Terms.
                </p>
              </div>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4 flex items-center gap-3">
                <span className="text-primary-600">13.</span> Contact Information
              </h2>
              <div className="pl-8 space-y-4 text-dark-600">
                <p>
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="bg-neutral-100 p-6 rounded-xl space-y-2">
                  <p><strong>Email:</strong> legal@medbuddy.com</p>
                  <p><strong>Phone:</strong> +1 (234) 567-890</p>
                  <p><strong>Mail:</strong><br />MedBuddy Legal Department<br />123 Health Street<br />Wellness City, CA 90210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom max-w-4xl">
          <Card className="border-2 border-primary-400">
            <div className="flex items-start gap-4">
              <Scale className="text-primary-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-dark-950 mb-3">Acknowledgment</h3>
                <p className="text-dark-600">
                  BY USING MEDBUDDY, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE THE SERVICE.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
