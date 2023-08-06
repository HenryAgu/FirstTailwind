/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      colors: {
        offWhite: 'hsl(36, 100%, 99%)',
        lightGray: 'hsl(233, 8%, 79%)',
        primaryColor: 'hsl(236, 13%, 42%)',
        brown: 'hsl(5, 85%, 63%)',
        navy: 'hsl(240, 100%, 5%)',
        orange: 'hsl(35, 77%, 62%)',
      },
    },
  },
  plugins: [],
}