import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      'node_modules/',
      '.vitepress/dist/',
      '.vitepress/cache/',
      '**/*.md'
    ],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    }
  }
];
