import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get1(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/npm-cluster/blog/${post.slug}/`,
		})),
	});
}

export async function get2(context) {
	const posts = await getCollection('recipes');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/npm-cluster/recipes/${post.slug}/`,
		})),
	});
}

export async function get3(context) {
	const posts = await getCollection('news');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/npm-cluster/news/${post.slug}/`,
		})),
	});
}

export async function get4(context) {
	const posts = await getCollection('gprojects');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/npm-cluster/gprojects/${post.slug}/`,
		})),
	});
}