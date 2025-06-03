<script lang="ts">
  import DateFormatter from '$lib/components/DateFormatter.svelte';

  export let title: string;
  export let date: string;
  export let slug: string;
</script>

<div class="archive-post-preview">
  {#if date}
  <div class="date">
    <DateFormatter {dateString} />
  </div>
  {/if}
  <span class="separator"> - </span>
  <h3 class="postTitle">
    <a href={`/posts/${slug}`} class="hover_underline">{title}</a>
  </h3>
</div>

<style>
  /* All styles for .archive-post-preview, .date, .postTitle, .separator are now primarily in app.css */
  /* display:flex and gap were in the component, ensure they are in app.css or kept here if specific */
  .archive-post-preview {
    display: flex;
    align-items: baseline;
    gap: 0.5rem; /* If not in app.css or needs to be specific */
  }
  .separator { /* If not in app.css or needs to be specific */
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: #666;
  }
  .hover_underline:hover {
    text-decoration: underline;
  }
</style>
