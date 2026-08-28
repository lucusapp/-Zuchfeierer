/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rail: {
          950: '#0a0f1a',
          900: '#0f172a',
          800: '#16213a',
          700: '#1e2b4a',
          accent: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}
