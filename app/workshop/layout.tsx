import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build a Business Workshop | GetStarted',
  description:
    'A password-protected, 60-minute AI workshop. Invent a business, create a brand, plan a website and build a website prototype with ChatGPT and v0. Example business: a mobile car wash.',
  robots: { index: false, follow: false },
}

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return children
}
