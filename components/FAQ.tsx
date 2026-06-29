'use client'

import { motion } from 'framer-motion'
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

interface FAQProps {
  onCTAClick: () => void
}

export default function FAQ({ onCTAClick }: FAQProps) {
  const faqs: FAQItem[] = [
    {
      question: "Where does the training take place?",
      answer: "We come to you. All of our training is delivered on-site at your workplace, anywhere in New Zealand. This means your team learns in their own environment, using examples that relate directly to your business."
    },
    {
      question: "Does my team need any technical knowledge?",
      answer: "No. Our training is designed for everyday business people, not developers. Everything is explained in plain language. If your team can use email and the internet, they can follow along comfortably."
    },
    {
      question: "Can the training be tailored to our business?",
      answer: "Yes. We take time to understand how your business works and build the session around your real tasks and goals. The examples we use come from your own day-to-day work, so what your team learns applies immediately."
    },
    {
      question: "What's the difference between the 1-on-1 and Team Workshop?",
      answer: "The 1-on-1 session is ideal for an individual business owner or professional who wants personalised training. The Team Workshop is designed for businesses with up to 20 participants who want their whole team trained together."
    },
    {
      question: "What do we need to provide for a Team Workshop?",
      answer: "Just a suitable space and a large TV or projector so participants can clearly follow the demonstrations. We bring everything else and guide your team through each step."
    },
    {
      question: "Which AI tools do you cover?",
      answer: "We focus on the leading, practical tools your team can use right away, including ChatGPT, Claude, Gemini and Microsoft Copilot. We also help you understand which tool is best suited to different tasks in your business."
    },
    {
      question: "Do we need to pay for AI tools to take part?",
      answer: "No. The free versions of these tools are enough to get real value during the training. If you decide to upgrade to premium versions later, that's optional and based on your own needs."
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
          <button
            onClick={onCTAClick}
            className="group button-premium inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all"
          >
            View Training Packages
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
