import { getAllPosts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // Fetching all fields for archives might be desired
  const posts = getAllPosts(['slug', 'title', 'date', 'excerpt']);
  return {
    posts
  };
};
