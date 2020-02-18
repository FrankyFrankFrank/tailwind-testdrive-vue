const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      //// ADD COLOUR CUSTOMIZATIONS
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const inputs = {
        '.text-input': {
          width: '100%',
          padding: `${theme('spacing.5')} ${theme('spacing.1')}`,
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.widest'),
          fontSize: theme('fontSize.lg'),
          color: theme('color.red.500'),
          background: theme('color.yellow.400'),
          transition: 'all 500ms',
          borderBottom: theme('borderWidth.2'),
          borderColor: theme('color.red.500'),
          '&::placeholder': {
            color: theme('color.yellow.800'),
          },
          '&:focus': {
            background: theme('color.red.500'),
            color: theme('color.yellow.400'),
          }
        }
      }

      addComponents(inputs)
    })
  ],
}
