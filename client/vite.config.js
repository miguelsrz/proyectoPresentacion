import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://miguelsrz.github.io",
  server: {
    historyApiFallback: true, // Asegura que las rutas no fallen en el servidor
  },
})
