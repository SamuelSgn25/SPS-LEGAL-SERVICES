/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'sps-navy': '#0b1f3b',
        'sps-gold': '#d4af37',
        'sps-gold-soft': '#f2d27a',
        'sps-dark': '#050814',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-lg': '0 18px 45px rgba(5, 8, 20, 0.35)',
      },
    },
  },
  plugins: [],
};
