'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  ClipboardX,
  TrendingUp,
  MessageCircle,
  RefreshCw,
  Users,
  Brain,
  Award,
  DollarSign,
} from 'lucide-react'

const benefits = [
  { icon: Clock, title: 'Save Hours Every Week', description: 'Free your team from tasks AI can handle for you.' },
  { icon: ClipboardX, title: 'Reduce Manual Administration', description: 'Cut down on paperwork, data entry and repetitive admin.' },
  { icon: TrendingUp, title: 'Increase Productivity', description: 'Get more done with the people and time you already have.' },
  { icon: MessageCircle, title: 'Improve Customer Response Times', description: 'Respond to enquiries faster and never miss a lead.' },
  { icon: RefreshCw, title: 'Eliminate Repetitive Work', description: 'Automate the tasks that drain your team’s time and energy.' },
  { icon: Users, title: 'Scale Without Hiring', description: 'Handle more work without growing headcount.' },
  { icon: Brain, title: 'Better Decision Making', description: 'Use data and AI insights to make faster, smarter calls.' },
  { icon: Award, title: 'Competitive Advantage', description: 'Stay ahead of businesses still doing things the old way.' },
  { icon: DollarSign, title: 'Increase Profitability', description: 'Lower costs and higher output go straight to your bottom line.' },
]

export default function BenefitsSection() {
  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-balance">
            Real Business <span className="text-accent">Outcomes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            We focus on results, not technology for its own sake. Here&apos;s what businesses gain
            when they work with us.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative p-6 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.06) 0%, rgba(168, 85, 247, 0.05) 100%)',
                  border: '1px solid rgba(0, 153, 255, 0.15)',
                }}
              >
                <div className="mb-4 p-3 rounded-lg bg-accent/20 w-fit">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
