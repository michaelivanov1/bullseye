/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/images/homepage/hero-section/hero-image.jpg')",
        "about-section-image": "url('/src/images/homepage/about-section/about-bg.png')"
      },
      variants: {
        fill: ["hover", "focus"],
      },
      colors: {
        primary: "#26C85E",
        secondary: "#1D2027",
        header: "white",
        subheader: "#ADB1B3",
      },
    },
  },
  plugins: [],
};
