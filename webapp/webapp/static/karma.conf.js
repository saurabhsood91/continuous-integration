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

    // var configuration = {
    //     // other things
    //
    //     customLaunchers: {
    //         Chrome_travis_ci: {
    //             base: 'Chrome',
    //             flags: ['--no-sandbox']
    //         }
    //     },
    // };
    //
    // if (process.env.TRAVIS) {
    //     configuration.browsers = ['Chrome_travis_ci'];
    // } else {
    //     configuration.browsers = ['PhantomJS'];
    // }
    //
    // config.set(configuration);


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
    browsers: ['Chrome'],
    plugins: [
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher'
    ],
    singleRun: true,
    concurrency: Infinity
  })
}
