/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'tsm':'500px',
      'sm': '640px', // Small screens, mobile phones
        'md': '768px', // Medium screens, tablets
        'll':'815px',
        'lg': '1024px', // Large screens, desktops
        'xl': '1280px', // Extra large screens, wide desktops
    },
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-my-scrollbar::-webkit-scrollbar":{
          display:"none"
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

