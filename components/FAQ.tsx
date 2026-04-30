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
      question: "Do I need to know how to code or have technical skills?",
      answer: "No. Zero coding required. We use AI tools that are designed for non-technical people. If you can follow instructions and use Google, you can do this workshop. Seriously. Most attendees are complete beginners."
    },
    {
      question: "What if I fall behind or get stuck during the workshop?",
      answer: "Real support. We're there to help. We keep the group intentionally small (only 20 people) so you get actual attention. If you get stuck, we stop and fix it together. Plus you get 60-day replay access, so you can watch anything you missed."
    },
    {
      question: "Do I need to pay for any tools to do this?",
      answer: "No. You can use the free tiers of our AI tools to build your website. We'll show you exactly how. If you want premium versions of these tools later, that's optional—not required for this workshop."
    },
    {
      question: "Can I use my own business idea or do I have to use your example?",
      answer: "Your own idea. 100%. This workshop works for any business idea, any niche, any industry. Whether you're starting a service business, e-commerce store, coaching business, or anything else—you'll build YOUR website, not mine."
    },
    {
      question: "Is this actually beginner friendly? I've never done anything like this before.",
      answer: "Completely beginner friendly. We assume zero prior knowledge. We explain every step, why we're doing it, and what it means. If something feels confusing, ask. That's what we're here for. Most attendees are first-timers."
    },
    {
      question: "Will I actually leave with a real, live website? Or is this a template?",
      answer: "Real, live website deployed to the internet. You'll own it, you can update it, and anyone can visit it. Not a template, not a demo, not a promise. A working website with your domain, live today."
    },
    {
      question: "What if I try but still can't get it working by the end?",
      answer: "We keep working with you until you do. This is our guarantee. You're paying for results—a live website. If you don't leave with one, we don't stop supporting you. We'll help you get there."
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
            Reserve Your Seat Now - $299+gst (Early Bird)
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
