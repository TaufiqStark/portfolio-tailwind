module.exports = {
  content: ["./*{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#06b6d4'/*#4c1d95*/,
        secondary: '#64748b',
        dark: '#0f172a',
        'd-dark': '#121212',
        'd-secondary': '#94a3b8',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
