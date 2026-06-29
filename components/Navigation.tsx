'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  onCTAClick?: () => void
  showCTA?: boolean
  hideMenu?: boolean
  menuItems?: NavItem[]
  consultationActive?: boolean
  ctaLabel?: string
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Training', href: '#training' },
  { label: 'About Us', href: '#about' },
  { label: 'Who It\'s For', href: '#who-for' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' }
]

export default function Navigation({
  onCTAClick,
  showCTA = true,
  hideMenu = false,
  menuItems,
  consultationActive = false,
  ctaLabel = 'Book Now',
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = menuItems ?? defaultNavItems

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCTAClick = () => {
    setMobileMenuOpen(false)
    onCTAClick?.()
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10"
      style={{
        background: 'rgba(15, 23, 42, 0.7)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Get Started"
              width={200}
              height={60}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        {!hideMenu && (
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-glow group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Link
              href="/consultation"
              aria-current={consultationActive ? 'page' : undefined}
              className={`text-sm font-semibold transition-colors duration-200 ${
                consultationActive ? 'text-accent' : 'text-accent hover:text-accent-light'
              }`}
            >
              AI Consultation
            </Link>
          </div>
        )}

        {/* Desktop CTA Button */}
        {showCTA && onCTAClick && (
          <div className="hidden lg:block">
            <button
              onClick={handleCTAClick}
              className="group button-premium px-8 py-3 text-white font-black text-sm uppercase tracking-wide rounded-lg transition-all duration-300 hover:scale-105 active:scale-98"
              style={{
                background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.2)',
              }}
            >
              {ctaLabel}
              <span className="group-hover:translate-x-1 inline-block transition-transform ml-2">→</span>
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          {showCTA && onCTAClick && (
            <button
              onClick={handleCTAClick}
              className="button-premium px-2.5 py-1 text-white font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap hover:scale-105 active:scale-98"
              style={{
                fontSize: '0.75rem',
                background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.15)',
              }}
            >
              {ctaLabel}
            </button>
          )}
          {!hideMenu && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!hideMenu && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-3 bg-dark/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-accent/20 hover:text-white font-semibold transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-3 rounded-lg text-accent hover:bg-accent/20 hover:text-accent-light font-semibold transition-all duration-200"
            >
              AI Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
