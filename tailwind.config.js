// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: {
         100: '#718096',
          200:'#FFFFF'
        },
        accent: '#4299e1',
      },
      fontFamily:{
        hmm:['Rock3DStatic']
      },
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

