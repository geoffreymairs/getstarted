import ZapCan from './ZapCan'

/**
 * A compact, self-contained mockup of the ZAP Energy landing page a student
 * builds in the workshop. Placed inside the browser and phone frames.
 */
export default function ZapSite({ variant = 'desktop' }: { variant?: 'desktop' | 'phone' }) {
  const benefits = ['Zero sugar', 'All natural', 'Big energy']

  if (variant === 'phone') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0a1024] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 10%, rgba(255,206,0,0.18), transparent 55%), radial-gradient(ellipse at 20% 95%, rgba(10,132,216,0.35), transparent 55%)',
          }}
        />
        <div className="relative flex items-center justify-between px-4 pt-4">
          <span className="text-[11px] font-black tracking-widest">⚡ ZAP</span>
          <span className="rounded-full bg-[#ffce00] px-2.5 py-1 text-[8px] font-bold text-slate-900">GET ZAP</span>
        </div>
        <div className="relative flex flex-col items-center px-4 pt-3 text-center">
          <ZapCan className="h-28 w-auto drop-shadow-xl" />
          <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-[#ffce00]">Energy, unleashed</p>
          <h3 className="mt-1 text-xl font-black leading-none">UNLEASH YOUR SPARK</h3>
          <span className="mt-3 inline-block rounded-full bg-[#ffce00] px-4 py-1.5 text-[10px] font-bold text-slate-900">
            Shop now
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a1024] text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 82% 15%, rgba(255,206,0,0.16), transparent 55%), radial-gradient(ellipse at 8% 95%, rgba(10,132,216,0.32), transparent 55%)',
        }}
      />
      {/* top bar */}
      <div className="relative flex items-center justify-between px-6 py-3.5">
        <span className="text-sm font-black tracking-widest">⚡ ZAP</span>
        <div className="flex items-center gap-3 text-[10px] font-semibold text-slate-300">
          <span className="hidden sm:inline">Flavours</span>
          <span className="hidden sm:inline">Story</span>
          <span className="rounded-full bg-[#ffce00] px-3 py-1 text-[10px] font-bold text-slate-900">GET ZAP</span>
        </div>
      </div>
      {/* hero */}
      <div className="relative grid grid-cols-5 items-center gap-2 px-6 pb-5 pt-1">
        <div className="col-span-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffce00]">Energy, unleashed</p>
          <h3 className="mt-1.5 text-[26px] font-black leading-[0.95]">
            UNLEASH
            <br />
            YOUR SPARK
          </h3>
          <p className="mt-2 max-w-[18rem] text-[11px] leading-snug text-slate-300">
            Clean, natural energy in a bold blue can. Fuel your next big idea.
          </p>
          <span className="mt-3 inline-block rounded-full bg-[#ffce00] px-4 py-1.5 text-[11px] font-bold text-slate-900">
            Shop now →
          </span>
        </div>
        <div className="col-span-2 flex justify-center">
          <ZapCan className="h-32 w-auto drop-shadow-2xl" />
        </div>
      </div>
      {/* benefits */}
      <div className="relative flex flex-wrap gap-1.5 px-6 pb-5">
        {benefits.map((b) => (
          <span
            key={b}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-semibold text-slate-200"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
