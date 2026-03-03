import { defineConfig } from 'eslint/config';

import { baseConfig } from '@protodo/eslint-config/base';
import { reactConfig } from '@protodo/eslint-config/react';

export default defineConfig(
    {
        ignores: ['dist/**'],
    },
    baseConfig,
    reactConfig
);
