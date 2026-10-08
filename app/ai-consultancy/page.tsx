'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Compass, Bot, Workflow, GitBranch, Plug, GraduationCap, Check, ArrowRight, ArrowLeft } from 'lucide-react'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'

const services = [
  {
    id: 'ai-strategy',
    icon: Compass,
    tag: 'WHERE TO START',
    title: 'AI Strategy',
    description:
      'We help you understand where AI can create the biggest impact in your business, before you spend a dollar on tools or technology.',
    points: [
      'Assess your current processes, tools and team',
      'Identify the highest-impact opportunities for AI',
      'Build a practical roadmap, not just a wishlist',
      'Prioritise quick wins alongside longer-term projects',
      'Recommendations based on your budget and goals',
      'No obligation to proceed with any specific vendor',
    ],
    result: 'Result: A clear, practical plan for where to start and what to prioritise.',
  },
  {
    id: 'ai-agents',
    icon: Bot,
    tag: 'DIGITAL WORKERS',
    title: 'AI Agents',
    description:
      'Custom AI agents that answer questions, automate tasks and support your staff, like a team member that works around the clock.',
    points: [
      'Answer customer questions and qualify leads',
      'Automate follow-ups and routine communication',
      'Draft emails, quotes and proposals',
      'Update your CRM and other systems automatically',
      'Trained on your business, your tone and your processes',
      'Available 24/7 without extra headcount',
    ],
    result: 'Result: Faster response times and hours of admin saved every week.',
  },
  {
    id: 'workflow-automation',
    icon: Workflow,
    tag: 'CONNECT THE DOTS',
    title: 'Workflow Automation',
    description:
      'Automate the repetitive admin work that slows your business down, connecting the systems and tools you already use.',
    points: [
      'Map out where time is being lost to manual work',
      'Automate data entry, forms and approvals',
      'Connect your CRM, email, spreadsheets and booking tools',
      'Trigger notifications and follow-ups automatically',
      'Reduce errors from manual, repetitive tasks',
      'Free up your team for higher-value work',
    ],
    result: 'Result: Fewer manual steps, fewer errors, smoother operations.',
  },
  {
    id: 'business-process-optimisation',
    icon: GitBranch,
    tag: 'WORK SMARTER',
    title: 'Business Process Optimisation',
    description:
      'We look at how your business actually operates, identify the bottlenecks, and redesign processes using AI to remove them.',
    points: [
      'Map your current processes end-to-end',
      'Identify where time, money and opportunities are lost',
      'Redesign processes around AI and automation',
      'Reduce handoffs, delays and duplicated work',
      'Improve consistency and quality of output',
      'Measure the impact of changes over time',
    ],
    result: 'Result: Leaner, faster processes that scale with your business.',
  },
  {
    id: 'ai-integration',
    icon: Plug,
    tag: 'MAKE YOUR TOOLS TALK',
    title: 'AI Integration',
    description:
      "We connect ChatGPT, Claude and other AI tools directly with your existing software, so AI becomes part of how your business already works.",
    points: [
      'Integrate AI into your CRM, website or internal systems',
      'Connect AI tools to your existing software stack',
      "Build custom integrations where off-the-shelf isn't enough",
      'Ensure data flows securely between systems',
      'Avoid duplicate data entry across platforms',
      'Future-proof your setup as AI tools evolve',
    ],
    result: 'Result: AI working inside the tools your team already uses.',
  },
  {
    id: 'staff-ai-training',
    icon: GraduationCap,
    tag: 'TEAM ENABLEMENT',
    title: 'Staff AI Training',
    description:
      "Upskill your team to confidently use AI every day, so the systems we build are actually adopted and used well.",
    points: [
      'Practical, hands-on training tailored to your business',
      'Beginner-friendly, no technical background required',
      'Covers ChatGPT, Claude, Gemini and Microsoft Copilot',
      'Delivered on-site at your workplace',
      'Available as 1-on-1 coaching or team workshops',
      'Ongoing support as your team builds confidence',
    ],
    result: 'Result: A team that’s confident and consistent using AI daily.',
    link: { href: '/ai-workshops', label: 'View workshop options' },
  },
]

const reasons = [
  { title: 'Independent Advice', description: 'We aren’t tied to any vendor, our recommendations are based on what’s right for you.' },
  { title: 'Practical First', description: 'We focus on solutions that actually work in the real world, not just demos.' },
  { title: 'Built For SMEs', description: 'Our solutions are designed for small and medium businesses, not enterprise.' },
  { title: 'Local NZ Business', description: 'We understand the New Zealand market and work with local businesses every day.' },
  { title: 'Tailored Recommendations', description: 'Every solution starts with your business goals, not generic playbooks.' },
  { title: 'Real Outcomes', description: 'We measure success by time saved, costs reduced, and results delivered.' },
]

export default function AIConsultancyPage() {
  return (
    <>
      <WebNav />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gs-50/70 via-white to-white" />
          <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 sm:pt-24 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gs-500" />
                NZ AI consultancy
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.05]">
                AI consultancy built for{' '}
                <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
                  NZ businesses
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
                We help small and medium businesses implement practical AI solutions that save time, reduce costs, and
                automate repetitive work.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-gs-700 transition-colors"
              >
                Book a free consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 pb-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm scroll-mt-28"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-gs-500 to-indigo-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gs-600 mb-1">{service.tag}</p>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6 text-pretty">{service.description}</p>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-slate-700">
                        <Check className="w-5 h-5 text-gs-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <p className="text-sm font-bold text-gs-600">{service.result}</p>
                    {service.link && (
                      <Link
                        href={service.link.href}
                        className="text-sm font-bold text-slate-600 hover:text-slate-900 underline underline-offset-4 transition-colors"
                      >
                        {service.link.label}
                      </Link>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-10 text-balance text-slate-900"
            >
              Why work with us
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{reason.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center bg-gradient-to-br from-gs-600 to-indigo-600"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(ellipse at 15% 15%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(168,85,247,0.25), transparent 55%)',
                }}
              />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-balance text-white">
                  Let&apos;s explore what AI could do for your business
                </h2>
                <p className="text-lg text-gs-50 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
                  Book a free 30-minute AI Strategy Consultation and find out where AI can save you time, cut costs, and
                  help you grow.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-gs-700 hover:bg-gs-50 transition-colors"
                >
                  Book a free consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <div className="text-center mt-12">
              <Link
                href="/ai"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to AI overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <WebFooter />
    </>
  )
}
