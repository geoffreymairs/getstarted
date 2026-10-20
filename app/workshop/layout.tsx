import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile Car Wash Workshop | GetStarted',
  description:
    'A password-protected, step-by-step AI workshop. Plan a mobile car wash business, create its name, logo and hero image, then build a one-page website with ChatGPT and v0.',
  robots: { index: false, follow: false },
}

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return children
}
