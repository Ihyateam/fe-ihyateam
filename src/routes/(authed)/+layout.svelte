<script>
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';

	export let data;
</script>

<div class="upper">
	<Navbar {...data} />
	<div class="inner">
		<Sidebar />
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	.upper {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-rows: 3.5rem 1fr;
		grid-template-columns: 1fr;
		grid-template-areas: 'header' 'content';
	}

	.inner {
		display: grid;
		grid-template-columns: 3.5rem 1fr;
		grid-template-rows: 1fr;
	}

	main {
		display: flex;
		height: calc(100vh - 3.5rem);
		overflow: auto;
	}
</style>
