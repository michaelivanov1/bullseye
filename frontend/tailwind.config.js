/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/images/hero-image.jpg')"
      },
      colors: {
        primary: '#10D399',
        header: 'white',
        subheader: '#ADB1B3',
      }

    },
  },
  plugins: [],
}

