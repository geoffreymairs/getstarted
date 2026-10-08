'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Users, ShieldCheck } from 'lucide-react'

interface HeroRebuiltProps {
  onHowItWorksClick?: () => void
}

export default function HeroRebuilt({ onHowItWorksClick }: HeroRebuiltProps) {
  return (
    <section className="relative flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 px-6 overflow-hidden font-sans tracking-tight">
      {/* Soft light background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gs-50/70 via-white to-white" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[460px] w-[720px] rounded-full bg-gs-100/50 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center justify-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm w-fit mx-auto"
        >
          <MapPin className="hidden sm:block w-4 h-4 text-gs-600 flex-shrink-0" />
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wider text-center">
            Independent AI Advisors &amp; Consultants
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.05] text-slate-900 tracking-tight text-balance">
            Practical AI solutions
            <br />
            <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
              for NZ businesses
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center mb-8"
        >
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            We help businesses implement AI agents, automations and workflows that deliver measurable results, 
            saving time, reducing costs and cutting out repetitive work.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-14"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-gs-700 transition-colors"
          >
            Book your free 30-minute consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <button
            onClick={onHowItWorksClick}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Learn more
          </button>
        </motion.div>

        {/* Benefit Cards - 3 Column */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: MapPin, title: 'Independent advice', desc: 'No vendor lock-in' },
            { icon: Users, title: 'Tailored to you', desc: 'Built around your business' },
            { icon: ShieldCheck, title: 'Measurable results', desc: 'Real business outcomes' },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center gap-3 sm:block"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gs-50 flex-shrink-0 sm:mb-3">
                <c.icon className="w-5 h-5 text-gs-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-0.5">{c.title}</h3>
                <p className="text-xs text-slate-500">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
