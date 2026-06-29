'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-8 px-6 bg-dark/50 border-t border-accent/10 overflow-hidden">
      {/* Subtle spotlight glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, rgba(0, 153, 255, 0.08) 0%, transparent 70%)',
      }} />

      <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 relative z-10">
        <Link
          href="#pricing"
          className="text-sm font-semibold text-accent hover:text-accent-light transition-colors"
        >
          Training Packages
        </Link>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>
    </footer>
  )
}
