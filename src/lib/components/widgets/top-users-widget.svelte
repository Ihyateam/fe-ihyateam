<script>
	import { getURL } from '$lib/utils/backend-utils';
	import ResponsiveContainer from '../ui/responsive-container.svelte';

	export let props;
	let { top_volunteers } = props;
	top_volunteers = Object.values(top_volunteers)
		.sort((a, b) => b.hours - a.hours)
		.slice(0, 5);

	const config = {
		ar: {
			header: 'الأكثر نشاطاً'
		}
	};
</script>

<ResponsiveContainer --container-name="topuser" style="display: grid; grid-column: span 2;">
	<header>
		<h3>{config['ar'].header}</h3>
	</header>
	<ul>
		{#each top_volunteers as user}
			<li>
				<img src={getURL(user)} alt="{user.last_name},{user.first_name}" />
				<h4>{user.first_name} {user.last_name}</h4>
				<span class="hours">{user.hours} ساعة عمل</span>
			</li>
		{/each}
	</ul>
</ResponsiveContainer>

<style>
	header {
		display: flex;
		justify-content: center;
		background-color: hsla(0, 10%, 80%, 0.4);
		grid-column: span 2;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		border: var(--base-outline);
		padding-block: 0.25rem;
	}

	ul > * {
		border-radius: 0;
	}

	ul {
		border-top-right-radius: 0;
		border-top-left-radius: 0;

		position: relative;
		border: var(--base-outline);
		border-block-start: none;
		grid-column: 1 / 3;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		gap: 1rem;
		padding: 1rem;
		overflow: hidden;
	}

	ul::after {
		content: ' ';
		background-color: hsla(0, 10%, 80%, 0.4);
		filter: blur(20px);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(20px);
		z-index: -1;
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.25rem;
		height: 8rem;
		gap: 0.5rem;
		border-radius: 5px;
		background-color: hsla(0, 10%, 100%, 1);
		outline: var(--base-outline-nocolor) hsla(0, 10%, 80%, 1);
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
			padding-inline: 0.5rem;
		}

		.hours {
			display: none;
		}

		li > img {
			margin-block-start: 0;
			border-radius: 10px;
		}

		ul {
			padding: 0.5rem;
		}
	}
</style>
