<script>
	import Navigation from '$lib/navigation/Navigation.svelte';
	import './styles.css';
</script>

<div>
	<main>
		<slot />
	</main>
	<footer>
		<Navigation />
	</footer>
</div>

<style>
	div {
		height: 100dvh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}

	footer {
		padding: 8px;
	}
</style>
