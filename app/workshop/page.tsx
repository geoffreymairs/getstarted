'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Lock,
  Copy,
  Check,
  Flag,
  Lightbulb,
  ClipboardList,
  Image as ImageIcon,
  LayoutTemplate,
  Users,
  Rocket,
  Mail,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'

/* Copy-to-clipboard prompt block. The code stays dark for readability. */
const ToolPrompt = ({
  toolName,
  tone,
  prompt,
  promptNumber,
}: {
  toolName: string
  tone: 'chatgpt' | 'v0'
  prompt: string
  promptNumber?: number
}) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const label =
    tone === 'v0'
      ? 'bg-blue-100 text-blue-700 border border-blue-200'
      : 'bg-green-100 text-green-700 border border-green-200'
  const bar = tone === 'v0' ? 'border-l-blue-500' : 'border-l-green-500'

  return (
    <div className="space-y-3">
      <div className={`inline-block rounded-lg px-4 py-2 text-sm font-bold ${label}`}>
        {promptNumber && <span className="mr-2 font-black">#{promptNumber}</span>}
        Paste this into {toolName}
      </div>
      <div className={`relative overflow-x-auto rounded-lg border border-slate-800 border-l-4 bg-slate-900 p-4 ${bar}`}>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 rounded-lg bg-white/10 p-2 text-slate-200 transition-colors hover:bg-white/20"
          title="Copy prompt"
        >
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
        </button>
        <pre className="whitespace-pre-wrap break-words pr-12 font-mono text-sm leading-relaxed text-slate-100">
          <code>{prompt}</code>
        </pre>
      </div>
    </div>
  )
}

/* Editable note that saves on this device so answers carry to later steps */
const WorkshopNote = ({
  storageKey,
  title,
  intro,
  placeholder,
  rows = 5,
}: {
  storageKey: string
  title: string
  intro: string
  placeholder: string
  rows?: number
}) => {
  const [value, setValue] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        setValue(stored)
        setSaved(true)
      }
    } catch {
      /* storage unavailable, the box still works for this session */
    }
  }, [storageKey])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = e.target.value
    setValue(next)
    try {
      localStorage.setItem(storageKey, next)
      setSaved(next.trim().length > 0)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="rounded-lg border border-gs-200 bg-gs-50 p-5">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="font-bold text-slate-900">{title}</p>
        {saved && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600">
            <Check className="h-3.5 w-3.5" /> Saved
          </span>
        )}
      </div>
      <p className="mb-3 text-sm text-slate-600">{intro}</p>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-gs-500 focus:ring-1 focus:ring-gs-200"
      />
      <p className="mt-2 text-xs text-slate-500">Saves automatically on this device, so it is still here if you refresh.</p>
    </div>
  )
}

/* Numbered workshop step card */
const Step = ({
  number,
  badge,
  time,
  title,
  intro,
  icon: Icon,
  children,
}: {
  number?: number
  badge?: string
  time: string
  title: string
  intro: string
  icon: React.ComponentType<any>
  children: React.ReactNode
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <div className="mb-8 border-b border-slate-200 pb-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gs-50">
            <Icon className="h-6 w-6 text-gs-600" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-full border border-gs-200 bg-gs-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gs-700">
                {badge ?? `Step ${number}`}
              </span>
              <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                {time}
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">{title}</h2>
            <p className="text-sm text-slate-600 sm:text-base">{intro}</p>
          </div>
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  </motion.div>
)

/* The 60-minute plan, shown at the top. Times add up to exactly 60. */
const programme = [
  {
    n: 1,
    name: 'The challenge',
    time: '0-5 min',
    icon: Flag,
    blurb: 'Meet the challenge and the two AI tools you will use.',
  },
  {
    n: 2,
    name: 'Invent the business',
    time: '5-15 min',
    icon: Lightbulb,
    blurb: 'Brainstorm and agree a name, brand, packages and prices with ChatGPT.',
  },
  {
    n: 3,
    name: 'Plan the website',
    time: '15-22 min',
    icon: ClipboardList,
    blurb: 'Turn your brand into website words and a brief for v0.',
  },
  {
    n: 4,
    name: 'Create the hero image',
    time: '22-27 min',
    icon: ImageIcon,
    blurb: 'Generate a striking, text-free photo for the top of the site.',
  },
  {
    n: 5,
    name: 'Build the website',
    time: '27-52 min',
    icon: LayoutTemplate,
    blurb: 'Paste your brief into v0, build a one-page site and preview it.',
  },
  {
    n: 6,
    name: 'Showcase',
    time: '52-60 min',
    icon: Users,
    blurb: 'Preview, present and talk about how AI helped.',
  },
]

export default function WorkshopPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

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

  if (!isUnlocked) {
    return (
      <>
        <WebNav />
        <main className="flex min-h-screen items-center justify-center bg-white px-6 pt-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
            <div className="mb-8 text-center">
              <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gs-50">
                <Lock className="h-8 w-8 text-gs-600" />
              </span>
              <h1 className="mb-2 text-4xl font-extrabold text-slate-900">Build a Business Workshop</h1>
              <p className="text-slate-600">Enter your access password to start the workshop</p>
            </div>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-gs-500 focus:ring-1 focus:ring-gs-200"
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full rounded-xl bg-gs-600 px-8 py-3 font-bold text-white transition-colors hover:bg-gs-700"
              >
                Start the workshop
              </button>
            </form>
            <div className="mt-8 text-center">
              <Link href="/" className="text-sm font-semibold text-gs-600 transition-colors hover:text-gs-700">
                Back to home
              </Link>
            </div>
          </motion.div>
        </main>
      </>
    )
  }

  return (
    <>
      <WebNav />
      <main className="bg-white pt-20 text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gs-50 via-gs-50/50 to-white" />
          <div className="mx-auto max-w-5xl px-6 pb-16 pt-14 text-center sm:pt-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gs-200 bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-gs-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-gs-600" />
                60 minute workshop
              </div>
              <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-7xl">
                Build a Business
                <br />
                <span className="bg-gradient-to-r from-gs-500 to-sky-400 bg-clip-text text-transparent">with AI</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Turn a simple business idea into a branded website in just 60 minutes. Our example is a mobile car wash,
                invented live with ChatGPT and v0. No coding needed.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-bold uppercase tracking-wider text-slate-500">
                <span>Invent</span>
                <ArrowRight className="h-4 w-4 text-gs-500" />
                <span>Plan</span>
                <ArrowRight className="h-4 w-4 text-gs-500" />
                <span className="text-gs-600">Build</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6 pb-16 pt-14">
          {/* The 60-minute plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="mb-6 flex flex-col items-center gap-1 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-gs-600">The 60-minute plan</p>
              <p className="text-sm text-slate-500">Six stages, one hour, a finished website prototype.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {programme.map((s) => (
                <div key={s.n} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gs-600 text-sm font-black text-white">
                      {s.n}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {s.time}
                    </span>
                  </div>
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gs-50">
                    <s.icon className="h-5 w-5 text-gs-600" strokeWidth={2} />
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{s.blurb}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What you're building */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-gs-600">What you are building</p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-300/40">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <div className="ml-3 flex-1 rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-400">
                  your-car-wash.vercel.app
                </div>
              </div>
              <Image
                src="/workshop/carwash-example.webp"
                alt="Example of a finished mobile car wash website hero section"
                width={1672}
                height={941}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-slate-500">
              An example of a finished website prototype. You will build your own for the business you invent together.
            </p>
          </motion.div>

          {/* Before you begin */}
          <Step
            badge="Before you begin"
            time="Prep"
            title="Set up your tools"
            intro="Get these ready before the hour starts so the whole 60 minutes goes into inventing and building."
            icon={Lock}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3 rounded-lg border border-green-200 bg-green-50 p-6">
                <p className="font-bold text-slate-900">1. ChatGPT</p>
                <p className="text-sm text-slate-600">
                  Your AI thinking partner, used to invent the business, write the website words and create the hero
                  image. A free account is enough to start.
                </p>
                <a
                  href="https://chat.openai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-green-600 px-6 py-2 font-bold text-white transition-colors hover:bg-green-700"
                >
                  Open ChatGPT
                </a>
              </div>
              <div className="space-y-3 rounded-lg border border-blue-200 bg-blue-50 p-6">
                <p className="font-bold text-slate-900">2. v0 by Vercel</p>
                <p className="text-sm text-slate-600">
                  The AI website builder. You describe the site and v0 builds it, then lets you preview it. Signing in
                  with Google is usually the quickest way.
                </p>
                <a
                  href="https://v0.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-bold text-white transition-colors hover:bg-blue-700"
                >
                  Open v0
                </a>
              </div>
            </div>
            <div className="space-y-2 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-slate-700">
              <p className="font-bold text-slate-900">Facilitator notes</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  ChatGPT and v0 each set their own age and account rules, and free usage limits, which can change.
                  Check each tool's current sign-up requirements before the session rather than assuming.
                </li>
                <li>No payment details or paid subscriptions are needed to complete this workshop.</li>
                <li>
                  If not everyone can sign in, students can pair up and share one account, or follow along on your
                  screen.
                </li>
                <li>Keep a website you built earlier ready as a demonstration and a fallback.</li>
                <li>All business and customer details are made up. Do not use anyone's real personal information.</li>
              </ul>
            </div>
          </Step>

          {/* Step 1: The challenge */}
          <Step
            number={1}
            time="0-5 min"
            title="The challenge"
            intro="Invent a mobile car wash business and build its website, with AI, in under an hour."
            icon={Flag}
          >
            <div className="space-y-3 rounded-lg border border-gs-200 bg-gs-50 p-6 text-sm text-slate-700">
              <p>
                <span className="font-bold text-slate-900">The idea:</span> a mobile car wash that drives to the
                customer and washes their car at their home or workplace. Everything else, the name, the look, the
                packages and the prices, you invent together as you go.
              </p>
              <p>
                <span className="font-bold text-slate-900">Your tools:</span> ChatGPT helps you think, name, write and
                picture the business. v0 by Vercel turns your plan into a real website you can preview.
              </p>
              <p>
                <span className="font-bold text-slate-900">The goal:</span> by the end, everyone has a website prototype
                they helped create.
              </p>
            </div>
          </Step>

          {/* Step 2: Invent the business */}
          <Step
            number={2}
            time="5-15 min"
            title="Invent the business together"
            intro="Brainstorm names with ChatGPT, agree one as a group, then build out the brand, packages and prices."
            icon={Lightbulb}
          >
            <p className="text-sm text-slate-600">Paste prompt 1, read the ideas, and vote on a name as a group.</p>
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={1}
              prompt={`You are helping a group invent a business in a hands-on workshop.

The business is a mobile car wash in New Zealand that drives to the customer and washes their car at their home or workplace.

Brainstorm 8 catchy business name ideas. For each one, add a short tagline. Keep the names easy to say and spell, and make them feel like a real, friendly local business.`}
            />
            <p className="text-sm text-slate-600">
              Once you have agreed a name, paste prompt 2 to finish the brand and the packages.
            </p>
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={2}
              prompt={`We chose the name [YOUR BUSINESS NAME] for our mobile car wash.

Help us finish the brand. Give:
1. A one line tagline
2. The ideal target customer, in one or two sentences
3. A brand personality in three words
4. Two or three brand colours that would suit it
5. Three service packages (a basic, a middle and a premium), each with a short name, what is included, and an example price in New Zealand dollars

Keep the prices realistic for a car wash, and remember this is an example business for a demo.`}
            />
            <WorkshopNote
              storageKey="workshop-business-notes"
              title="Save your business here"
              intro="Write your name, tagline, customer, brand colours, packages and prices. You will need them in the next steps."
              placeholder={`Business name:
Tagline:
Target customer:
Brand colours:

Package 1 (name + price):
Package 2 (name + price):
Package 3 (name + price):`}
              rows={8}
            />
          </Step>

          {/* Step 3: Plan the website */}
          <Step
            number={3}
            time="15-22 min"
            title="Plan the website"
            intro="Turn your brand into the words for the website, and a short brief you will paste into v0."
            icon={ClipboardList}
          >
            <p className="text-sm text-slate-600">
              Replace the words in [SQUARE BRACKETS] with your own from the box above, then paste.
            </p>
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={3}
              prompt={`Write the words for a one page website for our mobile car wash, then turn them into a short build brief.

Business: [YOUR BUSINESS NAME]
Tagline: [YOUR TAGLINE]
Target customer: [YOUR TARGET CUSTOMER]
Brand colours: [YOUR BRAND COLOURS]
Packages and prices: [YOUR PACKAGES AND PRICES]

Give me:
1. A short, punchy headline
2. A one line supporting sentence
3. Three key benefits
4. A one line description for each of the three packages
5. A call to action button label, for example "Book a wash"

Then put everything together as one clear, concise website brief I can paste straight into an AI website builder. The brief should ask for a modern, mobile-friendly one page site with a hero, how it works, the packages, why choose us, and a simple contact form (with a note that bookings are not real).`}
            />
            <div className="rounded-lg border border-gs-200 bg-gs-50 p-5 text-sm text-slate-700">
              Copy the final website brief ChatGPT writes. You will paste it into v0 in step 5.
            </div>
          </Step>

          {/* Step 4: Hero image */}
          <Step
            number={4}
            time="22-27 min"
            title="Create your hero image"
            intro="The hero image is the big photo at the top of the site. Generate one that looks real, with no text in it."
            icon={ImageIcon}
          >
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <Image
                src="/workshop/carwash-hero.webp"
                alt="Example hero image: a detailer washing a glossy black car in a driveway with a mobile van, no text"
                width={1672}
                height={941}
                className="h-auto w-full"
              />
            </div>
            <p className="text-sm text-slate-600">
              This is the kind of image you want: a clean car being washed, a professional photographic look, and space
              for words to go on top later. Generate your own with the prompt below.
            </p>
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={4}
              prompt={`Create a realistic, premium hero image for a mobile car wash website.

Show a clean, glossy car being washed in a mobile car wash or detailing setting, with a professional, visually striking photographic style and bright natural light. Leave plenty of empty space on one side so website text can be added on top later. Make it a wide landscape shape, suitable for the top of a website.

Do not put any text, words, letters, logos or buttons in the image.`}
            />
            <div className="rounded-lg border border-gs-200 bg-gs-50 p-5 text-sm text-slate-700">
              Download the image you like best. The headline, tagline and buttons are not part of this image, v0 will
              add them as real text on top in the next step, which is easier to edit and never misspelt.
            </div>
          </Step>

          {/* Step 5: Build the website */}
          <Step
            number={5}
            time="27-52 min"
            title="Build the website in v0"
            intro="This is the main event. You have 25 minutes to build your website, preview it, and improve it."
            icon={LayoutTemplate}
          >
            <p className="text-sm text-slate-600">
              Paste the website brief from step 3 into v0 and let it build, then preview the result.
            </p>
            <ToolPrompt
              toolName="v0"
              tone="v0"
              promptNumber={5}
              prompt={`Paste the website brief ChatGPT wrote in step 3 into v0 and press send.

v0 will build a complete, responsive, one page website. When it finishes, upload your hero image from step 4 to the top of the page, and check the preview.`}
            />
            <div className="space-y-3 rounded-lg border border-blue-200 bg-blue-50 p-6 text-sm text-slate-700">
              <p className="font-bold text-slate-900">Improve it, one change at a time (optional)</p>
              <p>
                Each prompt uses some of your free v0 credit, so only change what really matters. Useful tweaks, sent one
                at a time:
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Make the brand colours [YOUR BRAND COLOURS] across the whole site.</li>
                <li>Make the hero headline bigger and the Book a wash button stand out.</li>
              </ul>
              <p className="text-slate-500">If a change makes it worse, tell v0 to undo the last change.</p>
            </div>
            <div className="rounded-lg border border-gs-200 bg-gs-50 p-5 text-sm text-slate-700">
              That preview in v0 is your finished prototype for today. It is a working website you can show and share,
              even before it is published online.
            </div>
          </Step>

          {/* Step 6: Showcase */}
          <Step
            number={6}
            time="52-60 min"
            title="Showcase"
            intro="Show off what you made and talk about how AI helped."
            icon={Users}
          >
            <div className="space-y-3 rounded-lg border border-gs-200 bg-gs-50 p-6 text-sm text-slate-700">
              <ul className="ml-4 list-disc space-y-1.5">
                <li>Open your website preview and scroll through it.</li>
                <li>
                  A few of you present: what is your business called, who is it for, and what do you like most about your
                  site?
                </li>
                <li>Talk about where AI helped: the name, the words, the image, the build.</li>
                <li>Notice what you decided yourselves. AI made the pieces, but you made the choices.</li>
              </ul>
            </div>
          </Step>

          {/* Optional bonus: publish */}
          <Step
            badge="Optional bonus"
            time="After the hour"
            title="Publish your website"
            intro="Your preview is already a shareable prototype. Publishing puts it on its own public web address."
            icon={Rocket}
          >
            <div className="space-y-3 rounded-lg border border-gs-200 bg-gs-50 p-6 text-sm text-slate-700">
              <p>
                <span className="font-bold text-slate-900">Preview vs published:</span> the v0 preview is a working
                prototype you can view and share a link to. Publishing deploys it as a live website on its own address.
                You do not need to publish to finish the workshop.
              </p>
              <p>
                To publish, look for a Publish or Deploy option in v0 and follow the steps it shows. Requirements and
                free limits can change, so check what v0 asks for at the time, and do not enter any payment details. If
                publishing is not available to you, your preview link is still enough to share your work.
              </p>
            </div>
          </Step>

          {/* Optional: Web3Forms form */}
          <Step
            badge="Optional"
            time="If you finish early"
            title="Make your contact form email you"
            intro="Connect your form with Web3Forms so a real email lands in your inbox when someone enquires. No API keys to install."
            icon={Mail}
          >
            <div className="space-y-3 rounded-lg border border-blue-200 bg-blue-50 p-6 text-sm text-slate-700">
              <p className="font-bold text-slate-900">Set up Web3Forms first</p>
              <ol className="ml-4 list-decimal space-y-1.5">
                <li>
                  Go to{' '}
                  <a
                    href="https://web3forms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gs-600 hover:text-gs-700"
                  >
                    web3forms.com
                  </a>{' '}
                  and click Create Access Key.
                </li>
                <li>Enter the email address where you want enquiries to land.</li>
                <li>Check that inbox and copy the access key they send you.</li>
              </ol>
            </div>
            <p className="text-sm text-slate-600">
              Then paste this into v0, with your key in place of{' '}
              <span className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-xs text-amber-800">[YOUR ACCESS KEY]</span>.
            </p>
            <ToolPrompt
              toolName="v0"
              tone="v0"
              promptNumber={6}
              prompt={`Make my contact form send me an email when someone submits it, using Web3Forms.

Set the form to POST to https://api.web3forms.com/submit.

Add a hidden input named "access_key" with the value [YOUR ACCESS KEY].
Add a hidden input named "subject" with the value "New enquiry from my website".

Keep the visible fields (name, email, phone, message) and the existing design. When someone submits, show a loading state, then a success message that says "Thanks, we will be in touch."`}
            />
            <div className="rounded-lg border border-gs-200 bg-gs-50 p-5 text-sm text-slate-700">
              Test it by filling in the form on your own site and checking your email. Your first test submission may ask
              you to confirm your email with Web3Forms.
            </div>
          </Step>

          {/* Finish */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 mt-2"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gs-600 to-sky-500 p-10 text-center sm:p-14">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(ellipse at 15% 20%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(56,224,230,0.3), transparent 55%)',
                }}
              />
              <div className="relative">
                <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">You turned an idea into a website</h2>
                <p className="mx-auto max-w-2xl text-gs-50">
                  In just 60 minutes, you used AI to develop a business concept, create a brand, plan a website and build
                  your own website prototype.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block rounded-xl bg-gs-600 px-10 py-4 font-bold text-white transition-colors hover:bg-gs-700"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <WebFooter />
    </>
  )
}
