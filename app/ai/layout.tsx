import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GetStarted AI | Practical AI Consultancy & Workshops for NZ Businesses',
  description:
    'GetStarted AI helps New Zealand businesses implement AI agents, automations and workflows that save time and cut costs, through practical consulting and hands-on AI workshops.',
}

export default function AILayout({ children }: { children: React.ReactNode }) {
  return children
}
