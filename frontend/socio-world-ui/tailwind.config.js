/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'sw-primary':"#0f6fec",
        'sw-danger':"#D6293E",
        'sw-gray':"#676a79",
      },
      fontSize:{
        'sw-medium': ['0.9375rem', { lineHeight: '1.40625rem' }],
      }
    },
  },
  plugins: [],
}

