<script lang="ts">
  import { CMS_NAME, CMS_DESC, HOME_OG_IMAGE_URL, HOME_TW_IMAGE_URL } from '$lib/constants';
  import { page } from '$app/stores'; // To get the current path for canonical URL

  export let title: string = `${CMS_NAME} - ${CMS_DESC}`; // Default title
  export let description: string = `@{Nagatani}が雑にいろいろ書くブログ`; // Default description from original twitter:description
  export let image: string = HOME_OG_IMAGE_URL; // Default OG image
  export let twitterImage: string = HOME_TW_IMAGE_URL; // Default Twitter image
  // Canonical URL should be the full URL of the current page
  $: canonicalUrl = $page.url.href;

  // Note: Favicon links, theme-color, and other static head elements
  // are recommended to be in app.html or the root +layout.svelte for SvelteKit.
  // This component will focus on page-specific meta tags.
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={$page.url.origin + image} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:site_name" content={CMS_NAME} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <!-- summary_large_image is often preferred over summary -->
  <meta name="twitter:site" content="@Nagatani" />
  <meta name="twitter:creator" content="@Nagatani" /> <!-- Assuming creator is the same as site -->
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={$page.url.origin + twitterImage} />

  <link rel="canonical" href={canonicalUrl} />
</svelte:head>
