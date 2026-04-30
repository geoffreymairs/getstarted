'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const flowSteps = [
  { label: 'We Guide', icon: '🎯' },
  { label: 'You Build', icon: '🛠️' },
  { label: 'You Launch', icon: '🚀' },
]

const audiences = ['Entrepreneurs', 'Career Changers', 'Students', 'Creatives', 'Business Owners', 'Professionals']

const pathwaySteps = [
  {
    title: 'Get Started With AI',
    description: 'Live hands-on workshop — build your first AI-powered website in 3 hours'
  },
  {
    title: 'Learn What Actually Works',
    description: 'Master the exact AI strategies real businesses are using right now'
  },
  {
    title: 'Build Your Own',
    description: 'Launch your website, own your domain, scale your business with AI'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            The <span className="bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent">Live Workshop</span> In Action
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-4 sm:gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-2xl mb-3">
                    {step.icon}
                  </div>
                  <p className="font-semibold text-white text-center">{step.label}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="hidden sm:block text-accent w-6 h-6 mb-8" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Audiences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pb-20 border-b border-accent/10"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-white">
            Perfect for Anyone Starting With AI
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((audience) => (
              <motion.div
                key={audience}
                whileHover={{ scale: 1.08, translateY: -6 }}
                className="px-6 py-3 rounded-full glass text-gray-300 font-medium hover:border-accent/80 transition-all shadow-glow-sm hover:shadow-glow"
              >
                {audience}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pathway */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center text-white">
            Your AI Journey Starts Here
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pathwaySteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ translateY: -12, boxShadow: '0 0 32px rgba(0, 153, 255, 0.4)' }}
                className="relative glass p-8 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-accent to-accent-light flex items-center justify-center text-dark font-bold text-lg shadow-glow">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold mb-3 text-white mt-2">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                {index < pathwaySteps.length - 1 && (
                  <ArrowRight className="hidden sm:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-accent w-6 h-6" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
