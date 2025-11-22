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
        primary: {
          DEFAULT: '#64D072',
          50: '#E8F9EA',
          100: '#D1F3D5',
          200: '#A3E7AB',
          300: '#75DB81',
          400: '#64D072',
          500: '#4BC05D',
          600: '#3DA04D',
          700: '#2F803D',
          800: '#21602E',
          900: '#13401E',
        },
        dark: {
          DEFAULT: '#0D3B1F',
          50: '#F2F3F7',
          100: '#E5F3EB',
          200: '#C5E4D3',
          300: '#A5D5BB',
          400: '#85C6A3',
          500: '#65B78B',
          600: '#4A9B6F',
          700: '#357A53',
          800: '#205937',
          900: '#0D3B1F',
          950: '#062614',
        },
        neutral: {
          DEFAULT: '#F2F3F7',
          50: '#FFFFFF',
          100: '#FAFBFC',
          200: '#F2F3F7',
          300: '#E5E7EC',
          400: '#D8DBE1',
          500: '#CBCFD6',
          600: '#BEC3CB',
          700: '#A8ADB8',
          800: '#8E94A3',
          900: '#74798E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
        'glass': '0 8px 32px 0 rgba(100, 208, 114, 0.15)',
        'glass-strong': '0 12px 48px 0 rgba(100, 208, 114, 0.25)',
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
