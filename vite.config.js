import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vite.dev/config/
dotenv.config()
export default defineConfig({
 define: {
    'process.env': process.env
 },

  plugins: [react()],
})
