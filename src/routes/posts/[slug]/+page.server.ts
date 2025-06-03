import { getPostBySlug } from '$lib/server/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'date',
    'content',
    'coverImage',
    'author', // Assuming 'author' might be a field
    'ogImage' // Assuming 'ogImage' might be a field
  ]);

  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    post
  };
};
