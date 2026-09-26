/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunshine: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#ffbd0a', // Primary SuperOwly yellow
          600: '#d97706',
          700: '#b45309',
        },
        coral: {
          50: '#fff1ee',
          100: '#ffe4de',
          500: '#f05a21', // SuperOwly vibrant orange
          600: '#ea580c',
          700: '#c2410c',
        },
        mehendi: {
          50: '#f7fee7',
          100: '#ecfccb',
          400: '#a6c437', // SuperOwly fresh green
          500: '#84cc16',
          600: '#65a30d',
        },
        peacock: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          400: '#2dd4bf',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        festive: {
          saffron: '#FF6F00',
          marigold: '#FFA000',
          turmeric: '#FFD54F',
          rani: '#D81B60',
          kumkum: '#C2185B',
          sky: '#0284C7',
          clay: '#8D6E63',
          leaf: '#43A047',
        }
      },
      fontFamily: {
        display: ['"Fredoka"', '"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        handwritten: ['"Caveat"', 'cursive'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(240, 90, 33, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(240, 90, 33, 0.8)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
