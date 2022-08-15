/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    screens:{
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundColor: {
        'DarkMode-Elements': '#2b3945',
        'DarkMode-VeryDarkBlueBackground': '#202c37',
        'LightMode-DarkGray': '	#858585',
        'LightMode-VeryLightGrayBackground': '	#fafafa',
        'White': '#ffffff'
      },
      colors:{
        'LightMode-VeryDarkBlueText': '#111517',
        'DarkMode-Elements': '#2b3945',
        'DarkMode-VeryDarkBlueBackground': '#202c37',
        'LightMode-VeryLightGrayBackground': '	#fafafa',
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
