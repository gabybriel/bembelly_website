/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e9e7fa',  // bleu très clair
          100: '#c2bcf2',
          200: '#9990ea',
          300: '#7063e1',
          400: '#4f41d6',
          500: '#3421B0', // bleu principal
          600: '#2d1e9d',
          700: '#251a87',
          800: '#1d156f',
          900: '#140e51',
          950: '#0d0938',
        },
        secondary: {
          50: '#ffe5e8',  // rouge très clair
          100: '#fbbec4',
          200: '#f3929b',
          300: '#eb6672',
          400: '#e63e4e',
          500: '#ff0a1f', // rouge principal
          600: '#e60016',
          700: '#595959',
          800: '#8a000e',
          900: '#2D2D2D',
          950: '#434343',
        },
        white: '#f5f5f5', // explicitement défini si tu veux l’utiliser comme `text-white`
      },
      fontFamily: {
        serif: ['Poppins', 'Arial', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
