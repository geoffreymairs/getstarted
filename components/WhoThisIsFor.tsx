'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function WhoThisIsFor() {
  const audiences = [
    {
      title: 'Small & Medium Businesses',
      description: 'Want practical AI solutions that save time and reduce costs without a big budget.'
    },
    {
      title: 'Professional Services',
      description: 'Accountants, consultants and agencies wanting their team to work smarter with AI.'
    },
    {
      title: 'Trades',
      description: 'Quote faster, follow up leads and handle paperwork with less effort.'
    },
    {
      title: 'Manufacturing',
      description: 'Streamline operations, scheduling and reporting with intelligent automation.'
    },
    {
      title: 'Retail',
      description: 'Automate stock, customer service and marketing to compete with less overhead.'
    },
    {
      title: 'Healthcare',
      description: 'Reduce admin burden so your team can spend more time with patients.'
    },
    {
      title: 'Property',
      description: 'Automate enquiries, listings and paperwork across your portfolio.'
    },
    {
      title: 'Service Businesses',
      description: 'Respond to customers faster and automate the admin that slows you down.'
    }
  ]

  return (
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight text-slate-900">
            Who we{' '}
            <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">help</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            We work with small and medium businesses across every industry who want practical AI solutions, no
            technical background needed.
          </p>
        </motion.div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 flex gap-4 transition-all hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/60"
            >
              <CheckCircle2 className="w-6 h-6 text-gs-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{audience.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{audience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
