'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const LAST_UPDATED = '2 July 2026'

const CONTACT = {
  privacyOfficer: '[Privacy Officer Name]',
  email: '[privacy@getstarted.co.nz]',
  phone: '[Your phone number]',
  address: '[Your postal address]',
}

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    body: [
      'GetStarted NZ ("we", "us", "our") is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, disclose, and protect personal information in accordance with the New Zealand Privacy Act 2020 and its Information Privacy Principles.',
      'By using our website, submitting an enquiry, registering for a workshop, or engaging our services, you acknowledge that you have read and understood this Privacy Policy.',
    ],
  },
  {
    id: 'who-we-are',
    title: '2. Who we are',
    body: [
      'GetStarted NZ is a New Zealand business that provides AI workshops, AI consulting, website development, digital marketing services, and Google Ads management. We work primarily with small and medium businesses across New Zealand.',
      'If you have any questions about this policy or how we handle your information, you can contact our Privacy Officer using the details at the end of this policy.',
    ],
  },
  {
    id: 'information-we-collect',
    title: '3. Information we collect',
    body: [
      'We only collect personal information that is reasonably necessary for us to provide our services and operate our business. The types of information we may collect include:',
    ],
    list: [
      'Your name',
      'Your email address',
      'Your phone number',
      'Your business name',
      'Information you provide through our enquiry or contact forms',
      'Workshop registration details',
      'Payment information (processed securely by third-party payment providers — we do not store full payment card details)',
      'Website usage and analytics data (see the Cookies and analytics section below)',
    ],
  },
  {
    id: 'how-we-collect',
    title: '4. How we collect information',
    body: [
      'We generally collect personal information directly from you — for example, when you complete a form on our website, register for a workshop, email or call us, or engage us for a project.',
      'We may also collect information automatically when you use our website, such as through cookies and analytics tools. In some cases, we may receive information from third-party services you interact with, such as payment or analytics providers.',
    ],
  },
  {
    id: 'why-we-collect',
    title: '5. Why we collect it',
    body: [
      'We collect and use personal information for purposes including:',
    ],
    list: [
      'Responding to your enquiries and providing information you request',
      'Delivering our AI workshops, consulting, and other services',
      'Managing workshop registrations and bookings',
      'Processing payments through third-party providers',
      'Improving our website, services, and customer experience',
      'Sending marketing communications where you have opted in',
      'Meeting our legal and record-keeping obligations',
    ],
  },
  {
    id: 'cookies-analytics',
    title: '6. Cookies and analytics',
    body: [
      'Our website may use cookies and similar technologies to help the site function, understand how visitors use it, and measure the effectiveness of our marketing. You can control or disable cookies through your browser settings, although some parts of the site may not function as intended if you do.',
      'We may use the following tools, which may collect information about your device and browsing activity:',
    ],
    list: [
      'Google Analytics — to understand website traffic and usage patterns',
      'Google Ads conversion tracking — to measure the performance of our advertising',
      'Meta/Facebook Pixel — where used, to measure and improve advertising on Meta platforms',
    ],
    footer:
      'These third-party tools have their own privacy policies governing how they handle information. We encourage you to review their policies for more detail.',
  },
  {
    id: 'third-party-services',
    title: '7. Third-party services',
    body: [
      'We use trusted third-party providers to help us operate our business — for example, payment processors, email and marketing platforms, analytics providers, and cloud hosting services. These providers may process personal information on our behalf and are expected to handle it securely and only for the purposes we specify.',
      'We do not sell your personal information.',
    ],
  },
  {
    id: 'email-marketing',
    title: '8. Email marketing',
    body: [
      'We will only send you marketing emails if you have opted in to receive them. Every marketing email we send includes an option to unsubscribe. If you unsubscribe, we will stop sending you marketing communications, although we may still contact you about services you have requested or engaged us for.',
    ],
  },
  {
    id: 'storage-protection',
    title: '9. How information is stored and protected',
    body: [
      'We take reasonable steps to protect the personal information we hold from loss, misuse, unauthorised access, disclosure, alteration, or destruction. These steps may include secure hosting, access controls, and the use of reputable service providers.',
      'While we take reasonable care to safeguard your information, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'sharing',
    title: '10. When information may be shared',
    body: [
      'We may share personal information in limited circumstances, including:',
    ],
    list: [
      'With third-party service providers who help us deliver our services (such as payment, email, analytics, and hosting providers)',
      'Where required or authorised by law',
      'To protect our rights, property, or safety, or that of others',
      'With your consent, or as otherwise disclosed at the time of collection',
    ],
  },
  {
    id: 'overseas',
    title: '11. Overseas storage or processing',
    body: [
      'Some of the third-party providers we use may store or process personal information on servers located outside New Zealand. Where this occurs, we take reasonable steps to ensure your information is handled in a manner consistent with the New Zealand Privacy Act 2020. By providing your information, you acknowledge that it may be stored or processed overseas.',
    ],
  },
  {
    id: 'access-correction',
    title: '12. Accessing or correcting personal information',
    body: [
      'Under the Privacy Act 2020, you have the right to request access to the personal information we hold about you, and to request that we correct it if it is inaccurate. To make a request, please contact our Privacy Officer using the details below. We may need to verify your identity before responding, and we will respond within the timeframes required by law.',
    ],
  },
  {
    id: 'retention',
    title: '13. Retention of information',
    body: [
      'We keep personal information only for as long as it is needed for the purposes for which it was collected, or as required by law. When information is no longer needed, we take reasonable steps to securely delete or de-identify it.',
    ],
  },
  {
    id: 'third-party-links',
    title: '14. Links to third-party websites',
    body: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: "15. Children's privacy",
    body: [
      'Our services are intended for businesses and adults. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us so we can take appropriate steps to remove it.',
    ],
  },
  {
    id: 'changes',
    title: '16. Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Any updates will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.',
    ],
  },
  {
    id: 'contact',
    title: '17. Contact us',
    body: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our Privacy Officer:',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation hideMenu showCTA={false} />
      <main className="min-h-screen bg-dark overflow-hidden">
        {/* Hero */}
        <section className="pt-36 pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-balance">
                Privacy{' '}
                <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-sm text-gray-400 mb-6">Last updated: {LAST_UPDATED}</p>
              <p className="text-lg text-gray-300 max-w-2xl text-pretty leading-relaxed">
                This policy explains how GetStarted NZ collects, uses, and protects your personal
                information in accordance with the New Zealand Privacy Act 2020.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Table of contents */}
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <motion.nav
              aria-label="Table of contents"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-lg font-bold text-white mb-4">Contents</h2>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-gray-300 hover:text-accent transition-colors leading-relaxed"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </motion.nav>
          </div>
        </section>

        {/* Sections */}
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {sections.map((section, index) => (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.2) }}
                className="glass rounded-2xl p-7 sm:p-9 scroll-mt-28"
              >
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-4 text-balance">
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-gray-300 leading-relaxed mb-4 text-pretty">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="flex flex-col gap-2.5 mb-4">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-200">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm sm:text-base leading-relaxed text-pretty">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="text-gray-300 leading-relaxed text-pretty">{section.footer}</p>
                )}

                {section.id === 'contact' && (
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-gray-200">
                      <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <span className="font-semibold text-white">Privacy Officer:</span>{' '}
                        {CONTACT.privacyOfficer}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-200">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <span className="font-semibold text-white">Email:</span> {CONTACT.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-200">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <span className="font-semibold text-white">Phone:</span> {CONTACT.phone}
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-200">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">
                        <span className="font-semibold text-white">Postal address:</span>{' '}
                        {CONTACT.address}
                      </span>
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* Back to home */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
