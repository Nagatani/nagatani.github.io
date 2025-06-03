<script lang="ts">
  import { CMS_NAME } from '$lib/constants';
</script>

<!-- If Intro is meant to be the main site header on the homepage, it should use site-header -->
<!-- If it's a secondary header below the fixed one, it needs different styling. -->
<!-- Based on original CSS, .intro-header and .post-header were styled identically (fixed). -->
<!-- Let's assume for now it's NOT the main fixed header, but a section header. -->
<header class="intro-section-header">
  <h1>{CMS_NAME}</h1>
</header>

<style>
  /* Styles for a non-fixed intro header section */
  .intro-section-header {
    text-align: center;
    padding: 2rem 0;
    background-color: #f0f0f0; /* Original example color */
    margin-bottom: 2rem; /* Space it out */
  }
  .intro-section-header h1 {
    font-size: 2.5rem; /* Example */
    margin: 0;
    font-family: "Azeret Mono", monospace; /* From original .intro-header */
  }
</style>
