<script>
	import { navItems } from '.';
</script>

<nav>
	<ul>
		{#each navItems as item}
			<li>
				<a href={item.href}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		list-style-type: none;
		display: flex;
		justify-content: center;
		gap: 12px;
	}
</style>
