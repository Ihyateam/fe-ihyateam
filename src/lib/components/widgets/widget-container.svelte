<section>
	<slot />
</section>

<style>
	section {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;

		& * {
			border-radius: 10px;
		}
	}
</style>
