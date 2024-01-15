/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/images/homepage//hero-image.jpg')",
      },
      variants: {
        fill: ["hover", "focus"],
      },
      colors: {
        primary: "#26C85E",
        header: "white",
        subheader: "#ADB1B3",
      },
    },
  },
  plugins: [],
};
