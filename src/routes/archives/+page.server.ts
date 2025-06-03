import { getAllPosts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = getAllPosts(['slug', 'title', 'date', 'excerpt']);
  return {
    posts
  };
};

export const prerender = true; // Explicitly set prerender for archives page
