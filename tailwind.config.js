/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'selector',
  plugins: [],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: '$040316',
        background: '#fbfbfe',
        primary: '#3df9ff',
        secondary: '#e3b292',
        accent: '#b9d864',

        // Dark mode colors
        dark: '#eae9fc',
        'dark-background': '#010104',
        'dark-primary': '#00bbc2',
        'dark-secondary': '#6d3d1c',
        'dark-accent': '#7c9b27',
      },
    },
  },
};
