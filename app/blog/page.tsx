import React from 'react'
import type { Metadata } from 'next'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Health Tips & Medication Management Insights',
  description: 'Stay informed with MedBuddy\'s blog. Read articles about medication management, health tips, wellness advice, and product updates.',
}

export default function BlogPage() {
  // Placeholder blog posts - in production, fetch from CMS or database
  const featuredPost = {
    id: 1,
    title: '10 Essential Tips for Better Medication Adherence',
    excerpt: 'Discover proven strategies to help you never miss a dose again. From setting up reminders to creating healthy habits, we cover everything you need to know.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Medication Management',
    image: '/blog/featured.jpg',
    featured: true
  }

  const blogPosts = [
    {
      id: 2,
      title: 'Understanding Your Prescription: A Complete Guide',
      excerpt: 'Learn how to read and understand your prescription labels, dosage instructions, and medication warnings.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Health Education',
      image: '/blog/prescription-guide.jpg'
    },
    {
      id: 3,
      title: 'The Importance of Medication Timing',
      excerpt: 'Why taking medications at the right time matters for their effectiveness and your health outcomes.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Medication Management',
      image: '/blog/timing.jpg'
    },
    {
      id: 4,
      title: 'Managing Multiple Medications Safely',
      excerpt: 'Tips and strategies for safely managing multiple prescriptions and avoiding dangerous drug interactions.',
      author: 'Emma Rodriguez',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Safety',
      image: '/blog/multiple-meds.jpg'
    },
    {
      id: 5,
      title: 'How Technology is Transforming Healthcare',
      excerpt: 'Explore how digital health tools like MedBuddy are revolutionizing patient care and medication adherence.',
      author: 'Michael Chen',
      date: '2023-12-20',
      readTime: '5 min read',
      category: 'Technology',
      image: '/blog/tech-healthcare.jpg'
    },
    {
      id: 6,
      title: 'Creating a Medication Routine That Sticks',
      excerpt: 'Practical advice for building sustainable habits around your medication schedule.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-15',
      readTime: '4 min read',
      category: 'Wellness',
      image: '/blog/routine.jpg'
    },
    {
      id: 7,
      title: 'Common Medication Mistakes and How to Avoid Them',
      excerpt: 'Identify and prevent the most common errors people make when taking their medications.',
      author: 'Emma Rodriguez',
      date: '2023-12-10',
      readTime: '6 min read',
      category: 'Safety',
      image: '/blog/mistakes.jpg'
    },
    {
      id: 8,
      title: 'The Role of Caregivers in Medication Management',
      excerpt: 'Essential guidance for family members and caregivers helping loved ones with their medications.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-05',
      readTime: '5 min read',
      category: 'Caregiving',
      image: '/blog/caregivers.jpg'
    },
    {
      id: 9,
      title: 'Understanding Drug Interactions: What You Need to Know',
      excerpt: 'Learn about potential drug interactions and how to stay safe when taking multiple medications.',
      author: 'Michael Chen',
      date: '2023-11-28',
      readTime: '7 min read',
      category: 'Safety',
      image: '/blog/interactions.jpg'
    }
  ]

  const categories = [
    'All',
    'Medication Management',
    'Health Education',
    'Safety',
    'Technology',
    'Wellness',
    'Caregiving'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
            MedBuddy <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
            Expert advice, health tips, and insights on medication management to help you live your healthiest life.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container-custom">
          <Card hover className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-video lg:aspect-auto bg-neutral-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Tag size={48} className="text-primary-600 mx-auto mb-4" />
                  <p className="text-dark-600 font-medium">Featured Article Image</p>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full w-fit mb-4">
                  ⭐ FEATURED
                </div>
                <span className="text-sm font-semibold text-primary-600 mb-2">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-950 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-dark-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-dark-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <div>
                  <Button className="gap-2">
                    Read Article
                    <ArrowRight size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-neutral-300">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-200 text-dark-700 hover:bg-neutral-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} hover className="flex flex-col">
                <div className="aspect-video bg-neutral-200 rounded-t-2xl -m-6 mb-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Tag size={32} className="text-primary-600 mx-auto mb-2" />
                    <p className="text-xs text-dark-500">Article Image</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary-600 mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-dark-950 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-dark-600 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-dark-500 pt-4 border-t border-neutral-200">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter and get the latest health tips, medication management advice, and product updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
            />
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}
