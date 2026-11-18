/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        racingGreen: {
          DEFAULT: '#0B3D2E',
          dark: '#07241B',
          light: '#135843',
          surface: '#12291F',
        },
        matteBlack: {
          DEFAULT: '#101110',
          elevated: '#151715',
          card: '#161917',
        },
        champagneGold: {
          DEFAULT: '#D6C29A',
          hover: '#E5D6B6',
          dim: '#A89774',
          subtle: 'rgba(214, 194, 154, 0.15)',
        },
        warmIvory: {
          DEFAULT: '#F3F0E8',
          muted: '#D8D4C9',
        },
        mutedGrey: {
          DEFAULT: '#999B96',
          dark: '#686B65',
          light: '#B5B7B2',
        },
      },
      fontFamily: {
        sans: ['"Cinzel Decorative"', '"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Italiana"', '"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        editorial: ['"Syne"', '"Cabinet Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'noise-pattern': "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"noiseFilter\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23noiseFilter)\" opacity=\"0.03\"/></svg>')",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
