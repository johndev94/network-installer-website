/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102033',
        muted: '#5d6d7d',
        line: '#dce7ef',
        brand: {
          50: '#ecfdf8',
          100: '#d1faef',
          500: '#0f9f82',
          600: '#087d6c',
          700: '#066457',
        },
        blue: {
          50: '#eef7ff',
          600: '#1769c2',
          700: '#1456a0',
        },
      },
      boxShadow: {
        soft: '0 18px 55px rgba(16, 32, 51, 0.10)',
      },
    },
  },
  plugins: [],
};
