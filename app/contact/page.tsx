'use client'

import { motion } from 'framer-motion'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <WebNav />
      <main className="min-h-screen bg-white pt-20">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gs-50/70 via-white to-white" />
          <div className="max-w-4xl mx-auto px-6 pt-20 pb-20 sm:pt-24">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gs-500" />
                Get in touch
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.05]">
                Let&apos;s talk about{' '}
                <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
                  your business
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
                Book a free consultation or get in touch to discuss how GetStarted can help your business get online
                and grow.
              </p>
            </motion.div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>
      </main>
      <WebFooter />
    </>
  )
}
