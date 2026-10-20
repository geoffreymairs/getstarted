import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Workshops NZ | AI Training For Business, Teams & Schools | GetStarted',
  description: 'On-site AI training in New Zealand. Choose 1-on-1 AI coaching, a team AI workshop, or an AI workshop for secondary students, delivered on-site by GetStarted AI.',
}

export default function AIWorkshopsLayout({ children }: { children: React.ReactNode }) {
  return children
}
