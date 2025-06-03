<div class="container">
  <slot />
</div>

<style>
  .container {
    max-width: 90rem; /* This was an example. Original .layout was 960px. */
                     /* app.css doesn't explicitly define .container, so this is fine. */
    width: 90%; /* Or use a specific width like 960px from original .layout */
                 /* Let's match original .layout more closely */
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem; /* Adjust if needed */
    padding-right: 1rem; /* Adjust if needed */
  }
</style>
