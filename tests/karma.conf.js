// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      '*.js', '../app/js/**/*.js'
    ]
  });
};
