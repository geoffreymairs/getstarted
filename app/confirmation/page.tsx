'use client'

import { motion } from 'framer-motion'
import { CheckCircle, MapPin, Zap } from 'lucide-react'
import WebFooter from '@/components/site/WebFooter'

export default function ConfirmationPage() {
  return (
    <>
      <div className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-20 h-20 text-gs-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">You&apos;re booked!</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Thanks for reserving your place for the AI Website Workshop. We can&apos;t wait to see you there.
            </p>
          </motion.div>

          {/* What to Prepare */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Before you arrive</h2>
            <p className="text-slate-600 mb-6">Create free accounts for these tools (takes 2 minutes total):</p>
            <div className="space-y-3">
              {[
                { name: 'ChatGPT', url: 'https://chat.openai.com' },
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'Vercel', url: 'https://vercel.com' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <Zap className="w-5 h-5 text-gs-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold">{item.name}</p>
                    <p className="text-sm text-slate-500">Click to sign up →</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* What to Bring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Please bring</h2>
            <div className="space-y-3">
              {['Your laptop', 'Charger'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-gs-600 flex-shrink-0" />
                  <p className="text-slate-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Workshop location</h2>
            <div className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-gs-50 to-indigo-50">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-gs-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-bold text-slate-900 mb-3">Remuera Golf Club</p>
                  <p className="text-slate-600">120 Abbotts Way</p>
                  <p className="text-slate-600">Remuera, Auckland 1050</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Goal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="p-10 rounded-2xl text-center bg-gradient-to-br from-gs-600 to-indigo-600">
              <p className="text-gs-50 mb-4">In 3 hours, you&apos;ll have:</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Your website live</h3>
              <p className="text-lg text-gs-50">
                By 12pm, you&apos;ll walk out with a real, functioning website on the internet.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16 pt-12 border-t border-slate-200"
          >
            <p className="text-slate-500 mb-4">Have questions before the workshop?</p>
            <a
              href="mailto:hello@getstarted.co.nz"
              className="text-gs-600 hover:text-gs-700 font-semibold transition-colors"
            >
              hello@getstarted.co.nz
            </a>
          </motion.div>
        </div>
      </div>
      <WebFooter />
    </>
  )
}
