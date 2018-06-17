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
  'extends'       : 'eslint:recommended',
  'parserOptions' : {
    'ecmaVersion' : 2018,
    'sourceType'  : 'module'
  },
  'rules'         : {
    'array-bracket-newline'            : [
      'error',
      'consistent'
    ],
    'array-callback-return'            : [
      'error',
      {
        'allowImplicit' : true
      }
    ],
    'arrow-body-style'                 : [
      'error',
      'always'
    ],
    'arrow-parens'                     : [
      'error',
      'always'
    ],
    'arrow-spacing'                    : [
      'error',
      {
        'before' : true,
        'after'  : true
      }
    ],
    'block-scoped-var'                 : [
      'error'
    ],
    'block-spacing'                    : [
      'error',
      'always'
    ],
    'brace-style'                      : [
      'error',
      '1tbs'
    ],
    'callback-return'                  : [
      'error'
    ],
    'camelcase'                        : [
      'error',
      {
        'properties' : 'always'
      }
    ],
    'capitalized-comments'             : [
      'error',
      'always',
      {
        'ignoreConsecutiveComments' : true
      }
    ],
    'comma-dangle'                     : [
      'error',
      'never'
    ],
    'comma-spacing'                    : [
      'error',
      {
        'before' : false,
        'after'  : true
      }
    ],
    'comma-style'                      : [
      'error',
      'last'
    ],
    'consistent-this'                  : [
      'error',
      'that'
    ],
    'constructor-super'                : [
      'error'
    ],
    'dot-location'                     : [
      'error',
      'property'
    ],
    'eqeqeq'                           : [
      'error',
      'always'
    ],
    'for-direction'                    : [
      'error'
    ],
    'func-call-spacing'                : [
      'error',
      'never'
    ],
    'func-names'                       : [
      'error',
      'never'
    ],
    'function-paren-newline'           : [
      'error',
      'never'
    ],
    'getter-return'                    : [
      'error'
    ],
    'implicit-arrow-linebreak'         : [
      'error',
      'beside'
    ],
    'indent'                           : [
      'error',
      2
    ],
    'key-spacing'                      : [
      'error',
      {
        'afterColon'  : true,
        'beforeColon' : true,
        'mode'        : 'minimum',
        'align'       : 'colon'
      }
    ],
    'keyword-spacing'                  : [
      'error',
      {
        'before' : true,
        'after'  : true
      }
    ],
    'linebreak-style'                  : [
      'error',
      'unix'
    ],
    'lines-around-comment'             : [
      'error',
      {
        'beforeBlockComment' : true,
        'afterBlockComment'  : false,
        'beforeLineComment'  : true,
        'afterLineComment'   : false,
        'allowBlockStart'    : true,
        'allowBlockEnd'      : false,
        'allowObjectStart'   : true,
        'allowObjectEnd'     : true,
        'allowArrayStart'    : true,
        'allowArrayEnd'      : true,
        'allowClassStart'    : false,
        'allowClassEnd'      : false
      }
    ],
    'lines-around-directive'           : [
      'error',
      {
        'before' : 'never',
        'after'  : 'always'
      }
    ],
    'lines-between-class-members'      : [
      'error',
      'always'
    ],
    'multiline-ternary'                : [
      'error',
      'never'
    ],
    'new-cap'                          : [
      'error',
      {
        'newIsCap'   : true,
        'capIsNew'   : false,
        'properties' : false
      }
    ],
    'new-parens'                       : [
      'error'
    ],
    'newline-after-var'                : [
      'error',
      'always'
    ],
    'newline-before-return'            : [
      'error'
    ],
    'no-console'                       : [
      'error',
      {
        'allow' : [
          'debug',
          'error',
          'info',
          'trace',
          'warn'
        ]
      }
    ],
    'no-var'                           : [
      'error'
    ],
    'nonblock-statement-body-position' : [
      'error',
      'beside'
    ],
    'object-curly-newline'             : [
      'error',
      {
        'ObjectExpression'  : {
          'multiline'  : true,
          'consistent' : true
        },
        'ImportDeclaration' : 'never',
        'ExportDeclaration' : 'never'
      }
    ],
    'object-curly-spacing'             : [
      'error',
      'always'
    ],
    'object-property-newline'          : [
      'error'
    ],
    'object-shorthand'                 : [
      'error',
      'never'
    ],
    'quote-props'                      : [
      'error',
      'always'
    ],
    'quotes'                           : [
      'error',
      'single',
      {
        'allowTemplateLiterals' : true
      }
    ],
    'require-await'                    : [
      'error'
    ],
    'require-jsdoc'                    : [
      'error',
      {
        'require' : {
          'FunctionDeclaration' : true,
          'MethodDefinition'    : true,
          'ClassDeclaration'    : true
        }
      }
    ],
    'require-yield'                    : [
      'error'
    ],
    'radix'                            : [
      'error',
      'as-needed'
    ],
    'rest-spread-spacing'              : [
      'error',
      'never'
    ],
    'semi'                             : [
      'error',
      'always'
    ],
    'semi-spacing'                     : [
      'error',
      {
        'before' : false,
        'after'  : true
      }
    ],
    'semi-style'                       : [
      'error',
      'last'
    ],
    'sort-imports'                     : [
      'error',
      {
        'ignoreCase'            : false,
        'ignoreMemberSort'      : true,
        'memberSyntaxSortOrder' : [
          'none',
          'all',
          'multiple',
          'single'
        ]
      }
    ],
    'space-before-blocks'              : [
      'error'
    ],
    'space-before-function-paren'      : [
      'error',
      'always'
    ],
    'space-in-parens'                  : [
      'error',
      'never'
    ],
    'space-infix-ops'                  : [
      'error'
    ],
    'space-unary-ops'                  : [
      'error',
      {
        'words'    : true,
        'nonwords' : false
      }
    ],
    'spaced-comment'                   : [
      'error',
      'always'
    ],
    'strict'                           : [
      'error',
      'global'
    ],
    'switch-colon-spacing'             : [
      'error',
      {
        'after'  : true,
        'before' : true
      }
    ],
    'template-curly-spacing'           : [
      'error',
      'never'
    ],
    'template-tag-spacing'             : [
      'error',
      'always'
    ],
    'valid-jsdoc'                      : [
      'error',
      {
        'prefer'                   : {
          'arg'      : 'param',
          'argument' : 'param',
          'class'    : 'constructor',
          'return'   : 'return',
          'virtual'  : 'abstract'
        },
        'requireParamDescription'  : false,
        'requireReturn'            : false,
        'requireReturnDescription' : false,
        'requireReturnType'        : false
      }
    ],
    'valid-typeof'                     : [
      'error',
      {
        'requireStringLiterals' : true
      }
    ],
    'wrap-iife'                        : [
      'error',
      'inside'
    ],
    'yield-star-spacing'               : [
      'error',
      'before'
    ],
    'yoda'                             : [
      'error',
      'never',
      {
        'exceptRange' : true
      }
    ]
  }
};
