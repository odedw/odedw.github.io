const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production"
      ? cssnano({ preset: "default" })
      : null,
    purgecss({
      content: ["./**/*.njk"],
    }),
  ],
};
