const wallabyWebpack = require('wallaby-webpack');
const wallabyPostprocessor = wallabyWebpack({
  // webpack options, such as
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/android/, /ios/, /node_modules/], loader: 'babel?presets[]=es2015' },
    ],
  },
});

module.exports = function() {
  return {
    files: [
      { pattern: 'src/**/*.js', load: false },
      { pattern: '!src/**/*.spec.js', load: false },
    ],

    tests: [
      { pattern: 'src/**/*.spec.js', load: false },
    ],

    setup: function () {
      // required to trigger test loading
      window.__moduleBundler.loadTests();
    },

    postprocessor: wallabyPostprocessor,
  };
};
