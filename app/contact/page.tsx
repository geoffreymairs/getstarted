'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark overflow-hidden pt-32 pb-24 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedBackground />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-accent bg-accent/10 border border-accent/20 mb-8">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-balance">
              Let&apos;s Talk About{' '}
              <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed">
              Book your free consultation or get in touch to discuss how AI can transform your business.
            </p>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
