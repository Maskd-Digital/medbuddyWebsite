import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Note: When deploying to production with internet access,
// uncomment the Google Font import for better typography
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medbuddy.com'),
  title: {
    default: 'MedBuddy - Your Personal Medication Manager',
    template: '%s | MedBuddy'
  },
  description: 'Never miss a dose again. MedBuddy helps you track medications, set reminders, manage appointments, and stay on top of your health routine.',
  keywords: ['medication tracker', 'pill reminder', 'health app', 'medication management', 'prescription tracker', 'dose reminder', 'healthcare app'],
  authors: [{ name: 'MedBuddy' }],
  creator: 'MedBuddy',
  publisher: 'MedBuddy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'MedBuddy - Your Personal Medication Manager',
    description: 'Never miss a dose again. MedBuddy helps you track medications, set reminders, manage appointments, and stay on top of your health routine.',
    siteName: 'MedBuddy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MedBuddy - Medication Management Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedBuddy - Your Personal Medication Manager',
    description: 'Never miss a dose again. Track medications, set reminders, and manage your health with MedBuddy.',
    images: ['/og-image.png'],
    creator: '@medbuddy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
