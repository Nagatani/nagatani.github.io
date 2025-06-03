<script lang="ts">
  import PostTitle from '$lib/components/PostTitle.svelte';
  import DateFormatter from '$lib/components/DateFormatter.svelte';

  export let title: string;
  export let date: string;
  export let coverImage: string | undefined = undefined;
  export let coverImageAlt: string = '';
</script>

<header class="post-page-header">
  <PostTitle>{title}</PostTitle>
  <div class="meta-info">
    {#if date}
      <DateFormatter {dateString} />
    {/if}
  </div>
  {#if coverImage}
    <img src={coverImage} alt={coverImageAlt || `Cover image for ${title}`} class="cover-image" />
  {/if}
</header>

<style>
  /* These styles are likely specific to the post header on a single page */
  .post-page-header {
    margin-bottom: 2rem;
    text-align: center;
  }
  .meta-info {
    color: #666;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .cover-image {
    max-width: 100%;
    height: auto;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 8px;
  }
</style>
