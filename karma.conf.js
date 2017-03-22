module.exports = function (config) {
  'use strict';
  config.set({

    basePath: '../',

    frameworks: ['mocha', 'chai'],

    files: [
    'smartmobily/node_modules/angular/angular.js',
    'smartmobily/node_modules/angular-mocks/angular-mocks.js',
    // 'smartmobily/bower_components/angular-route/angular-route.js',
     'smartmobily/node_modules/angular-mocks/angular-mocks.js',
    'smartmobily/client/services/services.js',
    'smartmobily/specs/client/servicesSpec.js',
    // './test/test.spec.js',
    // './test/authSpec.js'

    ],

     //reporters: ['spec'],

    port: 3000,
    colors: true,
    autoWatch: true,
    singleRun: false,

captureTimeout: 50000,        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['Chrome', 'Chrome_without_security'],
        customLaunchers: {
          Chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
          }
        }
      });
};
