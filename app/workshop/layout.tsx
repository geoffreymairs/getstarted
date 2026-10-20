import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build a Business Workshop | GetStarted',
  description:
    'A password-protected, step-by-step AI workshop. Plan a business, create its name, logo and hero image, then build a one-page website with ChatGPT and v0. Example business: a mobile car wash.',
  robots: { index: false, follow: false },
}

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return children
}
