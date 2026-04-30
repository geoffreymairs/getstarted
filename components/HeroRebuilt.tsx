'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Clock, Users, Laptop } from 'lucide-react'

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
        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center justify-center gap-2 mb-8 px-4 py-3 rounded-full bg-red-600/20 border border-red-500/50 w-fit mx-auto backdrop-blur-sm"
        >
          <Zap className="w-4 h-4 text-red-400 flex-shrink-0" />
          <p className="text-sm font-bold text-red-300 uppercase tracking-wider">
            Auckland Workshop Almost Full – Only 30 Spots Left
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-7xl font-black leading-tight text-white mb-6 tracking-tight">
            Build Your First
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              AI Website
            </span>
            {' '}in 3 Hours
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center mb-8"
        >
          <p className="text-xl sm:text-2xl text-gray-200 font-semibold max-w-3xl mx-auto">
            Then learn how to build anything with AI — tools, automations, and more.
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
              👥 For business owners, tradies, and beginners (no tech skills needed)
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8"
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
            🚀 Secure My Spot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onHowItWorksClick}
            className="group px-8 py-4 sm:py-4 text-white font-black text-base sm:text-lg uppercase tracking-wide flex items-center gap-3 justify-center rounded-xl border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-98"
          >
            ▶️ See How It Works
          </button>
        </motion.div>

        {/* Trust Signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl">★★★★★</span>
            <p className="text-gray-200 font-semibold">
              Rated 4.9 by business owners across Auckland
            </p>
          </div>
        </motion.div>

        {/* Benefit Cards - 3 Column */}
        <div className="relative z-50 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 - No Coding */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <h3 className="text-base font-bold text-white mb-1">No coding</h3>
            <p className="text-xs text-gray-400">No tech skills needed</p>
          </div>

          {/* Card 2 - Build Live Website */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <h3 className="text-base font-bold text-white mb-1">Build a live website</h3>
            <p className="text-xs text-gray-400">By 12PM</p>
          </div>

          {/* Card 3 - Learn AI Tools */}
          <div className="relative z-50 p-4 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20">
                <Laptop className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <h3 className="text-base font-bold text-white mb-1">Learn AI tools</h3>
            <p className="text-xs text-gray-400">That replace developers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
