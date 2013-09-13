var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'citizen-js'
    },
    port: 3000,
    db: 'mongodb://localhost/citizen-js-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'citizen-js'
    },
    port: 3000,
    db: 'mongodb://localhost/citizen-js-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'citizen-js'
    },
    port: 3000,
    db: 'mongodb://localhost/citizen-js-production'
  }
};

module.exports = config[env];
