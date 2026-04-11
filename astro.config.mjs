import { defineConfig } from 'astro/config';

export default defineConfig({
    markdown: {
        shikiConfig: {
            // Tema Dracula clásico para los bloques de código
            theme: 'dracula',
        },
    },
});