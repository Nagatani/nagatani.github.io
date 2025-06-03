<script lang="ts">
  import '../app.css'; // Global styles
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Container from '$lib/components/Container.svelte';
</script>

<div class="layout-wrapper min-h-screen flex flex-col">
  <Header />

  <!-- Apply class for padding due to fixed header -->
  <main class="main-content-area flex-grow">
    <!-- Container is still used here for centered, max-width content -->
    <Container>
      <slot />
    </Container>
  </main>

  <Footer />
</div>

<style>
  /* These utility classes can remain if not covered by app.css, or be moved */
  .layout-wrapper { /* Renamed to avoid conflict if "layout" has meaning in app.css */
    /* display: flex; /* Already in app.css potentially or here */
    /* flex-direction: column; /* Already in app.css or here */
    /* min-height: 100vh; /* Already in app.css or here */
  }
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

  /* .main-content-area class styles are now in app.css */
</style>
