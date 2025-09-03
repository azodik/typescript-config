// Import TypeScript configurations
import baseConfig from './base.json' with { type: 'json' };
import nextjsConfig from './nextjs.json' with { type: 'json' };
import reactLibraryConfig from './react-library.json' with { type: 'json' };

// Export configurations
export { baseConfig, nextjsConfig, reactLibraryConfig };

// Export as default
export default {
  base: baseConfig,
  nextjs: nextjsConfig,
  reactLibrary: reactLibraryConfig
};
