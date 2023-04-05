<script lang="ts">
	export let data: import('./$types').PageData;
	const { supabase } = data;

	const onLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: window.location.origin
			}
		});
	};
</script>

<div>
	<h1>Login page</h1>
	<button on:click={onLogin}>Login</button>
</div>
