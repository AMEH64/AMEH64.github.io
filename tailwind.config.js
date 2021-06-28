const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  // prefix: 'ameh-',
  purge: [],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: "var(--ameh-primary)",
        // secondary: "var(--ameh-secondary)",
        primary: ({ opacityVariable, opacityValue }) => {
          //   if (opacityValue !== undefined) {
          //     return `rgba(var(--ameh-primary), ${opacityValue})`
          //   }
          //   if (opacityVariable !== undefined) {
          //     return `rgba(var(--ameh-primary), var(${opacityVariable}, 1))`
          //   }
          return `var(--ameh-primary)`;
        },
        secondary: ({ opacityVariable, opacityValue }) => {
          // if (opacityValue !== undefined) {
          //   return `rgba(var(--ameh-secondary), ${opacityValue / 100})`
          // }
          // if (opacityVariable !== undefined) {
          //   return `rgba(var(--ameh-secondary), var(${opacityVariable}, 1))`
          // }
          return `var(--ameh-secondary)`
        }
      },
      height: {
        '100': '28rem'
      },
      scale: {
        '300': '3',
        '400': '4'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
