import { getPostBySlug, getPostSlugs } from '$lib/server/posts'; // Added getPostSlugs
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types'; // Added EntryGenerator

export const load: PageServerLoad = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'date',
    'content', // Raw markdown for meta excerpt
    'html',    // HTML content for display
    'coverImage',
    'author',
    'ogImage',
    'excerpt' // Explicitly request excerpt if available from frontmatter
  ]);

  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    post
  };
};

export const prerender = true;

export const entries: EntryGenerator = () => {
  const slugs = getPostSlugs(); // Get all .md file names
  return slugs.map((filename) => ({
    slug: filename.replace(/\.md$/, '') // Remove .md for the slug parameter
  }));
};
