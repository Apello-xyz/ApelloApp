/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        noir : "#1A1A1A",
        blanc : "#f2f2f2",
        rose : "#ff0032",
        bleu : "#92d8e0",
        orange : "#ff832b",
        violet : "#6C63FF",
      },
      fontFamily : {
        sans : ["Outfit", "sans-serif"],
        jura : ["Jura", "sans-serif"],
        azonix : ['azonix'],
      },
      dropShadow: {
        "text-sm": "1px 1px 0px rgba(0, 0, 200, 0.90)",
        "text-md": "1px 2px 0px rgba(0, 0, 0, 0.90)",
        "text-lg": "1px 4px 0px rgba(108, 99, 255, 0.90)",
      },
      animation: {
        'bounce-slow': 'bounce 5s ease-in-out infinite',
        'bounce-float': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(10%)' },
        }
      }
    },
  },
  plugins: [],
}
