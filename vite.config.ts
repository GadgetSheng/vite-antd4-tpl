import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import unocss from 'unocss/vite';
import {
  createStyleImportPlugin,
  AntdResolve,
} from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/next/',
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true },
    },
  },
  plugins: [
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
    react(),
    unocss(),
  ],
});
