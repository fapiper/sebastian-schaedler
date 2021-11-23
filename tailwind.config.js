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
      },
      colors: {
        blue: { light: '#1E3143', DEFAULT: '#1E3143', dark: '#1F2B36' },
        yellow: { DEFAULT: '#CDA000' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
