'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Search, GraduationCap, Wrench, Sparkles } from 'lucide-react'
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

        {/* Bottom Section - balanced card with text + prominent image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-dark/40 to-purple-glow/10 shadow-glow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left: Heading, benefits and CTA */}
            <div className="flex flex-col justify-center gap-8 p-8 sm:p-10 lg:p-14">
              <div>
                <div className="inline-flex items-center gap-2 mb-5 p-3 rounded-xl bg-accent/15 border border-accent/30">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  What Makes It Work
                </h3>
                <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-purple-glow" />
              </div>

              <div className="space-y-5">
                {[
                  { label: 'Practical.', text: 'Learning by doing, not watching.' },
                  { label: 'Relevant.', text: 'Every example uses your real work.' },
                  { label: 'Useful.', text: 'Your team can apply it the very next day.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-gray-300 leading-relaxed">
                      <span className="text-accent font-bold">{item.label}</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {onCTAClick && (
                <button
                  onClick={onCTAClick}
                  className="group button-premium inline-flex w-fit items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-base uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
                >
                  View Training Packages
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              )}
            </div>

            {/* Right: Prominent image that fills the card height */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[300px] lg:min-h-full"
            >
              <Image
                src="/workshop-room.png"
                alt="A GetStarted on-site AI training session with attendees seated around the table while the presenter shows AI tools on a large screen"
                fill
                loading="lazy"
                quality={70}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Subtle gradient to blend the image into the card on the left edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-transparent lg:block hidden" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
