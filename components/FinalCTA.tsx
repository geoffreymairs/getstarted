'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useState, RefObject, useRef } from 'react'
import { CheckCircle2, User, Users, GraduationCap, Tv } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  business: string
}

type PackageId = 'one-on-one' | 'team' | 'schools'

interface FinalCTAProps {
  ctaRef: RefObject<HTMLDivElement>
}

const packages = [
  {
    id: 'one-on-one' as PackageId,
    name: '1-on-1 AI Training',
    icon: User,
    tagline: 'Perfect for business owners or professionals who want personalised training.',
    cta: 'Enquire about 1-on-1',
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
    note: 'You just need your own laptop and a quiet place to focus.',
  },
  {
    id: 'team' as PackageId,
    name: 'Team AI Workshop',
    icon: Users,
    tagline: 'For businesses with up to 20 participants.',
    cta: 'Enquire about a team workshop',
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
  {
    id: 'schools' as PackageId,
    name: 'AI Workshops for Schools',
    icon: GraduationCap,
    tagline: 'For secondary students who learn best by making something real.',
    cta: 'Enquire for your school',
    images: ['/workshop/schools.jpg'],
    imageAlt: ['A group of students working together on a laptop in a classroom'],
    features: [
      'For students aged 16 to 18',
      'Delivered on-site at your school',
      'Runs in about 60 minutes, and flexes to your class time',
      'Students invent a business, brand it and build a real website',
      'No coding or experience needed',
      'Every student finishes with their own published website',
    ],
    note: 'Works best with a computer or tablet per student or pair, plus a projector or large screen.',
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
      const response = await fetch('/api/send-confirmation', {
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

      if (!response.ok) throw new Error('Enquiry failed')

      setIsSubmitted(true)
    } catch (error) {
      console.error('Enquiry error:', error)
      alert('Something went wrong. Please try again, or email hello@getstarted.co.nz.')
    } finally {
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
            Three options, all delivered on-site and tailored to you. Tell us what you need and we will send a quote.
          </p>
        </motion.div>

        {/* Option rows, stacked */}
        <div className="space-y-6 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            const isActive = pkg.id === selectedPackage
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid overflow-hidden rounded-2xl bg-white transition-all md:grid-cols-5 ${
                  isActive
                    ? 'border-2 border-gs-500 shadow-xl shadow-gs-500/10'
                    : 'border border-slate-200 shadow-sm'
                }`}
              >
                {/* Image */}
                <div className="relative min-h-[200px] md:col-span-2 md:min-h-[320px]">
                  <Image
                    src={pkg.images[0] || '/placeholder.svg'}
                    alt={pkg.imageAlt[0]}
                    fill
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col p-8 sm:p-10 md:col-span-3">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gs-50">
                      <Icon className="h-6 w-6 text-gs-600" />
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900">{pkg.name}</h3>
                  </div>

                  <p className="mb-6 text-slate-600">{pkg.tagline}</p>

                  <ul className="mb-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gs-600" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    {pkg.note && (
                      <div className="flex items-start gap-2.5 text-sm text-slate-500 sm:max-w-xs">
                        <Tv className="mt-0.5 h-4 w-4 flex-shrink-0 text-gs-600" />
                        <p>{pkg.note}</p>
                      </div>
                    )}
                    <button
                      onClick={() => handleSelectPackage(pkg.id)}
                      className="group flex-shrink-0 rounded-full bg-gs-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-gs-700"
                    >
                      {pkg.cta}
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
                    </button>
                  </div>
                </div>
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
          className="rounded-2xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl shadow-slate-200/60"
        >
          {!isSubmitted ? (
            <>
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Enquire about training</h3>
                <p className="text-slate-600">
                  You&apos;re enquiring about the{' '}
                  <span className="text-gs-600 font-bold">{activePackage.name}</span>.
                </p>
              </div>

              {/* Package toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
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
                <div className="grid gap-6 sm:grid-cols-2">
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

                {/* Business or school */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Business or school name</label>
                  <input
                    type="text"
                    placeholder="Your business or school"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-gs-500 focus:ring-2 focus:ring-gs-500/30 focus:bg-white transition-all"
                    {...register('business', { required: 'This field is required' })}
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
                </div>

                {/* Selected option */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-2">
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Selected</span>
                    <span className="font-semibold text-gs-600">{activePackage.name}</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    No payment now. We&apos;ll confirm the details and send an invoice once your session is booked.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-gs-600 text-white font-semibold text-base hover:bg-gs-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed py-3.5"
                >
                  {isLoading ? 'Sending...' : 'Send enquiry'}
                </button>

                <p className="text-center text-sm text-slate-500">
                  We&apos;ll be in touch to confirm a date and time that suits you.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Enquiry Received</h3>
              <p className="text-slate-600">
                Thanks for your enquiry. We&apos;ll be in touch shortly to confirm the details and send a quote.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
