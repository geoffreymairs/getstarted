'use client'

import { motion } from 'framer-motion'
import { XCircle } from 'lucide-react'

export default function WhoThisIsNotFor() {
  const notFor = [
    {
      title: 'Advanced Developers',
      description: 'If your team already builds AI systems and full-stack applications, this introductory training isn\'t the right fit.'
    },
    {
      title: 'AI Researchers',
      description: 'We don\'t dive into how AI models work internally. This is about practical business use, not deep theory.'
    },
    {
      title: 'Fully Remote-Only Teams',
      description: 'Our training is delivered on-site at your workplace. If your team can\'t gather in one location, get in touch first.'
    },
    {
      title: 'Businesses Not Ready To Apply It',
      description: 'This is hands-on. You\'ll get the most value if your team is ready to actually use AI in their day-to-day work.'
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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            We&apos;re honest about who our training is designed for. If you&apos;re in one of these groups, we&apos;re happy to point you toward better-suited resources.
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
