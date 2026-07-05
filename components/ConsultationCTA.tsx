'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const points = [
  '30 minute strategy session',
  'No obligation',
  'Personalised advice',
  'Identify quick wins',
  'Discuss AI opportunities',
]

export default function ConsultationCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Dramatic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-glow/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl p-10 sm:p-16 text-center"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 153, 255, 0.25)',
          }}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/15 border border-accent/40">
            <p className="text-sm font-bold text-accent-light uppercase tracking-wider">Free Consultation</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-balance">
            Let&apos;s Find Where AI Can{' '}
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent">
              Help Your Business
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Book a free 30 minute AI Strategy Consultation. No sales pitch &mdash; just practical,
            independent advice tailored to your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-200 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
          >
            Book Your Free 30 Minute Consultation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
