<script lang="ts">
  import Container from '$lib/components/Container.svelte';
</script>

<footer class="site-footer"> <!-- Use class from global app.css -->
  <Container>
    <!-- Add a class here if .site-footer .container-inner needs to apply -->
    <div class="container-inner">
      <a href="/posts/about" class="hover_underline">
        About this web site.
      </a>
      <small>&copy;2022- <a href="https://nagatani.me/" target="_blank" rel="noopener noreferrer">Nagatani</a></small>
    </div>
  </Container>
</footer>

<style>
  /* Most styles are now in app.css under .site-footer */
  /* Keep only truly component-specific styles if any, or remove style tag */
  .hover_underline:hover {
    text-decoration: underline;
  }
  /* .container-inner styles are in app.css if needed */
</style>
