<script lang="ts">
  import Container from '$lib/components/Container.svelte';

  export let preview: boolean = false;

  const baseClasses = 'border-b';
  $: alertClasses = preview
    ? `${baseClasses} bg-neutral-800 border-neutral-800 text-white`
    : `${baseClasses} bg-neutral-50 border-neutral-200`;
</script>

{#if preview}
  <div class="{alertClasses} alert-component"> <!-- Added .alert-component for scoping -->
    <Container>
      <div class="py-2 text-center text-sm">
        {#if preview}
          This page is a preview. <a href="/api/exit-preview" class="link-in-alert">Click here</a> to exit preview mode.
        {/if}
      </div>
    </Container>
  </div>
{/if}

<style>
  /* Utility classes (bg-neutral-800, etc.) are now in app.css */
  /* Add specific styles for the alert link or structure if needed */
  .alert-component .link-in-alert {
    text-decoration: underline;
    /* hover:text-cyan - app.css a:hover handles general link hover color */
    /* transition-colors, duration-200 - app.css 'a' handles general transition */
  }
  .alert-component .py-2 { /* These are defined in app.css */ }
  .alert-component .text-center {}
  .alert-component .text-sm {}
</style>
