<script lang="ts">
  import type { PageData } from './$types';
  import Meta from '$lib/components/Meta.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import Stories from '$lib/components/Stories.svelte'; // Import Stories
  import { CMS_NAME } from '$lib/constants';

  export let data: PageData;
</script>

<Meta
  title={`{CMS_NAME} - Blog`}
  description={"All blog posts from " + CMS_NAME}
/>

<Intro />

<!-- Removed the explicit "Blog Posts" h1, Stories can manage its own presentation or an h1 can be added here if desired -->
<!-- <h1>Blog Posts</h1> -->

{#if data.posts && data.posts.length}
  <Stories posts={data.posts} />
{:else}
  <p>No posts found.</p>
{/if}

<style>
  /* Styles for "Blog Posts" heading, if needed, or can be removed if Stories handles it */
  /* h1 {
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
  } */
</style>
