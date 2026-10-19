import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Workshop for Students | Product, Plan, Build a Website in 60 Minutes | GetStarted',
  description:
    'A hands-on 60-minute AI workshop for students. Invent a product, plan a website and build a real landing page with ChatGPT and v0. No coding needed. Enquire for your school or group.',
}

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return children
}
