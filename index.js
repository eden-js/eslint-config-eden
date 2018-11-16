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
        'exceptions' : {
          'VariableDeclarator': true,
          'ImportDeclaration': true
        }
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
        allowAfterThis: true,
        allowAfterSuper: true,
        enforceInMethodNames: false,
      }
    ],
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-await-in-loop': 'off',
    'no-return-await': 'off',
    'arrow-body-style': 'off',
    'no-continue': 'off'
  }
};
