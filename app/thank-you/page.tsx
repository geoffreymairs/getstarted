'use client'

import { motion } from 'framer-motion'
import { CheckCircle, CalendarCheck, Building2, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function ThankYouPage() {
  const steps = [
    {
      icon: CalendarCheck,
      title: 'We&rsquo;ll Be In Touch',
      description: 'Our team will contact you shortly to confirm a date and time that suits your business.',
    },
    {
      icon: Building2,
      title: 'We Tailor The Training',
      description: 'We learn how your business works so the session is built around your real tasks and goals.',
    },
    {
      icon: Sparkles,
      title: 'We Come To You',
      description: 'We deliver practical, hands-on AI training on-site at your workplace.',
    },
  ]

  return (
    <main className="min-h-screen bg-dark py-20 px-6 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center 30%, rgba(0, 153, 255, 0.08) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 75%)',
      }} />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-8 flex justify-center">
            <CheckCircle className="w-24 h-24 text-accent animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 text-balance">
            Booking Received
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            Thanks for booking your AI training with GetStarted AI. We&apos;re looking forward to
            working with your business.
          </p>
        </motion.div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-black text-white mb-6 text-center">What Happens Next</h2>
          <div className="space-y-3">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                >
                  <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Back to home */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center pt-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-accent hover:text-accent-light font-semibold transition-colors"
          >
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
