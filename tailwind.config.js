/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffebed',
          100: '#ffd1d6',
          200: '#ffa3ad',
          300: '#ff6d7a',
          400: '#ff3b4a',
          500: '#ff0a1f',
          600: '#e60016',
          700: '#bd0012',
          800: '#9b0000',
          900: '#800608',
          950: '#4c0000',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#2e2e2e',
          950: '#1a1a1a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};