<script lang="ts">
  import ArchivesPostPreview from '$lib/components/ArchivesPostPreview.svelte';

  export let posts: Array<{
    slug: string;
    title: string;
    date: string;
    // No excerpt needed for archive view based on original component
  }>;

  // Sorting is handled server-side by getAllPosts.
</script>

<section class="archive-stories-section">
  {#each posts as post (post.slug)}
    <ArchivesPostPreview
      slug={post.slug}
      title={post.title}
      date={post.date}
    />
  {/each}
</section>

<style>
  .archive-stories-section {
    margin-top: 1.5rem;
  }
</style>
