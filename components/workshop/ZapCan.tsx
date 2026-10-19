/** Fictional ZAP Energy can, drawn as an SVG so it stays crisp and is not stock imagery. */
export default function ZapCan({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 344" className={className} role="img" aria-label="ZAP Energy drink can (fictional demonstration product)">
      <defs>
        <linearGradient id="zapBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2bb4f5" />
          <stop offset="45%" stopColor="#0a84d8" />
          <stop offset="100%" stopColor="#0b357f" />
        </linearGradient>
        <linearGradient id="zapBolt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe24d" />
          <stop offset="100%" stopColor="#ffc400" />
        </linearGradient>
      </defs>
      {/* ground shadow */}
      <ellipse cx="80" cy="332" rx="50" ry="8" fill="#0f172a" opacity="0.12" />
      {/* lid */}
      <rect x="46" y="12" width="68" height="16" rx="5" fill="#cbd5e1" />
      <ellipse cx="80" cy="24" rx="40" ry="7" fill="#e8eef5" />
      {/* body */}
      <rect x="34" y="24" width="92" height="296" rx="16" fill="url(#zapBody)" />
      {/* sheen */}
      <rect x="44" y="34" width="12" height="276" rx="6" fill="#ffffff" opacity="0.18" />
      <rect x="112" y="40" width="6" height="262" rx="3" fill="#0b357f" opacity="0.35" />
      {/* lightning bolt */}
      <polygon
        points="98,66 60,180 84,180 70,270 112,140 90,140 104,66"
        fill="url(#zapBolt)"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* wordmark */}
      <text
        x="80"
        y="308"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="20"
        letterSpacing="3"
        fill="#ffffff"
      >
        ZAP
      </text>
    </svg>
  )
}
