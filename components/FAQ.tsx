'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative rounded-xl overflow-hidden"
      style={{
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(0, 153, 255, 0.15)'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-accent/5 transition-colors text-left"
      >
        <h3 className="text-lg font-bold text-white pr-8">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-accent/10 pt-4">
          <p className="text-gray-300 leading-relaxed">{item.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What happens during the free consultation?",
      answer: "We'll spend 30 minutes learning about your business and identifying where AI could save you time, cut costs or improve how you operate. You'll leave with practical, no-obligation recommendations — not a sales pitch."
    },
    {
      question: "Do I need any technical knowledge to work with you?",
      answer: "No. We explain everything in plain language and design solutions for everyday business owners and teams, not developers. If you can use email and the internet, you can work with us."
    },
    {
      question: "Are you tied to any particular AI tools or vendors?",
      answer: "No. We're an independent consultancy, so our recommendations are based on what's right for your business — not a commission or partnership with a specific vendor."
    },
    {
      question: "Can you work with our existing software and systems?",
      answer: "Yes. Most of our work involves connecting AI to the tools you already use, such as your CRM, email, spreadsheets or booking systems, rather than replacing them."
    },
    {
      question: "What's the difference between consulting and workshops?",
      answer: "Consulting is about strategy and implementation — we help you plan and build AI solutions for your business. Workshops are hands-on training sessions to upskill you or your team directly. Many businesses do both."
    },
    {
      question: "Which AI tools do you work with?",
      answer: "We work with the leading, practical tools businesses use today, including ChatGPT, Claude, Gemini and Microsoft Copilot, along with the automation platforms that connect them to your systems."
    },
    {
      question: "How much does it cost?",
      answer: "The initial 30 minute AI Strategy Consultation is completely free. From there, we'll recommend an approach and provide clear, upfront pricing based on the scope of work — no surprises."
    }
  ]

  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Your Questions <br />
            <span className="text-accent">Answered</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Still have doubts? Here are answers to your most common questions.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3 mb-16">
          {faqs.map((faq, index) => (
            <FAQItemComponent key={index} item={faq} index={index} />
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group button-premium inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
          >
            Book Free Consultation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
