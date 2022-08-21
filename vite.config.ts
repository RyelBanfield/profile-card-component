/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
import { defineConfig } from 'vite';

import eslint from '@rollup/plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/profile-card-component/',
  plugins: [
    { ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }), enforce: 'pre' },
    react(),
  ],
});
