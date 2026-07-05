'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Compass, Bot, Workflow, GitBranch, Plug, GraduationCap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Compass,
    slug: 'ai-strategy',
    title: 'AI Strategy',
    description: 'Helping businesses understand where AI creates the biggest impact.',
  },
  {
    icon: Bot,
    slug: 'ai-agents',
    title: 'AI Agents',
    description: 'Custom AI agents that answer questions, automate tasks and support your staff.',
  },
  {
    icon: Workflow,
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Automate repetitive admin work across your business.',
  },
  {
    icon: GitBranch,
    slug: 'business-process-optimisation',
    title: 'Business Process Optimisation',
    description: 'Identify bottlenecks and redesign processes using AI.',
  },
  {
    icon: Plug,
    slug: 'ai-integration',
    title: 'AI Integration',
    description: 'Connect ChatGPT, Claude and AI tools with your existing software.',
  },
  {
    icon: GraduationCap,
    slug: 'staff-ai-training',
    title: 'Staff AI Training',
    description: 'Upskill your team to confidently use AI every day.',
  },
]

export default function ServicesOverview() {
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
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <p className="text-xs text-accent font-semibold uppercase tracking-wide">What We Do</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-balance">
            AI Consultancy <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            Practical, end-to-end AI services designed to help your business save time, cut costs
            and work smarter &mdash; without the jargon.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                whileHover={{ translateY: -4, boxShadow: '0 0 32px rgba(0, 153, 255, 0.3)' }}
              >
                <Link
                  href={`/ai-consultancy#${service.slug}`}
                  className="group block h-full p-6 rounded-xl border border-accent/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/10"
                >
                  <div className="mb-4 p-3 rounded-lg bg-accent/20 w-fit group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-5 h-5 text-accent group-hover:text-accent-light transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-accent uppercase tracking-wide">
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/ai-consultancy"
            className="group inline-flex items-center gap-2 text-accent hover:text-accent-light font-bold transition-colors"
          >
            See all consultancy services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
