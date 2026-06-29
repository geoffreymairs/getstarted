'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, ShieldCheck } from 'lucide-react'

interface HeroRebuiltProps {
  onCTAClick: () => void
  onHowItWorksClick?: () => void
}

export default function HeroRebuilt({ onCTAClick, onHowItWorksClick }: HeroRebuiltProps) {
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
          <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
          <p className="text-sm font-bold text-accent-light uppercase tracking-wider">
            On-Site AI Training For Businesses Across New Zealand
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
            Practical AI Training
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              For Your Business
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
            We come to your workplace and deliver practical, hands-on AI training
            tailored to your business. Help your team save time, automate repetitive
            work and confidently use modern AI tools such as ChatGPT, Claude, Gemini and
            Microsoft Copilot.
          </p>
        </motion.div>

        {/* Supporting Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <p className="text-base text-gray-200 font-medium">
              No technical knowledge required
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12"
        >
          {/* Primary CTA */}
          <button
            onClick={onCTAClick}
            className="group button-premium px-8 py-4 sm:py-4 text-white font-black text-base sm:text-lg uppercase tracking-wide flex items-center gap-3 justify-center rounded-xl transition-all duration-300 hover:scale-105 active:scale-98"
            style={{
              background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.2)',
            }}
          >
            View Training Packages
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onHowItWorksClick}
            className="group px-8 py-4 sm:py-4 text-white font-black text-base sm:text-lg uppercase tracking-wide flex items-center gap-3 justify-center rounded-xl border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-98"
          >
            See What We Teach
          </button>
        </motion.div>

        {/* Benefit Cards - 3 Column */}
        <div className="relative z-50 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 - On-site */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <h3 className="text-base font-bold text-white mb-1">Delivered on-site</h3>
            <p className="text-xs text-gray-400">We come to your workplace</p>
          </div>

          {/* Card 2 - Tailored */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <h3 className="text-base font-bold text-white mb-1">Tailored to you</h3>
            <p className="text-xs text-gray-400">Built around your business</p>
          </div>

          {/* Card 3 - Practical */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <h3 className="text-base font-bold text-white mb-1">No tech experience</h3>
            <p className="text-xs text-gray-400">Beginner friendly</p>
          </div>
        </div>
      </div>
    </section>
  )
}
