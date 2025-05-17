// module.exports = function(eleventyConfig) {
//     eleventyConfig.addPassthroughCopy('src/assets/');
//     eleventyConfig.addPassthroughCopy('src/css/');
//     eleventyConfig.addWatchTarget('./src/css/');
//     return {
//         dir: {
//             inputs: 'src',
//             includes: '_includes',
//             output: '_site'
//         },
//         templateFormats: [
//             'html',
//             'njk',
//             'md'
//         ],
//         markdownTemplateEngine: 'njk',
//         htmlTemplateEngine: 'njk',
//         dataTemplateEngine: 'njk',
//     };
// }

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};