<script lang="ts">
  import type { PageData } from './$types';
  import Meta from '$lib/components/Meta.svelte';
  import ArchiveStories from '$lib/components/ArchiveStories.svelte';
  import { CMS_NAME } from '$lib/constants';

  export let data: PageData;
</script>

<Meta
  title={`Archives - ${CMS_NAME}`}
  description={`All archived posts from ${CMS_NAME}`}
/>

<h1>Archives</h1>

{#if data.posts && data.posts.length}
  <ArchiveStories posts={data.posts} />
{:else}
  <p>No posts to archive.</p>
{/if}

<style>
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
</style>
