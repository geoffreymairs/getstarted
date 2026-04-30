'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState, RefObject, useEffect } from 'react'
import { CheckCircle2, Calendar, MapPin } from 'lucide-react'

declare global {
  interface Window {
    Stripe: any
  }
}

interface FormData {
  name: string
  email: string
  phone: string
  businessType: string
  date: string
}

interface FinalCTAProps {
  ctaRef: RefObject<HTMLDivElement>
}

export default function FinalCTA({ ctaRef }: FinalCTAProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      businessType: ''
    }
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState('2026-06-02')

  const dates = [
    { date: '2026-06-02', display: '2 June', time: '9am - 12pm', status: 'selling-fast' }
  ]

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          workshopDate: selectedDate,
        }),
      })

      if (!response.ok) throw new Error('Checkout failed')

      const { sessionId } = await response.json()

      // Send confirmation email
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          phone: data.phone,
          businessType: data.businessType,
          workshopDate: selectedDate,
        }),
      })

      if (!window.Stripe) {
        const script = document.createElement('script')
        script.src = 'https://js.stripe.com/v3/'
        script.onload = () => {
          window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY).redirectToCheckout({ sessionId })
        }
        document.body.appendChild(script)
      } else {
        window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY).redirectToCheckout({ sessionId })
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <section ref={ctaRef} className="relative py-32 px-6 overflow-hidden">
      {/* Dramatic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-glow/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, margin: "-80px 0px -200px 0px" }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-glow/20 border border-purple-glow/50 w-full text-center"
        >
          <p className="text-sm font-bold text-purple-glow uppercase tracking-wider">📍 Attend Live in Auckland, New Zealand</p>
        </motion.div>

        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, margin: "-80px 0px -200px 0px" }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8 px-4 py-2 rounded-full bg-accent/20 border border-accent/50 w-full text-center"
        >
          <p className="text-sm font-bold text-accent uppercase tracking-wider">⚡ Limited workshop spots — Register now to reserve yours</p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tight">
            Get Started <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent animate-glow">With AI today</span>
          </h2>
        </motion.div>

        {/* Checkout Container - Form + Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-2xl p-8 sm:p-12 shadow-glow-lg hover:shadow-glow-brand transition-all mb-8"
          style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 153, 255, 0.15)' }}
        >
          {/* Form + Pricing - Single Box */}
          <div>
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <p className="text-lg sm:text-xl text-gray-300 font-semibold mb-3">
                  Join our next live workshop in Auckland. Build, launch, and own your AI-powered website in just 3 hours.
                </p>
                <p className="text-accent font-semibold">Built for Auckland business owners, entrepreneurs, and professionals.</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+64 (0)21 123 4567"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-2">{errors.phone.message}</p>
                )}
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  What best describes you?
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-accent/20 text-white focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                  {...register('businessType', { required: 'Please select an option' })}
                >
                  <option value="">Please Select</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="career-changer">Career Changer</option>
                  <option value="student">Student</option>
                  <option value="creative">Creative / Designer</option>
                  <option value="business-owner">Business Owner</option>
                  <option value="professional">Professional</option>
                  <option value="other">Other</option>
                </select>
                {errors.businessType && (
                  <p className="text-red-400 text-sm mt-2">{errors.businessType.message}</p>
                )}
              </div>

              {/* Workshop Date & Location - Beautiful Combined Box */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  📍 Auckland Workshop Details
                </label>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #0099ff 0%, #00bfff 100%)',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 backdrop-blur-xs opacity-10"></div>

                  <div className="relative p-8 space-y-6">
                    {/* Date Section */}
                    <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                      <div className="flex-shrink-0 mt-1">
                        <Calendar className="w-6 h-6 text-white/80" />
                      </div>
                      <div className="flex-1">
                        {dates.map((dateOption) => {
                          const isSellingFast = dateOption.status === 'selling-fast'

                          return (
                            <div key={dateOption.date}>
                              <div className="font-black text-3xl sm:text-4xl text-white mb-1">{dateOption.display}</div>
                              <div className="text-white/90 font-semibold text-lg mb-3">{dateOption.time}</div>
                              {isSellingFast && (
                                <motion.div
                                  animate={{ scale: [1, 1.08, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="inline-block text-sm font-black text-white bg-red-600/90 px-3 py-1 rounded-full"
                                >
                                  🔥 Selling Fast
                                </motion.div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Venue Section */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <MapPin className="w-6 h-6 text-white/80" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-black uppercase tracking-widest text-white/70 mb-2">Venue</p>
                        <p className="font-black text-xl sm:text-2xl text-white mb-1">Remuera Golf Club</p>
                        <p className="text-white/90 font-semibold">120 Abbotts Way</p>
                        <p className="text-white/90 font-semibold">Remuera, Auckland</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Order Summary - Integrated */}
              <div className="bg-black/40 rounded-lg p-6 space-y-4 backdrop-blur">
                <h3 className="text-sm font-black text-white text-center mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Workshop (Early Bird)</span>
                    <div className="text-right">
                      <div className="line-through text-gray-500 text-sm">$399+gst</div>
                      <span className="font-semibold text-accent">$299+gst</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-gray-300 pb-3 border-b border-accent/30">
                    <span>GST (15%)</span>
                    <span className="font-semibold">$44.85 NZD</span>
                  </div>
                  <div className="flex justify-between items-center text-accent text-lg font-black">
                    <span>Total</span>
                    <span>$343.85 NZD</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isLoading ? '⏳ Processing...' : '🚀 Complete Your Registration'}
              </button>

              {/* Trust message */}
              <p className="text-center text-sm text-gray-400">
                Secure your spot for the next live workshop. We'll send you workshop details and start time.
              </p>
            </form>
            </>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">
                You're Registered! 🎉
              </h3>
              <p className="text-gray-300 mb-2">
                Your spot is reserved for the next AI workshop.
              </p>
              <p className="text-gray-400">
                Check your email for workshop details, schedule, and what to bring. Get ready to build your first AI-powered website.
              </p>
            </motion.div>
          )}
          </div>
        </motion.div>

        {/* Additional info - Premium stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          <motion.div
            whileHover={{ translateY: -8, boxShadow: '0 0 32px rgba(0, 153, 255, 0.4)' }}
            className="glass p-6 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            <p className="text-3xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-2">3 Hours</p>
            <p className="text-sm font-semibold text-gray-300">Live Hands-On Workshop</p>
          </motion.div>
          <motion.div
            whileHover={{ translateY: -8, boxShadow: '0 0 32px rgba(0, 153, 255, 0.4)' }}
            className="glass p-6 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            <p className="text-3xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-2">No Coding</p>
            <p className="text-sm font-semibold text-gray-300">Learn AI by Doing</p>
          </motion.div>
          <motion.div
            whileHover={{ translateY: -8, boxShadow: '0 0 32px rgba(0, 153, 255, 0.4)' }}
            className="glass p-6 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            <p className="text-3xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-2">Real Website</p>
            <p className="text-sm font-semibold text-gray-300">Launched & Live</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
