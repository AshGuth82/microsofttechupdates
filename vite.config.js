import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This tells the builder engine how to compile the React and Tailwind dashboard
export default defineConfig({
  plugins: [react()],
})
