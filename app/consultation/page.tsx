'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Bot, Workflow, Users, Check, ArrowRight, ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const services = [
  {
    id: 'ai-receptionists',
    icon: Phone,
    tag: 'ALWAYS ON',
    title: 'AI Receptionists',
    description:
      'Never miss a customer call again. An AI receptionist answers your phone around the clock — handling enquiries, booking appointments, and qualifying leads while you focus on the work.',
    points: [
      'Answers calls and handles customer enquiries 24/7',
      'Books appointments directly into your calendar',
      'Qualifies leads before passing them to you',
      'Answers FAQs in a natural, conversational voice',
      'Provides after-hours support so no enquiry goes unanswered',
      'Works for any business — trades, services, healthcare, retail',
    ],
    result: 'Result: More leads captured. Fewer missed calls. Less time on the phone.',
  },
  {
    id: 'ai-agents',
    icon: Bot,
    tag: 'WORK SMARTER',
    title: 'AI Agents',
    description:
      'AI agents are digital workers that handle repetitive admin and customer tasks automatically — without you lifting a finger. Think of them as a team member that never sleeps, never makes mistakes, and never needs a day off.',
    points: [
      'Qualify new leads and route them to the right person',
      'Follow up with customers automatically after enquiries',
      'Generate quotes or proposals from basic inputs',
      'Update your CRM with customer interactions',
      'Draft emails and responses based on context',
      'Process data and update databases automatically',
      'Handle customer communication at scale',
    ],
    result: 'Result: Hours of admin saved every week. Faster response times. Happier customers.',
  },
  {
    id: 'ai-workflows',
    icon: Workflow,
    tag: 'CONNECT EVERYTHING',
    title: 'AI Workflows & Automation',
    subheading: 'Connect The Systems You Already Use',
    description:
      "Most businesses already use multiple tools — but they don't talk to each other. We build intelligent workflows that connect your existing systems and automate the steps in between.",
    points: [
      'Forms that automatically feed into your CRM or spreadsheet',
      'Missed calls that trigger instant SMS follow-ups',
      'Automated lead follow-up sequences',
      'AI-powered data sorting, tagging, and routing',
      'Integrations between booking tools, emails, and databases',
      'Notifications and alerts when key events happen',
    ],
    result: 'Result: Fewer manual steps. Less falling through the cracks. Smoother operations.',
  },
  {
    id: 'group-workshops',
    icon: Users,
    tag: 'TEAM TRAINING',
    title: 'Group Workshops',
    description:
      'Want to bring AI skills into your business? We run hands-on workshops designed to get your whole team comfortable using AI tools in their day-to-day work — no tech background required.',
    points: [
      'Tailored business AI workshops for your team',
      'Beginner-friendly — no technical knowledge needed',
      'Practical, hands-on sessions with real tools',
      'Focused on your specific business and industry',
      'Implementation training so your team can hit the ground running',
      'Available in-person (Auckland) or online',
    ],
    result: 'Result: A team that knows how to use AI — saving time and working smarter from day one.',
  },
]

const reasons = [
  { title: 'NZ Based', description: 'We understand the NZ market and work with local businesses every day.' },
  { title: 'Practical First', description: 'We focus on solutions that actually work in the real world — not just demos.' },
  { title: 'Built For SMEs', description: 'Our solutions are designed for small and medium businesses, not enterprise.' },
  { title: 'Approachable', description: 'No jargon. No complexity. We speak plain English and keep things simple.' },
  { title: 'Business-First', description: 'Every solution starts with your business goals, not the technology.' },
  { title: 'Real Outcomes', description: 'We measure success by time saved, leads captured, and revenue grown.' },
]

const consultationMenu = [
  { label: 'AI Receptionists', href: '#ai-receptionists' },
  { label: 'AI Agents', href: '#ai-agents' },
  { label: 'AI Workflows & Automation', href: '#ai-workflows' },
  { label: 'Group Workshops', href: '#group-workshops' },
]

const BOOK_HREF = 'mailto:hello@getstarted.co.nz'

function BookButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={BOOK_HREF}
      className={`group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-black text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
        boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.2)',
      }}
    >
      Book Consultation
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  )
}

export default function ConsultationPage() {
  return (
    <>
      <Navigation
        menuItems={consultationMenu}
        consultationActive
        ctaLabel="Contact Us"
        onCTAClick={() => {
          window.location.href = BOOK_HREF
        }}
      />
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
                NZ BUSINESS AI
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-balance">
                AI Tools Built For{' '}
                <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">
                  NZ Businesses
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
                We help small and medium businesses implement practical AI tools that save time,
                improve customer service, and automate repetitive work.
              </p>
              <BookButton />
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

                  {service.subheading && (
                    <p className="text-lg font-bold text-white mb-3">{service.subheading}</p>
                  )}
                  <p className="text-gray-300 leading-relaxed mb-6 text-pretty">{service.description}</p>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-gray-200">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm font-bold text-accent">{service.result}</p>
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
                Whether you need automation, AI phone answering, workflows, or team training, we can
                help you get started.
              </p>
              <BookButton />
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
