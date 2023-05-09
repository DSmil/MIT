const tailwindConfig = require('./tailwind.config.json');
const tailwindPlugins = require('./src/tailwindPlugins');

module.exports = {
  plugins: [
    require('tailwindcss')({ ...tailwindConfig, plugins: tailwindPlugins }),
    require('autoprefixer'),
  ],
};
