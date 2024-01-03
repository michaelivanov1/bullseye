/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/images/new.jpg')"
      },
      colors: {
        primary: '#020D11'
      }

    },
  },
  plugins: [],
}

