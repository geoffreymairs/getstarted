import CarWashLogo from './CarWashLogo'
import CarWashScene from './CarWashScene'

/**
 * Compact mockup of the DriveShine landing page a student builds in the
 * workshop. Shown inside the browser and phone frames. Light, clean and local,
 * matching a friendly mobile car wash brand. DriveShine is a fictional
 * demonstration business.
 */
export default function CarWashSite({ variant = 'desktop' }: { variant?: 'desktop' | 'phone' }) {
  const packages = [
    { name: 'Express', price: '$39' },
    { name: 'Signature', price: '$69' },
    { name: 'Showroom', price: '$99' },
  ]

  if (variant === 'phone') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-white text-slate-900">
        <div className="flex items-center justify-between px-3 pt-3">
          <CarWashLogo size="sm" />
          <span className="rounded-full bg-[#0b9aa8] px-2.5 py-1 text-[8px] font-bold text-white">Book</span>
        </div>
        <div className="px-3 pt-3 text-center">
          <h3 className="text-[15px] font-black leading-tight text-slate-900">
            A spotless car, without leaving home.
          </h3>
          <span className="mt-2 inline-block rounded-full bg-[#0b9aa8] px-3 py-1 text-[9px] font-bold text-white">
            Book a wash
          </span>
        </div>
        <div className="mt-2 px-3">
          <CarWashScene className="w-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-white text-slate-900">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-3">
        <CarWashLogo size="sm" />
        <div className="flex items-center gap-4 text-[10px] font-semibold text-slate-500">
          <span className="hidden sm:inline">Packages</span>
          <span className="hidden sm:inline">How it works</span>
          <span className="rounded-full bg-[#0b9aa8] px-3 py-1 text-[10px] font-bold text-white">Book a wash</span>
        </div>
      </div>

      {/* hero */}
      <div className="grid grid-cols-5 items-center gap-3 px-6 pb-4 pt-4">
        <div className="col-span-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0b9aa8]">We come to you</p>
          <h3 className="mt-1.5 text-[22px] font-black leading-[0.98] text-slate-900">
            A spotless car,
            <br />
            without leaving home.
          </h3>
          <p className="mt-2 max-w-[15rem] text-[10px] leading-snug text-slate-500">
            Book online and our mobile team arrives at your door with everything to make your car shine.
          </p>
          <span className="mt-3 inline-block rounded-full bg-[#0b9aa8] px-4 py-1.5 text-[10px] font-bold text-white">
            Book a wash
          </span>
        </div>
        <div className="col-span-2">
          <CarWashScene className="w-full" />
        </div>
      </div>

      {/* packages */}
      <div className="grid grid-cols-3 gap-2 px-6 pb-5">
        {packages.map((p, i) => (
          <div
            key={p.name}
            className={`rounded-xl border p-2.5 text-center ${
              i === 1 ? 'border-[#0b9aa8] bg-[#ecfbfc]' : 'border-slate-200 bg-white'
            }`}
          >
            <p className="text-[9px] font-bold uppercase tracking-wide text-slate-500">{p.name}</p>
            <p className="mt-0.5 text-lg font-black text-slate-900">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
