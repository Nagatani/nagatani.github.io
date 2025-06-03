<script lang="ts">
  export let html: string; // Renamed from 'content' to 'html'
</script>

<div class="post-body-content znr"> <!-- Added .znr class for Zenn rendering -->
  {@html html}
</div>

<style>
  .post-body-content {
    line-height: 1.7;
    font-size: 1.1rem;
  }
  /* Zenn styles are applied via app.css through @import 'zenn-content-css/...'; */
  /* The .znr class is often used by Zenn's own renderer/CSS for root element */
</style>
