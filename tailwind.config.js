/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/views/**/*.pug"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(-9rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        wiggle: 'wiggle .4s ease'
      }
    },
  },
  plugins: [],
}

