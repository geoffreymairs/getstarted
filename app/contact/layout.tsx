import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | GetStarted AI Consultancy NZ',
  description: 'Get in touch with GetStarted, New Zealand\'s independent AI consultancy. Book your free 30 minute AI Strategy Consultation or send us a message.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
