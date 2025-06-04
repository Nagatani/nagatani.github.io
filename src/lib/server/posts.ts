import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Corrected import based on build error suggestion for CommonJS module
import pkgZennMarkdown from 'zenn-markdown-html';
const { markdownToHtml } = pkgZennMarkdown;
// If 'markdownToHtml' was not found on pkgZennMarkdown, an alternative would be that pkgZennMarkdown itself is the function:
// const markdownToHtml = pkgZennMarkdown; // This would be if module.exports = function() { ... }
// But the error "Named export 'markdownToHtml' not found" and the suggestion imply destructuring is needed.

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs(): string[] {
  try {
    const allFiles = fs.readdirSync(postsDirectory);
    const slugs = allFiles.filter(
      (filePath) => filePath.charAt(0) !== '.' && filePath.charAt(0) !== '_' && filePath.endsWith('.md')
    );
    return slugs;
  } catch (error) {
    console.error('Error reading post slugs:', error);
    return [];
  }
}

export interface Post {
  slug: string;
  content: string; // Raw markdown content
  html: string;    // Rendered HTML content
  [key: string]: any;
}

export function getPostBySlug(slug: string, fields: string[] = []): Post | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content: rawMarkdownContent } = matter(fileContents);

    // Use the correctly imported function via destructuring from the default import
    const htmlContent = markdownToHtml(rawMarkdownContent);

    const items: Omit<Post, 'content' | 'html' | 'slug' | keyof typeof data> & { slug: string; content: string; html: string; [key: string]: any; } = {
        slug: realSlug,
        content: rawMarkdownContent,
        html: htmlContent
    };

    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      } else if (field === 'content') {
        items[field] = rawMarkdownContent;
      } else if (field === 'html') {
        items[field] = htmlContent;
      } else if (typeof data[field] !== 'undefined') {
        items[field] = data[field];
      }
    });

    if (fields.length === 0 || fields.includes('*')) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          items[key] = data[key];
        }
      }
    }

    if (data.date) items.date = data.date;
    if (data.title) items.title = data.title;

    return items as Post;
  } catch (error) {
    console.error(`Error reading or processing post by slug "${slug}":`, error);
    return null;
  }
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => {
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
