// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'airbnb',
//     'airbnb-typescript'
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       tsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: './tsconfig.json',
//   },
//   plugins: [
//     'react',
//     '@typescript-eslint',
//     'cypress',
//   ],
//   rules: {
//     'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
//     'linebreak-style': [0, 'error', 'windows'],
//     'import/extensions': [
//       'error',
//       'ignorePackages',
//       {
//         js: 'never',
//         jsx: 'never',
//         ts: 'never',
//         tsx: 'never',
//       },
//     ],
//     'react/require-default-props': [0],
//     'max-len': ['error', { 'code': 200 }]
//   },
//   overrides: [
//     {
//       'files': ['cypress'],
//       'rules': {
//         'require-jsdoc': 'off'
//       }
//     }
//   ]
// };
