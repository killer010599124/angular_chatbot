/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    container: {
      center: true,
      padding: '2rem',
      margin: '5rem'
    }
  },
  plugins: [],
}

