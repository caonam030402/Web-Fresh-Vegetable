/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        contact_background: "url('./src/assets/images/im_bg_contact.png')"
      }),
      colors: {
        primary: '#008641',
        greenDark: '#003f1f',
        secondary: '#f5821f'
      },
      animation: {
        slideDown: 'slideDown 0.35s ease-out'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.spacerSection': {
          marginTop: theme('spacing.20'),
          marginBottom: theme('spacing.20')
        },
        '.container': {
          maxWidth: theme('columns.6xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.2'),
          paddingRight: theme('spacing.2'),
          '@screen sm': {
            paddingLeft: theme('spacing.4'),
            paddingRight: theme('spacing.4')
          }
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
