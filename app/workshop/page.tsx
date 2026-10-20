import Link from 'next/link'
import {
  ArrowRight,
  Lightbulb,
  PenTool,
  Image as ImageIcon,
  LayoutTemplate,
  MessageSquare,
  Sparkles,
  Check,
} from 'lucide-react'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'
import CarWashLogo from '@/components/workshop/CarWashLogo'
import CarWashScene from '@/components/workshop/CarWashScene'
import CarWashSite from '@/components/workshop/CarWashSite'

/* Browser-window frame holding the DriveShine demo site */
function CarWashBrowser({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-3 flex-1 rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-400">
          driveshine.co.nz
        </div>
      </div>
      <div className="aspect-[16/10]">
        <CarWashSite />
      </div>
    </div>
  )
}

const steps = [
  {
    n: 1,
    name: 'Plan the business',
    tool: 'with ChatGPT',
    icon: Lightbulb,
    summary: 'Turn a simple idea, a mobile car wash, into a real business plan.',
    activities: [
      'Describe the business and who it is for',
      'Let ChatGPT suggest services and example prices',
      'Brainstorm a shortlist of business names',
      'Write a tagline and the key selling points',
    ],
  },
  {
    n: 2,
    name: 'Create the name and logo',
    tool: 'with AI',
    icon: PenTool,
    summary: 'Give the business an identity it can be recognised by.',
    activities: [
      'Choose the final business name',
      'Design a simple logo with AI',
      'Pick two or three brand colours',
      'Decide the overall look and feel',
    ],
  },
  {
    n: 3,
    name: 'Create a hero image',
    tool: 'with AI',
    icon: ImageIcon,
    summary: 'Make the one big image the website leads with.',
    activities: [
      'Write a clear image prompt',
      'Generate a hero image with AI',
      'Compare a few versions',
      'Choose the best one for the site',
    ],
  },
  {
    n: 4,
    name: 'Build the website',
    tool: 'with v0',
    icon: LayoutTemplate,
    summary: 'Bring the name, logo, image and words together into one page.',
    activities: [
      'Give v0 a clear brief for a one-page site',
      'Add the logo, hero image and branding',
      'Build a landing page that advertises the business',
      'Refine it with prompts and preview it live',
    ],
  },
]

const learnings = [
  'How to turn an idea into a real business concept with AI',
  'The basics of branding: names, logos and colour',
  'How to plan and write a landing page',
  'How to communicate with AI using clear prompts',
  'How to turn a brand into a working website prototype',
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
                <span>Plan</span>
                <ArrowRight className="h-7 w-7 text-gs-500 sm:h-9 sm:w-9" strokeWidth={2.5} />
                <span>Brand</span>
                <ArrowRight className="h-7 w-7 text-gs-500 sm:h-9 sm:w-9" strokeWidth={2.5} />
                <span className="bg-gradient-to-r from-gs-500 to-sky-400 bg-clip-text text-transparent">Build</span>
              </h1>
              <p className="mt-5 text-xl font-semibold text-slate-700 sm:text-2xl">
                Build a real business website with AI in one hour.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                Students use ChatGPT to plan a mobile car wash business, create its name, logo and hero image, then
                build a one-page website in v0 to advertise it. No coding experience needed, just a great idea.
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
                  href="#steps"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  See the four steps
                </a>
              </div>
            </div>

            {/* device mockup */}
            <div className="relative mx-auto w-full max-w-lg lg:mr-0">
              <CarWashBrowser />
              {/* phone */}
              <div className="absolute -bottom-8 -left-3 w-28 sm:-left-6 sm:w-36">
                <div className="relative overflow-hidden rounded-[1.7rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl">
                  <div className="absolute left-1/2 top-0 z-10 h-3.5 w-14 -translate-x-1/2 rounded-b-xl bg-slate-900" />
                  <div className="aspect-[9/19]">
                    <CarWashSite variant="phone" />
                  </div>
                </div>
              </div>
              <p className="mt-10 text-center text-xs text-slate-400 lg:text-right">
                Example build: DriveShine, a fictional mobile car wash.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== WHAT STUDENTS CREATE ===================== */}
        <section id="create" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gs-600">What students create</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A whole brand, built in front of you
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Starting from nothing but an idea, students use AI to build a business plan, a name, a logo, a hero image
              and a finished website. Here is the example we build together.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            {/* the brand + hero image */}
            <div className="relative overflow-hidden rounded-3xl border border-[#bfeef2] bg-gradient-to-br from-[#ecfbfc] to-[#d6f5f7] p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <CarWashLogo size="lg" />
                <span className="rounded-full border border-[#9fe3e8] bg-white/70 px-3 py-1 text-xs font-semibold text-[#0b7a86]">
                  The brand
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-slate-600">
                DriveShine, a mobile car wash that comes to you. Named, branded and pictured with AI.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl shadow-lg shadow-[#0b9aa8]/10">
                <CarWashScene className="w-full" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Business plan', 'Name', 'Logo', 'Hero image'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#9fe3e8] bg-white/70 px-3 py-1 text-xs font-semibold text-[#0b7a86]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* the finished site */}
            <div>
              <CarWashBrowser />
              <p className="mt-4 text-sm text-slate-500">
                The finished DriveShine landing page, built in v0 during the workshop. DriveShine is a fictional
                demonstration business created to show what is possible.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== THE FOUR STEPS ===================== */}
        <section id="steps" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wider text-gs-600">The workshop, step by step</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Four steps, one hour, a finished website
                </h2>
              </div>
              <div className="rounded-2xl border border-gs-100 bg-white px-6 py-4 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-gs-600">60</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">minutes total</p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gs-50">
                      <s.icon className="h-5 w-5 text-gs-600" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Step {s.n} · {s.tool}
                      </p>
                      <h3 className="text-xl font-extrabold text-slate-900">{s.name}</h3>
                    </div>
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
              <p className="mt-2 leading-relaxed text-slate-600">
                An AI thinking partner. Students use it to plan the business, come up with the name and tagline, write
                the words for the website, and generate the logo and hero image.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gs-50">
                <LayoutTemplate className="h-6 w-6 text-gs-600" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">v0 by Vercel</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
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
                  'radial-gradient(ellipse at 15% 20%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(56,224,230,0.3), transparent 55%)',
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Bring this workshop to your students
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gs-50">
                Parents, teachers, schools and organisers: get in touch to enquire about running the 60-minute Plan,
                Brand and Build workshop for your group.
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
