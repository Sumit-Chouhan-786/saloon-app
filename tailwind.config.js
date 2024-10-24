/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface", "serif"],
      },
      colors:{
        "arylide-yellow":"#E9C664"
      }
    },  
  },
  plugins: [],
};
