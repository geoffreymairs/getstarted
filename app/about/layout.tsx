import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Independent AI Advisors NZ | GetStarted',
  description: 'GetStarted is an independent AI consultancy based in Auckland, helping New Zealand businesses implement practical AI solutions. Meet the team behind GetStarted AI.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
