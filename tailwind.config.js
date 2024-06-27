/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg-Shape.jpg')",
      },
    },
    fontFamily: {
      'body-small': ['Plus Jakarta Sans', 'sans-serif']
    }
  },
  plugins: [],
};
