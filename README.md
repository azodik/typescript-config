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

### Extending Configurations

After installing the package, you can extend the configurations using relative paths in your project:

#### Base Configuration

```json
{
  "extends": "./node_modules/@azodik/typescript-config/base.json"
}
```

#### Next.js Projects

```json
{
  "extends": "./node_modules/@azodik/typescript-config/nextjs.json"
}
```

#### React Libraries

```json
{
  "extends": "./node_modules/@azodik/typescript-config/react-library.json"
}
```

### Alternative: Copy and Extend

You can also copy the configuration files to your project and extend them:

```bash
# Copy the configs to your project
cp node_modules/@azodik/typescript-config/base.json ./tsconfig-base.json
cp node_modules/@azodik/typescript-config/nextjs.json ./tsconfig-nextjs.json
cp node_modules/@azodik/typescript-config/react-library.json ./tsconfig-react.json
```

Then extend them locally:

```json
{
  "extends": "./tsconfig-base.json"
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

// Or import the default export
import configs from '@azodik/typescript-config';
console.log(configs.base.compilerOptions.strict); // true
```

## Available Configurations

- **`base.json`**: Default TypeScript configuration with strict settings
  - ES2022 target
  - Strict mode enabled
  - Node.js module resolution
  - Declaration file generation
  
- **`nextjs.json`**: Next.js specific configuration extending base
  - ESNext module system
  - Bundler module resolution
  - JSX preservation
  - Next.js plugin support
  
- **`react-library.json`**: React library configuration extending base
  - React JSX transform
  - Extends base configuration

## Features

- **Strict TypeScript settings** - Comprehensive type checking and safety
- **Modern ES2022 target** - Latest JavaScript features
- **Flexible module resolution** - Support for both Node.js and bundler environments
- **Declaration file generation** - Full TypeScript support
- **JSON module support** - Direct import of configuration files
- **Extensible design** - Easy to extend and customize
- **Dual usage** - Extend JSON files OR import programmatically

## Requirements

- TypeScript 5.9.2 or higher
- Node.js 18+ (for ES modules support)

## License

MIT
