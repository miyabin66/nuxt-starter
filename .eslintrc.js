module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['vuejs-accessibility'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
