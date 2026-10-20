'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, Copy, Check, Lightbulb, PenTool, Image as ImageIcon, LayoutTemplate, Rocket, Mail, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/* Copy-to-clipboard prompt block */
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
      ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
      : 'bg-green-500/15 text-green-300 border border-green-500/30'
  const bar = tone === 'v0' ? 'border-l-blue-500' : 'border-l-green-500'

  return (
    <div className="space-y-3">
      <div className={`inline-block rounded-lg px-4 py-2 text-sm font-bold ${label}`}>
        {promptNumber && <span className="mr-2 font-black">#{promptNumber}</span>}
        Paste this into {toolName}
      </div>
      <div className={`relative overflow-x-auto rounded-lg border border-gray-800 border-l-4 bg-gray-900/80 p-4 ${bar}`}>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 rounded-lg bg-accent/20 p-2 text-accent transition-colors hover:bg-accent/40"
          title="Copy prompt"
        >
          {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
        </button>
        <pre className="whitespace-pre-wrap break-words pr-12 font-mono text-sm leading-relaxed text-gray-200">
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
    <div className="rounded-lg border border-accent/30 bg-accent/5 p-5">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="font-bold text-white">{title}</p>
        {saved && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-400">
            <Check className="h-3.5 w-3.5" /> Saved
          </span>
        )}
      </div>
      <p className="mb-3 text-sm text-gray-300">{intro}</p>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-accent focus:ring-1 focus:ring-accent/50"
      />
      <p className="mt-2 text-xs text-gray-500">Saves automatically on this device, so it is still here if you refresh.</p>
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
    className="mb-12"
  >
    <div
      className="rounded-2xl p-8 sm:p-12"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 153, 255, 0.15)',
      }}
    >
      <div className="mb-8 border-b border-accent/20 pb-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-purple-glow">
            <Icon className="h-6 w-6 text-dark" />
          </div>
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-full border border-accent/50 bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                {badge ?? `Step ${number}`}
              </span>
              <span className="inline-block rounded-full border border-purple-glow/50 bg-purple-glow/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-glow">
                {time}
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-black text-white sm:text-3xl">{title}</h2>
            <p className="text-sm text-gray-300 sm:text-base">{intro}</p>
          </div>
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  </motion.div>
)

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
        <Navigation showCTA={false} hideMenu={true} />
        <div className="flex min-h-screen items-center justify-center bg-dark px-6 pt-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
            <div className="mb-8 text-center">
              <Lock className="mx-auto mb-4 h-16 w-16 text-accent" />
              <h1 className="mb-2 text-4xl font-black text-white">Build a Business Workshop</h1>
              <p className="text-gray-300">Enter your access password to start the workshop</p>
            </div>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-md transition-all focus:border-accent focus:ring-1 focus:ring-accent/50"
              />
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-accent via-accent-light to-purple-glow px-8 py-3 font-black text-dark transition-all hover:shadow-glow-lg"
              >
                Start the workshop
              </button>
            </form>
            <div className="mt-8 text-center">
              <Link href="/" className="text-sm text-accent transition-colors hover:text-accent-light">
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
      <div className="relative min-h-screen bg-dark px-6 pb-12 pt-32 text-gray-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
          <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-purple-glow/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              <Sparkles className="h-4 w-4" />
              60 minute AI workshop
            </div>
            <h1 className="mb-4 text-5xl font-black leading-tight text-white sm:text-7xl">
              Build a Business
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-purple-glow bg-clip-text text-transparent">
                with AI
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              In four steps you will plan a business, create its brand and build its website with ChatGPT and v0, then
              publish it online. Our example business is a mobile car wash, but these steps work for almost any business.
              No coding needed.
            </p>
          </motion.div>

          {/* What you're building */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-accent">
              What you are building
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-glow-lg">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <div className="ml-3 flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-400">
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
            <p className="mt-3 text-center text-sm text-gray-400">
              An example of a finished mobile car wash site. Yours will be unique to the business you create today.
            </p>
          </motion.div>

          {/* Before you start */}
          <Step
            badge="Before you begin"
            time="5 min"
            title="Set up your tools"
            intro="You need two free accounts. Sign in to both before step 1."
            icon={Lock}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3 rounded-lg border border-green-500/30 bg-green-500/10 p-6">
                <p className="font-bold text-white">1. ChatGPT</p>
                <p className="text-sm text-gray-300">
                  Your AI thinking partner. You will use it to plan the business, write the words, and create the logo
                  and hero image. A free account works to start.
                </p>
                <a
                  href="https://chat.openai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-green-500 px-6 py-2 font-bold text-dark transition-colors hover:bg-green-600"
                >
                  Open ChatGPT
                </a>
              </div>
              <div className="space-y-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-6">
                <p className="font-bold text-white">2. v0 by Vercel</p>
                <p className="text-sm text-gray-300">
                  The AI website builder. You describe the site you want and v0 builds it. Sign up free, the quickest
                  way is to continue with Google or GitHub.
                </p>
                <a
                  href="https://v0.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-blue-500 px-6 py-2 font-bold text-white transition-colors hover:bg-blue-600"
                >
                  Open v0
                </a>
              </div>
            </div>
          </Step>

          {/* Step 1: Plan the business */}
          <Step
            number={1}
            time="15 min"
            title="Plan the business"
            intro="Use ChatGPT to turn the idea, a mobile car wash that comes to the customer, into a real business plan: who it is for, what it sells, and its prices."
            icon={Lightbulb}
          >
            <p className="text-sm text-gray-300">
              First, give ChatGPT its role so it answers like a real business expert. Paste prompt 1, read the reply,
              then paste prompt 2 to create your business plan.
            </p>
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={1}
              prompt={`You are my business strategist for a hands-on workshop.

We are creating a mobile car wash business in New Zealand. A mobile car wash drives to the customer's home or workplace and washes their car on site, so they do not have to go anywhere.

Help me build it like a real, trustworthy local business that could launch today. Keep your answers clear, practical and easy to understand. Ask me nothing yet, just wait for my next message.`}
            />
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={2}
              prompt={`Create the business for me. Give:

1. Three business name options, with a one line reason for each
2. Who the ideal customer is
3. Three wash packages, each with a short name, what is included, and an example price in New Zealand dollars
4. A one line tagline
5. Three reasons a customer would choose us

Keep the prices realistic for a car wash, and remember this is an example business for a demo.`}
            />
            <WorkshopNote
              storageKey="workshop-business-notes"
              title="Save your business here"
              intro="Write your favourite name, your three packages and your prices. You will need them in the next steps."
              placeholder={`Business name:

Package 1 (name + price):
Package 2 (name + price):
Package 3 (name + price):

Tagline:`}
              rows={7}
            />
          </Step>

          {/* Step 2: Name and logo */}
          <Step
            number={2}
            time="10 min"
            title="Choose your name and create a logo"
            intro="Lock in the business name, then use ChatGPT to design a simple logo."
            icon={PenTool}
          >
            <p className="text-sm text-gray-300">
              Replace the words in [SQUARE BRACKETS] with your own choices before you paste.
            </p>
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={3}
              prompt={`We have chosen the business name [YOUR BUSINESS NAME] for our mobile car wash.

Suggest a simple, modern logo idea for it: what the icon could be, two or three brand colours, and the overall feeling. Keep it clean and easy to recognise.`}
            />
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={4}
              prompt={`Now create the logo as an image.

Design a clean, modern logo for a mobile car wash called [YOUR BUSINESS NAME]. Simple icon, the business name in a bold friendly font, a water or shine theme, two or three brand colours, on a plain background. Make it look professional and ready to use on a website.`}
            />
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-5 text-sm text-gray-300">
              Save the logo image and note your brand colours. If you do not love the first logo, ask ChatGPT to try a
              different style or colours.
            </div>
          </Step>

          {/* Step 3: Hero image */}
          <Step
            number={3}
            time="10 min"
            title="Create your hero image"
            intro="The hero image is the big photo at the top of the site. Create one that looks real and professional."
            icon={ImageIcon}
          >
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/workshop/carwash-hero.webp"
                alt="Example hero image: a detailer washing a glossy black car in a driveway with a mobile van"
                width={1672}
                height={941}
                className="h-auto w-full"
              />
            </div>
            <p className="text-sm text-gray-400">
              This is the kind of hero image you are aiming for: real, bright and premium. Use the prompt below to make
              your own, then pick your favourite version.
            </p>
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={5}
              prompt={`Create a realistic, premium hero image for a mobile car wash website.

Show a professional detailer in a branded uniform washing a glossy black car on a driveway, with a mobile work van in the background, water spray and bright natural sunlight. Make it look like a real New Zealand suburban street. High quality, sharp detail, wide landscape shape so it fits the top of a website.

Do not include any text, words, letters or logos in the image.`}
            />
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-5 text-sm text-gray-300">
              Download the image you like best. You will add it to your website in the next step.
            </div>
          </Step>

          {/* Step 4: Build the website */}
          <Step
            number={4}
            time="20 min"
            title="Build your website with v0"
            intro="Bring the business, name, logo and hero image together into one real web page."
            icon={LayoutTemplate}
          >
            <p className="text-sm text-gray-300">
              First ask ChatGPT to write the build instructions, then paste those into v0.
            </p>
            <ToolPrompt
              toolName="ChatGPT"
              tone="chatgpt"
              promptNumber={6}
              prompt={`Write a copy and paste prompt for the AI website builder v0.

It should tell v0 to build a modern, mobile-friendly one-page website for my mobile car wash business [YOUR BUSINESS NAME], tagline "[YOUR TAGLINE]", brand colours [YOUR BRAND COLOURS].

Include these sections, top to bottom:
1. A hero with a big headline, a short line underneath, and a "Book a wash" button
2. How it works in three simple steps
3. Our packages, showing my three packages and prices as cards
4. Why choose us, with three or four short reasons
5. A simple contact or booking form (name, suburb, car type, preferred time), with a note that bookings are not real
6. A footer with the business name

Write it as one clear block of instructions I can paste straight into v0.`}
            />
            <ToolPrompt
              toolName="v0"
              tone="v0"
              promptNumber={7}
              prompt={`Paste the full build prompt that ChatGPT just wrote into v0, then press send.

v0 will build your website. When it finishes, add your logo and hero image, then ask it to tidy anything you want to change.`}
            />
            <div className="space-y-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-6 text-sm text-gray-300">
              <p className="font-bold text-white">Refine it, one change at a time</p>
              <p>Try prompts like these in v0, sending one at a time:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Make the brand colours [YOUR BRAND COLOURS] across the whole site.</li>
                <li>Make the hero headline bigger and the Book a wash button stand out.</li>
                <li>Make sure it looks great on a phone.</li>
              </ul>
              <p className="text-gray-400">If a change makes it worse, tell v0 to undo the last change.</p>
            </div>
          </Step>

          {/* Publish */}
          <Step
            badge="Go live"
            time="5 min"
            title="Publish your website"
            intro="Put your site online with a real link anyone can open."
            icon={Rocket}
          >
            <p className="text-sm text-gray-300">Run this final check in v0, then publish.</p>
            <ToolPrompt
              toolName="v0"
              tone="v0"
              promptNumber={8}
              prompt={`Before I publish, do a final check on the whole site.

Give the browser tab a clear title using my business name, make sure every button and menu link works and scrolls to the right section, and confirm the page looks great on a phone. Do not change the words or the design.`}
            />
            <div className="space-y-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-6 text-sm text-gray-300">
              <p className="font-bold text-white">Put it online</p>
              <ol className="ml-4 list-decimal space-y-1.5">
                <li>In v0, find the Publish button near the top right.</li>
                <li>Click Publish. v0 puts your site online and gives you a live link that ends in .vercel.app.</li>
                <li>Open the link on your phone to check it works.</li>
                <li>Save your live link in your notes, then share it.</li>
              </ol>
            </div>
          </Step>

          {/* Optional: Web3Forms form */}
          <Step
            badge="Optional"
            time="If you finish early"
            title="Make your contact form email you"
            intro="Connect your form with Web3Forms so a real email lands in your inbox every time someone enquires. No API keys to install."
            icon={Mail}
          >
            <div className="space-y-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-6 text-sm text-gray-300">
              <p className="font-bold text-white">Set up Web3Forms first</p>
              <ol className="ml-4 list-decimal space-y-1.5">
                <li>
                  Go to{' '}
                  <a
                    href="https://web3forms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light"
                  >
                    web3forms.com
                  </a>{' '}
                  and click Create Access Key.
                </li>
                <li>Enter the email address where you want enquiries to land.</li>
                <li>Check that inbox and copy the access key they send you.</li>
              </ol>
            </div>
            <p className="text-sm text-gray-300">
              Then paste this into v0, with your key in place of{' '}
              <span className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-xs text-yellow-400">[YOUR ACCESS KEY]</span>.
            </p>
            <ToolPrompt
              toolName="v0"
              tone="v0"
              promptNumber={9}
              prompt={`Make my contact form send me an email when someone submits it, using Web3Forms.

Set the form to POST to https://api.web3forms.com/submit.

Add a hidden input named "access_key" with the value [YOUR ACCESS KEY].
Add a hidden input named "subject" with the value "New enquiry from my website".

Keep the visible fields (name, email, phone, message) and the existing design. When someone submits, show a loading state, then a success message that says "Thanks, we will be in touch."`}
            />
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-5 text-sm text-gray-300">
              Publish again so the change goes live, then fill in the form on your own site and check your email. Your
              first test submission may ask you to confirm your email with Web3Forms.
            </div>
          </Step>

          {/* Finish */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 mt-4"
          >
            <div
              className="rounded-2xl p-10 text-center sm:p-14"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.12) 0%, rgba(168, 85, 247, 0.12) 100%)',
                border: '2px solid rgba(0, 153, 255, 0.3)',
              }}
            >
              <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">You built a website</h2>
              <p className="mx-auto mb-6 max-w-2xl text-gray-300">
                An hour ago this business did not exist. Now it has a name, a logo, a hero image and a real one-page
                website. That is a genuine skill you can use again and again.
              </p>
              <p className="font-semibold text-accent-light">
                Share your live link and show off what you made.
              </p>
            </div>
          </motion.div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block rounded-xl bg-gradient-to-r from-accent to-accent-light px-10 py-4 font-black text-dark transition-all hover:scale-105 hover:shadow-glow-lg"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
