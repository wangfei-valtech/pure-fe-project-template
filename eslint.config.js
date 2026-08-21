import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier/flat'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

const typescriptFiles = ['**/*.{ts,tsx,mts,cts}']
const reactFiles = ['**/*.{jsx,tsx}']

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '**/.*'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['*.config.{js,cjs,mjs,ts}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  ...tseslint.configs['flat/recommended'].map((config) => ({
    ...config,
    files: typescriptFiles,
    languageOptions: {
      ...config.languageOptions,
      parser: tsParser,
    },
  })),
  {
    files: reactFiles,
    ...react.configs.flat['jsx-runtime'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: reactFiles,
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  prettier,
]
