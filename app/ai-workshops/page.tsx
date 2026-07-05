'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { User, Users, CheckCircle2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import AITrainingWeDeliver from '@/components/AITrainingWeDeliver'
import WorkshopBreakdown from '@/components/WorkshopBreakdown'
import FinalCTA from '@/components/FinalCTA'

const offerings = [
  {
    icon: User,
    title: '1-on-1 AI Training',
    description: 'Personalised AI coaching, tailored to you and your business.',
    audiences: ['Business owners', 'Managers', 'Professionals'],
  },
  {
    icon: Users,
    title: 'Team AI Workshops',
    description: 'On-site training that gets your whole team using AI with confidence.',
    audiences: ['Teams', 'Departments', 'Entire organisations'],
  },
]

export default function AIWorkshopsPage() {
  const ctaRef = useRef<HTMLDivElement>(null)

  const scrollToBooking = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navigation onCTAClick={scrollToBooking} ctaLabel="Book Workshop" />
      <main className="min-h-screen bg-dark overflow-hidden">
        {/* Hero */}
        <section className="relative pt-36 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <AnimatedBackground />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-accent bg-accent/10 border border-accent/20 mb-8">
                ON-SITE AI TRAINING
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-balance">
                AI Workshops For{' '}
                <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">
                  NZ Teams
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed">
                Practical, hands-on AI training delivered at your workplace &mdash; choose personalised
                1-on-1 coaching or a workshop for your whole team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Two Offerings */}
        <section className="px-6 pb-8">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8"
                >
                  <div
                    className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)' }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-white mb-3">{offering.title}</h2>
                  <p className="text-gray-300 mb-6">{offering.description}</p>
                  <p className="text-xs font-bold tracking-widest text-accent mb-3">SUITABLE FOR</p>
                  <ul className="space-y-2">
                    {offering.audiences.map((audience) => (
                      <li key={audience} className="flex items-center gap-3 text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{audience}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* What We Cover */}
        <AITrainingWeDeliver />

        {/* How Sessions Run */}
        <WorkshopBreakdown onCTAClick={scrollToBooking} />

        {/* Pricing & Booking */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <AnimatedBackground />
          </div>
          <FinalCTA ctaRef={ctaRef} />
        </div>
      </main>
      <Footer />
    </>
  )
}
