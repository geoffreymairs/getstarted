'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingWithValueProps {
  onCTAClick: () => void
}

export default function PricingWithValue({ onCTAClick }: PricingWithValueProps) {
  const valueItems = [
    'Live in-person 3-hour workshop in Auckland with real instructor',
    'Complete AI prompt library (copy & paste ready)',
    'Website templates & pre-built starters',
    'Step-by-step deployment guide',
    '60-day replay access if you miss anything',
    'Community support & networking with other Auckland entrepreneurs',
    'Domain setup guide (register your domain right)'
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            What You're Actually Getting
          </h2>
          <p className="text-sm font-bold text-purple-glow uppercase tracking-widest mb-4">📍 Live Workshop in Auckland</p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            This isn't just a 3-hour workshop. You're getting everything you need to build, deploy, and own your first AI-powered website — plus real support and networking in person.
          </p>
        </motion.div>

        {/* Value Items Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
        >
          {valueItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex gap-4 items-start p-4 rounded-lg"
              style={{
                background: 'rgba(0, 153, 255, 0.08)',
                border: '1px solid rgba(0, 153, 255, 0.15)'
              }}
            >
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <span className="text-gray-300 font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative p-8 sm:p-10 rounded-2xl mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
            border: '1px solid rgba(0, 153, 255, 0.3)'
          }}
        >
          <h3 className="text-2xl font-black text-white mb-8 text-center">
            The Real Question
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Option 1: DIY */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Option A: Figure It Out Yourself</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex gap-3">
                  <span className="text-red-400 font-bold">~6 months</span>
                  <span>Learning, failing, restarting</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-400 font-bold">$500+</span>
                  <span>Courses, tools, trials</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-400 font-bold">Uncertain</span>
                  <span>Will it even work?</span>
                </div>
              </div>
            </div>

            {/* Option 2: Workshop */}
            <div>
              <h4 className="text-lg font-bold text-accent mb-6">Option B: This Workshop</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-accent font-bold">3 hours</span>
                  <span className="text-gray-300">Build & launch same day</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent font-bold">$344.15</span>
                  <span className="text-gray-300">One-time investment</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent font-bold">Guaranteed</span>
                  <span className="text-gray-300">Live website by noon</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-accent/30 mt-8 pt-8 text-center">
            <p className="text-xl text-accent-light font-bold">
              You can spend 6 months figuring this out. Or 3 hours with us.
            </p>
          </div>
        </motion.div>

        {/* Pricing Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative p-8 sm:p-10 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%)',
            border: '2px solid rgba(0, 153, 255, 0.4)'
          }}
        >
          {/* Price Breakdown */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-black/40 rounded-lg p-6 space-y-4 backdrop-blur">
              <div className="flex justify-between items-center text-gray-300">
                <span>Workshop (Early Bird)</span>
                <div className="text-right">
                  <div className="line-through text-gray-500 text-sm">$399+gst</div>
                  <span className="font-semibold text-accent">$299+gst</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-gray-300 pb-4 border-b border-accent/30">
                <span>GST (15%)</span>
                <span className="font-semibold">$44.85 NZD</span>
              </div>
              <div className="flex justify-between items-center text-accent text-2xl font-black">
                <span>Total</span>
                <span>$343.85</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onCTAClick}
            className="group button-premium inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
          >
            Reserve & Pay
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* Guarantee */}
          <p className="text-sm text-gray-400 mt-6">
            Secure payment. Instant confirmation. See you June 6th.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
