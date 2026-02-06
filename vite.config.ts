import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = 'Kotlin-Bhilai-Web-Page'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${repo}/` : '/'
}))
