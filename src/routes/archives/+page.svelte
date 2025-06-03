<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Archives</h1>

{#if data.posts.length}
  <ul>
    {#each data.posts as post}
      <li>
        <a href={`/posts/${post.slug}`}>
          <h2>{post.title}</h2>
          {#if post.date}
            <p>{new Date(post.date).toLocaleDateString()}</p>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts to archive.</p>
{/if}

<style>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
  }
</style>
