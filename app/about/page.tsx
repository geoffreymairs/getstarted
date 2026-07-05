'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import FounderAuthority from '@/components/FounderAuthority'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark overflow-hidden">
        {/* Hero */}
        <section className="relative pt-36 pb-12 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <AnimatedBackground />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-accent bg-accent/10 border border-accent/20 mb-8">
                ABOUT GETSTARTED
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-balance">
                New Zealand&apos;s Independent{' '}
                <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">
                  AI Consultancy
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed">
                We help small and medium New Zealand businesses implement practical AI &mdash;
                without the hype, and without being tied to any single vendor.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <h2 className="text-2xl font-black text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To help New Zealand businesses use AI in practical, measurable ways &mdash; saving
                time, reducing costs, and freeing people up to focus on the work that actually
                grows their business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <h2 className="text-2xl font-black text-white mb-4">Why We Started GetStarted</h2>
              <p className="text-gray-300 leading-relaxed">
                GetStarted began as a digital services business, helping small and medium
                businesses get online and grow. As AI tools became genuinely useful for everyday
                business problems, we saw the same gap we&apos;d always worked to close: business
                owners who knew they needed to act, but didn&apos;t know where to start or who to
                trust. We rebranded to GetStarted AI to focus entirely on closing that gap.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <h2 className="text-2xl font-black text-white mb-4">Our Approach</h2>
              <p className="text-gray-300 leading-relaxed">
                We start with your business, not the technology. Every engagement begins with a
                free consultation to understand how you operate, then a tailored recommendation
                &mdash; whether that&apos;s a strategy session, a custom AI agent, an automated
                workflow, or training for your team. We stay independent so our advice is always
                about what&apos;s right for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team + Credentials + Philosophy */}
        <FounderAuthority />

        {/* Final CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
