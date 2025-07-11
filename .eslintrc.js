module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'next/core-web-vitals'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-types': 'off'
    },
};