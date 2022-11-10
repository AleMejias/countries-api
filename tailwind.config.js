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
      keyframes: {
        spinner: {
          '0%': {
            transform: 'rotate(0)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          },
          '50% ':{
            transform: 'rotate(900deg)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '100% ':{
            transform: 'rotate(1800deg)'
          }
        }
      },
      animation: {
        spinner: 'spinner 1.2s infinite',
      },
      backgroundColor: {
        'DarkMode-Elements': '#2b3945',
        'DarkMode-VeryDarkBlueBackground': '#202c37',
        'LightMode-DarkGray': '	#858585',
        'LightMode-VeryLightGrayBackground': '	#fafafa',
        'White': '#ffffff'
      },
      boxShadow: {
        'custom': '0px 0px 6px 0px'
      },
      colors:{
        'LightMode-VeryDarkBlueText': '#111517',
        'DarkMode-Elements': '#2b3945',
        'DarkMode-VeryDarkBlueBackground': '#202c37',
        'LightMode-VeryLightGrayBackground': '	#fafafa',
        'LightMode-DarkGray': '	#858585',
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
