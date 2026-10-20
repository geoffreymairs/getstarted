/**
 * Original, hand-drawn SVG hero scene for the fictional DriveShine mobile car
 * wash: a freshly washed car with suds, droplets and a shine spark on a watery
 * gradient. Stands in for the "hero image" a student generates in the workshop.
 * Not stock imagery.
 */
export default function CarWashScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      role="img"
      aria-label="Illustration of a freshly washed car with suds and a shine spark"
    >
      <defs>
        <linearGradient id="csSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dff7fb" />
          <stop offset="100%" stopColor="#8fe3ea" />
        </linearGradient>
        <linearGradient id="csBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0565b" />
          <stop offset="100%" stopColor="#c62f36" />
        </linearGradient>
        <radialGradient id="csGlow" cx="50%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* background */}
      <rect x="0" y="0" width="400" height="260" rx="20" fill="url(#csSky)" />
      <rect x="0" y="0" width="400" height="260" rx="20" fill="url(#csGlow)" />
      {/* soft bokeh suds in the air */}
      <circle cx="54" cy="52" r="16" fill="#ffffff" opacity="0.35" />
      <circle cx="350" cy="44" r="22" fill="#ffffff" opacity="0.3" />
      <circle cx="312" cy="86" r="9" fill="#ffffff" opacity="0.4" />
      <circle cx="78" cy="96" r="7" fill="#ffffff" opacity="0.4" />

      {/* ground reflection */}
      <ellipse cx="212" cy="222" rx="168" ry="14" fill="#0b9aa8" opacity="0.18" />

      {/* car body */}
      <path
        d="M56 186 C56 164 62 156 82 154 L150 152 C156 130 174 116 200 116 L248 116 C276 118 290 132 298 154 L360 158 C374 160 380 168 380 186 Z"
        fill="url(#csBody)"
      />
      {/* lower shade */}
      <path
        d="M56 186 L380 186 L380 178 C300 184 110 184 56 178 Z"
        fill="#9e242a"
        opacity="0.5"
      />
      {/* body sheen */}
      <path
        d="M92 156 C150 150 250 150 300 156"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* windows */}
      <path d="M160 150 L170 128 C174 122 180 122 186 122 L214 122 L214 150 Z" fill="#17323d" />
      <path d="M222 150 L222 122 L248 122 C262 124 270 134 276 150 Z" fill="#17323d" />
      <rect x="216" y="122" width="4" height="28" fill="#c62f36" />
      {/* door line + handle */}
      <path d="M214 158 L214 182" stroke="#9e242a" strokeWidth="2" opacity="0.6" />
      <rect x="226" y="164" width="16" height="4" rx="2" fill="#ffffff" opacity="0.7" />

      {/* wheels */}
      {[124, 300].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="188" r="30" fill="#1b1f27" />
          <circle cx={cx} cy="188" r="14" fill="#cbd5e1" />
          <circle cx={cx} cy="188" r="5" fill="#64748b" />
        </g>
      ))}
      {/* wheel arches */}
      <path d="M94 188 A30 30 0 0 1 154 188" fill="none" stroke="#9e242a" strokeWidth="3" opacity="0.5" />
      <path d="M270 188 A30 30 0 0 1 330 188" fill="none" stroke="#9e242a" strokeWidth="3" opacity="0.5" />

      {/* suds on the bonnet */}
      <circle cx="92" cy="150" r="8" fill="#ffffff" opacity="0.85" />
      <circle cx="104" cy="144" r="6" fill="#ffffff" opacity="0.8" />
      <circle cx="82" cy="146" r="5" fill="#ffffff" opacity="0.75" />
      <circle cx="98" cy="139" r="4" fill="#ffffff" opacity="0.7" />

      {/* running droplets */}
      <path d="M150 196 q4 8 0 12 q-4 -4 0 -12 Z" fill="#38e0e6" opacity="0.8" />
      <path d="M332 182 q4 8 0 12 q-4 -4 0 -12 Z" fill="#38e0e6" opacity="0.8" />

      {/* shine spark on the roof */}
      <path
        d="M214 92 L218 104 L230 108 L218 112 L214 124 L210 112 L198 108 L210 104 Z"
        fill="#ffffff"
      />
      <circle cx="238" cy="98" r="3" fill="#ffffff" />
      <circle cx="196" cy="118" r="2.5" fill="#ffffff" />
    </svg>
  )
}
