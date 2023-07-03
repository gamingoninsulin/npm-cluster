import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://gamingoninsulin.github.io',
	base: 'cluster',
	integrations: [mdx(), sitemap()],
});
