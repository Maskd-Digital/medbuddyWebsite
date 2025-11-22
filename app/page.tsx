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
  Clock,
  CheckCircle2,
  Star,
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
      description: 'Your health data is encrypted and secure. We prioritize your privacy and never share your information.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Access your medication schedule from anywhere. Available on iOS, Android, and web.'
    }
  ]

  const stats = [
    { value: '500K+', label: 'Active Users' },
    { value: '10M+', label: 'Medications Tracked' },
    { value: '99.9%', label: 'Reminder Accuracy' },
    { value: '4.8★', label: 'App Store Rating' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'MedBuddy User',
      content: 'MedBuddy has completely transformed how I manage my medications. I never miss a dose anymore!',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Michael Chen',
      role: 'Healthcare Professional',
      content: 'I recommend MedBuddy to all my patients. It\'s intuitive, reliable, and truly makes a difference.',
      avatar: '👨‍⚕️'
    },
    {
      name: 'Emma Davis',
      role: 'Caregiver',
      content: 'Managing my parent\'s medications is so much easier now. The reminders are a lifesaver!',
      avatar: '👩'
    }
  ]

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden min-h-screen flex items-center">
        {/* Subtle animated background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow" style={{animationDelay: '2s'}}></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-primary/20 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-glass">
                  <Star size={16} fill="currentColor" />
                  Trusted by 500,000+ users worldwide
                </div>
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
                  <Button variant="outline" size="lg" className="gap-2">
                    Learn More
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
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

            {/* Hero Image - Glass Card */}
            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="relative">
                <Card variant="glass" padding="lg" className="hover:shadow-glass-strong transition-all duration-500">
                  <div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-2xl flex items-center justify-center border border-neutral-200">
                    <div className="text-center p-8">
                      <Smartphone size={80} className="text-primary-600 mx-auto mb-4" />
                      <p className="text-dark-700 font-semibold text-lg">App Screenshot</p>
                      <p className="text-sm text-dark-500 mt-2">Replace with MedBuddy app</p>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <ScrollReveal animation="fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
                  <div className="text-center group">
                    <div className="text-4xl md:text-5xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-dark-600 text-sm">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
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
      <section className="section-padding bg-white">
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

          <ScrollReveal animation="fade-in-up" delay={300}>
            <div className="text-center mt-16">
              <Link href="/how-it-works">
                <Button variant="primary" size="lg" className="gap-2">
                  Learn How It Works
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                Loved by <span className="text-primary-600">Thousands</span>
              </h2>
              <p className="text-xl text-dark-600 max-w-3xl mx-auto opacity-80">
                See what our users are saying about MedBuddy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} animation="fade-in-up" delay={index * 100}>
                <Card variant="glass" hover padding="lg" className="h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#64D072" className="text-primary-600" />
                    ))}
                  </div>
                  <p className="text-dark-700 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-dark-900">{testimonial.name}</div>
                      <div className="text-sm text-dark-600">{testimonial.role}</div>
                    </div>
                  </div>
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

        <div className="container-custom relative z-10">
          <ScrollReveal animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-xl text-dark-700 mb-10 opacity-90 max-w-2xl mx-auto">
                Join hundreds of thousands of users who trust MedBuddy to manage their medications. Download now and start your journey to better health.
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
