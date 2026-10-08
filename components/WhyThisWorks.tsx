'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, MapPin, Briefcase, Users, Sparkles, Target } from 'lucide-react'

export default function WhyThisWorks() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Independent Advice',
      description:
        'We aren\'t tied to any software vendor. Our recommendations are based on what\'s right for your business, not a sales quota.',
    },
    {
      icon: MapPin,
      title: 'No Vendor Lock-In',
      description:
        'We help you choose and connect the right tools for your business, not push you into one platform.',
    },
    {
      icon: Briefcase,
      title: 'Practical Business Experience',
      description:
        'Real experience running and growing businesses, not just theoretical AI knowledge.',
    },
    {
      icon: Sparkles,
      title: 'AI Experts',
      description:
        'We live and breathe AI tools every day, so you get advice that reflects what actually works right now.',
    },
    {
      icon: Users,
      title: 'Local New Zealand Business',
      description:
        'Based in Auckland and built for the way Kiwi businesses actually operate.',
    },
    {
      icon: Target,
      title: 'Tailored Recommendations',
      description:
        'Every recommendation is designed around your business, your goals and your budget.',
    },
  ]

  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Headline - text beside a real presenting photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14"
        >
          {/* Photo */}
          <figure className="order-last lg:order-first w-full">
            <div className="relative w-full h-72 sm:h-96 overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
              <Image
                src="/workshop-presenter.jpg"
                alt="A GetStarted AI advisor discussing AI strategy with a business"
                fill
                loading="lazy"
                quality={70}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </figure>

          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight text-slate-900 text-balance">
              Why choose{' '}
              <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
                GetStarted
              </span>
            </h2>
            <p className="text-lg text-slate-600 text-pretty leading-relaxed">
              We focus on practical business outcomes, not AI hype. Our goal is simple: help your business use AI to
              work smarter and get real results.
            </p>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/60"
              >
                <div className="mb-5 flex items-center justify-center w-11 h-11 rounded-xl bg-gs-50">
                  <Icon className="w-5 h-5 text-gs-600" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-gs-700 transition-colors"
          >
            Book a free consultation
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
