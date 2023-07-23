<script lang="ts">
	import Counter from "./Counter.svelte";
	import Tile from "../components/Tile.svelte"
	import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";
	import { SeedDataBase } from "../db/mockdb";
	import type { NewsArticle, Athlete } from "../dataObjects/objects";
	export let data;
	let athletes: Athlete[] = [];
	let articles: NewsArticle[] = [];
	let loading = true;
	let _db = new SeedDataBase();
	onMount(() => {
		athletes = _db.GenAthletes(10);
		articles = _db.GenNewsArticles(4);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Home Page" content="Home page content" />
</svelte:head>

<section>
	<article class="home__news">
		{#each articles as article, index}
			<Tile article={article}/>
		{/each}
	</article>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	article.home__news {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		width: 100%;
	}
	
</style>
