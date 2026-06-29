'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface WhoThisIsForProps {
  onCTAClick: () => void
}

export default function WhoThisIsFor({ onCTAClick }: WhoThisIsForProps) {
  const audiences = [
    {
      title: 'Small Business Owners',
      description: 'Want to save time on admin, marketing and everyday tasks using practical AI tools.'
    },
    {
      title: 'Office & Admin Teams',
      description: 'Spend less time on repetitive work like documents, emails and data entry.'
    },
    {
      title: 'Trades & Service Businesses',
      description: 'Quote faster, follow up leads and handle paperwork with less effort.'
    },
    {
      title: 'Sales & Marketing Teams',
      description: 'Create content, proposals and campaigns more quickly and consistently.'
    },
    {
      title: 'Professional Services',
      description: 'Accountants, consultants and agencies wanting their team to work smarter with AI.'
    },
    {
      title: 'Business Owners New To AI',
      description: 'Want a clear, jargon-free introduction so they know exactly where to start.'
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
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Who This Is <span className="text-accent">For</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            Our training is designed for businesses and teams that want to use AI to save
            time and work smarter &mdash; no technical background needed.
          </p>
        </motion.div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="relative p-6 rounded-lg flex gap-4"
              style={{
                background: 'rgba(0, 153, 255, 0.08)',
                border: '1px solid rgba(0, 153, 255, 0.2)'
              }}
            >
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{audience.title}</h3>
                <p className="text-gray-400">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
