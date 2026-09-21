import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertCircle, FileText, Scale, Shield } from 'lucide-react'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Legal — Privacy Policy & Terms of Service',
  description:
    'MedBuddy Privacy Policy and Terms of Service. How we handle your data and the terms for using the app.',
}

const lastUpdated = 'September 21, 2026'
const contactEmail = 'hello@medbuddy.com'

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
            Legal
          </h1>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto mb-8">
            Privacy Policy and Terms of Service for MedBuddy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <a href="#privacy" className="text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline">
              Privacy Policy
            </a>
            <span className="text-dark-400">·</span>
            <a href="#terms" className="text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline">
              Terms of Service
            </a>
          </div>
          <p className="text-sm text-dark-500 mt-6">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="section-padding scroll-mt-28">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-2xl">
              <Shield className="text-primary-600" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-950">Privacy Policy</h2>
          </div>

          <div className="space-y-10 text-dark-600 leading-relaxed">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">Information We Collect</h3>
              <p className="mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Account information such as name, email address, and password</li>
                <li>Health information you enter: medication names, dosages, schedules, and dose history</li>
                <li>Optional profile details you choose to add</li>
                <li>Device and usage data needed to deliver reminders and improve reliability</li>
                <li>Messages you send us through support or the contact form</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">How We Use Your Information</h3>
              <p className="mb-3">Your information is used to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Provide medication tracking and reminder services</li>
                <li>Personalize your experience and improve the app</li>
                <li>Send medication reminders and service notifications</li>
                <li>Respond to support requests</li>
                <li>Maintain security and integrity of the platform</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">We do not sell your health data to third parties.</p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">Data Security</h3>
              <p className="mb-3">
                We protect your account and data with industry-standard practices appropriate for a consumer health app, including encrypted connections in transit and access controls on our systems.
              </p>
              <p>
                No method of transmission or storage is completely secure. If you have a security concern, contact us at{' '}
                <a href={`mailto:${contactEmail}`} className="text-primary-600 hover:underline">{contactEmail}</a>.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">Information Sharing</h3>
              <p className="mb-3">We do not sell, rent, or trade your personal health information. We may share information only:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>With your explicit consent</li>
                <li>With service providers who help operate the app under confidentiality obligations</li>
                <li>To comply with legal obligations or valid legal process</li>
                <li>To protect the rights, property, or safety of MedBuddy, our users, or the public</li>
                <li>In connection with a merger or acquisition (you would be notified)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">Your Rights and Choices</h3>
              <p className="mb-3">You can:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Access and update account information in the app</li>
                <li>Request a copy of data associated with your account</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of non-essential marketing communications (medication reminders may still apply)</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, email{' '}
                <a href={`mailto:${contactEmail}`} className="text-primary-600 hover:underline">{contactEmail}</a>{' '}
                or use in-app settings where available.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">Children&apos;s Privacy</h3>
              <p>
                MedBuddy is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have, contact{' '}
                <a href={`mailto:${contactEmail}`} className="text-primary-600 hover:underline">{contactEmail}</a>{' '}
                and we will delete it. Parents and guardians may manage a child&apos;s medications under their own account where that feature is available.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy on this page and revise the &quot;Last Updated&quot; date. Continued use after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>

            <Card className="bg-neutral-100">
              <h3 className="text-xl font-bold text-dark-950 mb-3">Contact</h3>
              <p className="text-dark-600">
                Privacy questions:{' '}
                <a href={`mailto:${contactEmail}`} className="text-primary-600 hover:underline font-medium">
                  {contactEmail}
                </a>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="section-padding bg-neutral-50 scroll-mt-28">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-2xl">
              <FileText className="text-primary-600" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-950">Terms of Service</h2>
          </div>

          <Card className="bg-alert-tint border-2 border-alert mb-10">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-alert flex-shrink-0" size={32} />
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

          <div className="space-y-10 text-dark-600 leading-relaxed">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">1. Acceptance of Terms</h3>
              <p className="mb-3">
                By accessing or using the MedBuddy mobile application and website (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and MedBuddy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">2. Description of Service</h3>
              <p className="mb-3">
                MedBuddy provides a digital platform for tracking medications, setting reminders, managing appointments, and monitoring medication adherence. Our Service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
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

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">3. User Accounts and Eligibility</h3>
              <p className="mb-3">To use MedBuddy, you must:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
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

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">4. User Responsibilities</h3>
              <p className="mb-3">When using MedBuddy, you agree to enter accurate medication information, consult healthcare professionals before making medication decisions, use the Service only for lawful purposes, and respect the privacy and rights of other users.</p>
              <p>
                You agree not to use the Service to provide medical advice or diagnoses; attempt to hack, disrupt, or compromise security; reverse engineer the Service; transmit malware; or violate applicable laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">5. Intellectual Property</h3>
              <p className="mb-3">
                The Service, including all content, features, functionality, software, and design, is owned by MedBuddy and protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or lease any part of the Service without our express written permission.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">6. Privacy and Data Protection</h3>
              <p className="mb-3">
                Your privacy is important to us. Our collection and use of personal information is governed by our{' '}
                <Link href="#privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
              </p>
              <p>
                By using the Service, you consent to our collection, use, and disclosure of your information as described in the Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">7. Disclaimer of Warranties</h3>
              <Card className="bg-alert-tint border-2 border-alert mb-4">
                <p className="font-semibold mb-2 text-dark-950">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p className="text-dark-700">
                  We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees about the accuracy, reliability, or completeness of any content or information provided through the Service.
                </p>
              </Card>
              <p>
                <strong>MedBuddy is a tool to assist with medication management, not a medical device or healthcare provider.</strong> It is your responsibility to verify all medication information with your healthcare provider.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">8. Limitation of Liability</h3>
              <p className="mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDBUDDY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p>
                Our total liability for any claims related to the Service shall not exceed the amount you paid us in the twelve (12) months prior to the claim, or $100, whichever is greater.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">9. Indemnification</h3>
              <p className="mb-3">
                You agree to indemnify, defend, and hold harmless MedBuddy, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or in any way connected with your use of the Service, your violation of these Terms, your violation of any rights of another party, or your negligence or willful misconduct.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">10. Termination</h3>
              <p className="mb-3">
                We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, with or without notice. You may also terminate your account at any time through the app settings.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. Sections of these Terms that by their nature should survive termination will survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">11. Governing Law and Disputes</h3>
              <p className="mb-3">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising out of or related to these Terms or the Service shall be resolved through binding arbitration in accordance with the American Arbitration Association&apos;s rules, except that either party may seek injunctive relief in court.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">12. Changes to Terms</h3>
              <p className="mb-3">
                We may revise these Terms from time to time. The most current version will always be posted on our website. If we make material changes, we will notify you by email or through the Service.
              </p>
              <p>
                Your continued use of the Service after changes become effective constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-950 mb-3">13. Contact Information</h3>
              <p className="mb-3">If you have questions about these Terms, please contact us:</p>
              <div className="bg-white p-6 rounded-xl border border-neutral-300">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${contactEmail}`} className="text-primary-600 hover:underline">
                    {contactEmail}
                  </a>
                </p>
              </div>
            </div>

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
        </div>
      </section>
    </div>
  )
}
