import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import { presetAttributify, presetIcons, transformerVariantGroup } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
    ],
    transformers: [
      transformerVariantGroup(),
    ],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
