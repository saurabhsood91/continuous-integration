// module.exports = function(config) {
//   config.set({
//     frameworks: ['jasmine'],
//
//     files: [
//       'js/test_*.js'
//     ]
//   })
// }

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'js/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    plugins: [
        'karma-jasmine',
        'karma-phantomjs-launcher'
    ],
    singleRun: true,
    concurrency: Infinity
  })
}
