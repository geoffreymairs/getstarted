'use client'

import { motion } from 'framer-motion'
import { Hand, MapPin, Building2, Clock, ShieldCheck, Sparkles } from 'lucide-react'

interface WhyThisWorksProps {
  onCTAClick: () => void
}

export default function WhyThisWorks({ onCTAClick }: WhyThisWorksProps) {
  const reasons = [
    {
      icon: Hand,
      title: 'Practical, Hands-On Learning',
      description:
        'No long lectures or slideshows. Your team learns by doing, using real AI tools throughout the session.',
    },
    {
      icon: MapPin,
      title: 'Designed For New Zealand Businesses',
      description:
        'Training built around the way Kiwi businesses actually work, with examples that make sense locally.',
    },
    {
      icon: Building2,
      title: 'We Teach Using Your Own Processes',
      description:
        'We tailor every session to your business, so what your team learns applies to their day-to-day work.',
    },
    {
      icon: Clock,
      title: 'Save Hours Every Week',
      description:
        'Focus on automating repetitive tasks and speeding up everyday work so your team gets time back.',
    },
    {
      icon: ShieldCheck,
      title: 'No Technical Experience Required',
      description:
        'Everything is explained in plain language. If your team can use email, they can use AI.',
    },
    {
      icon: Sparkles,
      title: 'Up-To-Date With The Latest Tools',
      description:
        'AI moves fast. We keep our training current so your team learns the tools and techniques that matter right now.',
    },
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
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-balance">
            Why Choose <span className="text-accent">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            We focus on practical business outcomes, not AI hype. Our goal is simple: help
            your team use AI to work smarter and get real results.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative p-8 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.06) 0%, rgba(168, 85, 247, 0.05) 100%)',
                  border: '1px solid rgba(0, 153, 255, 0.15)',
                }}
              >
                <div className="mb-5 p-3 rounded-lg bg-accent/20 w-fit">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-3 px-8 py-4 button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 text-lg uppercase tracking-wide"
          >
            View Training Packages
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
