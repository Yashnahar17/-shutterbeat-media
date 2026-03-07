/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#485AA8',
          light:   '#6072BE',
          dark:    '#3346A0',
        },
        secondary: {
          DEFAULT: '#4DB4C0',
          light:   '#6BC8D3',
        },
        tertiary: {
          DEFAULT: '#EDD9C4',
          light:   '#F4E8DC',
          dark:    '#D7C2AD',
        },
        dark: {
          900: '#EDD9C4',
          800: '#F4E8DC',
          700: '#E8D4BF',
          600: '#D7C2AD',
        },
      },
      fontFamily: {
        heading: ['Sarpanch', 'sans-serif'],
        body:    ['Avenir Next', 'Avenir', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':      ['3.5rem', { lineHeight: '1.15' }],
        'h2':      ['2.5rem', { lineHeight: '1.2'  }],
        'h3':      ['1.75rem',{ lineHeight: '1.3'  }],
        'h4':      ['1.25rem',{ lineHeight: '1.4'  }],
      },
      spacing: {
        'section':    '6rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        'card': '1.25rem',
        'btn':  '0.5rem',
      },
      boxShadow: {
        'card':       '0 4px 24px rgba(72,90,168,0.12)',
        'card-hover': '0 12px 40px rgba(72,90,168,0.25)',
        'glow':       '0 0 40px rgba(77,180,192,0.3)',
        'glow-sm':    '0 0 20px rgba(77,180,192,0.2)',
      },
    },
  },
  plugins: [],
}
