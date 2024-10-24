/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "services-bg": "url('../src/assets/images/png/services-bg.png')",
        hero: "url('./assets/images/webp/hero-bg.webp')",
        "contact-bg": "url('./assets/images/png/contact-form-bg.png')",
      },
      fontFamily: {
        abril: ["Abril Fatface", "serif"],
      },
      colors: {
        lightBlack: "#979797",
        yellow: "#E9C664",
        raisinBlack: "#212121",
      },
    },
  },
  plugins: [],
};
