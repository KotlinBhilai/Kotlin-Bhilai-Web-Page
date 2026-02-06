import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = 'bhilai-kotlin-user-group'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? `/${repo}/` : '/'
})
