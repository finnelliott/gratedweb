module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "crayola": {
          50: "#C8FBF1",
          100: "#90F6E3",
          200: "#58F1D5",
          300: "#20ECC7",
          400: "#00E9BF",
          500: "#00CCA8",
          600: "#00AF90",
          700: "#007560",
          800: "#003B30",
          900: "#001E18",
        },
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}
