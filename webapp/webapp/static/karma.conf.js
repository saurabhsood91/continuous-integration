module.exports = function(config) {

var configuration = {
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
  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },
  browsers: ['Chrome'],
  plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
  ],
  concurrency: Infinity
};

    if(process.env.TRAVIS){
      configuration.browsers = ['Chrome_travis_ci'];
      configuration.singleRun = true;
    }
    config.set(configuration);
}
