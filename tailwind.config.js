/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xl: { max: '1280px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '480px' },
    },
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#6366f1',
        'secondary-hover': 'rgb(0 0 0 / 0.05)',
        'border-default': 'rgb(0 0 0 / 0.1)',
        'border-dark': 'rgb(17 24 39 / 0.5)',
      },
      textDecorationColor: {
        green: '#16a34a',
        sky: '#0ea5e9',
      },
      boxShadow: {
        sectionInput: '0 0 10px rgba(0,0,0,0.10)',
      },
      animation: {
        'fade-in-out': 'fadeInOut 1.2s linear infinite',
        flicker: 'flicker 0.5s infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100% ': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        flicker: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
