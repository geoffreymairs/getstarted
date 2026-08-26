import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Workshop for Marketing Professionals | Build Your Personal Brand With AI | GetStarted',
  description:
    'A hands-on AI workshop for experienced marketing professionals. Turn your career experience into a clear personal brand, positioning and a live professional website using AI. Delivered by GetStarted AI.',
  robots: { index: false, follow: false },
}

export default function WorkshopMarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}
