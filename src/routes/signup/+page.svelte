<script>
	import Signup from './signup.svelte';
	export let data;
</script>

<main>
	<div />
	<Signup {...data} />
</main>

<style>
	main {
		background-color: var(--secondary-background-color);
		display: grid;
		grid-template-columns: 1fr minmax(32rem, 35%);
		grid-template-rows: 1fr;
		height: 100dvh;
	}

	div {
		background-image: url('//ihyateam.org/wp-content/uploads/2023/09/slide_2_main-scaled.jpg');
		background-position: center;
		background-size: cover;
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
