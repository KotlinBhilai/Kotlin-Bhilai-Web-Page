import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = 'bhilai-kotlin-user-group'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${repo}/` : '/'
}))
