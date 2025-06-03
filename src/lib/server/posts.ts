import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import zennMarkdownToHtml from 'zenn-markdown-html'; // Import Zenn's converter

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

    // Convert Markdown to HTML using zenn-markdown-html
    const htmlContent = zennMarkdownToHtml(rawMarkdownContent);

    // Base items, always include slug, raw content, and HTML content
    const items: Omit<Post, 'content' | 'html' | 'slug' | keyof typeof data> & { slug: string; content: string; html: string; [key: string]: any; } = {
        slug: realSlug,
        content: rawMarkdownContent,
        html: htmlContent
    };


    // Populate requested fields from frontmatter (data)
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      } else if (field === 'content') { // if 'content' is requested, provide raw markdown
        items[field] = rawMarkdownContent;
      } else if (field === 'html') { // if 'html' is requested, provide rendered html
        items[field] = htmlContent;
      } else if (typeof data[field] !== 'undefined') {
        items[field] = data[field];
      }
    });

    // Ensure all frontmatter data is included if no specific fields are requested (or '*')
    // and also ensure that slug, content, html are there even if not explicitly asked for by 'fields'
    // because they are part of the Post interface.
    if (fields.length === 0 || fields.includes('*')) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          items[key] = data[key];
        }
      }
    }

    // Ensure essential frontmatter fields like title and date are present if they exist in data
    if (data.date) items.date = data.date;
    if (data.title) items.title = data.title;

    return items as Post; // Cast to Post, assuming all necessary fields are populated
  } catch (error) {
    console.error(`Error reading post by slug "${slug}":`, error);
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
