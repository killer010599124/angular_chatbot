/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}"
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    fontSize: {
      xs: '5px',
      sm: '10px',
      base: '16px',
      lg: '20px',
      'b-xs': '30px',
      'b-sm': '40px',
      'b-base': '50px',
      'b-lg': '54px'
    },
    colors: {
      'loginBtnColor': '#07AEF9',
      'white': '#ffffff',
      'black': '#000000',
      'currentColor': '#002C6F',
      'currentColor1': '#08ACF9',
      'gray': '#F7F7F7',
      'gray1': '#5C5C5C',
      'sendBtn': '#07AEF9',
      'chatCurrentColor': '#091F2C'
    },
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
      sans: [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
      serif: ['Merriweather', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

