/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: '#282c34',
      secondary: '#abb2bf',
      white: '#ffffff'
    },
    extend: {}
  },
  plugins: []
}
