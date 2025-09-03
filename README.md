# `@azodik/typescript-config`

Shared TypeScript configuration for Azodik projects. This package provides pre-configured TypeScript configurations that can be extended in your projects.

## Installation

```bash
# Using npm
npm install -D @azodik/typescript-config

# Using pnpm
pnpm add -D @azodik/typescript-config

# Using yarn
yarn add -D @azodik/typescript-config
```

## Usage

### Base Configuration

```json
{
  "extends": "@azodik/typescript-config/src/base.json"
}
```

### Next.js Projects

```json
{
  "extends": "@azodik/typescript-config/src/nextjs.json"
}
```

### React Libraries

```json
{
  "extends": "@azodik/typescript-config/src/react-library.json"
}
```

### Programmatic Usage

You can also import the configurations programmatically:

```typescript
import { baseConfig, nextjsConfig, reactLibraryConfig } from '@azodik/typescript-config';

// Use the configurations directly
console.log(baseConfig.compilerOptions.target); // "ES2022"
console.log(nextjsConfig.compilerOptions.module); // "ESNext"
console.log(reactLibraryConfig.compilerOptions.jsx); // "react-jsx"
```

## Available Configurations

- **`src/base.json`**: Default TypeScript configuration with strict settings
  - ES2022 target
  - Strict mode enabled
  - Node.js module resolution
  - Declaration file generation
  
- **`src/nextjs.json`**: Next.js specific configuration extending base
  - ESNext module system
  - Bundler module resolution
  - JSX preservation
  - Next.js plugin support
  
- **`src/react-library.json`**: React library configuration extending base
  - React JSX transform
  - Extends base configuration

## Features

- **Strict TypeScript settings** - Comprehensive type checking and safety
- **Modern ES2022 target** - Latest JavaScript features
- **Flexible module resolution** - Support for both Node.js and bundler environments
- **Declaration file generation** - Full TypeScript support
- **JSON module support** - Direct import of configuration files
- **Extensible design** - Easy to extend and customize

## Requirements

- TypeScript 5.9.2 or higher
- Node.js 18+ (for ES modules support)

## License

MIT
