/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(
        "supports-backdrop-blur",
        "@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"
      );
      // addVariant(
      //   "supports-scrollbars",
      //   "@supports selector(::-webkit-scrollbar)"
      // );
      // addVariant("children", "& > *");
      // addVariant("scrollbar", "&::-webkit-scrollbar");
      // addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
      // addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
    },
  ],
};
