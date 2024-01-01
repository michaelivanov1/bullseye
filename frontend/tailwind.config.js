/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/images/unblurred.jpg')",
      },
      colors: {
        primary: '#050706'
      }

    },
  },
  plugins: [],
}

