const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        blue: { light: '#1E3143', DEFAULT: '#1E3143', dark: '#1F2B36' },
        yellow: { DEFAULT: '#CDA000' }
      }
    }
  }
}
