/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'DarkMode-Elements': '#2b3945',
        'DarkMode-VeryDarkBlueBackground': '#202c37',
        'LightMode-DarkGrayInput': '	#858585',
        'LightMode-VeryLightGrayBackground': '	#fafafa',
        'White': '#ffffff'
      },
      colors:{
        'LightMode-VeryDarkBlueText': '#111517',
        'White': '#ffffff'
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'NunitoSans': ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
