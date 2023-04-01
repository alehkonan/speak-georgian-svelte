<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Words</title>
	<meta name="description" content="The web application" />
</svelte:head>

<main>
	<h1>Home page</h1>
	{#each data.words as word}
		<p>{word.id} {word.name_en}</p>
	{/each}
</main>

<style>
</style>
