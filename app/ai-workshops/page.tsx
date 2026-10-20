'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { User, Users, GraduationCap, CheckCircle2 } from 'lucide-react'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'
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
  {
    icon: GraduationCap,
    title: 'AI Workshops for Schools',
    description: 'A hands-on session where students use AI to invent a business and build a real website.',
    audiences: ['Students aged 16 to 18', 'Auckland secondary schools', 'Classes and groups'],
  },
]

export default function AIWorkshopsPage() {
  const ctaRef = useRef<HTMLDivElement>(null)

  const scrollToBooking = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <WebNav />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gs-50/70 via-white to-white" />
          <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 sm:pt-24 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gs-500" />
                On-site AI training
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.05]">
                AI workshops for{' '}
                <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
                  business and schools
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
                Practical, hands-on AI training delivered on-site, choose personalised 1-on-1 coaching, a workshop for
                your whole team, or a session for your school.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Two Offerings */}
        <section className="px-6 pb-8">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-gs-500 to-indigo-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3">{offering.title}</h2>
                  <p className="text-slate-600 mb-6">{offering.description}</p>
                  <p className="text-xs font-bold tracking-widest text-gs-600 mb-3">SUITABLE FOR</p>
                  <ul className="space-y-2">
                    {offering.audiences.map((audience) => (
                      <li key={audience} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-gs-600 flex-shrink-0" />
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
        <FinalCTA ctaRef={ctaRef} />
      </main>
      <WebFooter />
    </>
  )
}
