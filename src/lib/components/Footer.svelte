<script lang="ts">
  import Container from '$lib/components/Container.svelte';
</script>

<footer class="footer">
  <Container>
    <div class="footer-content">
      <a href="/posts/about" class="hover_underline">
        About this web site.
      </a>
      <small>&copy;2022- <a href="https://nagatani.me/" target="_blank" rel="noopener noreferrer">Nagatani</a></small>
    </div>
  </Container>
</footer>

<style>
  .footer {
    padding: 2rem 0;
    background-color: #f8f9fa; /* Example */
    text-align: center;
    font-size: 0.9rem;
    border-top: 1px solid #eee; /* Example */
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer a {
    color: inherit;
  }
  .hover_underline:hover {
    text-decoration: underline;
  }
  small {
    display: block; /* Or inline-block as needed */
  }
</style>
