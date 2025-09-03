# `@azodik/typescript-config`

Shared TypeScript configuration for Azodik projects.

## Installation

```bash
npm install @azodik/typescript-config
```

## Usage

### Base Configuration

```json
{
  "extends": "@azodik/typescript-config/base.json"
}
```

### Next.js Projects

```json
{
  "extends": "@azodik/typescript-config/nextjs.json"
}
```

### React Libraries

```json
{
  "extends": "@azodik/typescript-config/react-library.json"
}
```

## Available Configurations

- **base.json**: Default TypeScript configuration with strict settings
- **nextjs.json**: Next.js specific configuration extending base
- **react-library.json**: React library configuration extending base

## Features

- Strict TypeScript settings
- Modern ES2022 target
- Node.js module resolution
- Declaration file generation
- JSON module support
