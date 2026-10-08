'use client'

import { motion } from 'framer-motion'
import { CheckCircle, CalendarCheck, Building2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import WebFooter from '@/components/site/WebFooter'

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
    <>
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="mb-8 flex justify-center">
            <CheckCircle className="w-20 h-20 text-gs-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 text-balance">Booking received</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Thanks for booking your AI training with GetStarted. We&apos;re looking forward to working with your
            business.
          </p>
        </motion.div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">What happens next</h2>
          <div className="space-y-3">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm"
                >
                  <Icon className="w-6 h-6 text-gs-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-900 font-semibold" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
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
            className="inline-flex items-center gap-2 px-6 py-3 text-gs-600 hover:text-gs-700 font-semibold transition-colors"
          >
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </main>
    <WebFooter />
    </>
  )
}
