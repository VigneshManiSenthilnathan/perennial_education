import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/perennial_education/perennial_education/web-app/",
  plugins: [react()],
})
