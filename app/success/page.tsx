'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import WebFooter from '@/components/site/WebFooter'

export default function SuccessPage() {
  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl"
        >
          <CheckCircle2 className="w-20 h-20 text-gs-600 mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900">Payment successful</h1>
          <p className="text-lg text-slate-600 mb-8">
            Your workshop registration is confirmed. Check your email for details and next steps.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-gs-700 transition-colors"
          >
            Back to home
          </Link>
        </motion.div>
      </div>
      <WebFooter />
    </>
  )
}
