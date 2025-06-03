<script lang="ts">
  import { parseISO, format } from 'date-fns';

  export let dateString: string;

  let formattedDate: string = '';

  $: {
    if (dateString) {
      try {
        const date = parseISO(dateString);
        formattedDate = format(date, 'yyyy/MM/dd HH:mm');
      } catch (e) {
        console.error("Error parsing date:", dateString, e);
        formattedDate = ''; // Or some error indication
      }
    } else {
      formattedDate = '';
    }
  }
</script>

{#if formattedDate}
  <time dateTime={dateString}>{formattedDate}</time>
{/if}
