import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Define the posts directory, assuming it's at the root of the project
const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs(): string[] {
  try {
    const allFiles = fs.readdirSync(postsDirectory);
    // Filter out files starting with '.' or '_' and ensure they are .md files
    const slugs = allFiles.filter(
      (filePath) => filePath.charAt(0) !== '.' && filePath.charAt(0) !== '_' && filePath.endsWith('.md')
    );
    return slugs;
  } catch (error) {
    console.error('Error reading post slugs:', error);
    return []; // Return empty array on error
  }
}

export interface Post {
  slug: string;
  content: string;
  [key: string]: any; // For other frontmatter fields like title, date, coverImage, etc.
}

export function getPostBySlug(slug: string, fields: string[] = []): Post | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: Post = { slug: realSlug, content };

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      } else if (field === 'content') {
        items[field] = content;
      } else if (typeof data[field] !== 'undefined') {
        items[field] = data[field];
      }
    });

    // Add all frontmatter data if no specific fields are requested, or if fields includes '*'
    if (fields.length === 0 || fields.includes('*')) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          items[key] = data[key];
        }
      }
    }

    // Ensure essential fields like title and date are present, even if not in 'fields'
    // This helps prevent errors in components expecting these fields.
    // However, the original API only returned requested fields. Let's stick to that for now.
    // If `data.date` exists, ensure it's properly formatted or typed if necessary.
    // For now, we assume it's a string as in the original.
    if (data.date) {
        items.date = data.date;
    }
    if (data.title) {
        items.title = data.title;
    }


    return items;
  } catch (error) {
    console.error(`Error reading post by slug "${slug}":`, error);
    return null; // Return null if file not found or other error
  }
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post): post is Post => post !== null) // Type guard to filter out nulls
    // sort posts by date in descending order
    .sort((post1, post2) => {
      // Ensure date fields exist and are comparable, defaulting if necessary
      const date1 = post1.date ? new Date(post1.date).getTime() : 0;
      const date2 = post2.date ? new Date(post2.date).getTime() : 0;
      return date1 > date2 ? -1 : 1;
    });
  return posts;
}

export function getAllPostsWithOutNoDate(fields: string[] = []): Post[] {
  const allPosts = getAllPosts(fields);
  return allPosts.filter(post => typeof post.date !== 'undefined' && post.date !== null);
}
