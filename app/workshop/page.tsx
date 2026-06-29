'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Zap, Code, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import AIToolsOverview from '@/components/AIToolsOverview'
import Footer from '@/components/Footer'

const ToolPrompt = ({ toolName, toolColor, prompt, promptNumber }: { toolName: string; toolColor: string; prompt: string; promptNumber?: number }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Determine border color based on tool type
  const getBorderColor = () => {
    if (toolName === 'Vercel v0' || toolName === 'Vercel') {
      return 'border-l-4 border-l-blue-500'
    }
    return 'border-l-4 border-l-green-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className={`inline-block px-4 py-2 rounded-lg font-bold text-sm ${toolColor}`}>
        {promptNumber && <span className="font-black mr-2">#{promptNumber}</span>}Use this prompt in {toolName}:
      </div>
      <div className={`relative rounded-lg bg-gray-900/80 border border-gray-800 p-4 overflow-x-auto ${getBorderColor()}`}>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-accent/20 hover:bg-accent/40 text-accent transition-colors"
          title="Copy prompt"
        >
          {copied ? (
            <Check className="w-5 h-5" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </button>
        <pre className="text-gray-200 text-sm leading-relaxed font-mono whitespace-pre-wrap break-words pr-12">
          <code>{prompt}</code>
        </pre>
      </div>
    </motion.div>
  )
}

const Section = ({
  number,
  time,
  title,
  intro,
  children,
  icon: Icon,
}: {
  number: number
  time: string
  title: string
  intro: string
  children: React.ReactNode
  icon: React.ComponentType<any>
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div
      className="rounded-2xl p-8 sm:p-12 shadow-glow-lg"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 153, 255, 0.15)',
      }}
    >
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-accent/20">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-purple-glow flex-shrink-0">
            <Icon className="w-6 h-6 text-dark" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-xs font-bold text-accent uppercase tracking-wider">
                Section {number}
              </span>
              <span className="inline-block px-3 py-1 bg-purple-glow/20 border border-purple-glow/50 rounded-full text-xs font-bold text-purple-glow uppercase tracking-wider">
                {time}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{title}</h2>
            <p className="text-gray-300 text-sm sm:text-base">{intro}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">{children}</div>
    </div>
  </motion.div>
)

export default function WorkshopPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [checkedItems, setCheckedItems] = useState({
    chatgpt: false,
    github: false,
    vercel: false,
    connection: false,
  })

  const toggleCheckbox = (item: keyof typeof checkedItems) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }))
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'getstarted') {
      setIsUnlocked(true)
      setError('')
    } else {
      setError('Incorrect password. Try again.')
      setPassword('')
    }
  }

  if (!isUnlocked) {
    return (
      <>
        <Navigation showCTA={false} hideMenu={true} />
        <div className="min-h-screen bg-dark flex items-center justify-center px-6 pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
          <div className="text-center mb-8">
            <Lock className="w-16 h-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl font-black text-white mb-2">Workshop Guide</h1>
            <p className="text-gray-300">Enter your access password to view the workshop breakdown</p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black rounded-xl hover:shadow-glow-lg transition-all"
            >
              Unlock Access
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-accent hover:text-accent-light transition-colors">
              Back to home
            </Link>
          </div>
        </motion.div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navigation showCTA={false} hideMenu={true} />
      <div className="min-h-screen bg-dark pt-32 pb-12 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-glow/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 leading-tight">
            9:00am → 12:00pm
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent">
              Live Workshop
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">Follow these steps. By 12pm, you will have a real, live website.</p>
          <div className="inline-block px-6 py-3 bg-accent/10 border border-accent/30 rounded-full">
            <p className="text-accent font-bold">✨ Step by step. Easy to follow.</p>
          </div>
        </motion.div>

        {/* Introduction – AI Tools Overview */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-block">
            <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-xs font-bold text-accent uppercase tracking-wider mb-3">
              9:00–9:15
            </div>
            <h2 className="text-2xl font-black text-white">Introduction – AI Tools</h2>
          </div>
        </motion.div>
        <AIToolsOverview />

        {/* SECTION 0: SETUP - Get Your Accounts Ready */}
        <Section number={1} time="9:15–9:25" title="Get Your Accounts Ready" intro="Create 3 free accounts before we start. This takes about 10 minutes." icon={Lock}>
          <div className="space-y-8">
            {/* ChatGPT Setup */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500 text-dark text-xs font-black flex-shrink-0">1</div>
                <div className="flex-1">
                  <p className="text-white font-bold mb-2">Create a ChatGPT Account</p>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>What is it?</strong> ChatGPT is an AI assistant that helps you brainstorm ideas, write copy, and create business concepts. Think of it like a super-smart writing partner.
                  </p>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>Cost:</strong> Free trial available, but we recommend the <strong>$20/month paid version</strong> for best results in this workshop.
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    <strong>Why we need it:</strong> We'll use it to create your business idea, brand identity, and website copy.
                  </p>
                  <a
                    href="https://chat.openai.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-green-500 text-dark font-bold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    → Sign Up for ChatGPT
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Setup */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500 text-dark text-xs font-black flex-shrink-0">2</div>
                <div className="flex-1">
                  <p className="text-white font-bold mb-2">Create a GitHub Account</p>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>What is it?</strong> GitHub is where programmers store and manage code. Think of it like Google Drive, but specifically designed for code projects.
                  </p>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>Cost:</strong> Completely free, no credit card needed.
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    <strong>Why we need it:</strong> Vercel (where we'll host your website) needs to connect to GitHub to store and deploy your code.
                  </p>
                  <a
                    href="https://github.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    → Sign Up for GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Vercel Setup */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-dark text-xs font-black flex-shrink-0">3</div>
                <div className="flex-1">
                  <p className="text-white font-bold mb-2">Create a Vercel Account</p>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>What is it?</strong> Vercel is a platform that hosts websites on the internet. When we "deploy" your website, we're uploading it to Vercel so people can visit it with a real web address.
                  </p>
                  <p className="text-gray-300 text-sm mb-3">
                    <strong>Cost:</strong> Free tier with limited credits included. If you run out, you can upgrade to $20/month for more resources.
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    <strong>Why we need it:</strong> This is where your finished website will live and be accessible to everyone on the internet.
                  </p>
                  <p className="text-gray-300 text-sm mb-4 font-semibold text-blue-300">
                    💡 Tip: Sign up using your GitHub account (click "Continue with GitHub"). This connects them automatically!
                  </p>
                  <a
                    href="https://v0.app/ref/WM5M2R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    → Sign Up for Vercel
                  </a>
                </div>
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="bg-accent/5 border border-accent/30 rounded-lg p-6 space-y-4">
              <p className="text-white font-bold mb-4">✓ Quick Verification Checklist</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li
                  onClick={() => toggleCheckbox('chatgpt')}
                  className="flex gap-3 cursor-pointer hover:text-white transition-colors group"
                >
                  <span className={`text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform ${checkedItems.chatgpt ? 'text-green-400' : 'text-accent'}`}>
                    {checkedItems.chatgpt ? '☑' : '☐'}
                  </span>
                  <span className={checkedItems.chatgpt ? 'line-through text-gray-500' : ''}>I can log into my <strong>ChatGPT</strong> account</span>
                </li>
                <li
                  onClick={() => toggleCheckbox('github')}
                  className="flex gap-3 cursor-pointer hover:text-white transition-colors group"
                >
                  <span className={`text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform ${checkedItems.github ? 'text-green-400' : 'text-accent'}`}>
                    {checkedItems.github ? '☑' : '☐'}
                  </span>
                  <span className={checkedItems.github ? 'line-through text-gray-500' : ''}>I can log into my <strong>GitHub</strong> account</span>
                </li>
                <li
                  onClick={() => toggleCheckbox('vercel')}
                  className="flex gap-3 cursor-pointer hover:text-white transition-colors group"
                >
                  <span className={`text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform ${checkedItems.vercel ? 'text-green-400' : 'text-accent'}`}>
                    {checkedItems.vercel ? '☑' : '☐'}
                  </span>
                  <span className={checkedItems.vercel ? 'line-through text-gray-500' : ''}>I can log into my <strong>Vercel</strong> account</span>
                </li>
                <li
                  onClick={() => toggleCheckbox('connection')}
                  className="flex gap-3 cursor-pointer hover:text-white transition-colors group"
                >
                  <span className={`text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform ${checkedItems.connection ? 'text-green-400' : 'text-accent'}`}>
                    {checkedItems.connection ? '☑' : '☐'}
                  </span>
                  <span className={checkedItems.connection ? 'line-through text-gray-500' : ''}>In Vercel, I can see my GitHub account is connected</span>
                </li>
              </ul>
              <p className="text-gray-400 text-xs mt-4 pt-4 border-t border-accent/20">
                If you can't check all these boxes, ask the instructor before we start. Don't worry — setup usually only takes 5–10 minutes!
              </p>
            </div>
          </div>
        </Section>

        {/* Section 1: Welcome */}
        <Section number={2} time="9:25–9:35" title="Welcome + Framing" intro="Get ready. You're building a real website today." icon={Zap}>
          <div className="bg-accent/5 border border-accent/30 rounded-lg p-6 space-y-3">
            <p className="text-white font-semibold">🚀 What's about to happen:</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">1</span>
                <span>You'll define your business using AI.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">2</span>
                <span>You'll design a website that converts customers.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">3</span>
                <span>You'll deploy it live on the internet.</span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Section 2: Business Idea */}
        <Section
          number={3}
          time="9:35–9:55"
          title="Business Idea + Positioning"
          intro="Create your business concept and make it clear why customers should choose you."
          icon={Code}
        >
          <div className="bg-accent/5 border border-accent/30 rounded-lg p-6 mb-6 space-y-3">
            <p className="text-gray-300 text-sm">
              Before asking ChatGPT to create your business, first set the context so ChatGPT understands the role it needs to play. This helps ensure the recommendations are premium, strategic, and designed to convert customers.
            </p>
          </div>

          <ToolPrompt
            toolName="ChatGPT"
            promptNumber={1}
            toolColor="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/30"
            prompt={`Today I am building a real business website during an AI workshop.

You are acting as my business strategist, marketing expert, and website planning assistant.

Your job is to help me create a premium, professional business that looks trustworthy, converts customers, and is ready to launch online today.

All recommendations should be practical, realistic, and designed to help generate leads and sales in New Zealand.

Please keep your answers clear, high-quality, and written like a real successful business—not generic or basic.

I want strong branding, strong positioning, and a website that feels premium and converts visitors into paying customers.

We will build this step-by-step:
1. Business concept and positioning
2. Website structure and sales messaging
3. Service pages and content
4. Trust signals and customer conversion
5. Launch-ready website copy

Act like we are building a serious business, not just a practice exercise.`}
          />

          <ToolPrompt
            toolName="ChatGPT"
            promptNumber={2}
            toolColor="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/30"
            prompt={`Create a premium service business in New Zealand. You choose the industry (plumbing, electrical, cleaning, landscaping, coaching, consulting, etc.).

Include:
• 3 business name options (with reasoning)
• Core services you offer
• Target customers
• Competitive advantage
• Strong offer that gets customers to act
• Clear tagline
• Location/service area

Make it feel like a real, trustworthy business that could launch today.`}
          />
        </Section>

        {/* Section 3: Branding + Website Plan */}
        <Section
          number={4}
          time="9:55–10:15"
          title="Branding + Website Plan"
          intro="Design your visual brand identity and plan the complete website structure with conversion psychology."
          icon={Zap}
        >
          <ToolPrompt
            toolName="ChatGPT"
            promptNumber={3}
            toolColor="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/30"
            prompt={`Using the business you created, write an actual build prompt for Vercel v0 that I can copy and paste directly into Vercel.

Your response should be written as DIRECT INSTRUCTIONS for Vercel v0 to build the website — not as business advice or strategy notes.

It should start by clearly telling Vercel v0 what to build, for example:
"Build a premium, high-converting website for [Business Name]…"

The goal is to create a modern, premium website that looks trustworthy, generates leads, and feels like a real established business.

Include clear instructions for:

STRUCTURE & SECTIONS:
• Hero section (headline, subheadline, CTA, trust element)
• Services section (what we offer, core services)
• Social proof (testimonials with specific results)
• Why choose us (competitive advantages, unique positioning)
• About section (story, credibility, experience)
• Contact/booking section (clear next step, urgency)

DESIGN REQUIREMENTS:
• Premium, modern aesthetic (high-end service business)
• Strong homepage hero section
• Emergency/urgency focus integrated throughout
• Trust signals and credibility elements
• Strong call-to-actions throughout
• Mobile-friendly responsive design
• Premium colours and strong typography
• Contact form (name, phone, email, enquiry type)
• Quote/booking request section
• Customer reviews section with ratings
• Service area/location coverage
• Fast-loading professional layout

Also provide:
• Specific homepage headline suggestions (2-3 strong options)
• Strong CTA button text suggestions
• Trust-building messaging to include
• Premium sales-focused copy suggestions throughout

The final response must be a clean, copy-paste-ready Vercel v0 prompt. Someone should be able to take your response and paste it directly into Vercel v0 to build the full website.`}
          />
        </Section>

        {/* ChatGPT Helper: Reset Prompt - Optional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="rounded-2xl p-8 sm:p-10" style={{ background: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.15)' }}>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs font-bold text-green-400 uppercase tracking-wider mb-3">
                🔧 Troubleshooting Tip
              </div>
              <h3 className="text-2xl font-black text-white">ChatGPT Reset Prompt (Optional – Only Use If Needed)</h3>
              <p className="text-gray-300 text-sm mt-2">If ChatGPT starts giving weak, generic, repetitive, or off-track answers, paste this reset prompt to bring it back into the correct business strategist role:</p>
            </div>
            <ToolPrompt
              toolName="ChatGPT"
              toolColor="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/30"
              prompt={`Reset and continue acting as my premium business strategist for this workshop.

Focus only on practical business-building advice for New Zealand service businesses.`}
            />
          </div>
        </motion.div>

        {/* Section 4: Generate */}
        <Section
          number={5}
          time="10:15–10:30"
          title="Build the Website in Vercel v0"
          intro="Use Vercel v0 to design your website. This is the AI website builder—no coding required."
          icon={Code}
        >
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6 space-y-4">
            <p className="text-white font-bold mb-3">How this works (3 simple steps):</p>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-dark text-xs font-black flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-white">Go to v0.dev</p>
                  <p className="text-gray-400 text-xs mt-1">Vercel v0 is the AI website builder. No code needed.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-dark text-xs font-black flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-white">Paste the prompt below</p>
                  <p className="text-gray-400 text-xs mt-1">Vercel v0 will generate a complete website based on your business plan.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-dark text-xs font-black flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-white">Refine inside Vercel v0</p>
                  <p className="text-gray-400 text-xs mt-1">Edit colors, text, layouts directly. Then export when ready.</p>
                </div>
              </div>
            </div>
          </div>

          <ToolPrompt
            toolName="Vercel v0"
            promptNumber={5}
            toolColor="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-500/30"
            prompt={`Copy the full website build prompt that ChatGPT created in Prompt #3 and paste it directly into Vercel v0.

Vercel v0 will now build your live website automatically.`}
          />
        </Section>

        {/* BREAK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center py-12 mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm font-bold text-purple-300 uppercase tracking-wider">
              10:30–10:45
            </div>
            <h2 className="text-3xl font-black text-white">☕ BREAK</h2>
          </div>
        </motion.div>

        {/* Premium Button Styling Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="rounded-2xl p-8 sm:p-10" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.15)' }}>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                ✨ Premium Design
              </div>
              <h3 className="text-2xl font-black text-white">Make Buttons Premium & Modern</h3>
              <p className="text-gray-300 text-sm mt-2">Upgrade all buttons across your website to have an Apple-style glass effect for maximum conversions:</p>
            </div>
            <ToolPrompt
              toolName="Vercel v0"
              promptNumber={6}
              toolColor="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-500/30"
              prompt={`Make all buttons on this website look premium and modern with an Apple-style glass effect.

Update every primary and secondary button across the entire website.

Change buttons to include:

• smooth glass-style appearance (clean, premium, slightly transparent)
• soft blur effect behind the button
• subtle white highlights and soft reflections
• rounded corners with a high-end polished feel
• stronger padding so buttons feel larger and more premium
• elegant hover effects (slight lift, smooth glow, refined animation)
• stronger typography with clean bold text
• premium contrast so buttons stand out clearly
• subtle shadow for depth without looking heavy
• consistent styling across all call-to-action buttons

Keep the existing website layout exactly the same.

Do not redesign sections or move content.

Only focus on making the buttons visually premium, polished, and immediately noticeable.

Goal:

When someone lands on the website, the buttons should instantly feel expensive, high-converting, and similar to premium Apple-style interface design.`}
            />
          </div>
        </motion.div>

        {/* Create Hero Image Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="rounded-2xl p-8 sm:p-10" style={{ background: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.15)' }}>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs font-bold text-green-400 uppercase tracking-wider mb-3">
                🎨 Create Professional Imagery
              </div>
              <h3 className="text-2xl font-black text-white">Generate an Image for Your Website</h3>
              <p className="text-gray-300 text-sm mt-2">Use ChatGPT to create a detailed prompt for an AI image generator (DALL-E, Midjourney, etc.) that matches your Auckland-based business:</p>
            </div>
            <ToolPrompt
              toolName="ChatGPT"
              promptNumber={7}
              toolColor="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/30"
              prompt={`Based on the business we created in this workshop, create a premium website hero image that looks like a real local Auckland business.

The image style should feel similar to a professional team photo for a high-end service business — clean, modern, trustworthy, and realistic.

Show:
• a professional business owner and team standing confidently outside a modern commercial building
• branded uniforms that match the business type (electrical, plumbing, roofing, etc.)
• work vehicles, tools, or equipment relevant to the industry
• a premium, organised team that looks established and successful
• natural poses that feel authentic, not overly staged
• high-quality photography style with strong lighting and sharp detail

It must clearly look like Auckland, New Zealand:
• modern Auckland-style commercial buildings or residential homes
• local streets, business parks, or suburban environments common in Auckland
• realistic New Zealand architecture and surroundings
• no American-style buildings, yellow taxis, US road signs, or overseas-looking city details

The goal is for customers to immediately think:
"This is a real, trustworthy local Auckland business."

The final image should feel premium enough for the homepage hero section of a high-converting business website.`}
            />
          </div>
        </motion.div>

        {/* Replace About Us Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="rounded-2xl p-8 sm:p-10" style={{ background: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.15)' }}>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                🖼️ Update About Us Image
              </div>
              <h3 className="text-2xl font-black text-white">Replace the About Us Section Image</h3>
              <p className="text-gray-300 text-sm mt-2">Upload your business team or building photo to replace the placeholder image:</p>
            </div>
            <ToolPrompt
              toolName="Vercel v0"
              promptNumber={8}
              toolColor="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-500/30"
              prompt={`Replace the image in the About Us section only using the attached image provided.

This is the secondary content section below the main hero section — usually the section that introduces the business story, trust, credibility, or "About Us" content.

It is typically the large image beside text explaining who the business is, why customers should trust them, and what makes them different.

Do not replace the main hero image at the top of the homepage.

Do not change the page layout.

Do not change any text.

Only replace the existing About Us section image with the attached image.

Keep the existing rounded corners, image size, positioning, and any overlay cards or badges exactly the same.

Do not redesign the section.

Only swap the image.`}
            />
          </div>
        </motion.div>

{/* Section 5: Deploy */}
        <Section
          number={6}
          time="10:45–11:30"
          title="Deploy Your Website Live"
          intro="Your website goes from Vercel v0 to the internet in just a few clicks."
          icon={Zap}
        >
          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-4">
              <p className="text-white font-bold">How to go live (4 simple clicks):</p>

              <div className="space-y-4 text-gray-300 text-sm">
                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-dark text-xs font-black flex-shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-white">Inside Vercel v0, look for "Export" or "Open in Vercel"</p>
                    <p className="text-gray-400 text-xs mt-1">This button is usually in the top right or menu.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-dark text-xs font-black flex-shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-white">Create a free Vercel account (or sign in)</p>
                    <p className="text-gray-400 text-xs mt-1">If prompted, connect with your GitHub account. Vercel handles everything automatically.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-dark text-xs font-black flex-shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-white">Review project name, then click "Deploy"</p>
                    <p className="text-gray-400 text-xs mt-1">Vercel will automatically upload and launch your website.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-dark text-xs font-black flex-shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-white">Wait 30–60 seconds, then you're live</p>
                    <p className="text-gray-400 text-xs mt-1">Vercel will give you a URL. Your website is now on the internet.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
              <p className="text-xl font-black text-white mb-2">🎉 Your website is live!</p>
              <p className="text-gray-300 text-sm mb-3">It's on the internet right now. Real people can visit it.</p>
              <p className="text-green-300 text-sm font-semibold">You've gone from idea to real website!</p>
            </div>
          </div>
        </Section>

        {/* Extra Improvements (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div
            className="rounded-2xl p-8 sm:p-12 shadow-glow-lg"
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 153, 255, 0.15)',
            }}
          >
            <div className="mb-8">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">✨ Extra Improvements (Optional)</h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">Your website is already live.</p>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">At this stage, the goal is launch — not perfection.</p>
                <p className="text-accent-light font-semibold mb-8">If you would like to keep improving your website, here are some optional things you can try inside Vercel v0:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Replace the logo with your own business logo</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Update colours to better match your brand</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Change fonts to better suit your style</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Add more customer reviews or testimonials</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Improve service descriptions with stronger sales copy</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Add staff photos or real project images</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Update contact details and service areas</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Improve trust signals like guarantees, badges, and certifications</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Add FAQ sections for common customer questions</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-gray-300">Improve mobile layout and spacing</span>
                </div>
              </div>

              <div className="border-t border-accent/20 pt-8 text-center space-y-4">
                <p className="text-white font-semibold text-lg">Small improvements make a big difference.</p>
                <p className="text-gray-300">Do not keep endlessly redesigning.</p>
                <p className="text-accent-light font-semibold">A live business website beats a perfect unfinished website every time.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-accent/10 to-purple-glow/10 border border-accent/20 rounded-lg p-6">
            <p className="text-white font-semibold mb-3">✨ You've accomplished:</p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Built a live website in 3 hours</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Used AI to go from idea to launch</span>
              </li>
            </ul>
            <p className="text-gray-300 text-sm mt-4 pt-4 border-t border-accent/20">Now let's make it truly trustworthy with real customer proof.</p>
          </div>
        </motion.div>

        {/* Wrap Up Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-accent/10 to-purple-glow/10 border border-accent/20 rounded-lg p-6">
            <p className="text-white font-semibold mb-2">✨ You've Built Something Real</p>
            <p className="text-gray-300 text-sm">You now have a live, fully functional website. But websites become powerful when they help customers take action automatically.</p>
          </div>
        </motion.div>

        {/* Section 7: Connect Your Form to Email with Web3forms */}
        <Section
          number={7}
          time="11:30–12:00"
          title="Connect Your Form to Email"
          intro="When visitors submit your contact form, you'll get their message instantly in your email. No backend coding needed."
          icon={Code}
        >
          {/* Step 1: Sign Up */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6 space-y-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-dark text-xs font-black flex-shrink-0">1</div>
              <div className="flex-1">
                <p className="text-white font-bold">Sign Up at Web3forms (Free)</p>
              </div>
            </div>

            <ol className="space-y-2 text-gray-300 text-sm ml-3">
              <li><strong>1.</strong> Go to <a href="https://web3forms.com" className="text-accent hover:text-accent-light">web3forms.com</a></li>
              <li><strong>2.</strong> Click "Get Started"</li>
              <li><strong>3.</strong> Sign up with your email</li>
            </ol>
          </div>

          {/* Step 2: Create a Form */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6 space-y-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-dark text-xs font-black flex-shrink-0">2</div>
              <div className="flex-1">
                <p className="text-white font-bold">Create a Form in Web3forms</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-3">In your Web3forms dashboard:</p>
            <ol className="space-y-2 text-gray-300 text-sm ml-3">
              <li><strong>1.</strong> Click "Create New Form"</li>
              <li><strong>2.</strong> Form Name: Enter anything (e.g., "Contact Form")</li>
              <li><strong>3.</strong> Domain: Copy your website URL from the <strong>top right</strong> of the Vercel v0 editor</li>
              <li><strong>4.</strong> Send Submissions To: Enter your email address</li>
              <li><strong>5.</strong> Click "Create Form"</li>
            </ol>
          </div>

          {/* Step 3: Copy Your Access Key */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6 space-y-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-dark text-xs font-black flex-shrink-0">3</div>
              <div className="flex-1">
                <p className="text-white font-bold">Copy Your Access Key</p>
              </div>
            </div>

            <ol className="space-y-3 text-gray-300 text-sm ml-3">
              <li><strong>1.</strong> Go back to your Web3forms dashboard and copy your Access Key</li>
              <li><strong>2.</strong> In the prompt from Step 4, replace <span className="bg-black/40 px-2 py-1 rounded font-mono text-xs text-yellow-400">[USER_WILL_ADD_KEY_HERE]</span> with your actual Access Key</li>
              <li><strong>3.</strong> Paste the completed prompt into Vercel v0</li>
            </ol>
          </div>

          {/* Step 4: Use This Prompt in Vercel v0 */}
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-dark text-xs font-black flex-shrink-0">4</div>
              <div className="flex-1">
                <p className="text-white font-bold">Use This Prompt in Vercel v0</p>
              </div>
            </div>
            <ToolPrompt
              toolName="Vercel v0"
              promptNumber={9}
              toolColor="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-500/30"
              prompt={`Update the contact form to send submissions to my email using Web3forms.

Form method: POST
Form action: https://api.web3forms.com/submit

Add these hidden inputs:
- name="access_key" value="[USER_WILL_ADD_KEY_HERE]"
- name="subject" value="New Contact Form Submission"
- name="from_name" value="[Website Name]"
- name="redirect" value="/"

Form fields:
- Name (text input, required)
- Email (email input, required)
- Phone (text input, optional)
- Message (textarea, required)
- Submit button

After submit:
- Show loading state
- Display success message: "Thank you! We'll be in touch soon."

Keep the existing design and mobile responsive styling.`}
            />
          </div>

          {/* Step 5: Test */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-dark text-xs font-black flex-shrink-0">5</div>
              <div className="flex-1">
                <p className="text-white font-bold">Test & Done</p>
              </div>
            </div>

            <ol className="space-y-2 text-gray-300 text-sm ml-3">
              <li><strong>1.</strong> Go to your live website</li>
              <li><strong>2.</strong> Fill out the contact form with test data</li>
              <li><strong>3.</strong> Submit and check your email</li>
            </ol>

            <div className="bg-black/40 rounded-lg p-4 mt-4">
              <p className="text-white font-semibold text-sm mb-1">✅ You're finished!</p>
              <p className="text-gray-300 text-sm">Your contact form now sends emails directly to your inbox.</p>
            </div>
          </div>
        </Section>

        {/* Congratulations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-16"
        >
          <div
            className="rounded-2xl p-10 sm:p-16 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              border: '2px solid rgba(0, 153, 255, 0.3)'
            }}
          >
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              🚀 Congratulations
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent mb-6">
              You've Built Something Real
            </h3>

            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-lg text-gray-300 mb-4">
                You didn't just complete a course today. You built a real, live website using AI. Your website is accessible to the world right now.
              </p>
              <p className="text-lg text-accent-light font-semibold mb-6">
                But this is only the beginning.
              </p>
              <p className="text-gray-300 mb-6">
                Today you learned how to use ChatGPT, Vercel v0, and AI tools together. That's a superpower in 2026. Once you understand how these tools work, you can build far more than just websites. You can build real business systems.
              </p>
            </div>

            {/* What You Can Build Next */}
            <div className="max-w-3xl mx-auto mb-12">
              <h4 className="text-2xl font-black text-white mb-8">
                💡 What You Can Build Next
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Quote calculator for instant customer estimates</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">PDF agreement generator for proposals, quotes, or contracts</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">CRM system using a database like Supabase</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Lead tracking dashboard for enquiries and follow-ups</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Staff job management system</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Customer booking system</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">AI chatbot for customer enquiries</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Finance pre-qualification tool</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Automated invoice request system</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Review request automation</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Internal business dashboard</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Client onboarding forms</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Sales pipeline tracker</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Proposal generator</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-300">Custom admin portal for managing your business</span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg">
                These aren't "big tech projects" anymore. They are realistic things small business owners can now build using AI. No coding. No 6-month timeline. Just you, ChatGPT, and Vercel v0.
              </p>

              <div className="bg-black/40 rounded-lg p-6 border border-accent/30">
                <p className="text-2xl font-black text-accent-light">
                  The businesses that learn to use AI fastest will win.
                </p>
                <p className="text-gray-300 mt-4">
                  You just took the first step. Keep building.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-dark font-black rounded-xl hover:shadow-glow-lg transition-all transform hover:scale-105"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
      </div>
      <Footer />
    </>
  )
}
