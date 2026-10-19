import Link from 'next/link'
import {
  ArrowRight,
  Lightbulb,
  ClipboardList,
  Hammer,
  Rocket,
  MessageSquare,
  LayoutTemplate,
  Sparkles,
  Check,
} from 'lucide-react'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'
import ZapCan from '@/components/workshop/ZapCan'
import ZapSite from '@/components/workshop/ZapSite'

/* Browser-window frame holding the ZAP Energy demo site */
function ZapBrowser({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-3 flex-1 rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-400">
          zapenergy.store
        </div>
      </div>
      <div className="aspect-[16/10]">
        <ZapSite />
      </div>
    </div>
  )
}

const stages = [
  {
    n: 1,
    name: 'Product',
    time: '0 – 15 min',
    icon: Lightbulb,
    summary: 'Invent a product with ChatGPT.',
    activities: [
      'Choose a product name',
      'Identify the target customer',
      'Write a tagline and key selling points',
      'Generate an AI product image',
    ],
  },
  {
    n: 2,
    name: 'Plan',
    time: '15 – 25 min',
    icon: ClipboardList,
    summary: 'Plan the website before building it.',
    activities: [
      'Write the headline and supporting copy',
      'Decide the website sections',
      'Plan the layout and visual style',
      'Define the key benefits and call-to-action',
    ],
  },
  {
    n: 3,
    name: 'Build',
    time: '25 – 50 min',
    icon: Hammer,
    summary: 'Turn the plan into a website with v0.',
    activities: [
      'Give v0 a clear website brief',
      'Build a visually engaging landing page',
      'Add the product image and branding',
      'Refine it with AI prompts and preview',
    ],
  },
  {
    n: 4,
    name: 'Launch & Showcase',
    time: '50 – 60 min',
    icon: Rocket,
    summary: 'Present what you created.',
    activities: [
      'Present your product idea',
      'Show the class your website',
      'Explain how you used AI',
      'Share what you learned',
    ],
  },
]

const learnings = [
  'Creative problem-solving',
  'How to turn an idea into a product with AI',
  'The basics of website planning and design',
  'How to communicate with AI using prompts',
  'How to turn an idea into a working website prototype',
]

export default function WorkshopPage() {
  return (
    <>
      <WebNav />
      <main className="bg-white pt-20">
        {/* ============================= HERO ============================= */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gs-50 via-gs-50/60 to-white" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-14 sm:pt-20 lg:grid-cols-2 lg:pb-28">
            {/* copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                <Sparkles className="h-4 w-4 text-gs-600" />
                AI workshop for students · 60 minutes
              </div>
              <h1 className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                <span>Product</span>
                <ArrowRight className="h-7 w-7 text-gs-500 sm:h-9 sm:w-9" strokeWidth={2.5} />
                <span>Plan</span>
                <ArrowRight className="h-7 w-7 text-gs-500 sm:h-9 sm:w-9" strokeWidth={2.5} />
                <span className="bg-gradient-to-r from-gs-500 to-sky-400 bg-clip-text text-transparent">Build</span>
              </h1>
              <p className="mt-5 text-xl font-semibold text-slate-700 sm:text-2xl">
                Create a website with AI in just 60 minutes.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                A hands-on workshop where students use AI to invent a product, design a brand, plan a website and build
                their own landing page with v0. No coding experience needed, just a great idea.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gs-700"
                >
                  Enquire about this workshop
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  See the 60-minute journey
                </a>
              </div>
            </div>

            {/* device mockup */}
            <div className="relative mx-auto w-full max-w-lg lg:mr-0">
              <ZapBrowser />
              {/* phone */}
              <div className="absolute -bottom-8 -left-3 w-28 sm:-left-6 sm:w-36">
                <div className="relative overflow-hidden rounded-[1.7rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl">
                  <div className="absolute left-1/2 top-0 z-10 h-3.5 w-14 -translate-x-1/2 rounded-b-xl bg-slate-900" />
                  <div className="aspect-[9/19]">
                    <ZapSite variant="phone" />
                  </div>
                </div>
              </div>
              <p className="mt-10 text-center text-xs text-slate-400 lg:text-right">
                Example build: ZAP Energy, a fictional demonstration product.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== WHAT STUDENTS CREATE ===================== */}
        <section id="create" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gs-600">What students create</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              From a blank page to a real brand
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every student leaves with a product concept and a landing page they built themselves. Here is the example
              we build together, step by step.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            {/* the can + brand */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0a1024] p-8 sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    'radial-gradient(ellipse at 75% 20%, rgba(255,206,0,0.22), transparent 55%), radial-gradient(ellipse at 15% 90%, rgba(10,132,216,0.35), transparent 55%)',
                }}
              />
              <div className="relative flex items-center gap-6">
                <ZapCan className="h-56 w-auto flex-shrink-0 drop-shadow-2xl sm:h-64" />
                <div className="text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffce00]">The product</p>
                  <h3 className="mt-2 text-3xl font-black leading-none">ZAP ENERGY</h3>
                  <p className="mt-3 text-sm text-slate-300">
                    A bold blue energy drink with a yellow lightning bolt. Invented, named and branded with AI, then
                    turned into a website.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Name', 'Tagline', 'Product image', 'Brand colours'].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* the finished site */}
            <div>
              <ZapBrowser />
              <p className="mt-4 text-sm text-slate-500">
                The finished ZAP Energy landing page, built live in v0 during the workshop. ZAP Energy is a fictional
                demonstration product created to show what is possible.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== THE 60-MINUTE JOURNEY ===================== */}
        <section id="journey" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wider text-gs-600">The 60-minute journey</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Four stages, one hour, a finished site
                </h2>
              </div>
              <div className="rounded-2xl border border-gs-100 bg-white px-6 py-4 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-gs-600">60</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">minutes total</p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {stages.map((s) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gs-50">
                        <s.icon className="h-5 w-5 text-gs-600" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Stage {s.n}</p>
                        <h3 className="text-xl font-extrabold text-slate-900">{s.name}</h3>
                      </div>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-gs-600 px-3 py-1 text-xs font-bold text-white">
                      {s.time}
                    </span>
                  </div>
                  <p className="mt-4 font-semibold text-slate-700">{s.summary}</p>
                  <ul className="mt-3 space-y-2">
                    {s.activities.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gs-600" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Every student builds and previews a website during the session. Publishing it live afterwards is an easy
              next step we point them to.
            </p>
          </div>
        </section>

        {/* ===================== TOOLS ===================== */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gs-600">Tools students will use</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Two friendly AI tools, no coding
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gs-50">
                <MessageSquare className="h-6 w-6 text-gs-600" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">ChatGPT</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                An AI brainstorming partner. Students use it to invent their product, come up with a name and tagline,
                write all the words for their website, and even generate a product image.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gs-50">
                <LayoutTemplate className="h-6 w-6 text-gs-600" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">v0 by Vercel</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                An AI website builder. Students describe the site they want in plain English and v0 builds a real,
                editable landing page they can preview on the spot, then improve with more prompts.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== WHAT THEY LEARN ===================== */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-gs-600">What students will learn</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Real, practical skills they keep
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {learnings.map((l) => (
                <div
                  key={l}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gs-50">
                    <Check className="h-4 w-4 text-gs-600" />
                  </span>
                  <p className="font-semibold text-slate-800">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FINAL CTA ===================== */}
        <section id="enquire" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gs-600 to-sky-500 px-8 py-14 text-center sm:px-14 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  'radial-gradient(ellipse at 15% 20%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(255,206,0,0.28), transparent 55%)',
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Bring this workshop to your students
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gs-50">
                Parents, teachers, schools and organisers: get in touch to enquire about running the 60-minute Product →
                Plan → Build workshop for your group.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-gs-700 transition-colors hover:bg-gs-50"
                >
                  Enquire about the workshop
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-gs-50/80">
                Tell us about your group and we will be in touch. The workshop runs for 60 minutes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <WebFooter />
    </>
  )
}
