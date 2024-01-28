<script>
	export let props;
	console.log(props);
	let { top_volunteers } = props;
	top_volunteers = Object.values(top_volunteers)
		.sort((a, b) => b.hours - a.hours)
		.slice(0, 5);
</script>

<ul>
	{#each top_volunteers as user}
		<li>
			<span>{user.first_name}</span>
			<span>{user.last_name}</span>
			<span>{user.hours}</span>
		</li>
	{/each}
</ul>

<style>
	ul {
		outline: var(--base-outline);
		grid-column: 1 / 3;
		grid-row: 2 / -1;
		background-color: hsla(0, 100%, 60%, 0.2);
		/* filter: blur(10px); */
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
