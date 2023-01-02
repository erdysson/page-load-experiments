module.exports = {
    root: true,
    ignorePatterns: ['**/*'],
    overrides: [
        {
            files: ['*.js'],
            env: {
                es6: true,
            },
            parserOptions: {
                ecmaVersion: 2020,
            },
            plugins: ['prettier', 'eslint-comments', 'eslint-plugin-prefer-arrow', 'eslint-plugin-sonarjs'],
            extends: [
                'eslint:recommended',
                'plugin:eslint-comments/recommended',
                'plugin:prettier/recommended',
                'plugin:sonarjs/recommended',
            ],
            rules: {
                'no-console': 'error',
                'no-var': 'error',
                'no-unused-vars': 'error',
                'no-unused-expressions': 'error',
                'prefer-const': 'error',
                'prefer-arrow/prefer-arrow-functions': 'error',
                'arrow-body-style': 'error',
                'prettier/prettier': [
                    'error',
                    {
                        endOfLine: 'auto',
                    },
                ],
                'padding-line-between-statements': [
                    'error',
                    {
                        blankLine: 'always',
                        prev: '*',
                        next: 'return',
                    },
                ],
                'sonarjs/cognitive-complexity': ['error', 8],
            },
        },
    ],
};
