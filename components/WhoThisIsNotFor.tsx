'use client'

import { motion } from 'framer-motion'
import { XCircle } from 'lucide-react'

export default function WhoThisIsNotFor() {
  const notFor = [
    {
      title: 'Enterprise-Level Businesses',
      description: 'If you need a custom system handling 10k+ transactions daily, this isn\'t the right fit.'
    },
    {
      title: 'Advanced Developers',
      description: 'If you already build full-stack applications, you don\'t need a beginner workshop.'
    },
    {
      title: 'AI Researchers',
      description: 'We don\'t dive into how AI models work internally. This is about practical application, not deep theory.'
    },
    {
      title: 'People Avoiding Action',
      description: 'This workshop requires you to build during the 3 hours. If you just want to \"learn about\" AI, keep watching YouTube.'
    }
  ]

  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Who This Is <span className="text-red-400">Not</span> For
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're honest about who this workshop is designed for. If you're in one of these groups, we can recommend better resources.
          </p>
        </motion.div>

        {/* Not For Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {notFor.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="relative p-6 rounded-lg flex gap-4"
              style={{
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}
            >
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
