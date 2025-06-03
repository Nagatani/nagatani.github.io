<script lang="ts">
  import type { PageData } from './$types';
  import Meta from '$lib/components/Meta.svelte';
  import PostTitle from '$lib/components/PostTitle.svelte';
  // import PostHeader from '$lib/components/PostHeader.svelte'; // Will be created soon
  // import PostBody from '$lib/components/PostBody.svelte'; // Will be created soon
  import DateFormatter from '$lib/components/DateFormatter.svelte';

  export let data: PageData;

  // Construct image URLs correctly, assuming they are relative to the static folder
  // The server load function should provide the correct base path if necessary,
  // or constants.ts could define a base URL for assets.
  // For now, assuming coverImage is a relative path like '/assets/post-image.jpg'
  const coverImageUrl = data.post.coverImage?.url || data.post.coverImage;
</script>

<Meta
  title={data.post.title}
  description={data.post.excerpt || data.post.content?.substring(0, 150)}
  image={coverImageUrl}
  canonicalUrl={`/posts/${data.post.slug}`}
/>

<article>
  <!-- PostHeader will go here -->
  <PostTitle>{data.post.title}</PostTitle>
  {#if data.post.date}
    <DateFormatter dateString={data.post.date} />
  {/if}

  {#if coverImageUrl}
    <img src={coverImageUrl} alt={`Cover image for ${data.post.title}`} class="cover-image"/>
  {/if}

  <!-- PostBody will go here to render actual content -->
  <div class="post-content">
    {@html data.post.content || '<p>Loading content...</p>'}
  </div>
</article>

<style>
  article {
    max-width: 800px; /* Or use a Container component */
    margin: 2rem auto;
    padding: 1rem; /* Example padding */
  }
  .cover-image {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .post-content {
    margin-top: 1.5rem;
  }
  /* Add more styles for PostTitle, DateFormatter if needed, or rely on their internal styles */
</style>
