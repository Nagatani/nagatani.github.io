<script lang="ts">
  import PostPreview from '$lib/components/PostPreview.svelte';
  // Assuming the Post type from the server/posts.ts is compatible
  // or we can define a local type if needed.
  // For now, we expect posts to have: slug, title, date, excerpt.
  export let posts: Array<{
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    // coverImage?: { url: string } | string; // if needed in PostPreview
  }>;

  // Sorting is now handled server-side by default in getAllPosts.
  // If client-side sort were needed:
  // $: sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<section class="stories-section">
  {#each posts as post (post.slug)}
    <PostPreview
      slug={post.slug}
      title={post.title}
      date={post.date}
      excerpt={post.excerpt}
    />
    <!-- Example of a valid comment placement: information about the PostPreview above -->
  {/each}
</section>

<style>
  .stories-section {
    margin-top: 2rem;
  }
</style>
