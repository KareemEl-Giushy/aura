module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "no-mixed-spaces-and-tabs": 0,
    "no-console": "off",
    "no-unused-vars": "off",

  }
}
