// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#CCAA35',
        card : '#F5F5DC'
      },
      fontFamily: {
        curly: ['"Pacifico"', 'cursive'], // Make sure to import this font in your HTML or CSS
      },
      animation: {
        blink: 'blink 1s steps(2, start) infinite',
        slideDown: 'slideDown 0.4s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
