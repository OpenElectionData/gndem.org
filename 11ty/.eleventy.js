// 11ty plugins
const i18n = require('eleventy-plugin-i18n');
const eleventySass = require('@11tyrocks/eleventy-plugin-sass-lightningcss');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

// Helper packages
const slugify = require('slugify');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const filters = require('./src/_utils/filters.js');
const translations = require('./src/_data/i18n');

module.exports = function (eleventyConfig) {
  //
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  console.log(eleventyConfig.pathPrefix);

  // Sass
  eleventyConfig.addPlugin(eleventySass);

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      class: 'tdbc-anchor',
      space: false
    }),
    level: [1, 2, 3],
    slugify: (str) =>
      slugify(str, {
        lower: true,
        strict: true,
        remove: /["]/g
      })
  });
  eleventyConfig.setLibrary('md', markdownLibrary);

  // Internationalization
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en'
    }
  });

  // eleventyConfig.setServerOptions({
  //   middleware: [redirectDefaultLang()]
  // });

  // Browsersync - This doesn't work on eleventy 2.0
  // Redirect from root to default language root during --serve
  // Can also be handled by netlify.toml?
  // eleventyConfig.setBrowserSyncConfig({
  //   callbacks: {
  //     ready: function (err, bs) {
  //       bs.addMiddleware('*', (req, res) => {
  //         if (req.url === '/') {
  //           res.writeHead(302, {
  //             location: '/en-GB/'
  //           });
  //           res.end();
  //         }
  //       });
  //     }
  //   }
  // });

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // Layouts
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // Configuration
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      assets: '_assets'
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
