// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    // Malé CSS rovnou do HTML, ať neblokuje první vykreslení
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
