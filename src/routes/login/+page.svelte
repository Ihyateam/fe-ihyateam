<script lang="ts">
	import Login from './login.svelte';
	export let data;
</script>

<main>
	<Login {...data} />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: auto;
		width: 100%;
		gap: 2rem;
		height: 100svh;
	}

	:focus-visible,
	:focus {
		outline-offset: 4px;
	}
</style>
