module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-uses-vars": ["error"],
    "indent": [1, 2],
    "linebreak-style": ["error", "unix"],
    "quotes": [1, "single"],
    "semi": [1, "always"],
    "no-irregular-whitespace": [1, {
      "skipStrings": true
    }],
    "no-console": 0,
    "no-trailing-spaces": [1, {
      "skipBlankLines": false
    }],
    "no-whitespace-before-property": [1],
    "no-tabs": [1],
    "dot-notation": 1,
    "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "allowImportExportEverywhere": true
  }
};
