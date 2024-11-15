/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black":"#0F051D",
        "white":"#FFFFFF"
      },
      backgroundImage:{
        "hero":"url('/images/hero-background.svg')",
        
      }
    },
  },
  plugins: [],
};
