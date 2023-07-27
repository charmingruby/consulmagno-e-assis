/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter)',
    },
    colors: {
      primary: {
        main: '#042939',
      },
      secondary: {
        main: '#FAA561',
      },
      gray: {
        50: '#eaeaea',
        75: '#E0E0E0',
        100: '#bebebf',
        200: '#9e9ea0',
        300: '#727275',
        400: '#56565a',
        500: '#2c2c31',
        600: '#28282d',
        700: '#1f1f23',
        800: '#18181b',
        900: ' #121215',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
