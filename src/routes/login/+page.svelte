<script lang="ts">
	import Login from './login.svelte';
</script>

<main>
	<Login legend={true} />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: 2rem;
		height: 100svh;
	}
</style>
