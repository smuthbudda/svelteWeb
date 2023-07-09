<script >
	export let data;
</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="About this app" />
</svelte:head>


<ul>
    {#each data.news as country}
      <li></li>
    {/each}
  </ul>