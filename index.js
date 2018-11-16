/**
 * Export EdenJS ESLint config
 *
 * @type {object}
 */
module.exports = {
  'env'           : {
    'browser' : true,
    'es6'     : true,
    'jquery'  : true,
    'mocha'   : true,
    'mongo'   : true,
    'node'    : true
  },
  'globals'       : {
    'riot'    : true,
    'eden'    : true,
    'model'   : true,
    'helper'  : true,
    'cache'   : true,
    'jQuery'  : true,
    'appRoot' : true
  },
  'extends'       : 'airbnb',
  'parserOptions' : {
    'ecmaVersion' : 2018,
    'sourceType'  : 'module'
  },
  'rules'         : {
    'key-spacing' : [
      'error',
      {
        'afterColon'  : true,
        'beforeColon' : true,
        'mode'        : 'minimum',
        'align'       : 'colon'
      }
    ],
    'no-console'  : [
      'error',
    ],
    'no-multi-spaces'  : [
      'error',
      {
        "exceptions" : {
          "VariableDeclarator": true,
          "ImportDeclaration": true
        }
      }
    ],
  }
};
