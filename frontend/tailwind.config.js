/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/images/homepage/hero-section/hero.png')",
        "about-section-banner": "url('/src/images/homepage/about-section/background.png')",
        "about-section-filler1": "url('/src/images/homepage/about-section/filler1.png')",
        "about-section-filler2": "url('/src/images/homepage/about-section/filler2.png')",
      },
      variants: {
        fill: ["hover", "focus"],
      },
      colors: {
        primary: "#26C85E",
        secondary: "#1D2027",
        header: "white",
        subheader: "#ADB1B3"
      },
    },
  },
  plugins: [],
};
