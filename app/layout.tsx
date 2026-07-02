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
  title: 'GetStarted AI | Practical AI Training For Your Business',
  description: 'On-site, hands-on AI training for New Zealand businesses. We come to your workplace and teach your team to save time and confidently use tools like ChatGPT, Claude, Gemini and Microsoft Copilot. No technical knowledge required.',
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
