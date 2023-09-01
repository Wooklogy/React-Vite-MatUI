module.exports = {
  env: {
    browser: true,
    es2021: true,
    node:true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'eslint-config-airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: ["@", "src/*"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/function-component-definition':'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'Prop spreading is forbidden': 'off',
    'Function component is not a function declaration': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define":"off",
    'react/display-name': 'off',
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
}