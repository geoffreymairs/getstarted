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
      description: 'Tired of paying agencies $5k-10k for a website. Build and own your digital presence in 3 hours.'
    },
    {
      title: 'Trades & Service Professionals',
      description: 'Plumbers, electricians, cleaners. Get online without technical knowledge or ongoing costs.'
    },
    {
      title: 'Consultants & Coaches',
      description: 'Establish credibility online, showcase your expertise, and capture leads from day one.'
    },
    {
      title: 'Solopreneurs',
      description: 'Launch your business idea quickly without hiring developers or learning to code.'
    },
    {
      title: 'Local Service Businesses',
      description: 'Get found locally, build trust with potential customers, and manage your online presence.'
    },
    {
      title: 'Career Changers',
      description: 'Pivot into your own business venture with a professional web presence built instantly.'
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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            This workshop is designed for busy business owners who want to get online without months of learning or thousands in agency fees.
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
