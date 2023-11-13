<script>
	export let data;
</script>

<div class="main">
	{#if data.activities}
		<ul>
			{#each data.activities as activity (activity)}
				<div>
					<img src={activity.profile} alt={activity.name} />
					<h2>{activity.title}</h2>
					<p>{activity.description}</p>
					<span>
						{activity.start_date} - {activity.end_date}
					</span>
				</div>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.main {
		background-color: var(--bodyColor);
		width: 100%;
		height: 100%;
		border-radius: 0;
		overflow: auto;
	}

	ul {
		grid-template-columns: repeat(auto-fit, 20rem);
		grid-template-rows: repeat(auto-fit, 15rem);
		display: flex;
		flex-wrap: wrap;
		padding: 1.5rem;
		list-style: none;
		gap: 1.5rem;
	}

	div {
		background-clip: padding-box;
		display: flex;
		flex-direction: column;
		height: 18.375rem;
		overflow: hidden;
		position: relative;
		text-align: left;
		width: 18.75rem;
		background-color: #fff;
		border: 0.0625rem solid #dadce0;
		border-radius: 0.5rem;
	}

	div > img {
		width: 100%;
	}
</style>
