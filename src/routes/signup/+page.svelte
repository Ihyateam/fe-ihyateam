<script>
	import Signup from './signup.svelte';
	export let data;
</script>

<main>
	<img src="/cover-img.jpg" alt="Ihyateam Gathering" />
	<Signup {...data} />
</main>

<style>
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		position: relative;
	}

	main {
		background-color: var(--secondary-background-color);
		display: grid;
		/* position: fixed; */
		grid-template-columns: 1fr minmax(32rem, 35%);
		grid-template-rows: 1fr;
		height: 100dvh;
		/* width: 100dvw; */
	}

	:focus-visible,
	:focus {
		outline-offset: 4px;
	}

	@media screen and (max-width: 1024px) {
		main {
			grid-template-columns: 1fr;
			grid-template-rows: 20dvh 1fr;
			overflow-y: scroll;
			gap: 1rem;
		}
	}
</style>
