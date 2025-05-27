// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(300px)' },
        },
        fallDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideRight: 'slideRight 3s ease-in-out infinite',
        fallDown: 'fallDown 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
