module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257E5'
        },
        brandHover: {
          500: '#996DFF'
        },
        textBrandColor: {
          500: '#ffffff'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
