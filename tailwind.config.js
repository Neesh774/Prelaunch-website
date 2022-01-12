module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        "fade-up-delayed": {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '60%': { opacity: 0, transform: 'translateY(20px)', filter: 'blur(1rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
        }
      },
      animation: {
        "fade-up": "fade-up 1s",
        "fade-up-1": "fade-up-delayed 2s",
        "fade-up-2": "fade-up-delayed 3s",
        "fade-up-3": "fade-up-delayed 4s",
      }
    },
  },
  plugins: [],
}