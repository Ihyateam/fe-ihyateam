<section>
	<slot />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, minmax(7rem, 1fr));
		/* grid-auto-rows: minmax(7rem, 1fr); */
		gap: 1rem;

		& * {
			border-radius: 10px;
		}
	}
</style>
