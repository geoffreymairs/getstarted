'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Lock,
  Copy,
  Check,
  Sparkles,
  User,
  ArrowRight,
  MessageSquare,
  Wand2,
  Github,
  Rocket,
  Bot,
} from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/* ------------------------------------------------------------------ */
/*  Persistence hook – keeps a participant's work across reloads       */
/* ------------------------------------------------------------------ */
function usePersistentState(key: string, initial: string) {
  const [value, setValue] = useState(initial)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) setValue(stored)
    } catch {
      /* ignore */
    }
    setLoaded(true)
  }, [key])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(key, value)
    } catch {
      /* ignore */
    }
  }, [key, value, loaded])

  return [value, setValue] as const
}

/* ------------------------------------------------------------------ */
/*  Copyable prompt card                                              */
/* ------------------------------------------------------------------ */
const PromptCard = ({ prompt, label }: { prompt: string; label: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="space-y-3">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm bg-green-500/15 text-green-300 border border-green-500/30">
        <Sparkles className="w-4 h-4" />
        {label}
      </div>
      <div className="relative rounded-lg bg-gray-900/80 border border-gray-800 border-l-4 border-l-green-500 p-4 overflow-x-auto">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-accent/20 hover:bg-accent/40 text-accent transition-colors"
          title="Copy prompt"
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        </button>
        <pre className="text-gray-200 text-sm leading-relaxed font-mono whitespace-pre-wrap break-words pr-12">
          <code>{prompt}</code>
        </pre>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Participant input area (persisted)                                */
/* ------------------------------------------------------------------ */
const InputArea = ({
  storageKey,
  label,
  placeholder,
  rows = 8,
}: {
  storageKey: string
  label: string
  placeholder: string
  rows?: number
}) => {
  const [value, setValue] = usePersistentState(storageKey, '')
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-accent-light">{label}</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm leading-relaxed resize-y"
      />
      <p className="text-xs text-gray-500">💾 Saved automatically in this browser as you type.</p>
    </div>
  )
}

const NextStep = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 rounded-lg bg-gradient-to-r from-accent/10 to-purple-glow/10 border border-accent/20 p-4">
    <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
    <p className="text-white text-sm font-semibold">
      <span className="text-accent">Next: </span>
      {children}
    </p>
  </div>
)

/* ------------------------------------------------------------------ */
/*  Steps (used for the progress indicator)                           */
/* ------------------------------------------------------------------ */
const STEPS = [
  { n: 1, short: 'Your Info' },
  { n: 2, short: 'Build in v0' },
  { n: 3, short: 'GitHub' },
  { n: 4, short: 'Go Live' },
  { n: 5, short: 'Claude (optional)' },
]

/* ------------------------------------------------------------------ */
/*  Step wrapper                                                       */
/* ------------------------------------------------------------------ */
const Step = ({
  number,
  time,
  title,
  doing,
  icon: Icon,
  optional,
  children,
}: {
  number: number
  time: string
  title: string
  doing: string
  icon: React.ComponentType<any>
  optional?: boolean
  children: React.ReactNode
}) => (
  <motion.section
    id={`step-${number}`}
    data-step={number}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    className="scroll-mt-32 mb-12"
  >
    <div
      className="rounded-2xl p-6 sm:p-10 shadow-glow-lg"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 153, 255, 0.15)',
      }}
    >
      <div className="mb-8 pb-6 border-b border-accent/20">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-purple-glow flex-shrink-0">
            <Icon className="w-6 h-6 text-dark" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-xs font-bold text-accent uppercase tracking-wider">
                Step {number}
              </span>
              <span className="inline-block px-3 py-1 bg-purple-glow/20 border border-purple-glow/50 rounded-full text-xs font-bold text-purple-glow uppercase tracking-wider">
                {time}
              </span>
              {optional && (
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Optional
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{title}</h2>
            <p className="text-gray-300 text-sm sm:text-base">{doing}</p>
          </div>
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  </motion.section>
)

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */
export default function WorkshopMarketingPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeStep, setActiveStep] = useState(1)

  /* Active-step tracking for the progress indicator */
  useEffect(() => {
    if (!isUnlocked) return
    const sections = Array.from(document.querySelectorAll('[data-step]'))
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveStep(Number(visible[0].target.getAttribute('data-step')))
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isUnlocked])

  const scrollToStep = (n: number) =>
    document.getElementById(`step-${n}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'getstarted!') {
      setIsUnlocked(true)
      setError('')
    } else {
      setError('Incorrect password. Try again.')
      setPassword('')
    }
  }

  /* ---------------------------- LOCKED ---------------------------- */
  if (!isUnlocked) {
    return (
      <>
        <Navigation showCTA={false} hideMenu={true} />
        <div className="min-h-screen bg-dark flex items-center justify-center px-6 pt-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 text-accent mx-auto mb-4" />
              <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
                AI Workshop for Marketing Professionals
              </h1>
              <p className="text-gray-300">Enter your access password to begin the workshop</p>
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
                Unlock Workshop
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

  /* --------------------------- UNLOCKED --------------------------- */
  const activeShort = STEPS.find((s) => s.n === activeStep)?.short ?? ''

  return (
    <>
      <Navigation showCTA={false} hideMenu={true} />

      {/* Sticky progress indicator */}
      <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-dark/90 backdrop-blur-xl border-b border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs sm:text-sm font-bold text-white">
              <span className="text-accent">Step {activeStep} of 5</span>
              <span className="text-gray-400"> · {activeShort}</span>
            </p>
            <p className="text-xs text-gray-500 hidden sm:block">9:00am → 12:00pm</p>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent via-accent-light to-purple-glow"
              animate={{ width: `${(activeStep / 5) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="hidden md:flex items-center justify-between mt-2">
            {STEPS.map((s) => (
              <button
                key={s.n}
                onClick={() => scrollToStep(s.n)}
                title={`Step ${s.n}: ${s.short}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  s.n === activeStep
                    ? 'bg-accent scale-125 shadow-glow-sm'
                    : s.n < activeStep
                    ? 'bg-accent/60'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-dark pt-44 sm:pt-52 pb-12 px-4 sm:px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-glow/8 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* ---------------------------- HERO ---------------------------- */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-purple-glow/15 border border-purple-glow/40 rounded-full text-xs font-bold text-purple-glow uppercase tracking-wider mb-5">
              For Experienced Marketing Professionals
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 leading-tight">
              Build Your Personal Brand
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent">
                &amp; Website With AI
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
              Turn your years of marketing experience into a live professional website — in one simple guided session.
            </p>
            <div className="inline-block px-6 py-4 bg-gradient-to-r from-accent/10 to-purple-glow/10 border border-accent/30 rounded-2xl">
              <p className="text-lg sm:text-xl font-black text-white">
                You&apos;ve already built the experience.
                <br className="sm:hidden" />{' '}
                <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">
                  AI can help you turn it into a brand.
                </span>
              </p>
            </div>
          </motion.div>

          {/* The whole workshop in one line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-accent/5 to-purple-glow/5 border border-accent/20"
          >
            <p className="text-sm font-black text-accent uppercase tracking-wider mb-4 text-center">
              How today works
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:text-base font-bold text-white">
              {['Give ChatGPT your info', 'Build the site in v0', 'Back it up on GitHub', 'Deploy live on Vercel'].map(
                (step, i, arr) => (
                  <span key={step} className="flex items-center gap-3">
                    <span>{step}</span>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-accent/60" />}
                  </span>
                )
              )}
            </div>
            <p className="text-gray-400 text-sm text-center mt-4">
              That&apos;s it. You paste your background in once, and by 12pm you have a live website.
            </p>
          </motion.div>

          {/* Who this is for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 rounded-2xl p-6 sm:p-8 bg-black/40 border border-white/10"
          >
            <p className="text-sm font-black text-accent uppercase tracking-wider mb-3">Who this is for</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Marketing Consultants',
                'Senior Marketing Managers',
                'Brand Strategists',
                'Communications Specialists',
                'Advertising Professionals',
                'CMOs & Marketing Leaders',
                'Business Development Professionals',
                'Independent Consultants',
              ].map((who) => (
                <span
                  key={who}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm"
                >
                  {who}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ============================ STEPS ============================ */}

          {/* STEP 1 */}
          <Step
            number={1}
            time="9:00 – 9:45"
            title="Give ChatGPT Your Info"
            doing="Paste your LinkedIn profile and anything else you like. ChatGPT shapes your brand and writes your website prompt."
            icon={MessageSquare}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              You&apos;re not starting from scratch — you already have years of experience. Gather whatever you have and
              paste it in one place. The more you give ChatGPT, the better your website will be.
            </p>

            <div>
              <p className="text-white font-bold text-sm mb-3">Paste in anything you have:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Your LinkedIn profile',
                  'Your CV / résumé',
                  'A professional bio',
                  'Key projects & achievements',
                  'Industries you have worked in',
                  'Services you offer',
                  'Qualifications',
                  'Any articles or talks',
                ].map((item) => (
                  <div key={item} className="flex gap-2 items-start text-sm text-gray-300">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <InputArea
              storageKey="wm_background"
              label="Paste your LinkedIn profile and anything else here"
              placeholder="Paste everything you can — don't worry about tidying it up. You'll copy this into ChatGPT with the prompt below."
              rows={8}
            />

            <PromptCard
              label="Copy this into ChatGPT (paste your info where shown)"
              prompt={`I want to build a premium personal brand website for myself as an experienced marketing professional.

Below is my professional background — my LinkedIn profile and anything else I've included.

First, using ONLY my real experience, help me shape my personal brand:
- My positioning (one clear, memorable sentence — no generic "passionate marketing professional" language)
- What I do and the services I could credibly offer
- Who I help and the problems I solve
- My professional story (a short narrative, not a list of jobs)
- What makes my experience different

Then, using all of that, write ONE complete, ready-to-paste prompt for Vercel v0 that will build my personal brand website.

The v0 prompt you write should describe a premium, modern, editorial personal website with these sections:
Hero (my name, positioning, short intro, and a "Let's talk" call to action), About / My Story, What I Do, Experience & Career Highlights, Selected Expertise, How I Think, Insights & Articles, Ways to Work Together, and Contact.

Design direction: premium, modern, sophisticated, strong typography, generous whitespace, subtle interactions, and an excellent mobile experience. Avoid generic corporate templates, buzzwords and generic AI language.

Important: do not invent any clients, testimonials, results, awards or experience. Only use what I give you. Where information is missing, leave a clear placeholder.

Here is my background:
[PASTE YOUR LINKEDIN PROFILE AND ANYTHING ELSE HERE]`}
            />

            <div className="rounded-lg bg-purple-glow/8 border border-purple-glow/30 p-5">
              <p className="inline-flex items-center gap-2 text-xs font-black text-purple-glow uppercase tracking-wider mb-2">
                <User className="w-4 h-4" /> Example
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                A senior marketing professional with 20+ years across brand strategy, advertising and communications —
                with experience in Europe and New Zealand and an MBA — might end up positioned as{' '}
                <span className="text-white">
                  &ldquo;Marketing strategist helping businesses turn complexity into clarity, stronger brands and
                  sustainable growth.&rdquo;
                </span>{' '}
                Every participant replaces this with their own experience.
              </p>
            </div>

            <NextStep>
              ChatGPT will hand you a complete v0 prompt. Chat with it to tweak your positioning until it feels right,
              then copy the final v0 prompt it gives you.
            </NextStep>
          </Step>

          {/* STEP 2 */}
          <Step
            number={2}
            time="9:45 – 10:45"
            title="Build Your Website in v0"
            doing="Paste ChatGPT's prompt into Vercel v0 and watch your website appear. Then refine it by chatting."
            icon={Wand2}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Vercel v0 turns a prompt into a real, working website. Paste in the prompt ChatGPT wrote for you and it
              will generate your personal brand site in front of you.
            </p>

            <div className="space-y-4">
              {[
                ['Open Vercel v0', 'Go to v0.app and sign in (use your GitHub account — it makes the next steps easier).'],
                ['Paste your prompt', 'Paste the complete website prompt ChatGPT gave you in Step 1 and let v0 build.'],
                ['Refine by chatting', 'Ask v0 to adjust anything — tone, layout, colours, wording. Keep going until it feels like you.'],
                ['Add your photo & details', 'Replace placeholders with your real photo, LinkedIn link and contact email.'],
              ].map(([title, desc], i) => (
                <div key={title} className="flex items-start gap-4 rounded-lg bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-glow text-dark text-sm font-black flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://v0.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
            >
              → Open Vercel v0
            </a>

            <NextStep>Once your site looks right, back it up so your work is safe.</NextStep>
          </Step>

          {/* STEP 3 */}
          <Step
            number={3}
            time="10:45 – 11:05"
            title="Back It Up on GitHub"
            doing="Save your project to GitHub so everything is stored safely and ready to deploy."
            icon={Github}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              GitHub is like Google Drive for code — it keeps a safe, backed-up copy of your website project. v0 can push
              your project straight to it.
            </p>

            <div className="space-y-4">
              {[
                ['Create a free GitHub account', 'If you don’t have one yet, sign up at github.com — it’s free and takes a minute.'],
                ['Push your project from v0', 'In v0, use "Push to GitHub" (or Export → GitHub) to save your website project to your account.'],
                ['Confirm it’s saved', 'Check your GitHub account — your website project should now appear as a repository.'],
              ].map(([title, desc], i) => (
                <div key={title} className="flex items-start gap-4 rounded-lg bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-glow text-dark text-sm font-black flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors"
            >
              → Create a GitHub account
            </a>

            <NextStep>With your project safely on GitHub, you&apos;re ready to publish it to the world.</NextStep>
          </Step>

          {/* STEP 4 */}
          <Step
            number={4}
            time="11:05 – 11:45"
            title="Deploy Live on Vercel"
            doing="Publish your website to a real web address — and leave today with a live personal brand site."
            icon={Rocket}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Vercel hosts your website on the internet so anyone can visit it. Deploying takes just a few clicks.
            </p>

            <div className="space-y-4">
              {[
                ['Deploy from v0 / GitHub', 'Use "Deploy" in v0, or connect your GitHub repository to Vercel. Vercel publishes your site to a live URL.'],
                ['Test the live site', 'Check it end to end: desktop, mobile, navigation, links, contact form, images and social links.'],
                ['Connect a custom domain (optional)', 'If you have your own domain, add it in Vercel so your site lives at your own web address.'],
              ].map(([title, desc], i) => (
                <div key={title} className="flex items-start gap-4 rounded-lg bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-glow text-dark text-sm font-black flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-gradient-to-r from-accent/10 to-purple-glow/10 border border-accent/30 p-5">
              <p className="text-white font-bold">🎯 The goal: you leave today with a live personal brand website.</p>
            </div>
          </Step>

          {/* STEP 5 (optional) */}
          <Step
            number={5}
            time="11:45 – 12:00"
            title="Keep Building With Claude"
            doing="Optional: connect Claude to your Vercel account to keep improving your website after the workshop."
            icon={Bot}
            optional
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Once your site is live, you can keep improving it with AI. Claude can connect to your Vercel account and
              help you make changes, add pages and refine your site over time — no need to start from scratch again.
            </p>

            <div className="space-y-4">
              {[
                ['Connect Claude to Vercel', 'Link Claude to your Vercel account so it can work directly with your live project.'],
                ['Ask for changes in plain English', 'Describe what you want — new sections, wording tweaks, design changes — and Claude helps make them.'],
                ['Publish updates any time', 'Redeploy through Vercel whenever you’re ready. Your site keeps getting better.'],
              ].map(([title, desc], i) => (
                <div key={title} className="flex items-start gap-4 rounded-lg bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white text-sm font-black flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm">
              This step is completely optional — your website is already live after Step 4. Think of Claude as your
              ongoing AI helper for whenever you want to grow your site further.
            </p>
          </Step>

          {/* ---------------------- CONGRATULATIONS ---------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,153,255,0.12), rgba(168,85,247,0.12))',
              border: '1px solid rgba(0,153,255,0.3)',
            }}
          >
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Congratulations</h2>
            <p className="text-xl text-accent-light font-bold mb-8">
              You&apos;ve turned your experience into a personal brand.
            </p>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              You started with the experience you&apos;ve spent years building. You used AI to shape who you are, what
              you do and who you help — and you now have a live website to prove it.
            </p>

            <div className="max-w-2xl mx-auto rounded-2xl bg-black/40 border border-accent/30 p-6 mb-8">
              <p className="text-sm font-black text-accent uppercase tracking-wider mb-2">Your next step</p>
              <p className="text-gray-200 leading-relaxed">
                Don&apos;t let your professional experience live only inside your LinkedIn profile. Share what you know.
                Publish your ideas. Build your authority. Let people discover what you can do.
              </p>
              <p className="text-lg font-black text-white mt-4">Your personal brand starts here.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black rounded-xl hover:shadow-glow-lg transition-all transform hover:scale-105"
              >
                Book a Follow-up Consultation
              </Link>
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-white/5 border border-white/15 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
