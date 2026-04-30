'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface WhyThisWorksProps {
  onCTAClick: () => void
}

export default function WhyThisWorks({ onCTAClick }: WhyThisWorksProps) {
  const comparisons = [
    {
      category: 'What You Learn',
      traditional: 'Theory, concepts, slides, videos',
      thisWorkshop: 'Live execution, real prompts, deployment steps'
    },
    {
      category: 'How You Build',
      traditional: 'Homework assignments, solo projects',
      thisWorkshop: 'Live with the workshop, full support, real-time fixes'
    },
    {
      category: 'What You Leave With',
      traditional: 'Certificate, notes, maybe a template',
      thisWorkshop: 'Working live website deployed to the internet'
    },
    {
      category: 'Support',
      traditional: 'Community forum (if you\'re lucky)',
      thisWorkshop: 'Live instructor, real answers, 60-day replay access'
    },
    {
      category: 'Time to Live',
      traditional: '3-6 months of learning first',
      thisWorkshop: 'Same day. By noon.'
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
            Why This Works <br />
            <span className="text-accent">(When Other Courses Don't)</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Most AI courses teach theory. This teaches execution. You don't learn about AI—you build with AI, live, with real support.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 mb-12"
        >
          {comparisons.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                border: '1px solid rgba(0, 153, 255, 0.15)'
              }}
            >
              {/* Category */}
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Category</p>
                <p className="text-lg font-bold text-white">{comp.category}</p>
              </div>

              {/* Traditional Approach */}
              <div className="flex gap-3">
                <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Typical Course</p>
                  <p className="text-gray-300">{comp.traditional}</p>
                </div>
              </div>

              {/* This Workshop */}
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">This Workshop</p>
                  <p className="text-accent-light font-semibold">{comp.thisWorkshop}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative p-8 sm:p-10 rounded-2xl mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.1) 0%, rgba(168, 85, 247, 0.08) 100%)',
            border: '2px solid rgba(0, 153, 255, 0.3)'
          }}
        >
          <div className="flex gap-6">
            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
            <div>
              <h3 className="text-2xl font-black text-white mb-3">
                You Leave With a Real, Live Website
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Not a certificate. Not a template. Not a promise of "what could be." A working website deployed to the internet that people can visit right now.
              </p>
              <p className="text-accent-light font-semibold">
                That's the difference between learning about building and actually building.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-3 px-8 py-4 button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 text-lg uppercase tracking-wide"
          >
            Reserve Your Seat Now - $299+gst (Early Bird)
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
