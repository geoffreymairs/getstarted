'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock } from 'lucide-react'

interface UrgencySectionProps {
  onCTAClick: () => void
}

export default function UrgencySection({ onCTAClick }: UrgencySectionProps) {
  const seatsAvailable = 30
  const seatsFilled = 65

  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            This Fills Up <span className="text-red-400">Fast</span>
          </h2>
          <p className="text-sm font-bold text-purple-glow uppercase tracking-widest mb-4">📍 Limited In-Person Auckland Seats</p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We intentionally keep this small so you get real support and attention. Meet in person in Auckland and network with other entrepreneurs.
          </p>
        </motion.div>

        {/* Main Urgency Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative p-8 sm:p-12 rounded-2xl mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(168, 85, 247, 0.06) 100%)',
            border: '2px solid rgba(239, 68, 68, 0.3)'
          }}
        >
          {/* Icon */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-red-500/20">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-red-400 uppercase tracking-wider">Limited Availability</p>
              <p className="text-2xl font-black text-white">Only {seatsAvailable} Spots Per Workshop</p>
            </div>
          </div>

          {/* Seats Filling Fast Progress */}
          <div className="mb-6">
            <p className="text-lg font-bold text-white mb-3">
              🔥 Spots Filling Up Fast
            </p>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${seatsFilled}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
              />
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-red-500/30">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Next Workshop Date</p>
              <p className="text-2xl font-black text-white">Tuesday 2 June</p>
              <p className="text-sm text-gray-400 mt-2">9:00 AM — 12:00 PM</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">After This Fills</p>
              <p className="text-lg text-gray-300">Next intake: <span className="font-bold">June 16, 2026</span></p>
              <p className="text-sm text-gray-400 mt-2">Same format, same transformation</p>
            </div>
          </div>
        </motion.div>

        {/* Why Small Group Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-8 rounded-2xl mb-12"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 153, 255, 0.2)'
          }}
        >
          <h3 className="text-2xl font-black text-white mb-6">Why Keep It Small?</h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
              <div>
                <p className="text-white font-semibold">Real Support</p>
                <p className="text-gray-400">We can actually answer questions. You won't get lost in the crowd.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
              <div>
                <p className="text-white font-semibold">Live Troubleshooting</p>
                <p className="text-gray-400">Your code breaks? We fix it together, right then. Not in a forum 3 days later.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
              <div>
                <p className="text-white font-semibold">Quality &gt; Scale</p>
                <p className="text-gray-400">We could fill 500 seats. We don't. You get what you paid for.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onCTAClick}
            className="group button-premium inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
          >
            <Clock className="w-5 h-5" />
            Grab Your Seat Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Don't wait—spots are going fast
          </p>
        </motion.div>
      </div>
    </section>
  )
}
