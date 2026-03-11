import js from '@eslint/js';
import pluginQuasar from '@quasar/app-vite/eslint';
import ts from '@typescript-eslint/eslint-plugin';
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import importXPlugin from 'eslint-plugin-import-x';
import nodePlugin from 'eslint-plugin-node';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default defineConfigWithVueTs(
  {
    /**
     * Ignore the following files.
     * Please note that pluginQuasar.configs.recommended() already ignores
     * the "node_modules" folder for you (and all other Quasar project
     * relevant folders and files).
     *
     * ESLint requires "ignores" key to be the only one in this object
     */
    ignores: ['**/*.case.ts', '**/*.test.ts', '**/*.spec.ts'],
  },

  pluginQuasar.configs.recommended(),
  js.configs.recommended,

  /**
   * https://eslint.vuejs.org
   *
   * pluginVue.configs.base
   *   -> Settings and rules to enable correct ESLint parsing.
   * pluginVue.configs[ 'flat/essential']
   *   -> base, plus rules to prevent errors or unintended behavior.
   * pluginVue.configs["flat/strongly-recommended"]
   *   -> Above, plus rules to considerably improve code readability and/or dev experience.
   * pluginVue.configs["flat/recommended"]
   *   -> Above, plus rules to enforce subjective community defaults to ensure consistency.
   */
  pluginVue.configs['flat/essential'],

  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    },
  },
  // https://github.com/vuejs/eslint-config-typescript
  vueTsConfigs.recommendedTypeChecked,

  {
    files: ['**/*.ts', '**/*.js', '**/*.vue'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node, // SSR, Electron, config files
        process: 'readonly', // process.env.*
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly', // BEX related
        browser: 'readonly', // BEX related
      },
    },

    plugins: {
      '@typescript-eslint': ts,
      prettier: prettierPlugin,
      'import-x': importXPlugin,
      node: nodePlugin,
    },

    settings: {
      'import-x/resolver': {
        typescript: true,
        node: true,
      },
    },

    // add your custom rules here
    rules: {
      'prefer-promise-reject-errors': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // Vue attribute order
      'vue/attributes-order': [
        'error',
        {
          alphabetical: true,
        },
      ],

      // Базовые правила TypeScript
      ...ts.configs.recommended.rules,

      // Prettier
      'prettier/prettier': 'error',

      // Сортировка импортов через ESLint
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Node.js специфичные правила
      'node/no-missing-import': 'off',

      // Строгие типы
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      // Качество кода
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          args: 'all',
        },
      ],
    },
  },

  {
    files: ['src-pwa/custom-service-worker.ts'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
      },
    },
  },

  prettierSkipFormatting,
);
