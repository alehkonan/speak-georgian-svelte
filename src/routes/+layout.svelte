<script lang="ts">
	import './global.css';
	import Navigation from '$lib/navigation/Navigation.svelte';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	export let data: LayoutData;
	$: ({ supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return data.subscription.unsubscribe();
	});
</script>

<div>
	<main>
		<slot />
	</main>
	{#if data.session}
		<footer>
			<Navigation />
		</footer>
	{/if}
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
