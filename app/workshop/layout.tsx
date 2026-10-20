import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Workshop for Students | Plan, Brand and Build a Website in 60 Minutes | GetStarted',
  description:
    'A hands-on 60-minute AI workshop for students. Plan a business, create its name, logo and hero image, then build a real one-page website with ChatGPT and v0. No coding needed. Enquire for your school or group.',
}

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return children
}
