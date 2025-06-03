<script lang="ts">
  import '../app.css'; // Global styles
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Container from '$lib/components/Container.svelte'; // Often used for main content area
</script>

<div class="min-h-screen flex flex-col">
  <Header />

  <main class="flex-grow">
    <!--
      Typically, you might wrap the slot in a Container
      if you want consistent padding and max-width for page content.
      However, some pages might want full width, so this is a design choice.
      Let's assume for now that individual pages/layouts will apply their own top-level container if needed,
      or we can add one here. For a blog, a container for the slot is common.
    -->
    <Container>
      <slot />
    </Container>
  </main>

  <Footer />
</div>

<style>
  /* Ensure min-h-screen and flex-grow work as expected */
  .min-h-screen {
    min-height: 100vh;
  }
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-grow {
    flex-grow: 1;
  }
</style>
