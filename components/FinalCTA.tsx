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
    images: ['/workshop-room.jpg'],
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
    <section ref={ctaRef} className="relative py-24 px-6 overflow-hidden">
      {/* Dramatic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-glow/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/15 border border-accent/40">
            <p className="text-sm font-bold text-accent-light uppercase tracking-wider">Training Packages</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-balance">
            Choose The Right <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent animate-glow">
              Training For You
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
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
                className="relative flex flex-col rounded-2xl p-8 sm:p-10 transition-all"
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: isActive ? '2px solid rgba(0, 153, 255, 0.6)' : '1px solid rgba(0, 153, 255, 0.18)',
                  boxShadow: isActive ? '0 0 40px rgba(0, 153, 255, 0.25)' : 'none',
                }}
              >
                {/* Workshop photo(s) */}
                <div className={`mb-6 grid gap-3 ${pkg.images.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {pkg.images.map((src, i) => (
                    <div key={src} className="relative w-full h-40 overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10">
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
                <div className="mb-6 p-3 rounded-lg bg-accent/20 w-fit">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>

                {/* Price */}
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-white">{pkg.price}</span>
                  <span className="text-gray-400 font-semibold mb-1">{pkg.gst}</span>
                </div>

                {/* Tagline */}
                <p className="text-gray-300 mb-6">{pkg.tagline}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Requirement note */}
                {pkg.note && (
                  <div className="flex items-start gap-3 mb-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <Tv className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-400">{pkg.note}</p>
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={() => handleSelectPackage(pkg.id)}
                  className="group w-full button-premium px-6 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-base uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-[1.02] transition-all"
                >
                  {pkg.cta}
                  <span className="group-hover:translate-x-1 inline-block transition-transform ml-2">→</span>
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
          className="max-w-2xl mx-auto rounded-2xl p-8 sm:p-12 shadow-glow-lg"
          style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 153, 255, 0.15)' }}
        >
          {!isSubmitted ? (
            <>
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-black text-white mb-2">Book Your Training</h3>
                <p className="text-gray-300">
                  You&apos;re booking the{' '}
                  <span className="text-accent font-bold">{activePackage.name}</span>{' '}
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
                        ? 'bg-accent/20 border-accent text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {pkg.name}
                  </button>
                ))}
              </div>

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

                {/* Business */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Business Name</label>
                  <input
                    type="text"
                    placeholder="Your business"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                    {...register('business', { required: 'Business name is required' })}
                  />
                  {errors.business && <p className="text-red-400 text-sm mt-2">{errors.business.message}</p>}
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
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone.message}</p>}
                </div>

                {/* Order Summary */}
                <div className="bg-black/40 rounded-lg p-6 space-y-3 backdrop-blur">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>{activePackage.name}</span>
                    <span className="font-semibold text-accent">{activePackage.price} {activePackage.gst}</span>
                  </div>
                  <p className="text-xs text-gray-500">GST (15%) is added at checkout.</p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full button-premium bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 py-4"
                >
                  {isLoading ? 'Processing...' : 'Continue To Booking'}
                </button>

                <p className="text-center text-sm text-gray-400">
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
              <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Booking Received</h3>
              <p className="text-gray-300">
                Thanks for booking. We&apos;ll be in touch shortly to confirm your training.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
