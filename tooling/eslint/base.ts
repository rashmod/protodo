import { defineConfig } from 'eslint/config'
import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import importPlugin from 'eslint-plugin-import'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import turboPlugin from 'eslint-plugin-turbo'

export const restrictEnvAccess = defineConfig(
    { ignores: ['**/env.ts'] },
    {
        files: ['**/*.js', '**/*.ts', '**/*.tsx'],
        rules: {
            'no-restricted-properties': [
                'error',
                {
                    object: 'process',
                    property: 'env',
                    message:
                        "Use `import { env } from '~/env'` instead to ensure validated types.",
                },
            ],
            'no-restricted-imports': [
                'error',
                {
                    name: 'process',
                    importNames: ['env'],
                    message:
                        "Use `import { env } from '~/env'` instead to ensure validated types.",
                },
            ],
        },
    }
)

export const baseConfig = defineConfig(
    includeIgnoreFile(path.join(import.meta.dirname, '../../.gitignore')),
    { ignores: ['**/*.config.*'] },
    {
        files: ['**/*.js', '**/*.ts', '**/*.tsx'],
        plugins: {
            import: importPlugin,
        },
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        rules: {
            ...turboPlugin.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-misused-promises': [
                2,
                { checksVoidReturn: { attributes: false } },
            ],
            '@typescript-eslint/no-unnecessary-condition': [
                'error',
                {
                    allowConstantLoopConditions: true,
                },
            ],
            '@typescript-eslint/no-non-null-assertion': 'error',
            'import/consistent-type-specifier-style': [
                'error',
                'prefer-top-level',
            ],
        },
    },
    {
        linterOptions: { reportUnusedDisableDirectives: true },
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    }
)
