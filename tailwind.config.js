// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#718096',
        accent: '#4299e1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

