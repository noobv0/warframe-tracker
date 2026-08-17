/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0b090a',
        carbon: '#161a1d',
        garnet: '#660708',
        mahogany: {
          DEFAULT: '#a4161a',
          light: '#ba181b',
        },
        strawberry: '#e5383b',
        silver: '#b1a7a6',
        dustgrey: '#d3d3d3',
        smoke: '#f5f3f4',
      },
    },
  },
  plugins: [],
}
