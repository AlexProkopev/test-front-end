/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    backgroundPosition: {
      'top-right': 'right top 8rem',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        sm: '1.25rem',
        md: '2rem',
        lg: '3.25rem',
      },
    },
    screens: {
      sm: '375px',
      // => @media (min-width: 375px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {

      'primary-text-color': '#121417;',
      'secondary-text-color': 'rgba(18, 20, 23, 0.5)',
      'make-text-color': '#3470ff',
      'primary-text-button-color': '#161F37',
      'btn-color': '#3470ff',
      "white-color": "#ffffff",
      'button-hover-color': '#0A0A11',
      'white-text-color': '#f3f3f3',
      "bg-input-color" : "#f7f7fb",
      "backDrop": "rgba(18, 20, 23, 0.5)",
      "third-text-color":"#363535",
      "hover-bg-btn": "#0b44cd",
      "modal-conditions-color": "#f9f9f9",

      // 'primary-text-button-color': '#161F37',
      // 'button-hover-color': '#0A0A11',
      'welcome-text-color': '#FAFAFA',
      'dark-404-text-color': 'rgba(243, 243, 243, 0.1)',
      'light-404-text-color': 'rgba(64, 112, 205, 0.1)',
      'dark-icon-arrow-fill': 'rgba(243, 243, 243, 0.3)',
      'light-icon-arrow-fill': 'rgba(10, 10, 17, 0.3)',
      'light-bg-selected-page': 'rgb(64, 112, 205)',
      'backdrop-bg-color': 'rgba(21, 21, 21, 0.6)',
      'dark-bg-selected-page': 'rgba(64, 112, 205, 0.5)',
      'filter-scroll-text': '#434D67',
      'hover-text-color': '#253d6f',
      'border-color': 'rgba(243, 243, 243, 0.2)',
      'border-color-for-light': 'rgba(22, 31, 55, 0.2)',
      'border-color-add': 'rgba(64, 112, 205, 0.5)',
      'border-color-search': 'rgba(10, 10, 17, 0.2)',
      'hover-border-color-search': 'rgba(10, 10, 17, 0.5)',

      'grey-text-color': 'rgba(243, 243, 243, 0.5)',
      'hover-button-border-color': 'rgba(64, 112, 205, 0.5)',
      'ingredients-card-bg': ' rgba(22, 31, 55, 0.5)',
      transparent: 'rgba(243, 243, 243, 0)',
      'background-color': '#06060c;',
      'light-theme-bg-color': '#D2D2D2',
      'dark-theme-bg-color': '#0A0A11',

      'error-color': '#da1414',
      'correct-color': '#3cbc81',
      'icon-plus': 'rgb(71 85 105)',
    },
  },
  plugins: [],
};