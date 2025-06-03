<script lang="ts">
  import type { PageData } from './$types';
  import Meta from '$lib/components/Meta.svelte';
  import PostHeader from '$lib/components/PostHeader.svelte';
  import PostBody from '$lib/components/PostBody.svelte';
  import Container from '$lib/components/Container.svelte';

  export let data: PageData;

  const post = data.post; // post object now contains 'html' and 'content' (raw)
  const coverImageUrl = post.coverImage?.url || post.coverImage;
</script>

<!-- Use raw content for excerpt for the description meta tag -->
<Meta
  title={post.title}
  description={post.excerpt || post.content?.substring(0, 150)}
  image={coverImageUrl}
  canonicalUrl={`/posts/${post.slug}`}
/>

<article class="post-article">
  <Container>
    <PostHeader
      title={post.title}
      date={post.date}
      coverImage={coverImageUrl}
      coverImageAlt={`Cover for ${post.title}`}
    />

    <PostBody html={post.html} /> {/* Pass the 'html' field */}
  </Container>
</article>

<style>
  .post-article {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
</style>
