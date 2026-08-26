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
  Target,
  MessageSquare,
  Fingerprint,
  Eye,
  Palette,
  Shapes,
  ClipboardList,
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
  rows = 6,
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

/* Small helper: what each step produces */
const Outcome = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 rounded-lg bg-green-500/8 border border-green-500/25 p-4">
    <Target className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
    <p className="text-white text-sm font-semibold">
      <span className="text-green-400">Outcome: </span>
      {children}
    </p>
  </div>
)

/* Compact action-step list */
const ActionList = ({ items, accent = 'accent' }: { items: [string, string][]; accent?: string }) => (
  <div className="space-y-4">
    {items.map(([title, desc], i) => (
      <div key={title} className="flex items-start gap-4 rounded-lg bg-white/5 border border-white/10 p-4">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-black flex-shrink-0 ${
            accent === 'muted'
              ? 'bg-white/10 text-white'
              : 'bg-gradient-to-br from-accent to-purple-glow text-dark'
          }`}
        >
          {i + 1}
        </div>
        <div>
          <p className="text-white font-bold text-sm mb-1">{title}</p>
          <p className="text-gray-400 text-sm">{desc}</p>
        </div>
      </div>
    ))}
  </div>
)

/* ------------------------------------------------------------------ */
/*  Steps (used for the progress indicator)                           */
/* ------------------------------------------------------------------ */
const STEPS = [
  { n: 1, short: 'Your Info' },
  { n: 2, short: 'Personal Brand' },
  { n: 3, short: 'Inspiration' },
  { n: 4, short: 'Brand Guidelines' },
  { n: 5, short: 'Logo' },
  { n: 6, short: 'Website Brief' },
  { n: 7, short: 'Build in v0' },
  { n: 8, short: 'GitHub' },
  { n: 9, short: 'Vercel' },
  { n: 10, short: 'Keep Building' },
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
  children,
}: {
  number: number
  time: string
  title: string
  doing: string
  icon: React.ComponentType<any>
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

  const TOTAL = STEPS.length

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
              <span className="text-accent">
                Step {activeStep} of {TOTAL}
              </span>
              <span className="text-gray-400"> · {activeShort}</span>
            </p>
            <p className="text-xs text-gray-500 hidden sm:block">9:00am → 12:00pm</p>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent via-accent-light to-purple-glow"
              animate={{ width: `${(activeStep / TOTAL) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="hidden md:flex items-center justify-between mt-2">
            {STEPS.map((s) => (
              <button
                key={s.n}
                onClick={() => scrollToStep(s.n)}
                title={`Step ${s.n}: ${s.short}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  s.n === activeStep
                    ? 'bg-accent scale-150 shadow-glow-sm'
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
              A guided process that takes you from professional experience to a live personal brand website — through
              real brand strategy and creative direction, not just a website builder.
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

          {/* The journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-accent/5 to-purple-glow/5 border border-accent/20"
          >
            <p className="text-sm font-black text-accent uppercase tracking-wider mb-4 text-center">Today&apos;s journey</p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:text-base font-bold text-white">
              {[
                'Professional experience',
                'Personal brand strategy',
                'Creative direction',
                'Visual identity',
                'Website creative brief',
                'AI-built website',
                'Live website',
              ].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <span>{step}</span>
                  {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-accent/60" />}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center mt-4">
              This is a strategic and creative process as much as a technical one. You define who you are, shape your
              brand, set your creative direction, then use AI to build and publish it.
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

          {/* STEP 1 — Your Info */}
          <Step
            number={1}
            time="9:00 – 9:15"
            title="Give ChatGPT Your Info"
            doing="Give ChatGPT enough context to properly understand who you are professionally."
            icon={MessageSquare}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              You&apos;re not starting from scratch — you already have years of experience. Gather everything relevant
              and give it to ChatGPT so it truly understands your background before you build anything.
            </p>

            <div>
              <p className="text-white font-bold text-sm mb-3">Include anything you have:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Career background',
                  'Experience & expertise',
                  'Key achievements',
                  'Skills',
                  'Industries you know',
                  'Types of businesses you understand',
                  'LinkedIn profile or CV',
                  'Any other professional information',
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
              label="Paste your LinkedIn profile, CV and anything else here"
              placeholder="Paste everything you can — don't worry about tidying it up. You'll copy this into ChatGPT with the prompt below."
              rows={8}
            />

            <PromptCard
              label="Copy this into ChatGPT (paste your info where shown)"
              prompt={`I'm going to build a personal brand website. First, I want you to understand my professional background properly.

Below is my career information — my LinkedIn profile, CV and anything else relevant. Read it carefully and summarise back to me:
- My career background and experience
- My core areas of expertise
- The industries and types of businesses I understand
- My key achievements and skills
- Anything distinctive that stands out

Ask me clarifying questions if anything is unclear. Do not invent anything — only use what I provide.

Keep this conversation going — we'll build my whole personal brand and website from here.

Here is my professional information:
[PASTE YOUR LINKEDIN, CV AND ANYTHING ELSE HERE]`}
            />

            <Outcome>A detailed, accurate understanding of your professional background.</Outcome>
          </Step>

          {/* STEP 2 — Personal Brand */}
          <Step
            number={2}
            time="9:15 – 9:40"
            title="Shape Your Personal Brand"
            doing="Move beyond generic labels and establish a clear, credible and distinctive personal brand."
            icon={Fingerprint}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              &ldquo;Experienced marketing professional&rdquo; says nothing. In this step ChatGPT helps you define a
              sharp personal brand built only on your real experience — your positioning, your niche, and what genuinely
              makes you different.
            </p>

            <PromptCard
              label="Copy this into the same ChatGPT conversation"
              prompt={`Now that you understand my background, help me define a clear, credible and distinctive personal brand.

Based only on my real experience, help me establish:
- My positioning (one clear, memorable sentence — no generic "experienced marketing professional" language)
- My strongest areas of expertise
- My niche or professional focus
- Who I help
- The problems I solve
- My potential services or offers
- My professional story (a short narrative, not a list of jobs)
- My tone of voice
- My key messages
- What makes me different

Push me beyond generic statements. Where I could be sharper, more specific or more distinctive, tell me and suggest stronger options.`}
            />

            <div className="rounded-lg bg-purple-glow/8 border border-purple-glow/30 p-5">
              <p className="inline-flex items-center gap-2 text-xs font-black text-purple-glow uppercase tracking-wider mb-2">
                <User className="w-4 h-4" /> Example
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                A senior professional with 20+ years across brand strategy, advertising and communications might land on{' '}
                <span className="text-white">
                  &ldquo;Marketing strategist helping businesses turn complexity into clarity, stronger brands and
                  sustainable growth.&rdquo;
                </span>{' '}
                Specific, credible, and unmistakably theirs.
              </p>
            </div>

            <InputArea
              storageKey="wm_brand"
              label="Save your personal brand strategy here"
              placeholder="Positioning, niche, who you help, problems you solve, services, tone of voice, key messages, what makes you different."
              rows={8}
            />

            <Outcome>A clear personal brand strategy.</Outcome>
          </Step>

          {/* STEP 3 — Inspiration */}
          <Step
            number={3}
            time="9:40 – 9:55"
            title="Explore Your Inspiration"
            doing="Find brands and websites you admire, and identify the creative principles behind them."
            icon={Eye}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Before designing anything, gather inspiration. Find <span className="text-white font-semibold">2–3</span>{' '}
              websites, personal brands or companies whose design and branding you admire, and have ChatGPT unpack{' '}
              <span className="text-white">why</span> they work.
            </p>

            <div className="rounded-lg bg-accent/5 border border-accent/20 p-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-black text-accent">The point is not to copy.</span> It&apos;s to identify the
                underlying creative principles — and decide which ones fit your brand.
              </p>
            </div>

            <InputArea
              storageKey="wm_inspiration"
              label="List 2–3 brands or websites you admire (links or names)"
              placeholder="e.g. a consultant's site, a design studio, a brand whose tone you love — with a note on what draws you to each."
              rows={4}
            />

            <PromptCard
              label="Copy this into the same ChatGPT conversation"
              prompt={`I've found a few websites / personal brands / companies whose design and branding I admire. I'll paste the links or descriptions below.

Analyse them and help me understand the underlying creative principles:
- The overall visual style
- Design principles
- Layout patterns
- Typography
- Use of colour
- Imagery
- Brand personality
- The emotional feeling the design creates

I don't want to copy them. Help me identify the principles I could draw on to inform my own creative direction, given the personal brand we've defined.

Here are my references:
[PASTE 2–3 WEBSITES OR BRANDS YOU ADMIRE — LINKS OR DESCRIPTIONS]`}
            />

            <Outcome>A clearer understanding of the creative direction you want for your own brand.</Outcome>
          </Step>

          {/* STEP 4 — Brand Guidelines */}
          <Step
            number={4}
            time="9:55 – 10:30"
            title="Create Your Brand Guidelines"
            doing="Define how your personal brand should actually look and feel — before any website exists."
            icon={Palette}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              This is the heart of the branding work. With ChatGPT, turn your strategy and inspiration into a coherent{' '}
              <span className="text-white font-semibold">Brand Guidelines</span> document covering personality, colour,
              typography, imagery and logo direction.
            </p>

            {/* Brand personality spectrums */}
            <div>
              <p className="text-white font-bold text-sm mb-3">Brand personality — where does yours sit?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  ['Bold', 'Understated'],
                  ['Corporate', 'Personal'],
                  ['Premium', 'Approachable'],
                  ['Modern', 'Classic'],
                  ['Minimal', 'Expressive'],
                  ['Serious', 'Playful'],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="flex items-center justify-between gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-2.5"
                  >
                    <span className="text-gray-200 text-sm font-semibold">{a}</span>
                    <span className="flex-1 border-t border-dashed border-white/15" />
                    <span className="text-gray-200 text-sm font-semibold">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The dimensions covered */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ['Visual direction', 'The feeling on arrival, the style that fits your positioning, and what it must NOT look like.'],
                ['Colour palette', 'Primary, secondary, accent, background and text colours — with the reasoning behind them.'],
                ['Typography', 'Heading and body styles, and whether the type feels editorial, modern, technical, premium or corporate.'],
                ['Imagery direction', 'Photography, AI imagery, abstract visuals, illustration, icons, or minimal with limited imagery.'],
                ['Logo direction', 'Wordmark, monogram, symbol, combination mark, or minimal typographic logo.'],
                ['Design principles', 'The rules that keep everything coherent across the whole site.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <p className="text-white font-bold text-sm mb-1">{title}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <PromptCard
              label="Copy this into the same ChatGPT conversation"
              prompt={`Using my personal brand strategy and the creative direction I've explored, help me create a complete set of brand guidelines.

1. BRAND PERSONALITY — decide where my brand should sit on each spectrum, and explain why:
- Bold vs Understated
- Corporate vs Personal
- Premium vs Approachable
- Modern vs Classic
- Minimal vs Expressive
- Serious vs Playful

2. VISUAL DIRECTION
- What should someone feel when they arrive on my website?
- What visual style best reflects my positioning?
- What should my brand definitely NOT look like?
- What level of personality vs professionalism suits my audience?

3. COLOUR PALETTE — propose a considered colour system and explain why it supports my positioning:
- Primary colour
- Secondary colours
- Accent colours
- Background colours
- Text colours

4. TYPOGRAPHY
- Heading style
- Body text style
- Overall typographic personality (editorial, modern, technical, premium, creative or corporate)

5. IMAGERY DIRECTION — recommend the primary approach: personal photography, AI-generated imagery, abstract visuals, illustrations, icons, or minimal design with limited imagery.

6. LOGO DIRECTION — recommend the logo type that fits: wordmark, monogram, symbol, combination mark, or minimal typographic logo.

Present this as a clear Brand Guidelines document I can reuse throughout building my website. Base every decision on my brand — don't default to generic choices.`}
            />

            <InputArea
              storageKey="wm_guidelines"
              label="Save your Brand Guidelines here"
              placeholder="Personality, visual direction, colour palette, typography, imagery direction, logo direction, design principles."
              rows={10}
            />

            <Outcome>A complete brand and visual direction.</Outcome>
          </Step>

          {/* STEP 5 — Logo */}
          <Step
            number={5}
            time="10:30 – 10:50"
            title="Create Your Logo With AI"
            doing="Use your brand strategy and guidelines to design a logo with intent — not a random generation."
            icon={Shapes}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Now that your brand and visual direction are set, the logo has something to be true to. Explore a few
              considered directions, choose one, and refine it to match your palette and personality.
            </p>

            <div>
              <p className="text-white font-bold text-sm mb-3">Explore directions such as:</p>
              <div className="flex flex-wrap gap-2">
                {['Clean & professional', 'Bold & modern', 'Premium & minimal'].map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1.5 rounded-full bg-purple-glow/10 border border-purple-glow/25 text-gray-300 text-xs"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <ActionList
              items={[
                ['Explore multiple concepts', 'Ask AI for several directions that fit your brand guidelines.'],
                ['Choose a direction', 'Pick the concept that best reflects your positioning.'],
                ['Refine & adjust', 'Tune the styling and align the colours to your palette.'],
                ['Produce a final logo', 'Export a clean version ready to use on your website.'],
              ]}
            />

            <PromptCard
              label="Copy this into the same ChatGPT conversation"
              prompt={`Using my brand strategy and brand guidelines, help me create a logo for my personal brand.

First, explore several creative directions that fit my brand — for example: clean and professional, bold and modern, premium and minimal. For each, describe the concept and why it fits my brand.

Once I choose a direction, help me:
1. Refine the concept
2. Adjust the colours and styling to match my palette
3. Produce a final logo I can use on my website

The logo must reflect the brand strategy and visual direction we've already established — not a random generic logo. If you can generate the logo image directly, do so; otherwise give me a precise description I can use in an image tool.`}
            />

            <Outcome>A logo and visual identity that align with your brand strategy.</Outcome>
          </Step>

          {/* STEP 6 — Website Brief */}
          <Step
            number={6}
            time="10:50 – 11:10"
            title="Build Your Website Creative Brief"
            doing="Bring everything into one complete brief — the foundation you'll build the website from."
            icon={ClipboardList}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              This is the bridge between branding and building. ChatGPT compiles your strategy, identity and content into
              a single <span className="text-white font-semibold">Website Creative Brief</span> — one document that
              drives everything that follows.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ['Brand strategy', 'Positioning, audience, expertise, offers, key messages, personality, tone.'],
                ['Visual identity', 'Colour palette, typography, logo, design principles, imagery, overall style.'],
                ['Website strategy', 'Purpose, audience, user journey, primary conversion action, pages required.'],
                ['Website content', 'Headline, value proposition, about, services, credentials, proof, CTAs.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <p className="text-white font-bold text-sm mb-1">{title}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <PromptCard
              label="Copy this into the same ChatGPT conversation"
              prompt={`Bring everything we've created into one complete Website Creative Brief I can use to build my website. Compile it into these sections:

BRAND STRATEGY
- Positioning
- Target audience
- Expertise
- Services or offers
- Key messages
- Brand personality
- Tone of voice

VISUAL IDENTITY
- Colour palette
- Typography
- Logo
- Design principles
- Imagery direction
- Overall visual style

WEBSITE STRATEGY
- Primary purpose of the website
- Target audience
- Desired user journey
- Primary conversion action
- Pages / sections required

WEBSITE CONTENT
- Main headline
- Value proposition
- About section
- Services / expertise
- Experience and credentials
- Case studies / testimonials / proof (where relevant — never invented)
- Calls to action

DESIGN DIRECTION
- A clear written description of how the finished website should feel.

Use everything from my brand strategy and brand guidelines. Produce one comprehensive brief.`}
            />

            <div className="rounded-lg bg-purple-glow/8 border border-purple-glow/30 p-5">
              <p className="inline-flex items-center gap-2 text-xs font-black text-purple-glow uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" /> Example design direction
              </p>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                &ldquo;The website should feel like a premium modern consultancy rather than a traditional corporate
                website. Use generous whitespace, strong typography, subtle animation and a confident editorial layout.
                The design should feel sophisticated and modern while remaining approachable and personal.&rdquo;
              </p>
            </div>

            <InputArea
              storageKey="wm_brief"
              label="Save your complete Website Creative Brief here"
              placeholder="The full brief: brand strategy, visual identity, website strategy, content and design direction."
              rows={12}
            />

            <Outcome>A complete website strategy, content plan and creative brief.</Outcome>
          </Step>

          {/* STEP 7 — Build in v0 */}
          <Step
            number={7}
            time="11:10 – 11:35"
            title="Build Your Website in v0"
            doing="Feed your complete creative brief into Vercel v0 — and watch better direction produce a better website."
            icon={Wand2}
          >
            <div className="rounded-lg bg-gradient-to-r from-accent/10 to-purple-glow/10 border border-accent/30 p-5">
              <p className="text-white font-black text-base">Better creative direction produces better AI output.</p>
              <p className="text-gray-300 text-sm mt-1">
                You&apos;re no longer asking &ldquo;build me a website.&rdquo; You&apos;re handing v0 a complete brand,
                identity and content brief. This is the culmination of everything you&apos;ve done today.
              </p>
            </div>

            <ActionList
              items={[
                ['Open Vercel v0', 'Go to v0.app and sign in (use your GitHub account — it makes the next steps easier).'],
                ['Paste the build prompt', 'Use the prompt below with your complete creative brief pasted in.'],
                ['Refine by chatting', 'Ask v0 to adjust anything — colours, layout, tone, wording — against your brief.'],
                ['Add your logo, photo & details', 'Drop in your logo, real photo, LinkedIn link and contact email.'],
              ]}
            />

            <PromptCard
              label="Paste this into Vercel v0 (with your brief)"
              prompt={`Build a premium personal brand website based on the following creative brief. Follow the brand strategy, visual identity, colour palette, typography, imagery direction, website structure, content and design direction exactly.

Do not invent any clients, testimonials, results or credentials. Where content is missing, use a clear placeholder.

Here is my complete Website Creative Brief:
[PASTE YOUR COMPLETE WEBSITE CREATIVE BRIEF HERE]`}
            />

            <a
              href="https://v0.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
            >
              → Open Vercel v0
            </a>

            <Outcome>The first working version of your personal brand website.</Outcome>
          </Step>

          {/* STEP 8 — GitHub */}
          <Step
            number={8}
            time="11:35 – 11:45"
            title="Back It Up on GitHub"
            doing="Save your project to GitHub so everything is stored safely and ready to deploy."
            icon={Github}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              GitHub is like Google Drive for code — it keeps a safe, backed-up copy of your website project. v0 can push
              your project straight to it.
            </p>

            <ActionList
              items={[
                ['Create a GitHub account or repository', 'If you don’t have one yet, sign up at github.com — it’s free and takes a minute.'],
                ['Push your project to GitHub', 'In v0, use "Push to GitHub" (or Export → GitHub) to save your website project.'],
                ['Understand where your code lives', 'Your project now sits in a repository you own — the single source of truth for your site.'],
              ]}
            />

            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors"
            >
              → Create a GitHub account
            </a>

            <Outcome>Your website is safely backed up and ready to deploy.</Outcome>
          </Step>

          {/* STEP 9 — Vercel */}
          <Step
            number={9}
            time="11:45 – 11:55"
            title="Deploy Live in Vercel"
            doing="Publish your website to a real web address — the moment your personal brand becomes a live website."
            icon={Rocket}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Vercel hosts your website on the internet so anyone can visit it. Deploying takes just a few clicks.
            </p>

            <ActionList
              items={[
                ['Deploy the website', 'Use "Deploy" in v0, or connect your GitHub repository to Vercel to publish to a live URL.'],
                ['Test the live website', 'Check it end to end: desktop, mobile, navigation, links, contact form, images and social links.'],
                ['Connect a custom domain', 'If appropriate, add your own domain in Vercel so your site lives at your web address.'],
              ]}
            />

            <div className="rounded-lg bg-gradient-to-r from-accent/10 to-purple-glow/10 border border-accent/30 p-5">
              <p className="text-white font-bold">🎯 The goal: you leave today with a live personal brand website.</p>
            </div>

            <Outcome>Your website is live online.</Outcome>
          </Step>

          {/* STEP 10 — Keep Building */}
          <Step
            number={10}
            time="11:55 – 12:00"
            title="Keep Building With Claude"
            doing="Today is the beginning of your website, not the end. Keep evolving it with Claude."
            icon={Bot}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Once your site is live, you can keep improving it with AI. Claude can connect to your Vercel account and
              help you evolve your site over time — no need to start from scratch again.
            </p>

            <ActionList
              accent="muted"
              items={[
                ['Make design changes', 'Refine layouts, colours and styling as your brand develops.'],
                ['Add new sections & content', 'Grow the site — new pages, case studies, articles and services.'],
                ['Add functionality', 'Introduce new features as your needs change.'],
                ['Keep evolving over time', 'Redeploy through Vercel whenever you’re ready. Your site keeps getting better.'],
              ]}
            />

            <Outcome>You understand that the workshop is the beginning of your website, not the end.</Outcome>
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
              You didn&apos;t just generate a website. You defined who you are professionally, built a real personal
              brand strategy, set your creative direction and visual identity, turned it into a brief — and used AI to
              build and publish a website that genuinely represents you.
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
