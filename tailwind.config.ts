import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand guidelines: Primary #25D366 · Secondary #FFFFFF · Tertiary #011A05
        primary: {
          DEFAULT: '#25D366',
          50: '#E8FBF0',
          100: '#D4F7E3',
          200: '#A9EFCB',
          300: '#25D366',
          400: '#25D366',
          500: '#25D366',
          600: '#1AAD52',
          700: '#158F44',
          800: '#0F6B33',
          900: '#011A05',
        },
        brand: {
          primary: '#25D366',
          secondary: '#FFFFFF',
          tertiary: '#011A05',
        },
        dark: {
          DEFAULT: '#011A05',
          50: '#FFFFFF',
          100: '#E8FBF0',
          200: '#D4F7E3',
          300: '#8A9A8E',
          400: '#6B7A6F',
          500: '#5A6B5E',
          600: '#4A5A4E',
          700: '#2F3D33',
          800: '#1A2A1E',
          900: '#011A05',
          950: '#011A05',
        },
        neutral: {
          DEFAULT: '#E8FBF0',
          50: '#FFFFFF',
          100: '#FAFBFC',
          200: '#FFFFFF',
          300: '#E8FBF0',
          400: '#D8DBE1',
          500: '#CBCFD6',
          600: '#BEC3CB',
          700: '#8A9A8E',
          800: '#6B7A6F',
          900: '#011A05',
        },
        alert: {
          DEFAULT: '#F24343',
          tint: '#FEF0F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 40px rgba(0, 0, 0, 0.16)',
        'glass': '0 8px 32px 0 rgba(37, 211, 102, 0.15)',
        'glass-strong': '0 12px 48px 0 rgba(37, 211, 102, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'fade-in-down': 'fade-in-down 0.4s ease-out',
        'slide-in-left': 'slide-in-left 0.4s ease-out',
        'slide-in-right': 'slide-in-right 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
