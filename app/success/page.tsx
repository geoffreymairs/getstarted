'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function SuccessPage() {
  return (
    <>
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-2xl"
      >
        <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-8" />
        <h1 className="text-5xl font-black mb-4 text-white">Payment Successful!</h1>
        <p className="text-xl text-gray-300 mb-8">
          Your workshop registration is confirmed. Check your email for details and next steps.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-dark font-bold rounded-xl hover:shadow-glow transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
    <Footer />
    </>
  )
}
