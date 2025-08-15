import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your framework plugin

export default defineConfig({
  plugins: [react()],
  base: '/traze-trade/', // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})