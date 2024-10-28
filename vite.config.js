import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@redux": "/src/redux",
      "@styles": "/src/styles",
      "@helpers": "/src/helpers",
      "@services": "/src/services",
    },
  },
})
