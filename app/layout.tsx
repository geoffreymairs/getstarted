import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Get Started AI Workshop for Beginners | Build Your Website in 3 Hours',
  description: 'The Get Started AI Workshop for Beginners. Learn to build and launch a professional website using AI in just 3 hours. No coding experience needed.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark text-gray-100">
        {children}
      </body>
    </html>
  )
}
