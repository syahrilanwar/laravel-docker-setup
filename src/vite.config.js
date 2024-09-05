import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        
    ],
    server: {
        host: '0.0.0.0', // Akses dari luar container
        port: 3000, // Port yang sama seperti yang dipetakan dalam docker-compose.yml
        strictPort: true, // Opsional: Jika true, server akan berhenti jika port tidak tersedia
    },
});
