'use client'

import { motion } from 'framer-motion'
import { Shield, HandshakeIcon } from 'lucide-react'

interface RiskReversalProps {
  onCTAClick: () => void
}

export default function RiskReversal({ onCTAClick }: RiskReversalProps) {
  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Zero Risk <br />
            <span className="text-accent">100% Guarantee</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're confident you'll leave with a working website. But just in case, here's our guarantee.
          </p>
        </motion.div>

        {/* Main Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative p-10 sm:p-12 rounded-2xl mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%)',
            border: '2px solid rgba(0, 153, 255, 0.4)'
          }}
        >
          <div className="flex gap-6 items-start mb-6">
            <Shield className="w-10 h-10 text-accent flex-shrink-0 mt-2" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                If You Don't Leave With a Live Website...
              </h3>
              <p className="text-xl text-accent-light font-bold mb-4">
                We keep working with you until you do. <span className="text-white">Full support. No questions.</span>
              </p>
              <p className="text-gray-300 text-lg">
                That's it. We're not done until your website is live and working. This is our commitment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What This Means Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
        >
          <div className="relative p-8 rounded-xl" style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(0, 153, 255, 0.2)'
          }}>
            <div className="flex gap-4 mb-4">
              <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-3" />
              <h4 className="text-lg font-bold text-white">We Don't Stop at Noon</h4>
            </div>
            <p className="text-gray-300">
              If something isn't working by the end of the workshop, we don't leave you hanging. Email support, troubleshooting sessions—whatever it takes.
            </p>
          </div>

          <div className="relative p-8 rounded-xl" style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(0, 153, 255, 0.2)'
          }}>
            <div className="flex gap-4 mb-4">
              <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-3" />
              <h4 className="text-lg font-bold text-white">60-Day Replay Access</h4>
            </div>
            <p className="text-gray-300">
              Watch it again. Slower this time. Take notes. Build at your own pace. Full access to everything for 60 days.
            </p>
          </div>

          <div className="relative p-8 rounded-xl" style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(0, 153, 255, 0.2)'
          }}>
            <div className="flex gap-4 mb-4">
              <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-3" />
              <h4 className="text-lg font-bold text-white">Community Support</h4>
            </div>
            <p className="text-gray-300">
              You're not alone. Connect with other attendees. Share problems. Help each other. Succeed together.
            </p>
          </div>

          <div className="relative p-8 rounded-xl" style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(0, 153, 255, 0.2)'
          }}>
            <div className="flex gap-4 mb-4">
              <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-3" />
              <h4 className="text-lg font-bold text-white">One-on-One Help (If Needed)</h4>
            </div>
            <p className="text-gray-300">
              Still stuck? We schedule a call. Walk through it together. Get your website live.
            </p>
          </div>
        </motion.div>

        {/* Why This Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative p-8 sm:p-10 rounded-2xl mb-12"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(0, 153, 255, 0.15)'
          }}
        >
          <div className="flex gap-6 items-start">
            <HandshakeIcon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-black text-white mb-3">
                Why We Make This Promise
              </h3>
              <p className="text-gray-300 text-lg">
                Because we know this works. We've done this 500+ times. Almost everyone leaves with a working website. The few who don't were missing a tiny detail that takes 5 minutes to fix. So rather than let you leave with an "almost working" site, we fix it. That's the difference between this and every other course out there.
              </p>
            </div>
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
          <p className="text-xl text-gray-300 font-semibold mb-6">
            You've got nothing to lose and everything to gain.
          </p>
          <button
            onClick={onCTAClick}
            className="group button-premium inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
          >
            Reserve Your Seat Now - $299+gst (Early Bird)
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
