<script lang="ts">
  import DateFormatter from '$lib/components/DateFormatter.svelte';

  export let title: string;
  export let date: string;
  export let excerpt: string;
  export let slug: string;

  // Assuming 'coverImage' might be passed if needed in the future,
  // but the original component didn't use it.
  // export let coverImage: { url: string } | string | undefined = undefined;
</script>

<div class="post-preview">
  <h3 class="postTitle">
    <a href={`/posts/${slug}`} class="hover_underline">{title}</a>
  </h3>
  {#if date}
  <div class="date">
    <DateFormatter {dateString} />
  </div>
  {/if}
  {#if excerpt}
  <p class="excerpt">{excerpt}</p>
  {/if}
</div>

<style>
  .post-preview {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee; /* Example separator */
  }
  .post-preview:last-child {
    border-bottom: none;
  }
  .postTitle { /* Reusing class from PostTitle.svelte for consistency, or define locally */
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
  .postTitle a {
    text-decoration: none;
    color: inherit;
  }
  .hover_underline:hover {
    text-decoration: underline;
  }
  .date {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
  .excerpt {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
  }
</style>
