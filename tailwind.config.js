module.exports = {
  future: {},
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./pages/*.njk",
      "./_includes/components/*.njk",
      "./_includes/layouts/*.njk",
      "./dist/**/*.html",
      "./**/*.njk",
      "./**/*.html",
    ],
  },
  theme: {
    fontFamily: {
      //   sans: ["Poppins"],
      serif: ["Poly"],
    },
    container: {},
    extend: {},
  },
  variants: {},
  plugins: [],
};
