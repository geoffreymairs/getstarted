'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { WEB_PRODUCTS, WEB_URL } from '@/lib/webLinks'

export default function WebNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [webOpen, setWebOpen] = useState(false)

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      pathname === href ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo-light.png"
            alt="GetStarted"
            width={512}
            height={120}
            priority
            sizes="280px"
            className="h-[62px] w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Web → the storefront (single destination) with an informational dropdown */}
          <div className="relative" onMouseEnter={() => setWebOpen(true)} onMouseLeave={() => setWebOpen(false)}>
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Web
              <ChevronDown className={`w-4 h-4 transition-transform ${webOpen ? 'rotate-180' : ''}`} />
            </a>
            {webOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="w-[400px] rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 p-5">
                  <p className="text-sm font-bold text-slate-900">GetStarted Web</p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">
                    Everything you need to get your business online.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {WEB_PRODUCTS.map((p) => (
                      <div key={p.label} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gs-50 text-gs-600 flex-shrink-0">
                          <p.icon className="w-4 h-4" strokeWidth={2} />
                        </span>
                        {p.label}
                      </div>
                    ))}
                  </div>
                  <a
                    href={WEB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-between rounded-xl px-4 py-2.5 bg-gs-600 text-white hover:bg-gs-700 transition-colors"
                  >
                    <span className="text-sm font-semibold">Explore GetStarted Web</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <Link href="/ai" className={linkClass('/ai')}>
            AI Consultancy
          </Link>
          <Link href="/about" className={linkClass('/about')}>
            About
          </Link>
          <Link href="/contact" className={linkClass('/contact')}>
            Contact
          </Link>

          <a
            href={WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gs-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gs-700 transition-colors"
          >
            Find a domain
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-slate-700"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-1">
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Web
              <span className="text-xs font-normal text-slate-400">GetStarted Web →</span>
            </a>
            {[
              ['AI Consultancy', '/ai'],
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                {label}
              </Link>
            ))}
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-gs-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Find a domain
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
