import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  darkMode:"class",
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: '#EE2E53',
        secondary: '#FF9500',
        orange: '#EE2E53',
        black: '#06080F',
        gery: '#515357',
        surface: '#ffffff',
        babyBlue: '#C8E9F2',
        light: '#F8F8F8',
          blueGrey:'#F3F5FB',
        leightGrey: '#9B9C9F',
        gradient1: '#FF9500',
        secondGrey: '#9095A5',
      
        secondaryDark: '#EE2E53',
    }
      
    },
  },
  variants: {
    extend: {
    
    },
  },
  plugins: [
   
  ],
};
