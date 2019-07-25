module.exports = {
  extends: 'standard',
  rules: {
    indent: [ 'error', 2, { MemberExpression: 0, ignoredNodes: [ 'ConditionalExpression' ] } ],
    'arrow-body-style': [ 'error', 'as-needed' ],
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    'operator-linebreak': [ 'error', 'before' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    camelcase: 0
  },
  env: { jest: true, es6: true, node: true }
}
