<script lang="ts">
  import { CMS_NAME } from '$lib/constants';
</script>

<header class="site-header"> <!-- Use class from global app.css -->
  <h2>
    <a href="/" class="hover:underline">{CMS_NAME}</a>
  </h2>
</header>

<style>
  /* Most styles are now in app.css under .site-header */
  /* Keep only truly component-specific styles if any, or remove style tag */
  .hover\:underline:hover { /* This is fine if app.css .site-header a doesn't cover it */
    text-decoration: underline;
  }
</style>
