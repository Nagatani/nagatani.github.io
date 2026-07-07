// @ts-check

import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://nagatani.github.io',
	markdown: {
		processor: unified({
			rehypePlugins: [
				[
					rehypeExternalLinks,
					{
						target: '_blank',
						rel: ['nofollow', 'noopener', 'noreferrer'],
					},
				],
			],
		}),
	},
	integrations: [
		mdx(),
		sitemap(),
	],
});
