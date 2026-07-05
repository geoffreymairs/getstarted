'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Users, ShieldCheck } from 'lucide-react'

interface HeroRebuiltProps {
  onHowItWorksClick?: () => void
}

export default function HeroRebuilt({ onHowItWorksClick }: HeroRebuiltProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-6 overflow-hidden font-sans tracking-tight">
      {/* Dark gradient overlay - stops before cards on mobile */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: 'linear-gradient(to bottom, rgba(8, 12, 21, 0.85) 0%, rgba(8, 12, 21, 0.90) 50%, rgba(5, 8, 18, 0.90) 75%, rgba(5, 8, 18, 0.85) 100%)'
      }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center justify-center gap-2 mb-8 px-4 py-3 rounded-full bg-accent/15 border border-accent/40 w-fit mx-auto backdrop-blur-sm"
        >
          <MapPin className="hidden sm:block w-4 h-4 text-accent flex-shrink-0" />
          <p className="text-sm font-bold text-accent-light uppercase tracking-wider text-center">
            Independent AI Advisors &amp; Consultants
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white mb-6 tracking-tight text-balance">
            Practical AI Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              For NZ Businesses
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
          <p className="text-xl sm:text-2xl text-gray-200 font-semibold max-w-3xl mx-auto text-pretty">
            We help businesses implement AI Agents, Automations and Workflows that deliver
            measurable results &mdash; saving time, reducing costs and cutting out repetitive work.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group button-premium px-8 py-4 sm:py-4 text-white font-black text-base sm:text-lg uppercase tracking-wide flex items-center gap-3 justify-center rounded-xl transition-all duration-300 hover:scale-105 active:scale-98"
            style={{
              background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.2)',
            }}
          >
            Book Your Free 30 Minute Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA */}
          <button
            onClick={onHowItWorksClick}
            className="group px-8 py-4 sm:py-4 text-white font-black text-base sm:text-lg uppercase tracking-wide flex items-center gap-3 justify-center rounded-xl border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-98"
          >
            Learn More
          </button>
        </motion.div>

        {/* Benefit Cards - 3 Column */}
        <div className="relative z-50 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 - Independent */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300 flex items-center gap-3 sm:block">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 flex-shrink-0 sm:mb-2">
              <MapPin className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Independent Advice</h3>
              <p className="text-xs text-gray-400">No vendor lock-in</p>
            </div>
          </div>

          {/* Card 2 - Tailored */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300 flex items-center gap-3 sm:block">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 flex-shrink-0 sm:mb-2">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Tailored to you</h3>
              <p className="text-xs text-gray-400">Built around your business</p>
            </div>
          </div>

          {/* Card 3 - Measurable */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300 flex items-center gap-3 sm:block">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 flex-shrink-0 sm:mb-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Measurable Results</h3>
              <p className="text-xs text-gray-400">Real business outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
