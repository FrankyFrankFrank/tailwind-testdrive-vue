const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        yellow: {
          '400': 'hsl(55, 90%, 70%)',
          '500': 'hsl(55, 90%, 60%)',
          '600': 'hsl(55, 90%, 50%)',
          '700': 'hsl(55, 90%, 40%)',
          '800': 'hsl(55, 90%, 30%)',
        },

        red: {
          '500': 'hsl(7, 90%, 55%)'
        },
      }
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
          color: theme('colors.red.500'),
          background: theme('colors.yellow.400'),
          transition: 'all 500ms',
          borderBottom: theme('borderWidth.2'),
          borderColor: theme('colors.red.500'),
          '&::placeholder': {
            color: theme('colors.yellow.800'),
          },
          '&:focus': {
            background: theme('colors.red.500'),
            color: theme('colors.yellow.400'),
          }
        }
      }

      addComponents(inputs)
    })
  ],
}
