/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf6',
          100: '#f5efe6',
          200: '#eaddc8',
        },
        choco: {
          900: '#231206',
          800: '#3a1f0a',
          700: '#522c0e',
        },
        accent: {
          500: '#dcb893', // Warm golden tan
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
