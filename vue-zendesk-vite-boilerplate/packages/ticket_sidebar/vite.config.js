import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as pluginPkg from "@app/zendesk/vite-plugin-inject-zaf-html/index.js";
const { injectZafHtmlPlugin } = pluginPkg.default;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), injectZafHtmlPlugin()],
  base: "./",
  build: {
    outDir: `${process.env.INIT_CWD}/dist/assets/${process.env.ADDON_TYPE}`,
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
