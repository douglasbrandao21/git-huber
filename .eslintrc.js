module.exports = {
  env: {
    es6: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readable',
    SharedArrayBuffer: 'readable'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {}
    }
  }
}
