// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Sitio 100 % estático (SSG): Cloudflare Pages sirve `dist/` directamente.
export default defineConfig({
  site: 'https://orbita.stevemoya.me',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Evitar que Astro inlinee scripts pequeños en el HTML (default Vite 4096 B):
      // la CSP `script-src 'self'` bloquea los <script> inline → el contenido
      // quedaba con opacity:0 (reveal nunca corría). Con 0, todo script es externo.
      assetsInlineLimit: 0,
    },
  },
  security: {
    checkOrigin: true,
  },
});
