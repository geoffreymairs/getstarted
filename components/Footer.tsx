'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Mail, MapPin, Instagram } from 'lucide-react'
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

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <a
            href="mailto:hello@getstarted.co.nz"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>hello@getstarted.co.nz</span>
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin className="w-4 h-4 text-accent" />
            <span>10 Aranui Road, Mt Wellington, Auckland</span>
          </div>
          <a
            href="https://www.instagram.com/getstarted_nz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4 text-accent" />
            <span>@getstarted_nz</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-8">
          <Link
            href="/workshop"
            className="text-sm font-semibold text-accent hover:text-accent-light transition-colors"
          >
            Workshop
          </Link>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
