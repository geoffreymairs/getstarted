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
      className="max-w-2xl mx-auto rounded-2xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl shadow-slate-200/60"
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-gs-500 focus:ring-2 focus:ring-gs-500/30 focus:bg-white transition-all"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name.message}</p>}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
            <input
              type="text"
              placeholder="Your business"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-gs-500 focus:ring-2 focus:ring-gs-500/30 focus:bg-white transition-all"
              {...register('company')}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-gs-500 focus:ring-2 focus:ring-gs-500/30 focus:bg-white transition-all"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+64 (0)21 123 4567"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-gs-500 focus:ring-2 focus:ring-gs-500/30 focus:bg-white transition-all"
              {...register('phone')}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us a bit about your business and what you'd like to discuss..."
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-gs-500 focus:ring-2 focus:ring-gs-500/30 focus:bg-white transition-all resize-none"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="text-red-600 text-sm mt-2">{errors.message.message}</p>}
          </div>

          {submitError && <p className="text-red-600 text-sm text-center">{submitError}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-gs-600 text-white font-semibold text-base hover:bg-gs-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed py-3.5"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          <p className="text-center text-sm text-slate-500">
            We&apos;ll be in touch within one business day.
          </p>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <CheckCircle2 className="w-16 h-16 text-gs-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent</h3>
          <p className="text-slate-600">
            Thanks for reaching out. We&apos;ll be in touch within one business day to arrange your
            free consultation.
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}
