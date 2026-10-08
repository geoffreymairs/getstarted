import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | GetStarted NZ',
  description:
    'Get in touch with GetStarted, domains, hosting, websites, business email and AI for New Zealand businesses. Book a free consultation or send us a message.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
