'use client'

import { motion } from 'framer-motion'
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
      className="relative p-8 rounded-2xl"
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 153, 255, 0.2)'
      }}
      whileHover={{
        boxShadow: '0 0 32px rgba(0, 153, 255, 0.2)',
        y: -4
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        "{quote}"
      </p>

      {/* Author */}
      <div className="border-t border-accent/20 pt-4">
        <p className="text-white font-semibold">{author}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </motion.div>
  )
}

interface TestimonialsSectionProps {
  onCTAClick: () => void
}

export default function TestimonialsSection({ onCTAClick }: TestimonialsSectionProps) {
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
      quote: "Thanks to Geoffrey for the great service. Excellent comms, fast turnaround.",
      author: "Emily",
      role: "Technology Consulting"
    }
  ]

  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Real Business Owners <br />
            <span className="text-accent">Real Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            These aren't actors or paid testimonials. These are real people we've worked with through our businesses, sharing real feedback about our service, communication, and results.
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 py-12 border-t border-accent/20"
        >
          <div className="text-center">
            <p className="text-5xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-3">
              100+
            </p>
            <p className="text-gray-300">Attendees since launch</p>
          </div>

          <div className="text-center">
            <p className="text-5xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-3">
              100%
            </p>
            <p className="text-gray-300">Walked out with live website</p>
          </div>

          <div className="text-center">
            <p className="text-5xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-3">
              4.9/5
            </p>
            <p className="text-gray-300">Average workshop rating</p>
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
          <button
            onClick={onCTAClick}
            className="group button-premium inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
          >
            Be Next
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
