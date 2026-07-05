'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
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
  ctaLabel?: string
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'AI Consultancy', href: '/ai-consultancy' },
  { label: 'About Us', href: '/about' },
  { label: 'AI Workshops', href: '/ai-workshops' },
  { label: 'Contact', href: '/contact' },
]

const CTA_HREF = '/contact'

export default function Navigation({
  onCTAClick,
  showCTA = true,
  hideMenu = false,
  menuItems,
  ctaLabel = 'Book Free Consultation',
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = menuItems ?? defaultNavItems

  const handleAnchorClick = (href: string) => {
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

  const ctaButtonClasses =
    'group button-premium text-white font-black uppercase tracking-wide rounded-lg transition-all duration-300 hover:scale-105 active:scale-98'
  const ctaButtonStyle = {
    background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
    boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.2)',
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
              sizes="200px"
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        {!hideMenu && (
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isHash = item.href.startsWith('#')
              const isActive = !isHash && pathname === item.href
              if (isHash) {
                return (
                  <button
                    key={item.href}
                    onClick={() => handleAnchorClick(item.href)}
                    className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-glow group-hover:w-full transition-all duration-300" />
                  </button>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-semibold transition-colors duration-200 relative group ${
                    isActive ? 'text-accent' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-purple-glow transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>
        )}

        {/* Desktop CTA Button */}
        {showCTA && (
          <div className="hidden lg:block">
            {onCTAClick ? (
              <button
                onClick={handleCTAClick}
                className={`${ctaButtonClasses} px-8 py-3 text-sm`}
                style={ctaButtonStyle}
              >
                {ctaLabel}
                <span className="group-hover:translate-x-1 inline-block transition-transform ml-2">→</span>
              </button>
            ) : (
              <Link
                href={CTA_HREF}
                className={`${ctaButtonClasses} px-8 py-3 text-sm inline-flex items-center`}
                style={ctaButtonStyle}
              >
                {ctaLabel}
                <span className="group-hover:translate-x-1 inline-block transition-transform ml-2">→</span>
              </Link>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          {showCTA && (
            onCTAClick ? (
              <button
                onClick={handleCTAClick}
                className={`${ctaButtonClasses} px-2.5 py-1 whitespace-nowrap`}
                style={{ ...ctaButtonStyle, fontSize: '0.75rem' }}
              >
                {ctaLabel}
              </button>
            ) : (
              <Link
                href={CTA_HREF}
                onClick={() => setMobileMenuOpen(false)}
                className={`${ctaButtonClasses} px-2.5 py-1 whitespace-nowrap inline-flex items-center`}
                style={{ ...ctaButtonStyle, fontSize: '0.75rem' }}
              >
                {ctaLabel}
              </Link>
            )
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
            {navItems.map((item) => {
              const isHash = item.href.startsWith('#')
              if (isHash) {
                return (
                  <button
                    key={item.href}
                    onClick={() => handleAnchorClick(item.href)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-accent/20 hover:text-white font-semibold transition-all duration-200"
                  >
                    {item.label}
                  </button>
                )
              }
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    isActive ? 'text-accent bg-accent/10' : 'text-gray-300 hover:bg-accent/20 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
