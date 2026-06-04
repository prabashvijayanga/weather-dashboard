/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#09090b', // Zinc 950 - true deep dark
        }
      },
      backgroundImage: {
        // Subtle ambient glow effect for the background
        'mesh': 'radial-gradient(at 40% 20%, hsla(250,100%,74%,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(340,100%,76%,0.08) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}