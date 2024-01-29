<script>
	import { getURL } from '$lib/utils/backend-utils';
	import ResponsiveContainer from '../ui/responsive-container.svelte';

	export let props;
	console.log(props);
	let { top_volunteers } = props;
	top_volunteers = Object.values(top_volunteers)
		.sort((a, b) => b.hours - a.hours)
		.slice(0, 5);
</script>

<ResponsiveContainer --container-name="topuser" style="display: grid; grid-column: span 2;">
	<ul>
		{#each top_volunteers as user}
			<li>
				<img src={getURL(user)} alt="{user.last_name},{user.first_name}" />
				<h4>{user.first_name} {user.last_name}</h4>
				<span>{user.hours} ساعة عمل</span>
			</li>
		{/each}
	</ul>
</ResponsiveContainer>

<style>
	ul > * {
		border-radius: 0;
	}

	ul {
		outline: var(--base-outline);
		grid-column: 1 / 3;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		gap: 1rem;
		padding: 1rem;
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.25rem;
		outline: 1px solid salmon;
		height: 8rem;
		gap: 0.5rem;
	}

	li > img {
		margin-block-start: 0.5rem;
		height: 75%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 50%;
	}

	@container topuser (width < 300px) {
		li {
			flex-direction: row;
			gap: 0.25rem;
			height: 4rem;
			justify-content: space-between;
		}

		li > img {
			margin-block-start: 0;
			border-radius: 10px;
		}
	}
</style>
