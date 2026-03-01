import { defineConfig } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

export const reactConfig = defineConfig(
    {
        files: ['**/*.ts', '**/*.tsx'],
        ...reactPlugin.configs.flat.recommended,
        ...reactPlugin.configs.flat['jsx-runtime'],
        plugins: {
            'jsx-a11y': jsxA11yPlugin,
        },
        languageOptions: {
            ...reactPlugin.configs.flat.recommended?.languageOptions,
            ...reactPlugin.configs.flat['jsx-runtime']?.languageOptions,
            ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
            globals: {
                React: 'writable',
            },
        },
        rules: {
            ...jsxA11yPlugin.flatConfigs.recommended.rules,
        },
    },
    reactHooks.configs.flat['recommended-latest']!
)
