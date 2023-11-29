// eslint-disable-next-line no-undef
module.exports = {
  root:true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@builder.io/mitosis/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@builder.io/mitosis'],
  rules: {
    "@typescript-eslint/no-explicit-any": "off"
  }
};
