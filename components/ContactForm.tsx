'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setSubmitError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto rounded-2xl p-8 sm:p-12 shadow-glow-lg"
      style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 153, 255, 0.15)' }}
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Company</label>
            <input
              type="text"
              placeholder="Your business"
              className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
              {...register('company')}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Phone Number</label>
            <input
              type="tel"
              placeholder="+64 (0)21 123 4567"
              className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
              {...register('phone')}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us a bit about your business and what you'd like to discuss..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all resize-none"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>}
          </div>

          {submitError && <p className="text-red-400 text-sm text-center">{submitError}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 py-4"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          <p className="text-center text-sm text-gray-400">
            We&apos;ll be in touch within one business day.
          </p>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
          <p className="text-gray-300">
            Thanks for reaching out. We&apos;ll be in touch within one business day to arrange your
            free consultation.
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}
