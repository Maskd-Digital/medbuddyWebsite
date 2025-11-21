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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-down">
                <Star size={16} fill="currentColor" className="animate-bounce-subtle" />
                Trusted by 500,000+ users worldwide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 leading-tight animate-fade-in-up">
                Never Miss a Dose,{' '}
                <span className="text-gradient">Stay Healthy</span>
              </h1>
              <p className="text-lg md:text-xl text-dark-700 mb-8 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                MedBuddy is your personal medication manager. Track prescriptions, set smart reminders, and take control of your health journey with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Button size="lg" className="gap-2 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                  <Download size={20} />
                  Download Free
                </Button>
                <Button variant="outline" size="lg" className="gap-2 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                  Learn More
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-dark-600 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary-600" />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-primary-600" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            {/* Hero Image - Placeholder */}
            <div className="relative animate-fade-in-right" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 shadow-strong hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-4 shadow-medium">
                  <div className="aspect-[9/16] max-w-sm mx-auto bg-neutral-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone size={64} className="text-primary-600 mx-auto mb-4 animate-bounce-subtle" />
                      <p className="text-dark-600 font-medium">App Screenshot Placeholder</p>
                      <p className="text-sm text-dark-500 mt-2">Replace with actual MedBuddy screenshots</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-dark-900 text-white relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-dark-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
              Everything You Need to{' '}
              <span className="text-gradient">Stay on Track</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              MedBuddy combines powerful features with an intuitive interface to make medication management effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Card hover padding="lg" className="group h-full hover:shadow-strong transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-dark-600">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button variant="outline" size="lg" className="gap-2">
                View All Features
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-950 mb-4">
              Get Started in <span className="text-gradient">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              Setting up your medication routine has never been easier.
            </p>
          </div>

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
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-dark-950 mb-2">{item.title}</h3>
                <p className="text-dark-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button size="lg" className="gap-2">
                Learn How It Works
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-950 mb-4">
              Loved by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              See what our users are saying about MedBuddy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover padding="lg">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#64D072" className="text-primary-600" />
                  ))}
                </div>
                <p className="text-dark-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-dark-950">{testimonial.name}</div>
                    <div className="text-sm text-dark-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join hundreds of thousands of users who trust MedBuddy to manage their medications. Download now and start your journey to better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="gap-2 bg-white text-primary-600 hover:bg-neutral-100 hover:text-primary-700">
                <Download size={20} />
                Download for iOS
              </Button>
              <Button variant="ghost" size="lg" className="gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-600">
                <Download size={20} />
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
