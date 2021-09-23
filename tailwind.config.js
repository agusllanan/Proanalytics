module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
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
  plugins: [],
}
