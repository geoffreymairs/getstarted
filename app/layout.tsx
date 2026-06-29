import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GetStarted AI | Practical AI Training For Your Business',
  description: 'On-site, hands-on AI training for New Zealand businesses. We come to your workplace and teach your team to save time and confidently use tools like ChatGPT, Claude, Gemini and Microsoft Copilot. No technical knowledge required.',
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
