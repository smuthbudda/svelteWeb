
<script lang="ts">
  import type { User } from '@prisma/client'
	export let data:User;
</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="About this app" />
</svelte:head>


<ul>
    {#each data.news as article}
      <li>Title: {article.title} content: {article.content} </li>
    {/each}
  </ul>