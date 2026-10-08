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
    <section className="relative py-20 sm:py-28 px-6">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-gs-50 border border-gs-100 mb-5">
            <p className="text-xs text-gs-600 font-semibold uppercase tracking-wide">How it works</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-balance text-slate-900">
            On-site training,{' '}
            <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
              built around your business
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            We come to your workplace and keep it practical from start to finish. Here is how a typical session runs.
          </p>
        </motion.div>

        {/* Three Phases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}
              >
                {/* Phase Badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-gs-50 border border-gs-100">
                  <Icon className="w-4 h-4 text-gs-600" />
                  <p className="text-xs text-gs-600 font-bold uppercase tracking-wider">{phase.title}</p>
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
                    <motion.div key={idx} variants={itemVariants} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gs-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{outcome}</span>
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
          className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-gs-50 to-indigo-50 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left: Heading, benefits and CTA */}
            <div className="flex flex-col justify-center gap-7 p-8 sm:p-10 lg:p-14">
              <div>
                <div className="inline-flex items-center gap-2 mb-5 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <Sparkles className="w-5 h-5 text-gs-600" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What makes it work</h3>
                <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-gs-500 to-indigo-500" />
              </div>

              <div className="space-y-5">
                {[
                  { label: 'Practical.', text: 'Learning by doing, not watching.' },
                  { label: 'Relevant.', text: 'Every example uses your real work.' },
                  { label: 'Useful.', text: 'Your team can apply it the very next day.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gs-600 flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-slate-600 leading-relaxed">
                      <span className="text-slate-900 font-bold">{item.label}</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {onCTAClick && (
                <button
                  onClick={onCTAClick}
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-gs-700 transition-colors"
                >
                  View training packages
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
