'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  index: number
}

function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg text-slate-700 mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <div className="border-t border-slate-100 pt-4">
        <p className="text-slate-900 font-semibold">{author}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Professional, easy to deal with, highly recommend.",
      author: "Neil",
      role: "Health & Fitness Professional"
    },
    {
      quote: "Amazing service, great communication, high quality! Highly recommend!",
      author: "Bex",
      role: "Beauty Clinic"
    },
    {
      quote: "Super quick turnaround, great communication, and a smooth overall experience.",
      author: "Michael",
      role: "Logistics"
    }
  ]

  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight text-slate-900">
            Real business owners.{' '}
            <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
              Real results.
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These aren&apos;t actors or paid testimonials. These are real people we&apos;ve worked with through our
            businesses, sharing real feedback about our service, communication, and results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14 py-12 border-t border-slate-200"
        >
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent mb-3 whitespace-nowrap">
              Almost 30
            </p>
            <p className="text-slate-600">Years in digital &amp; business</p>
          </div>

          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent mb-3">
              Independent
            </p>
            <p className="text-slate-600">No vendor lock-in, ever</p>
          </div>

          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent mb-3">
              NZ-Wide
            </p>
            <p className="text-slate-600">Advising businesses across New Zealand</p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-gs-700 transition-colors"
          >
            Book a free consultation
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
