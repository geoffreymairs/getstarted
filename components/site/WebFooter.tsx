'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Instagram, ArrowRight } from 'lucide-react'
import { WEB_PRODUCTS, WEB_URL } from '@/lib/webLinks'

export default function WebFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo-light.png"
              alt="GetStarted"
              width={512}
              height={120}
              sizes="280px"
              className="h-[62px] w-auto"
            />
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
              Everything your business needs to get online, domains, hosting, websites and email, plus expert AI help
              when you want to go further.
            </p>
          </div>

          {/* Web */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Web</p>
            <ul className="space-y-2.5">
              {WEB_PRODUCTS.map((p) => (
                <li key={p.label} className="text-sm text-slate-600">
                  {p.label}
                </li>
              ))}
            </ul>
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gs-600 hover:text-gs-700 transition-colors"
            >
              Explore GetStarted Web
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">GetStarted</p>
            <ul className="space-y-2.5">
              {[
                ['AI Consultancy', '/ai'],
                ['AI Workshops', '/ai-workshops'],
                ['About', '/about'],
                ['Contact', '/contact'],
                ['Privacy', '/privacy'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Get in touch</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@getstarted.co.nz"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gs-600" />
                  hello@getstarted.co.nz
                </a>
              </li>
              <li>
                <a
                  href="tel:+642102258787"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gs-600" />
                  +64 21 0225 8787
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-gs-600 flex-shrink-0 mt-0.5" />
                10 Aranui Road, Mt Wellington, Auckland
              </li>
              <li>
                <a
                  href="https://www.instagram.com/getstarted_nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-gs-600" />
                  @getstarted_nz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} GetStarted NZ Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              GetStarted Web
            </a>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
