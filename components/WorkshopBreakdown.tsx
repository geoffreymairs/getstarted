'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Code2, Rocket } from 'lucide-react'
import Image from 'next/image'

const phases = [
  {
    title: 'PLAN',
    icon: Zap,
    color: 'from-blue-400 to-cyan-400',
    outcomes: [
      'Brainstorm your business idea using AI tools',
      'Define your unique offer and positioning',
      'Map out your website structure'
    ]
  },
  {
    title: 'BUILD',
    icon: Code2,
    color: 'from-purple-400 to-pink-400',
    outcomes: [
      'Generate a professional website using AI',
      'Create compelling copy and branding',
      'Customize and polish your site'
    ]
  },
  {
    title: 'LAUNCH',
    icon: Rocket,
    color: 'from-orange-400 to-red-400',
    outcomes: [
      'Deploy your website to the internet',
      'Set up your custom domain',
      'Walk away with a live, working website'
    ]
  }
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
    <section id="workshop-breakdown" className="relative py-24 px-6 overflow-hidden">
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
            <p className="text-xs text-accent font-semibold uppercase tracking-wide">Live Workshop Breakdown</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            Three Phases. <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent">
              One Complete Result
            </span>
          </h2>
          <p className="text-sm font-bold text-purple-glow uppercase tracking-widest mb-4">📍 Live In Auckland</p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From idea to live website. Everything in 3 hours. Meet in person, network, and leave with a real, live website.
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
                  border: '1px solid rgba(0, 153, 255, 0.2)'
                }}
                whileHover={{
                  boxShadow: '0 0 32px rgba(0, 153, 255, 0.3)',
                  y: -4
                }}
              >
                {/* Phase Number Badge */}
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

        {/* Bottom Section - Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-accent/20"
        >
          {/* Left: Key Benefits */}
          <div>
            <h3 className="text-2xl font-black text-white mb-6">Why This Structure Works</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-300"><span className="text-accent font-bold">No Theory.</span> Pure execution.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-300"><span className="text-accent font-bold">No Fluff.</span> Every step builds toward your website.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                <p className="text-gray-300"><span className="text-accent font-bold">No Questions.</span> You'll understand exactly why we do each step.</p>
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
                src="/workshop-result.jpg"
                alt="Workshop success - person celebrating with launch successful screen"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-accent to-accent-light text-dark text-sm font-semibold rounded-lg shadow-lg"
            >
              ✓ Live Today
            </motion.div>
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
              Ready to Build?
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
