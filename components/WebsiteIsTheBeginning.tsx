'use client'

import { motion } from 'framer-motion'
import { Zap, Lightbulb, Gauge, Mail, TrendingUp, Users, MessageSquare, Rocket } from 'lucide-react'

export default function WebsiteIsTheBeginning() {
  const buildCapabilities = [
    { icon: Gauge, text: 'Quote Calculators' },
    { icon: Mail, text: 'Proposal Generators' },
    { icon: Users, text: 'CRM Systems' },
    { icon: TrendingUp, text: 'Lead Generation Tools' },
    { icon: MessageSquare, text: 'Content Creation Systems' },
    { icon: Lightbulb, text: 'Automations & Workflows' },
    { icon: Rocket, text: 'Marketing Campaigns' },
    { icon: Users, text: 'Customer Follow-up Systems' },
  ]

  return (
    <section className="relative py-20 sm:py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Your Website is Just
            <br />
            <span className="text-accent-light">The Beginning</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The website you launch by 12pm is just the entry point. We'll teach you the exact AI tools and systems you can use to build almost anything for your business—from automations to revenue-generating tools.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {buildCapabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ translateY: -4, boxShadow: '0 0 32px rgba(0, 153, 255, 0.3)' }}
                className="group p-4 rounded-lg border border-accent/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/10"
              >
                <Icon className="w-5 h-5 text-accent mb-3 group-hover:text-accent-light transition-colors" />
                <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Promise Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div
            className="inline-block px-8 py-6 rounded-2xl border-2 border-accent/50"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.08) 0%, rgba(168, 85, 247, 0.05) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="flex items-center gap-3 justify-center mb-3">
              <Zap className="w-6 h-6 text-accent" />
              <p className="text-sm font-bold text-accent uppercase tracking-wider">The AI-Powered Business Builder</p>
            </div>
            <p className="text-lg sm:text-xl text-gray-200 font-semibold">
              Stop paying for expensive software subscriptions. Build your own with AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
