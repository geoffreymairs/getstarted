'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Search, GraduationCap, Wrench } from 'lucide-react'
import Image from 'next/image'

const phases = [
  {
    title: 'UNDERSTAND',
    icon: Search,
    outcomes: [
      'We learn how your business and team currently work',
      'Identify the tasks that take the most time',
      'Tailor the session to your goals',
    ],
  },
  {
    title: 'LEARN',
    icon: GraduationCap,
    outcomes: [
      'Hands-on training with the leading AI tools',
      'Plain-language explanations, no jargon',
      'Real examples from your own business',
    ],
  },
  {
    title: 'APPLY',
    icon: Wrench,
    outcomes: [
      'Put AI to work on real tasks during the session',
      'Build simple workflows your team can reuse',
      'Leave with tools you can use immediately',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

interface WorkshopBreakdownProps {
  onCTAClick?: () => void
}

export default function WorkshopBreakdown({ onCTAClick }: WorkshopBreakdownProps) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <p className="text-xs text-accent font-semibold uppercase tracking-wide">How It Works</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight text-balance">
            On-Site Training, <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent">
              Built Around Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            We come to your workplace and keep it practical from start to finish. Here is how
            a typical session runs.
          </p>
        </motion.div>

        {/* Three Phases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 153, 255, 0.2)',
                }}
                whileHover={{
                  boxShadow: '0 0 32px rgba(0, 153, 255, 0.3)',
                  y: -4,
                }}
              >
                {/* Phase Badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                  <Icon className="w-4 h-4 text-accent" />
                  <p className="text-xs text-accent font-bold uppercase tracking-wider">{phase.title}</p>
                </div>

                {/* Outcomes */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {phase.outcomes.map((outcome, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">{outcome}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-accent/20"
        >
          {/* Left: Key Benefits */}
          <div>
            <h3 className="text-2xl font-black text-white mb-6">What Makes It Work</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-300"><span className="text-accent font-bold">Practical.</span> Learning by doing, not watching.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-300"><span className="text-accent font-bold">Relevant.</span> Every example uses your real work.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-300"><span className="text-accent font-bold">Useful.</span> Your team can apply it the very next day.</p>
              </div>
            </div>
          </div>

          {/* Right: Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all">
              <Image
                src="/workshop-session.jpg"
                alt="A GetStarted on-site AI training session with attendees seated around the table while the presenter shows AI tools on a large screen"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        {onCTAClick && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={onCTAClick}
              className="group button-premium inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
            >
              View Training Packages
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
