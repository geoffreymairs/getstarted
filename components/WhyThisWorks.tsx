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
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Headline - text beside a real presenting photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16"
        >
          {/* Photo */}
          <figure className="order-last lg:order-first w-full">
            <div className="relative w-full h-72 sm:h-96 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
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
            <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-balance">
              Why Choose <span className="text-accent">GetStarted</span>
            </h2>
            <p className="text-xl text-gray-300 text-pretty">
              We focus on practical business outcomes, not AI hype. Our goal is simple: help
              your business use AI to work smarter and get real results.
            </p>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
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
                className="relative p-8 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.06) 0%, rgba(168, 85, 247, 0.05) 100%)',
                  border: '1px solid rgba(0, 153, 255, 0.15)',
                }}
              >
                <div className="mb-5 p-3 rounded-lg bg-accent/20 w-fit">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
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
            className="group inline-flex items-center gap-3 px-8 py-4 button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 text-lg uppercase tracking-wide"
          >
            Book Free Consultation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
