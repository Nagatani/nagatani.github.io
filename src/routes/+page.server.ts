import { getAllPostsWithOutNoDate } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = getAllPostsWithOutNoDate(['slug', 'title', 'date', 'excerpt', 'coverImage']);
  return {
    posts
  };
};

export const prerender = true; // Explicitly set prerender for homepage
