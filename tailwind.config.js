const { fontFamily, colors, screens } = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...screens,
      'xl': screens.lg,
      '2xl': screens.lg,
    },
    extend: {
      fontFamily: {
        ...fontFamily,
        'sans': ['Inter', 'sans-serif']
      }
    },
    colors: {
      ...colors,
      primary: colors.indigo["500"],
      'primary-text': colors.gray["600"],
      'primary-heading': colors.gray["800"],
      'omega': '#9CA3AF',
      'omega-dark': '#6B7280'
    },
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
      'gatsby-plugin-postcss'
  ],
}
