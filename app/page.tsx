import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, MapPin, Headphones, ShieldCheck, Sparkles, Search } from 'lucide-react'
import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'
import DomainSearch from '@/components/site/DomainSearch'
import { WEB_PRODUCTS, WEB_URL } from '@/lib/webLinks'

export default function Home() {
  return (
    <main className="bg-white">
      <WebNav />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden pt-20 border-b border-slate-200">
        {/* soft background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gs-50 via-gs-50/70 to-gs-50/40" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[480px] w-[720px] rounded-full bg-gs-100/50 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-20 pb-20 sm:pt-28 sm:pb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gs-500" />
            New Zealand&apos;s home for getting online
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Everything you need
            <br />
            to get your business{' '}
            <span className="bg-gradient-to-r from-gs-500 to-indigo-500 bg-clip-text text-transparent">online</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Domains, hosting, websites and business email, plus the expert help to put it all together. Start with the
            perfect domain name.
          </p>

          {/* Domain search */}
          <div className="mt-10 flex flex-col items-center">
            <DomainSearch />
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500">
              {['.co.nz', '.nz', '.com'].map((tld) => (
                <span key={tld} className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">
                  {tld}
                </span>
              ))}
              <span>and more</span>
            </div>
          </div>

          {/* trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            {['Accredited NZ domain registrar', 'Fast, reliable hosting', 'Local support team'].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Check className="w-4 h-4 text-gs-600" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ PRODUCTS ============================ */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Everything to get online, in one place
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From your first domain to a full professional website, the building blocks for your online presence.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WEB_PRODUCTS.map((p) => (
            <div key={p.label} className="rounded-2xl border border-slate-200 bg-white p-7">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gs-50 text-gs-600">
                <p.icon className="w-5 h-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{p.label}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gs-600 px-6 py-3 text-sm font-semibold text-white hover:bg-gs-700 transition-colors"
          >
            Explore all Web services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ============================ WHY ============================ */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Why businesses choose GetStarted
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A local New Zealand team that makes getting online simple, reliable and genuinely supported.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: MapPin,
                title: 'Proudly New Zealand',
                desc: 'A local, Auckland-based team that understands NZ businesses.',
              },
              {
                icon: ShieldCheck,
                title: 'Accredited & trusted',
                desc: 'An accredited domain name and web hosting provider.',
              },
              {
                icon: Headphones,
                title: 'Real human support',
                desc: 'A dedicated, experienced support team that actually helps.',
              },
              {
                icon: Sparkles,
                title: 'Almost 30 years’ experience',
                desc: 'Building websites and digital solutions since 2002.',
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gs-50 text-gs-600">
                  <f.icon className="w-5 h-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-base font-bold text-slate-900">{f.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ AI (secondary) ============================ */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#0a1024] shadow-2xl shadow-slate-900/20 min-h-[440px] sm:min-h-[420px] flex">
          {/* Laptop + glow visual */}
          <Image
            src="/ai-cta.webp"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="object-cover object-right pointer-events-none select-none"
          />
          {/* Legibility gradient over the text side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1024] via-[#0a1024]/90 to-[#0a1024]/10 sm:via-[#0a1024]/80 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1024]/80 via-transparent to-transparent sm:hidden" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-8 py-12 sm:px-14 sm:py-16 max-w-xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-wide text-sky-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              GetStarted AI
            </div>
            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              Ready to go further
              <br />
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                with AI?
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base sm:text-lg text-slate-300 leading-relaxed">
              Beyond getting online, we help New Zealand businesses use AI to save time, cut costs and automate
              repetitive work, through practical consulting and hands-on workshops.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/ai"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.03] shadow-[0_0_34px_rgba(56,189,248,0.45)]"
              >
                Explore GetStarted AI
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ai-workshops"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                AI Workshops
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ENTER GETSTARTED WEB ==================== */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-gs-50/60 to-white">
        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Get your business online
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Everything starts with a domain. Find your domain, choose the services you need, and build your online
            presence with GetStarted Web.
          </p>
          <div className="mt-8">
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gs-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-gs-700 transition-colors"
            >
              Explore GetStarted Web
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Browser-window mockup of the GetStarted Web storefront */}
          <a
            href={WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto mt-14 block max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 overflow-hidden transition-transform hover:-translate-y-1"
          >
            {/* chrome */}
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <div className="ml-3 flex-1 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-400 text-center">
                web.getstarted.co.nz
              </div>
            </div>
            {/* storefront preview */}
            <div className="px-6 py-10 sm:px-10 bg-gradient-to-b from-gs-50/50 to-white text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-gs-600">GetStarted Web</p>
              <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Get the domain you always wanted
              </p>
              <div className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
                <div className="flex flex-1 items-center gap-2 px-3 text-slate-400">
                  <Search className="w-4 h-4" />
                  <span className="text-sm">yourbusiness.co.nz</span>
                </div>
                <span className="rounded-full bg-gs-600 px-4 py-2 text-xs font-semibold text-white">Search</span>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['Domains', 'Hosting', 'Websites', 'Email', 'Security', 'SEO'].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      </section>

      <WebFooter />
    </main>
  )
}
