<script lang="ts">
  import DateFormatter from '$lib/components/DateFormatter.svelte';

  export let title: string;
  export let date: string;
  export let excerpt: string;
  export let slug: string;
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
  /* All styles for .post-preview, .postTitle, .date, .excerpt are now primarily in app.css */
  /* Keep this style block if there are truly component-specific overrides or additions. */
  /* For example, if hover_underline needs to be scoped: */
  .hover_underline:hover {
    text-decoration: underline; /* This is likely covered by global 'a:hover' too */
  }
  /* If .post-preview has a specific last-child behavior not in app.css: */
  .post-preview:last-child {
     border-bottom: none; /* Assuming this wasn't in app.css or needs to be component-specific */
  }
</style>
