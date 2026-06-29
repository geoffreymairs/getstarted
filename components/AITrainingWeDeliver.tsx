'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  Rocket,
  Compass,
  ClipboardList,
  Megaphone,
  Headphones,
  TrendingUp,
  GraduationCap,
} from 'lucide-react'

export default function AITrainingWeDeliver() {
  const topics = [
    {
      icon: MessageSquare,
      title: 'ChatGPT',
      description: 'Use ChatGPT confidently for everyday business tasks, writing and problem solving.',
    },
    {
      icon: Rocket,
      title: 'Vercel and v0',
      description: 'See how modern AI tools can turn ideas into websites and simple apps quickly.',
    },
    {
      icon: Compass,
      title: 'What Tools To Use',
      description: 'Cut through the noise and learn which AI tools are right for your business.',
    },
    {
      icon: ClipboardList,
      title: 'AI For Administration',
      description: 'Automate repetitive admin, documents and data entry to save hours each week.',
    },
    {
      icon: Megaphone,
      title: 'AI For Marketing',
      description: 'Create content, social posts and campaigns faster with AI assistance.',
    },
    {
      icon: Headphones,
      title: 'AI For Customer Service',
      description: 'Respond to enquiries quicker and keep your customer communication consistent.',
    },
    {
      icon: TrendingUp,
      title: 'AI For Sales',
      description: 'Draft proposals, follow-ups and quotes that help you win more work.',
    },
    {
      icon: GraduationCap,
      title: 'AI Basics',
      description: 'Build a solid, jargon-free foundation so your whole team feels confident.',
    },
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
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <p className="text-xs text-accent font-semibold uppercase tracking-wide">What We Cover</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight text-balance">
            AI Training <span className="text-accent-light">We Deliver</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-pretty">
            Every session is tailored to your business, but these are the core areas we
            help teams understand and put to use straight away.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {topics.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ translateY: -4, boxShadow: '0 0 32px rgba(0, 153, 255, 0.3)' }}
                className="group p-6 rounded-xl border border-accent/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/10"
              >
                <div className="mb-4 p-3 rounded-lg bg-accent/20 w-fit group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-5 h-5 text-accent group-hover:text-accent-light transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
