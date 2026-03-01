import { defineConfig } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'

export const reactConfig = defineConfig(
    {
        files: ['**/*.ts', '**/*.tsx'],
        ...reactPlugin.configs.flat.recommended,
        ...reactPlugin.configs.flat['jsx-runtime'],
        languageOptions: {
            ...reactPlugin.configs.flat.recommended?.languageOptions,
            ...reactPlugin.configs.flat['jsx-runtime']?.languageOptions,
            globals: {
                React: 'writable',
            },
        },
    },
    reactHooks.configs.flat['recommended-latest']!
)
