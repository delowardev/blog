module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [
      'gatsby-plugin-postcss',
      ({ addComponents, theme }) => {
        addComponents({
          ".container": {
            marginInline: "auto",
            paddingInline: theme("spacing.4"),
            maxWidth: theme("screens.sm"),
            "@screen sm": {
              maxWidth: theme("screens.sm"),
            },
            "@screen md": {
              maxWidth: theme("screens.md"),
            },
            "@screen lg": {
              maxWidth: theme("screens.lg"),
            },
            "@screen xl": {
              maxWidth: theme("screens.xl"),
            },
          },
        });
      },
  ],
}
