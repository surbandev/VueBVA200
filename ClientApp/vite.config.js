import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'

const developmentCertificateName = 'localhost.pfx';

const httpsSettings = fs.existsSync(
  developmentCertificateName
)
  ? {
      pfx: fs.readFileSync(developmentCertificateName),
      passphrase: 'daxoris#1',
    }
  : {};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: httpsSettings,
  },
})
