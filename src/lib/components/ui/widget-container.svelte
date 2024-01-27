<section>
	<slot />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(8rem, 1fr);
		align-items: stretch;
		align-content: stretch;
		gap: 1rem;
	}
</style>
