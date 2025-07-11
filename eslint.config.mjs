import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: true
});

export default [
  ...compat.extends(
    'next/core-web-vitals',
    'next/babel'
  ),
  {
    ignores: ['node_modules/*', '.next/*', 'public/*']
  }
];
