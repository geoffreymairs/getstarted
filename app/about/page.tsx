'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'
import FounderAuthority from '@/components/FounderAuthority'

export default function AboutPage() {
  const story = [
    {
      title: 'Our Mission',
      body: 'To help New Zealand businesses use AI in practical, measurable ways, saving time, reducing costs, and freeing people up to focus on the work that actually grows their business.',
    },
    {
      title: 'Why We Started GetStarted',
      body: "GetStarted began as a digital services business, helping small and medium businesses get online and grow. As AI tools became genuinely useful for everyday business problems, we saw the same gap we'd always worked to close: business owners who knew they needed to act, but didn't know where to start or who to trust. We focus on closing that gap.",
    },
    {
      title: 'Our Approach',
      body: "We start with your business, not the technology. Every engagement begins with a free consultation to understand how you operate, then a tailored recommendation, whether that's a strategy session, a custom AI agent, an automated workflow, or training for your team. We stay independent so our advice is always about what's right for you.",
    },
  ]

  return (
    <>
      <WebNav />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gs-50/70 via-white to-white" />
          <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 sm:pt-24 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gs-500" />
                About GetStarted
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.05]">
                New Zealand&apos;s independent{' '}
                <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
                  AI consultancy
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
                We help small and medium New Zealand businesses implement practical AI, without the hype, and without
                being tied to any single vendor.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto grid gap-5">
            {story.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm"
              >
                <h2 className="text-2xl font-extrabold text-slate-900 mb-3">{s.title}</h2>
                <p className="text-slate-600 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
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
                className="group inline-flex items-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-gs-700 transition-colors"
              >
                Book a free consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <WebFooter />
    </>
  )
}
