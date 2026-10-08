'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useState, RefObject, useRef } from 'react'
import { CheckCircle2, User, Users, Tv } from 'lucide-react'

declare global {
  interface Window {
    Stripe: any
  }
}

interface FormData {
  name: string
  email: string
  phone: string
  business: string
}

type PackageId = 'one-on-one' | 'team'

interface FinalCTAProps {
  ctaRef: RefObject<HTMLDivElement>
}

const packages = [
  {
    id: 'one-on-one' as PackageId,
    name: '1-on-1 AI Training',
    price: '$199',
    gst: '+ GST',
    icon: User,
    tagline: 'Perfect for business owners or professionals who want personalised training.',
    cta: 'Book a 1-on-1 Session',
    images: ['/workshop-one-on-one.png'],
    imageAlt: ['A GetStarted trainer giving one-on-one AI coaching, pointing at a laptop screen'],
    features: [
      'Training delivered at your workplace',
      'Approximately 2 hours',
      'Tailored to your business',
      'Learn about all the leading AI tools',
      'Practical examples using your own business',
      'Q&A session',
    ],
    note: null as string | null,
  },
  {
    id: 'team' as PackageId,
    name: 'Team AI Workshop',
    price: '$999',
    gst: '+ GST',
    icon: Users,
    tagline: 'For businesses with up to 20 participants.',
    cta: 'Book a Team Workshop',
    images: ['/workshop-room.png'],
    imageAlt: ['Attendees seated around the table during a GetStarted team AI workshop'],
    features: [
      'Delivered at your workplace',
      'Up to 20 attendees',
      'Approximately 3 hours',
      'Hands-on practical workshop',
      'Real business examples',
      'AI tools your staff can begin using immediately',
    ],
    note: 'Your workplace should have a large TV or projector so participants can clearly follow the demonstrations.',
  },
]

export default function FinalCTA({ ctaRef }: FinalCTAProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      business: '',
    },
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PackageId>('one-on-one')
  const formRef = useRef<HTMLDivElement>(null)

  const activePackage = packages.find((p) => p.id === selectedPackage)!

  const handleSelectPackage = (id: PackageId) => {
    setSelectedPackage(id)
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          packageType: selectedPackage,
        }),
      })

      if (!response.ok) throw new Error('Checkout failed')

      const { sessionId } = await response.json()

      // Send confirmation email (non-blocking for the booking flow)
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          phone: data.phone,
          business: data.business,
          packageType: selectedPackage,
        }),
      })

      const redirect = (stripe: any) => stripe.redirectToCheckout({ sessionId })

      if (!window.Stripe) {
        const script = document.createElement('script')
        script.src = 'https://js.stripe.com/v3/'
        script.onload = () => redirect(window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY))
        document.body.appendChild(script)
      } else {
        redirect(window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY))
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start booking. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <section ref={ctaRef} className="relative py-20 sm:py-28 px-6 bg-slate-50 border-t border-slate-200">
      <div className="relative max-w-5xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-5 px-3 py-1 rounded-full bg-gs-50 border border-gs-100">
            <p className="text-xs font-bold text-gs-600 uppercase tracking-wider">Training packages</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight text-balance text-slate-900">
            Choose the right{' '}
            <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">
              training for you
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Two clear options, both delivered on-site at your workplace and tailored to your business.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            const isActive = pkg.id === selectedPackage
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-2xl p-8 sm:p-10 bg-white transition-all ${
                  isActive
                    ? 'border-2 border-gs-500 shadow-xl shadow-gs-500/10'
                    : 'border border-slate-200 shadow-sm'
                }`}
              >
                {/* Workshop photo(s) */}
                <div className={`mb-6 grid gap-3 ${pkg.images.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {pkg.images.map((src, i) => (
                    <div key={src} className="relative w-full h-40 overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={pkg.imageAlt[i]}
                        fill
                        loading="lazy"
                        quality={70}
                        sizes="(max-width: 1024px) 90vw, 360px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-11 h-11 rounded-xl bg-gs-50">
                  <Icon className="w-6 h-6 text-gs-600" />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{pkg.name}</h3>

                {/* Price */}
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">{pkg.price}</span>
                  <span className="text-slate-500 font-semibold mb-1">{pkg.gst}</span>
                </div>

                {/* Tagline */}
                <p className="text-slate-600 mb-6">{pkg.tagline}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gs-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Requirement note */}
                {pkg.note && (
                  <div className="flex items-start gap-3 mb-6 p-4 rounded-lg bg-gs-50 border border-gs-100">
                    <Tv className="w-5 h-5 text-gs-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">{pkg.note}</p>
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={() => handleSelectPackage(pkg.id)}
                  className="group w-full rounded-full px-6 py-3.5 bg-gs-600 text-white font-semibold text-base hover:bg-gs-700 transition-colors"
                >
                  {pkg.cta}
                  <span className="group-hover:translate-x-0.5 inline-block transition-transform ml-2">→</span>
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Booking Form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl mx-auto rounded-2xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl shadow-slate-200/60"
        >
          {!isSubmitted ? (
            <>
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Book your training</h3>
                <p className="text-slate-600">
                  You&apos;re booking the{' '}
                  <span className="text-gs-600 font-bold">{activePackage.name}</span>{' '}
                  ({activePackage.price} {activePackage.gst}).
                </p>
              </div>

              {/* Package toggle */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`px-4 py-3 rounded-lg text-sm font-bold transition-all border ${
                      pkg.id === selectedPackage
                        ? 'bg-gs-50 border-gs-500 text-gs-700'
                        : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {pkg.name}
                  </button>
                ))}
              </div>

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

                {/* Business */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    placeholder="Your business"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-gs-500 focus:ring-2 focus:ring-gs-500/30 focus:bg-white transition-all"
                    {...register('business', { required: 'Business name is required' })}
                  />
                  {errors.business && <p className="text-red-600 text-sm mt-2">{errors.business.message}</p>}
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
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-2">{errors.phone.message}</p>}
                </div>

                {/* Order Summary */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between items-center text-slate-700">
                    <span>{activePackage.name}</span>
                    <span className="font-semibold text-gs-600">{activePackage.price} {activePackage.gst}</span>
                  </div>
                  <p className="text-xs text-slate-500">GST (15%) is added at checkout.</p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-gs-600 text-white font-semibold text-base hover:bg-gs-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed py-3.5"
                >
                  {isLoading ? 'Processing...' : 'Continue to booking'}
                </button>

                <p className="text-center text-sm text-slate-500">
                  We&apos;ll be in touch to confirm a date and time that suits your business.
                </p>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle2 className="w-16 h-16 text-gs-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Booking Received</h3>
              <p className="text-slate-600">
                Thanks for booking. We&apos;ll be in touch shortly to confirm your training.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
