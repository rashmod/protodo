/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    tabWidth: 4,

    plugins: [
        '@ianvs/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],

    tailwindFunctions: ['cn', 'cva'],
    importOrder: [
        '<TYPES>',
        '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
        '^(next/(.*)$)|^(next$)',
        '^(expo(.*)$)|^(expo$)',
        '<THIRD_PARTY_MODULES>',
        '',
        '<TYPES>^@protodo',
        '^@protodo/(.*)$',
        '',
        '<TYPES>^[.|..|~]',
        '^~/',
        '^[../]',
        '^[./]',
    ],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.0',

    overrides: [
        {
            files: '*.json.hbs',
            options: {
                parser: 'json',
            },
        },
        {
            files: '*.ts.hbs',
            options: {
                parser: 'babel',
            },
        },
    ],
};

export default config;
