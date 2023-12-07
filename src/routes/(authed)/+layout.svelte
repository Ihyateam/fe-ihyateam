<script lang="ts">
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Sidebar from './sidebar.svelte';

	export let data;
</script>

<div class="upper">
	<Navbar user={data.user} />
	<div class="inner">
		<Sidebar isAdmin={data.user.isAdmin} />
		<main dir="rtl">
			<slot />
		</main>
	</div>
</div>

<style>
	.upper {
		width: 100vw;
		height: 100svh;
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
		justify-content: center;

		height: calc(100svh - 3.5rem);
		width: 100%;

		overflow: auto;
	}
</style>
