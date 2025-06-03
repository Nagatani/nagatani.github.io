import { render, screen, cleanup } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Homepage from '../+page.svelte'; // Importing the Svelte component for the page
import type { PageData } from '../$types'; // Importing the PageData type

// Mock the $app/stores module
vi.mock('$app/stores', async () => { // Added async here
  const { readable } = await import('svelte/store');
  const mockPageStore = readable({
    url: new URL('http://localhost'),
    params: {},
    route: { id: null },
    status: 200,
    error: null,
    data: {}, // This might need to be populated depending on what Meta component needs
    form: undefined
  });
  return {
    page: mockPageStore,
    // Mock other stores if needed (navigating, updated)
    navigating: readable(null),
    updated: readable(false),
  };
});


// Mock $lib/server/posts
// The actual +page.server.ts calls getAllPostsWithOutNoDate.
// We are not testing +page.server.ts directly here, but the +page.svelte component.
// The data that +page.server.ts would load is passed as `data` prop to +page.svelte.
// So, we don't need to mock getAllPostsWithOutNoDate for THIS specific test of +page.svelte,
// we just need to provide the `data` prop.

describe('Homepage (+page.svelte)', () => {

  const mockPosts = [
    { slug: 'post-1', title: 'First Post Title', date: '2023-01-01T00:00:00Z', excerpt: 'Excerpt 1', coverImage: 'img1.jpg' },
    { slug: 'post-2', title: 'Second Post Title', date: '2023-01-02T00:00:00Z', excerpt: 'Excerpt 2', coverImage: 'img2.jpg' },
  ];

  // Ensure mockPageData matches the structure expected by +page.svelte,
  // which includes properties that might be used by child components like Meta.
  // Based on +page.svelte, data.posts is the main thing.
  // Meta component on homepage gets title and description directly, not from data.post.
  const mockPageData: PageData = {
    posts: mockPosts
    // If PageData had other top-level properties used by Homepage.svelte or its direct children (not from posts),
    // they would be added here. For example, if Meta took a specific 'siteDescription' prop from PageData.
  };

  beforeEach(() => {
    // Potentially set up mocks for any child components if deep testing is not desired,
    // but for an integration-like test, letting them render is fine.
  });

  afterEach(() => {
    cleanup(); // Cleans up the DOM after each test
  });

  it('renders Intro component (implicitly checks for CMS_NAME)', async () => {
    render(Homepage, { props: { data: mockPageData } });
    // CMS_NAME is "Memorandum"
    // Check if the Intro component's content (CMS_NAME) is present
    expect(screen.getByText('Memorandum')).toBeInTheDocument();
  });

  it('renders a list of posts using Stories and PostPreview', async () => {
    render(Homepage, { props: { data: mockPageData } });

    // Check for post titles
    expect(screen.getByText('First Post Title')).toBeInTheDocument();
    expect(screen.getByText('Second Post Title')).toBeInTheDocument();

    // Check for post dates (formatted by DateFormatter via PostPreview)
    expect(screen.getByText(/2023\/01\/01/)).toBeInTheDocument();
    expect(screen.getByText(/2023\/01\/02/)).toBeInTheDocument();

    // Check for excerpts
    expect(screen.getByText('Excerpt 1')).toBeInTheDocument();
    expect(screen.getByText('Excerpt 2')).toBeInTheDocument();

    // Check if links to posts are correct
    const link1 = screen.getByText('First Post Title').closest('a');
    expect(link1).toHaveAttribute('href', '/posts/post-1');
    const link2 = screen.getByText('Second Post Title').closest('a');
    expect(link2).toHaveAttribute('href', '/posts/post-2');
  });

  it('renders "No posts found" when no posts are provided', () => {
    const noPostsData: PageData = { posts: [] }; // Correctly typed
    render(Homepage, { props: { data: noPostsData } });
    expect(screen.getByText('No posts found.')).toBeInTheDocument();
  });

  // Test for Meta component (basic check, actual head content is harder)
  it('renders Meta component and sets document title', () => {
    render(Homepage, { props: { data: mockPageData } });
    // Check if document.title gets updated by the Meta component
    // The Meta component for the homepage sets title to: {CMS_NAME} - Blog
    expect(document.title).toBe("Memorandum - Blog");
  });

});
