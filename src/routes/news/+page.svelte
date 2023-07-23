
<script lang="ts">
  import type { User, Post } from '@prisma/client'
	export let data:Post;
  
</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="About this app" />
</svelte:head>


<ul>
    {#each data.News as article}
      <li>Title: {article.title} content: {article.content} </li>
    {/each}
</ul>