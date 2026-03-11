# AI Tester - Agent Guidelines

This document provides guidance for AI coding agents working in this codebase.

## Project Overview

AI Tester is a Quasar Framework application for testing and comparing AI models. It uses Vue 3 with TypeScript, Pinia for state management, and Vite as the build tool.

## Build Commands

```bash
# Install dependencies
yarn

# Start development server with hot reload
yarn dev

# Build for production
yarn build
```

## Linting and Formatting

```bash
# Run ESLint
yarn lint

# Format files with Prettier
yarn format
```

Type checking is integrated via vue-tsc in the dev server. TypeScript strict mode is enabled.

## Testing

Currently no test framework is configured. When adding tests, update the `test` script in package.json.

## Code Style

### Formatting (Prettier)

Configured in `prettier.config.js`:

- **Single quotes** for strings
- **Print width**: 120 characters
- **Tab width**: 2 spaces
- **Semicolons**: enabled
- **Trailing commas**: all
- **Arrow parens**: avoid
- **Bracket spacing**: true
- **Quote props**: as-needed
- **Prose wrap**: never

### EditorConfig

- **Indentation**: 2 spaces
- **End of line**: LF
- **Charset**: UTF-8
- **Trim trailing whitespace**: true
- **Insert final newline**: true

### TypeScript

- **Strict mode** is enabled
- Use **type imports** for types only: `import type { Foo } from './types'`
- Prefer interfaces for object types (enforced by `@typescript-eslint/consistent-type-definitions`)
- Use PascalCase for interfaces and types
- Explicit return types required for functions and module boundaries
- Unused variables with `_` prefix are ignored

### Vue Components

- Use `<script setup lang="ts">` syntax
- Define props with `defineProps<Props>()` and `withDefaults()`
- Use `ref<T>()` and `computed()` from Vue
- Use kebab-case in templates: `<example-component />`
- Use PascalCase when importing: `import ExampleComponent from '...'`
- **Attributes are sorted alphabetically** within their categories (enforced by `vue/attributes-order`)

### Imports Order

Imports are automatically sorted by `import-x/order` rule:

1. `builtin` - Node.js built-in modules
2. `external` - External packages (Vue, Pinia, axios, etc.)
3. `internal` - Internal modules (aliases like `components/`, `stores/`, `boot/`)
4. `parent` - Parent directory imports
5. `sibling` - Same directory imports
6. `index` - Index file imports

Each group separated by a blank line, sorted alphabetically.

### File Naming

- **Vue components**: PascalCase (e.g., `ExampleComponent.vue`, `IndexPage.vue`)
- **TypeScript files**: kebab-case (e.g., `example-store.ts`, `routes.ts`)
- **Interfaces/types**: PascalCase (e.g., `Todo`, `Meta`)

### Directory Structure

```
src/
├── boot/           # Boot files (run before app starts)
├── components/     # Reusable Vue components
├── css/            # Global styles
├── i18n/           # Internationalization files
├── layouts/        # Layout components
├── pages/          # Page components (route targets)
├── router/         # Vue Router configuration
├── stores/         # Pinia stores
├── App.vue         # Root component
└── env.d.ts        # Environment type declarations
```

## Quasar-Specific Patterns

### Boot Files

```typescript
import { defineBoot } from '#q-app/wrappers';

export default defineBoot(({ app }) => {
  // Configuration code
});
```

### Stores

Main store setup uses `defineStore` from `#q-app/wrappers`. Individual stores use Pinia directly:

```typescript
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ counter: 0 }),
  actions: { increment() { this.counter++; } },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
```

### Router

Use `defineRouter` from `#q-app/wrappers`. Use lazy loading for route components:

```typescript
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
];
```

## Error Handling

- No specific patterns are established in this codebase
- Consider using try/catch with async operations
- For API calls, handle axios errors appropriately

## ESLint Rules

Key rules configured in `eslint.config.js`:

### Vue
- `pluginVue.configs['flat/essential']`
- `vue/attributes-order`: alphabetical sorting within categories

### TypeScript
- `vueTsConfigs.recommendedTypeChecked`
- `@typescript-eslint/consistent-type-imports`: error
- `@typescript-eslint/consistent-type-definitions`: interface (error)
- `@typescript-eslint/explicit-function-return-type`: error
- `@typescript-eslint/explicit-module-boundary-types`: error
- `@typescript-eslint/no-explicit-any`: warn

### Imports
- `import-x/order`: alphabetical with newline between groups

### Other
- `no-debugger`: error in production, off in development

## Important Notes

- Supports SSR, PWA, Electron, Cordova, Capacitor, and BEX modes
- Vue Router mode is set to 'hash' by default
- HMR is configured for Pinia stores
- The `#q-app/wrappers` import alias is a Quasar-specific path for framework utilities
