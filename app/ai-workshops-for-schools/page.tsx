import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  GraduationCap,
  Lightbulb,
  Palette,
  Globe,
  Rocket,
  Clock,
  MapPin,
  Users,
  ShieldCheck,
  Presentation,
  Brain,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'

export const metadata: Metadata = {
  title: 'AI Workshops for Schools NZ | Student AI Training, Years 11 to 13 | GetStarted',
  description:
    'Hands-on AI workshops for New Zealand secondary schools. In one class, Years 11 to 13 students invent a business, build a real website and learn future-ready AI skills. On-site, no coding, teacher-friendly.',
  alternates: { canonical: '/ai-workshops-for-schools' },
  openGraph: {
    title: 'AI Workshops for Schools NZ | Student AI Training, Years 11 to 13',
    description:
      'Hands-on AI workshops for New Zealand secondary schools. Students invent a business and build a real website in a single class. On-site, no coding, teacher-friendly.',
    type: 'website',
  },
}

const steps = [
  {
    icon: Lightbulb,
    title: 'Invent a business',
    text: 'Students use AI to brainstorm and shape a business idea, from the name to the services and prices.',
  },
  {
    icon: Palette,
    title: 'Create a brand',
    text: 'They develop a name, a tagline, brand colours and a professional hero image for their business.',
  },
  {
    icon: Globe,
    title: 'Build a website',
    text: 'AI turns their plan into a real, responsive one-page website, with no coding at all.',
  },
  {
    icon: Rocket,
    title: 'Publish and share',
    text: 'Students put their website online and present what they made to the class.',
  },
]

const studentBenefits = [
  'Build real, future-ready AI skills that universities and employers value',
  'Learn to direct AI with clear instructions, a skill they will use for years',
  'Experience creativity, branding and entrepreneurship first-hand',
  'Leave the session with a finished website they built themselves',
  'Grow the confidence that they can make real things with technology',
]

const teacherBenefits = [
  'A turnkey session: we plan it, facilitate it and bring the know-how',
  'Links naturally to digital technologies, business studies and enterprise learning',
  'No coding knowledge needed to host, our trainer leads the whole session',
  'Fits a standard class period, and flexes to your timetable',
  'Classroom-appropriate and safe, built around fictional business examples',
  'A memorable, hands-on lesson that keeps a whole class engaged',
]

const skills = [
  { icon: Brain, title: 'Working with AI', text: 'Giving clear instructions and getting useful results from AI tools.' },
  { icon: Globe, title: 'Digital literacy', text: 'Understanding how modern websites and digital tools are made.' },
  { icon: Palette, title: 'Creativity and design', text: 'Making choices about brand, colour, words and layout.' },
  { icon: Rocket, title: 'Entrepreneurship', text: 'Turning an idea into a business concept with a real offer.' },
  { icon: MessageSquare, title: 'Communication', text: 'Presenting their work and explaining the decisions they made.' },
  { icon: Lightbulb, title: 'Problem solving', text: 'Working through a real project from a blank page to a finished result.' },
]

const format = [
  { icon: MapPin, text: 'Delivered on-site at your school.' },
  { icon: Clock, text: 'Runs in about 60 minutes, and we can expand or trim it to your class time.' },
  { icon: Users, text: 'Students work individually or in pairs.' },
  { icon: Presentation, text: 'Works best with a computer or tablet per student or pair, plus a projector or large screen.' },
  { icon: GraduationCap, text: 'Fully facilitated by a GetStarted trainer, no teacher prep required.' },
  { icon: ShieldCheck, text: 'All business details are fictional, so no real personal data is used.' },
]

const faqs = [
  {
    q: 'What year levels is the workshop for?',
    a: 'It is designed for Years 11 to 13 (roughly ages 15 to 18). We can adapt it for other levels on request.',
  },
  {
    q: 'How long does it take?',
    a: 'About 60 minutes. We can fit it to a single class period, or expand it if you have longer.',
  },
  {
    q: 'Do students need coding or prior experience?',
    a: 'No. There is no coding involved and no prior experience needed. The session is built to be approachable for any student.',
  },
  {
    q: 'What do students end up with?',
    a: 'Their own one-page website for a business they invented, which they can publish and share.',
  },
  {
    q: 'What does the school need to provide?',
    a: 'A room with a computer or tablet per student or pair, and a projector or large screen so everyone can follow along.',
  },
  {
    q: 'How much does it cost?',
    a: 'We tailor each session to your school and send a quote. There is no payment on the day, we invoice the school after the workshop is booked.',
  },
  {
    q: 'Is it safe and classroom-appropriate?',
    a: 'Yes. Students build a fictional demonstration business, and no real personal or customer data is used at any point.',
  },
  {
    q: 'How many students can take part?',
    a: 'We can run it for a single class, and we are happy to talk about larger groups or multiple sessions.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function AIWorkshopsForSchoolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <WebNav />
      <main className="bg-white pt-20 text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gs-50 via-gs-50/50 to-white" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 sm:pt-20 lg:grid-cols-2 lg:pb-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gs-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gs-700 shadow-sm">
                <GraduationCap className="h-4 w-4 text-gs-600" />
                For NZ secondary schools
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                AI workshops for{' '}
                <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">schools</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                Hands-on AI sessions for Years 11 to 13. In a single class, your students invent a business, design a
                brand and build a real, published website, with no coding and no prior experience needed.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gs-700"
                >
                  Enquire for your school
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  See how it works
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-300/40">
                <Image
                  src="/workshop/schools.jpg"
                  alt="Secondary school students working together on laptops during an AI workshop"
                  width={1600}
                  height={1067}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
            {[
              { k: 'Years 11 to 13', v: 'Ages 15 to 18' },
              { k: '~60 minutes', v: 'Fits a class period' },
              { k: 'On-site', v: 'We come to your school' },
              { k: 'A website each', v: 'Built and published' },
            ].map((s) => (
              <div key={s.k} className="text-center">
                <p className="text-lg font-extrabold text-slate-900 sm:text-xl">{s.k}</p>
                <p className="mt-1 text-sm text-slate-500">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-gs-600">What it is</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A real AI project, in one class
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            GetStarted runs practical, hands-on AI workshops for New Zealand secondary schools. We come to you and
            deliver a fully facilitated session where every student uses AI to take an idea all the way to a finished
            website. It is approachable for any student, engaging for a whole class, and easy for teachers to host.
          </p>
        </section>

        {/* How it works */}
        <section id="how" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-gs-600">What students do</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                From a blank page to a real website
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Students move through four clear steps, guided the whole way by our trainer.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gs-50">
                      <s.icon className="h-6 w-6 text-gs-600" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-black text-slate-300">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
              Every student finishes with their own website. Nothing is decided in advance, the name, brand and ideas
              all come from the students.
            </p>
          </div>
        </section>

        {/* For students / For teachers */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gs-50">
                  <Sparkles className="h-6 w-6 text-gs-600" />
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">For students</h2>
              </div>
              <p className="mb-6 text-slate-600">Years 11 to 13 get a real, hands-on experience of building with AI.</p>
              <ul className="space-y-3">
                {studentBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gs-600" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gs-50">
                  <GraduationCap className="h-6 w-6 text-gs-600" />
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">For teachers</h2>
              </div>
              <p className="mb-6 text-slate-600">A session that is easy to host and ready to run in your classroom.</p>
              <ul className="space-y-3">
                {teacherBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gs-600" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-gs-600">What students build</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Skills they keep long after the class
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gs-50">
                    <s.icon className="h-6 w-6 text-gs-600" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Format */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gs-600">How we run it</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Simple to host, easy to fit in
              </h2>
              <ul className="mt-8 space-y-4">
                {format.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gs-50">
                      <f.icon className="h-5 w-5 text-gs-600" strokeWidth={2} />
                    </span>
                    <span className="pt-1.5 text-slate-700">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-300/40">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <div className="ml-3 flex-1 rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-400">
                  a-student-website.vercel.app
                </div>
              </div>
              <Image
                src="/workshop/washmate-example.webp"
                alt="Example of a finished website a student builds during the AI workshop"
                width={1463}
                height={782}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-gs-600">Questions</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-gs-600 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gs-600 to-indigo-500 px-8 py-14 text-center sm:px-14 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  'radial-gradient(ellipse at 15% 20%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(99,102,241,0.35), transparent 55%)',
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Bring AI into your classroom</h2>
              <p className="mt-4 text-lg leading-relaxed text-gs-50">
                Give your Years 11 to 13 students a hands-on AI experience they will remember. Get in touch and we will
                tailor a session for your school.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-gs-700 transition-colors hover:bg-gs-50"
                >
                  Enquire for your school
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/ai-workshops"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  See all AI workshop options
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WebFooter />
    </>
  )
}
