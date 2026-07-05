'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Compass, Bot, Workflow, GitBranch, Plug, GraduationCap, Check, ArrowRight, ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
      'Custom AI agents that answer questions, automate tasks and support your staff — like a team member that works around the clock.',
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
      'Beginner-friendly — no technical background required',
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
  { title: 'Independent Advice', description: 'We aren’t tied to any vendor — our recommendations are based on what’s right for you.' },
  { title: 'Practical First', description: 'We focus on solutions that actually work in the real world, not just demos.' },
  { title: 'Built For SMEs', description: 'Our solutions are designed for small and medium businesses, not enterprise.' },
  { title: 'Local NZ Business', description: 'We understand the New Zealand market and work with local businesses every day.' },
  { title: 'Tailored Recommendations', description: 'Every solution starts with your business goals, not generic playbooks.' },
  { title: 'Real Outcomes', description: 'We measure success by time saved, costs reduced, and results delivered.' },
]

export default function AIConsultancyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark overflow-hidden">
        {/* Hero */}
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-accent bg-accent/10 border border-accent/20 mb-8">
                NZ AI CONSULTANCY
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-balance">
                AI Consultancy Built For{' '}
                <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">
                  NZ Businesses
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
                We help small and medium businesses implement practical AI solutions that save
                time, reduce costs, and automate repetitive work.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-black text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.2)',
                }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 pb-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
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
                  className="glass rounded-2xl p-8 sm:p-10 scroll-mt-28"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-accent mb-1">{service.tag}</p>
                      <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-pretty">{service.description}</p>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-gray-200">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <p className="text-sm font-bold text-accent">{service.result}</p>
                    {service.link && (
                      <Link
                        href={service.link.href}
                        className="text-sm font-bold text-gray-300 hover:text-white underline underline-offset-4 transition-colors"
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
              className="text-3xl sm:text-4xl font-black tracking-tight text-center mb-12 text-balance"
            >
              Why Work With Us
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold mb-2 text-white">{reason.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{reason.description}</p>
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
              className="glass rounded-2xl p-10 sm:p-16 text-center border border-accent/20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 text-balance">
                Let&apos;s Explore What AI Could Do{' '}
                <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">
                  For Your Business
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
                Book a free 30 minute AI Strategy Consultation and find out where AI can save you
                time, cut costs, and help you grow.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-black text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.2)',
                }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
