'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Spotlight from './effects/Spotlight'

interface HeroProps {
  onCTAClick: () => void
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 sm:pt-20 px-4 sm:px-6 overflow-hidden">
      <Spotlight />
      {/* Premium background elements - positioned at edges, reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-light/2 rounded-full blur-3xl"></div>
      </div>

      {/* Dark vignette - creates focus zone for content, improves readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)'
        }}
      ></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: -0.2 }}
          className="inline-block mb-6 sm:mb-8 mt-20 sm:mt-10"
        >
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/30">
            <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">Live Hands-On Workshop</p>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-2 sm:mb-3 leading-tight tracking-tight" style={{ textShadow: '0 0 30px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)' }}>
            <span className="text-white">Get </span>
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent animate-glow" style={{ textShadow: '0 0 20px rgba(0,0,0,0.4), 0 0 10px rgba(0,0,0,0.3)', filter: 'brightness(1.3)' }}>
              Started
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-10 sm:mb-14 leading-tight tracking-tight" style={{ textShadow: '0 0 30px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)' }}>
            <span className="text-white">With </span>
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent animate-glow" style={{ textShadow: '0 0 20px rgba(0,0,0,0.4), 0 0 10px rgba(0,0,0,0.3)', filter: 'brightness(1.3)' }}>
              AI
            </span>
          </h2>
          <h3 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-10 leading-tight" style={{ textShadow: '0 0 30px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)' }}>
            <span className="text-white">Build. </span>
            <br className="sm:hidden" />
            <span className="text-white">Launch. </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent animate-glow" style={{ textShadow: '0 0 20px rgba(0,0,0,0.4), 0 0 10px rgba(0,0,0,0.3)', filter: 'brightness(1.3)' }}>
              Dominate.
            </span>
          </h3>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}
        >
          In just <span className="text-accent font-semibold">3 hours</span>, learn how to use AI to build and launch a real website for your business — <span className="text-accent font-semibold">no technical skills needed</span>.
        </motion.p>

        {/* Trust messaging */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4" style={{ textShadow: '0 0 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}>Perfect for anyone ready to build</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
            {['Entrepreneurs', 'Side Hustlers', 'Career Changers', 'Beginners', 'Professionals'].map((item) => (
              <span key={item} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/5 border border-accent/20 text-gray-300 whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full sm:w-auto mb-12 sm:mb-16 px-2"
        >
          <button
            onClick={onCTAClick}
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-base sm:text-lg rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105"
          >
            Reserve Your Spot
          </button>
          <button
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 button-premium border-2 border-accent/60 text-accent font-bold text-base sm:text-lg rounded-xl hover:bg-accent/10 hover:border-accent hover:shadow-glow soft-shadow-sm transition-all backdrop-blur-sm"
          >
            See The Curriculum
          </button>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/5 border border-accent/20 text-sm text-gray-300 mb-12"
          style={{ textShadow: '0 0 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          Walk in confused. Leave with a real website built with AI.
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ArrowDown className="text-accent/50 w-6 h-6" />
        </motion.div>
      </div>
    </section>
  )
}
