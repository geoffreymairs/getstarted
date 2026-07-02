import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0e27',
        'dark-light': '#1a1f3a',
        'dark-lighter': '#242d4a',
        'dark-900': '#0a0a0f',
        'dark-800': '#12121a',
        'dark-700': '#1e1e2e',
        'dark-600': '#2a2a3c',
        'accent': '#0099ff',
        'accent-light': '#00bfff',
        'accent-dark': '#0077cc',
        'purple': '#8b5cf6',
        'purple-glow': '#a855f7',
        'brand': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 8px rgba(0, 153, 255, 0.4)',
        'glow': '0 0 16px rgba(0, 153, 255, 0.5)',
        'glow-lg': '0 0 32px rgba(0, 153, 255, 0.6)',
        'glow-purple': '0 0 24px rgba(168, 85, 247, 0.5)',
        'glow-neon': '0 0 20px rgba(0, 191, 255, 0.8)',
        'glow-brand': '0 0 40px rgba(14, 165, 233, 0.25)',
        'inner-glow-sm': 'inset 0 1px 3px rgba(255, 255, 255, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 2px 4px rgba(255, 255, 255, 0.15), inset 0 -2px 3px rgba(0, 0, 0, 0.3)',
        'inner-glow-lg': 'inset 0 3px 6px rgba(255, 255, 255, 0.2), inset 0 -3px 4px rgba(0, 0, 0, 0.4)',
        'soft-shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
        'soft-shadow': '0 4px 16px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.15)',
        'soft-shadow-lg': '0 6px 24px rgba(0, 0, 0, 0.25), 0 12px 32px rgba(0, 0, 0, 0.2)',
        'premium-glow': '0 0 20px rgba(0, 153, 255, 0.3), inset 0 1px 3px rgba(255, 255, 255, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in',
        'slideUp': 'slideUp 0.6s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'shine': 'shine 2s ease-in-out infinite',
        'lift': 'lift 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shine: {
          '0%': { backgroundPosition: '-200%' },
          '100%': { backgroundPosition: '200%' },
        },
        lift: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
