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
    <section className="relative py-20 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-gs-50 border border-gs-100 mb-5">
            <p className="text-xs text-gs-600 font-semibold uppercase tracking-wide">What we do</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight text-slate-900 text-balance">
            AI consultancy{' '}
            <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Practical, end-to-end AI services designed to help your business save time, cut costs and work smarter
, without the jargon.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <Link
                  href={`/ai-consultancy#${service.slug}`}
                  className="group block h-full p-6 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5"
                >
                  <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-xl bg-gs-50">
                    <Icon className="w-5 h-5 text-gs-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gs-600">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
            className="group inline-flex items-center gap-2 text-gs-600 hover:text-gs-700 font-semibold transition-colors"
          >
            See all consultancy services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
