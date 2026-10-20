/**
 * Fictional DriveShine mobile car wash logo, drawn as SVG + live text so it
 * stays crisp at any size and is not stock imagery. The mark is a water drop
 * with a shine spark; the wordmark uses the site's Inter font.
 */
const SIZES = {
  sm: { mark: 'h-6 w-6', text: 'text-base' },
  md: { mark: 'h-8 w-8', text: 'text-xl' },
  lg: { mark: 'h-11 w-11', text: 'text-3xl' },
} as const

export default function CarWashLogo({
  size = 'md',
  onDark = false,
  className = '',
}: {
  size?: keyof typeof SIZES
  onDark?: boolean
  className?: string
}) {
  const s = SIZES[size]
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 48" className={s.mark} role="img" aria-label="DriveShine logo">
        <defs>
          <linearGradient id="dsDrop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38e0e6" />
            <stop offset="100%" stopColor="#0b9aa8" />
          </linearGradient>
        </defs>
        <path
          d="M24 3 C24 3 39 21 39 31 A15 15 0 1 1 9 31 C9 21 24 3 24 3 Z"
          fill="url(#dsDrop)"
        />
        {/* soft highlight */}
        <path
          d="M18 24 C14 28 13 33 15 37"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* shine spark */}
        <path
          d="M29 20 L30.4 24.1 L34.5 25.5 L30.4 26.9 L29 31 L27.6 26.9 L23.5 25.5 L27.6 24.1 Z"
          fill="#ffffff"
          opacity="0.95"
        />
      </svg>
      <span
        className={`font-extrabold tracking-tight ${s.text} ${onDark ? 'text-white' : 'text-slate-900'}`}
      >
        Drive<span className="text-[#0b9aa8]">Shine</span>
      </span>
    </span>
  )
}
