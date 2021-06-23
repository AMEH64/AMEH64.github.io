const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  // prefix: 'ameh-',
  purge: [],
  darkMode: "class", // false or 'media' or 'class'
  // extend: {
    theme: {
      colors: {
        // primary: "var(--ameh-primary)",
        // secondary: "var(--ameh-secondary)",
        primary: ({ opacityVariable, opacityValue }) => {
          return `var(--ameh-primary)`;
          // return !!opacityValue
          //   ? `rgba(var(--ameh-primary), ${opacityValue})`
          //   : !!opacityVariable
          //     ? `rgba(var(--ameh-primary), var(${opacityVariable}, 1))`
          //     : `var(--ameh-primary)`;
        },
      //   {
      //   if (opacityValue !== undefined) {
      //     return `rgba(var(--ameh-primary), ${opacityValue})`
      //   }
      //   if (opacityVariable !== undefined) {
      //     return `rgba(var(--ameh-primary), var(${opacityVariable}, 1))`
      //   }
      //   return `rgb(var(--ameh-primary))`
      // },
      secondary: ({ opacityVariable, opacityValue }) => {
        // if (opacityValue !== undefined) {
        //   return `rgba(var(--ameh-secondary), ${opacityValue / 100})`
        // }
        // if (opacityVariable !== undefined) {
        //   return `rgba(var(--ameh-secondary), var(${opacityVariable}, 1))`
        // }
        return `var(--ameh-secondary)`
      },
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent
      },
    },
  // },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
