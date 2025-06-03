<script lang="ts">
  import { CMS_NAME } from '$lib/constants';
</script>

<section class="post-header">
  <h2>
    <a href="/" class="hover:underline">{CMS_NAME}</a>
  </h2>
</section>

<style>
  .post-header {
    /* Add styles based on the original Next.js project */
    padding: 1rem 0;
    text-align: center; /* Example */
    border-bottom: 1px solid #eee; /* Example */
  }
  .post-header h2 {
    margin: 0;
    font-size: 1.5rem; /* Example */
  }
  .post-header a {
    text-decoration: none;
    color: inherit;
  }
  .hover\:underline:hover {
    text-decoration: underline;
  }
</style>
