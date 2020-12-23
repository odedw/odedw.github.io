module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: "pages",
      output: "dist",
      includes: "../_includes",
    },
  };
};
