const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '10-screen': '10vw',
        '14-screen': '14vw',
        '20-screen': '20vw',
        '50-screen': '50vw',
      },
      colors: {
        blue: { light: '#1E3143', DEFAULT: '#1e3143', dark: '#1F2B36' },
        yellow: { DEFAULT: '#CDA000' },
      },
      width: {
        'full-4': 'calc(100% + 1rem)',
        'full-8': 'calc(100% + 2rem)',
        'full-16': 'calc(100% + 4rem)',
      },
      maxWidth: {
        unset: 'unset',
      },
      margin: {
        '-1-screen': '-1vw',
        '-2-screen': '-2vw',
        '-4-screen': '-4vw',
        '-6-screen': '-6vw',
        '-9-screen': '-9vw',
        '-12-screen': '-12vw',
        '-22-screen': '-22vw',
      },
      height: {
        84: '21rem',
      },
      zIndex: {
        '-10': '-10',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      animation: {
        'spin-quick': 'spin 1s linear infinite',
        spin: 'spin 6s linear infinite',
        'spin-slow': 'spin 28s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
