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
      sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      serif: ["Lora", "Georgia", "serif"],
    },
    container: {},
    extend: {},
  },
  variants: {},
  plugins: [],
};
