import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
    outDir: './docs',
    site: 'https://nkte8.github.io/astro-practice/',
    integrations: [relativeLinks()]
});
