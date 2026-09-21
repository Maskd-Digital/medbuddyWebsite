import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Pill,
  Bell,
  Calendar,
  Heart,
  Shield,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Download
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HomePage() {
  const features = [
    {
      icon: Pill,
      title: 'Medication Tracking',
      description: 'Easily track all your medications in one secure place. Add prescriptions, dosages, and schedules effortlessly.'
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Never miss a dose with intelligent notifications. Get reminded at the perfect time, every time.'
    },
    {
      icon: Calendar,
      title: 'Appointment Management',
      description: 'Keep track of doctor appointments, refills, and health checkups with our integrated calendar.'
    },
    {
      icon: Heart,
      title: 'Health Insights',
      description: 'Visualize your medication adherence and health progress with detailed analytics and reports.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your health data stays with your account. We prioritize your privacy and never sell your information.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Access your medication schedule from anywhere. Available on iOS and Android.'
    }
  ]

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow will-change-opacity" style={{transform: 'translateZ(0)'}}></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow will-change-opacity" style={{animationDelay: '2s', transform: 'translateZ(0)'}}></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 mb-6 leading-tight">
                  Never Miss a Dose,{' '}
                  <span className="text-primary-600">Stay Healthy</span>
                </h1>
                <p className="text-xl text-dark-700 mb-10 max-w-2xl leading-relaxed opacity-80">
                  MedBuddy is your personal medication manager. Track prescriptions, set smart reminders, and take control of your health journey with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button variant="primary" size="lg" className="gap-2">
                    <Download size={20} />
                    Download Free
                  </Button>
                  <Link href="/features">
                    <Button variant="outline" size="lg" className="gap-2">
                      Learn More
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-dark-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary-600" />
                    <span>Free forever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary-600" />
                    <span>No credit card</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                <div className="relative flex items-end justify-center gap-3 sm:gap-4 px-2">
                  {/* Home dashboard — front */}
                  <div className="relative z-10 w-[46%] max-w-[200px] sm:max-w-[220px] rounded-[1.75rem] overflow-hidden border border-neutral-200 shadow-strong bg-white ring-1 ring-black/5">
                    <Image
                      src="/screenshots/home.png"
                      alt="MedBuddy home dashboard showing active medications and daily dose stats"
                      width={473}
                      height={1024}
                      className="w-full h-auto block"
                      priority
                    />
                  </div>
                  {/* Sign in — slightly behind / offset */}
                  <div className="relative z-0 w-[46%] max-w-[200px] sm:max-w-[220px] rounded-[1.75rem] overflow-hidden border border-neutral-200 shadow-medium bg-white ring-1 ring-black/5 translate-y-4 sm:translate-y-6">
                    <Image
                      src="/screenshots/login.png"
                      alt="MedBuddy sign in screen"
                      width={473}
                      height={1024}
                      className="w-full h-auto block"
                      priority
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                Everything You Need to{' '}
                <span className="text-primary-600">Stay on Track</span>
              </h2>
              <p className="text-xl text-dark-600 max-w-3xl mx-auto opacity-80">
                MedBuddy combines powerful features with an intuitive interface to make medication management effortless.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} animation="fade-in-up" delay={index * 100}>
                <Card variant="glass-primary" hover padding="lg" className="group h-full">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="text-primary-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-dark-700 leading-relaxed opacity-90">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-in-up" delay={300}>
            <div className="text-center mt-16">
              <Link href="/features">
                <Button variant="glass" size="lg" className="gap-2">
                  View All Features
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                Get Started in <span className="text-primary-600">3 Simple Steps</span>
              </h2>
              <p className="text-xl text-dark-600 max-w-3xl mx-auto opacity-80">
                Setting up your medication routine has never been easier.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Download & Sign Up',
                description: 'Get the app from App Store or Play Store. Create your free account in seconds.'
              },
              {
                step: '02',
                title: 'Add Your Medications',
                description: 'Input your prescriptions, dosages, and schedules. Scan or type - your choice!'
              },
              {
                step: '03',
                title: 'Never Miss a Dose',
                description: 'Receive smart reminders and track your progress. Stay healthy and informed.'
              }
            ].map((item, index) => (
              <ScrollReveal key={index} animation="slide-in-left" delay={index * 150}>
                <Card variant="glass" padding="lg" className="relative h-full group hover:shadow-glass-strong">
                  <div className="text-7xl font-bold text-primary-500 mb-6 opacity-20 group-hover:opacity-30 transition-opacity">{item.step}</div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">{item.title}</h3>
                  <p className="text-dark-700 leading-relaxed">{item.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden scroll-mt-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 will-change-opacity" style={{transform: 'translateZ(0)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 will-change-opacity" style={{transform: 'translateZ(0)'}}></div>

        <div className="container-custom relative z-10">
          <ScrollReveal animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-xl text-dark-700 mb-10 opacity-90 max-w-2xl mx-auto">
                Download MedBuddy and start managing your medications with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="gap-2 shadow-strong">
                  <Download size={20} />
                  Download for iOS
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download size={20} />
                  Download for Android
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
