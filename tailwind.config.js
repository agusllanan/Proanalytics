module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'bright-turquoise': {
          '50': '#f2fefe', 
          '100': '#e6fdfc', 
          '200': '#c0faf8', 
          '300': '#9af7f4', 
          '400': '#4ff0eb', 
          '500': '#03eae3', 
          '600': '#03d3cc', 
          '700': '#02b0aa', 
          '800': '#028c88', 
          '900': '#01736f'
      }
      ,
        'twilight-blue': {
          '50': '#feffff', 
          '100': '#fdffff', 
          '200': '#fbfeff', 
          '300': '#f8fdff', 
          '400': '#f3fcff', 
          '500': '#eefbff', 
          '600': '#d6e2e6', 
          '700': '#b3bcbf', 
          '800': '#8f9799', 
          '900': '#757b7d'
      },
        'shakespeare': {
          '50': '#f7fbfd', 
          '100': '#eff8fb', 
          '200': '#d7ecf6', 
          '300': '#bfe1f0', 
          '400': '#90cbe4', 
          '500': '#60b4d9', 
          '600': '#56a2c3', 
          '700': '#4887a3', 
          '800': '#3a6c82', 
          '900': '#2f586a'
      },
        'curious-blue': {
          '50': '#f4f9fc', 
          '100': '#eaf4f9', 
          '200': '#cae3f0', 
          '300': '#a9d1e7', 
          '400': '#69afd6', 
          '500': '#298dc4', 
          '600': '#257fb0', 
          '700': '#1f6a93', 
          '800': '#195576', 
          '900': '#144560'
      },
        'scooter': {
          '50': '#f2fcfd', 
          '100': '#e6f9fc', 
          '200': '#c0f0f7', 
          '300': '#99e7f3', 
          '400': '#4dd6e9', 
          '500': '#01c4e0', 
          '600': '#01b0ca', 
          '700': '#0193a8', 
          '800': '#017686', 
          '900': '#00606e'
      },
      'keppel': {
        '50': '#f5fbfa', 
        '100': '#eaf6f5', 
        '200': '#cbe9e6', 
        '300': '#abdcd7', 
        '400': '#6dc2b8', 
        '500': '#2ea89a', 
        '600': '#29978b', 
        '700': '#237e74', 
        '800': '#1c655c', 
        '900': '#17524b'
    }
      },
      backgroundImage: {
        'hero-background': "url('https://pixabay.com/es/photos/cygnet-aves-animal-lago-cisne-6482420/')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
}
