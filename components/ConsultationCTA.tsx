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
    <section className="relative py-20 sm:py-24 px-6">
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center bg-gradient-to-br from-gs-600 to-indigo-600"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse at 15% 15%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(168,85,247,0.25), transparent 55%)',
            }}
          />
          <div className="relative">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/15 border border-white/25">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Free consultation</p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-5 tracking-tight text-balance text-white">
              Let&apos;s find where AI can help your business
            </h2>
            <p className="text-lg text-gs-50 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
              Book a free 30-minute AI Strategy Consultation. No sales pitch, just practical, independent advice
              tailored to your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-gs-50 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-gs-700 hover:bg-gs-50 transition-colors"
            >
              Book your free 30-minute consultation
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
