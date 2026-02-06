import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f2ff',
          100: '#e8e4ff',
          200: '#d4cbff',
          300: '#b8a6ff',
          400: '#9a7bff',
          500: '#814fff',
          600: '#6c30f5',
          700: '#5a1fd4',
          800: '#4b1aad',
          900: '#3d178a'
        },
        ink: {
          900: '#070711',
          800: '#121225',
          700: '#1d1d35'
        }
      },
      boxShadow: {
        glow: '0 20px 45px -18px rgba(129, 79, 255, 0.55)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 25% 30%, rgba(129,79,255,0.35), transparent 40%), radial-gradient(circle at 80% 20%, rgba(24,191,255,0.25), transparent 38%), radial-gradient(circle at 65% 75%, rgba(255,84,193,0.18), transparent 36%)'
      }
    }
  },
  plugins: []
} satisfies Config
