import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Metadata } from 'next'
import { Heart, Target, Award, Users, Shield, Sparkles, CheckCircle2 } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Story',
  description: 'Learn about MedBuddy\'s mission to make medication management accessible to everyone. Discover our story, values, and commitment to your health.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We put your health and well-being at the center of everything we do. Every feature is designed with you in mind.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your health data is sacred. We employ the highest security standards to protect your information.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We continuously innovate to provide you with the best medication management experience possible.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Healthcare tools should be accessible to everyone. MedBuddy is free and easy to use for all ages.'
    }
  ]

  const milestones = [
    { year: '2020', title: 'MedBuddy Founded', description: 'Started with a mission to solve medication non-adherence' },
    { year: '2021', title: '100K Users', description: 'Reached our first major milestone of helping 100,000 people' },
    { year: '2022', title: 'HIPAA Certified', description: 'Achieved HIPAA compliance and enhanced security features' },
    { year: '2023', title: '500K Users', description: 'Half a million people now trust MedBuddy with their health' },
    { year: '2024', title: 'Global Expansion', description: 'Available in 15+ countries and multiple languages' }
  ]

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      bio: 'Former physician with 15+ years of experience in healthcare technology',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator passionate about making healthcare accessible through technology',
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader dedicated to creating intuitive health experiences',
      avatar: '👩‍💼'
    },
    {
      name: 'James Williams',
      role: 'Head of Security',
      bio: 'Cybersecurity expert ensuring your health data stays protected',
      avatar: '👨‍💼'
    }
  ]

  const stats = [
    { value: '500K+', label: 'Active Users' },
    { value: '10M+', label: 'Medications Tracked' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.8/5', label: 'User Rating' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>

        <div className="container-custom relative z-10">
          <ScrollReveal animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 mb-6">
                Empowering Better Health Through{' '}
                <span className="text-primary-600">Technology</span>
              </h1>
            <p className="text-xl text-dark-700 mb-10 opacity-80 leading-relaxed">
              MedBuddy was born from a simple belief: managing your medications shouldn't be complicated. We're on a mission to make healthcare more accessible, one reminder at a time.
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 hover:scale-110 hover:rotate-3 transition-all duration-300">
                <Target className="text-primary-600" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-dark-600 mb-6">
                We're dedicated to solving one of healthcare's biggest challenges: medication non-adherence. Every year, millions of people struggle to take their medications correctly, leading to preventable health complications.
              </p>
              <p className="text-lg text-dark-600">
                MedBuddy makes it simple to stay on track with your medications, empowering you to take control of your health and live your best life.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-primary-400 to-primary-600 text-white p-8 animate-slide-in-right hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <p className="opacity-90">of medications aren't taken as prescribed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$300B</div>
                  <p className="opacity-90">annual cost of medication non-adherence</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">125K</div>
                  <p className="opacity-90">preventable deaths each year</p>
                </div>
                <p className="text-sm opacity-90 pt-4 border-t border-white/20">
                  Source: National Council on Patient Information and Education
                </p>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-dark-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className=""
                
              >
                <Card hover padding="lg" className="text-center h-full group">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <value.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="font-bold text-dark-900 mb-2">{value.title}</h3>
                  <p className="text-dark-600 text-sm">{value.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              From a small startup to a trusted healthcare companion for hundreds of thousands.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm font-bold text-primary-600 mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-dark-950 mb-2">{milestone.title}</h3>
                    <p className="text-dark-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              A diverse team of healthcare professionals, technologists, and innovators united by a common goal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover padding="lg" className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-dark-950 mb-1">{member.name}</h3>
                <div className="text-sm text-primary-600 font-semibold mb-3">{member.role}</div>
                <p className="text-sm text-dark-600">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-4">
              Trusted & Certified
            </h2>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto">
              We meet the highest standards in healthcare technology and data security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'HIPAA Compliant', description: 'Full compliance with healthcare privacy regulations' },
              { icon: Award, title: 'ISO 27001 Certified', description: 'International standard for information security' },
              { icon: CheckCircle2, title: 'SOC 2 Type II', description: 'Rigorous security and availability standards' }
            ].map((cert, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="font-bold text-dark-950 mb-2">{cert.title}</h3>
                <p className="text-sm text-dark-600">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of a community dedicated to better health outcomes. Download MedBuddy today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
              Download Now
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
