import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GetStarted AI | Independent AI Consultancy For NZ Businesses',
  description: 'GetStarted is New Zealand\'s independent AI consultancy, helping small and medium businesses implement AI agents, automation and workflows that save time, cut costs and deliver measurable results. Book a free 30 minute AI Strategy Consultation.',
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-dark text-gray-100 font-sans">
        {children}
      </body>
    </html>
  )
}
