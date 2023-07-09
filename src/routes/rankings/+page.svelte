<script lang="ts">
	import { SeedDataBase } from "../../db/mockdb";
	import type { NewsArticle, Athlete } from "../../dataObjects/objects";
    import { onMount } from "svelte";

	let athletes: Athlete[] = [];
	let loading = true;
	let _db = new SeedDataBase();
	onMount(() => {
		athletes = _db.GenAthletes(10);
	});
</script>


<svelte:head>
	<title>Rankings</title>
	<meta name="rankings" content="Rankings" />
</svelte:head>

<div class="text-column">
	Rankings
</div>
