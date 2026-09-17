import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dns from 'dns'
import tsconfigPaths from 'vite-tsconfig-paths'

dns.setDefaultResultOrder('verbatim')
tsconfigPaths()
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  server: {
    port: 3000,
  },
})