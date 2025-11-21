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
          DEFAULT: '#010B03',
          50: '#F2F3F7',
          100: '#E5E7EF',
          200: '#CBCFDF',
          300: '#B1B7CF',
          400: '#979FBF',
          500: '#7D87AF',
          600: '#636F9F',
          700: '#4D5780',
          800: '#373F60',
          900: '#212740',
          950: '#010B03',
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
      },
    },
  },
  plugins: [],
}
export default config
