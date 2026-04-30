'use client'

import { motion } from 'framer-motion'
import { CheckCircle, MapPin, Zap } from 'lucide-react'

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-dark py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-6 flex justify-center">
            <CheckCircle className="w-20 h-20 text-accent animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            You're Booked!
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thanks for reserving your place for the AI Website Workshop. We can't wait to see you there.
          </p>
        </motion.div>

        {/* What to Prepare */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-black text-white mb-6">Before You Arrive</h2>
          <p className="text-gray-300 mb-6">Create free accounts for these tools (takes 2 minutes total):</p>
          <div className="space-y-3">
            {[
              { name: 'ChatGPT', url: 'https://chat.openai.com' },
              { name: 'GitHub', url: 'https://github.com' },
              { name: 'Vercel', url: 'https://vercel.com' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg hover:bg-blue-500/15 hover:border-blue-500/50 transition-all group"
              >
                <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white font-semibold group-hover:text-accent-light transition-colors">{item.name}</p>
                  <p className="text-sm text-gray-400">Click to sign up →</p>
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
          <h2 className="text-2xl font-black text-white mb-6">Please Bring</h2>
          <div className="space-y-3">
            {[
              'Your laptop',
              'Charger'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300">{item}</p>
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
          <h2 className="text-2xl font-black text-white mb-6">Workshop Location</h2>
          <div
            className="p-8 rounded-2xl border-2 border-accent/40"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.08) 0%, rgba(168, 85, 247, 0.05) 100%)'
            }}
          >
            <div className="flex gap-4 mb-6">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-bold text-white mb-3">Remuera Golf Club</p>
                <p className="text-gray-300">120 Abbotts Way</p>
                <p className="text-gray-300">Remuera, Auckland 1050</p>
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
          <div
            className="p-10 rounded-2xl border-2 border-accent/60"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)'
            }}
          >
            <p className="text-gray-300 mb-4">In 3 hours, you'll have:</p>
            <h3 className="text-3xl sm:text-4xl font-black text-accent mb-4">
              Your Website Live
            </h3>
            <p className="text-xl text-gray-300">
              By 12pm, you'll walk out with a real, functioning website on the internet.
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 pt-12 border-t border-accent/20"
        >
          <p className="text-gray-400 mb-4">Have questions before the workshop?</p>
          <a href="mailto:hello@getstarted.co.nz" className="text-accent hover:text-accent-light font-semibold transition-colors">
            hello@getstarted.co.nz
          </a>
        </motion.div>
      </div>
    </div>
  )
}
