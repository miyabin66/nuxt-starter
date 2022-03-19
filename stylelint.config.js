module.exports = {
  customSyntax: 'postcss-html',
  plugin: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'declaration-empty-line-before': null,
  },
}
